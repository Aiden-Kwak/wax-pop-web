var $_=Object.defineProperty;var K_=(s,e,t)=>e in s?$_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var De=(s,e,t)=>K_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var bu={exports:{}},Ba={},Pu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function j_(){if(tm)return _t;tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function m(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function S(I,re,Se){this.props=I,this.context=re,this.refs=R,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=S.prototype;function b(I,re,Se){this.props=I,this.context=re,this.refs=R,this.updater=Se||y}var F=b.prototype=new x;F.constructor=b,E(F,S.prototype),F.isPureReactComponent=!0;var A=Array.isArray,P=Object.prototype.hasOwnProperty,N={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function M(I,re,Se){var Ge,He={},We=null,le=null;if(re!=null)for(Ge in re.ref!==void 0&&(le=re.ref),re.key!==void 0&&(We=""+re.key),re)P.call(re,Ge)&&!D.hasOwnProperty(Ge)&&(He[Ge]=re[Ge]);var de=arguments.length-2;if(de===1)He.children=Se;else if(1<de){for(var Ee=Array(de),et=0;et<de;et++)Ee[et]=arguments[et+2];He.children=Ee}if(I&&I.defaultProps)for(Ge in de=I.defaultProps,de)He[Ge]===void 0&&(He[Ge]=de[Ge]);return{$$typeof:s,type:I,key:We,ref:le,props:He,_owner:N.current}}function L(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function O(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function z(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return re[Se]})}var H=/\/+/g;function j(I,re){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):re.toString(36)}function G(I,re,Se,Ge,He){var We=typeof I;(We==="undefined"||We==="boolean")&&(I=null);var le=!1;if(I===null)le=!0;else switch(We){case"string":case"number":le=!0;break;case"object":switch(I.$$typeof){case s:case e:le=!0}}if(le)return le=I,He=He(le),I=Ge===""?"."+j(le,0):Ge,A(He)?(Se="",I!=null&&(Se=I.replace(H,"$&/")+"/"),G(He,re,Se,"",function(et){return et})):He!=null&&(O(He)&&(He=L(He,Se+(!He.key||le&&le.key===He.key?"":(""+He.key).replace(H,"$&/")+"/")+I)),re.push(He)),1;if(le=0,Ge=Ge===""?".":Ge+":",A(I))for(var de=0;de<I.length;de++){We=I[de];var Ee=Ge+j(We,de);le+=G(We,re,Se,Ee,He)}else if(Ee=m(I),typeof Ee=="function")for(I=Ee.call(I),de=0;!(We=I.next()).done;)We=We.value,Ee=Ge+j(We,de++),le+=G(We,re,Se,Ee,He);else if(We==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return le}function Z(I,re,Se){if(I==null)return I;var Ge=[],He=0;return G(I,Ge,"","",function(We){return re.call(Se,We,He++)}),Ge}function fe(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var te={current:null},J={transition:null},B={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:J,ReactCurrentOwner:N};function Y(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:Z,forEach:function(I,re,Se){Z(I,function(){re.apply(this,arguments)},Se)},count:function(I){var re=0;return Z(I,function(){re++}),re},toArray:function(I){return Z(I,function(re){return re})||[]},only:function(I){if(!O(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,_t.act=Y,_t.cloneElement=function(I,re,Se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ge=E({},I.props),He=I.key,We=I.ref,le=I._owner;if(re!=null){if(re.ref!==void 0&&(We=re.ref,le=N.current),re.key!==void 0&&(He=""+re.key),I.type&&I.type.defaultProps)var de=I.type.defaultProps;for(Ee in re)P.call(re,Ee)&&!D.hasOwnProperty(Ee)&&(Ge[Ee]=re[Ee]===void 0&&de!==void 0?de[Ee]:re[Ee])}var Ee=arguments.length-2;if(Ee===1)Ge.children=Se;else if(1<Ee){de=Array(Ee);for(var et=0;et<Ee;et++)de[et]=arguments[et+2];Ge.children=de}return{$$typeof:s,type:I.type,key:He,ref:We,props:Ge,_owner:le}},_t.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=M,_t.createFactory=function(I){var re=M.bind(null,I);return re.type=I,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:f,render:I}},_t.isValidElement=O,_t.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:fe}},_t.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},_t.startTransition=function(I){var re=J.transition;J.transition={};try{I()}finally{J.transition=re}},_t.unstable_act=Y,_t.useCallback=function(I,re){return te.current.useCallback(I,re)},_t.useContext=function(I){return te.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return te.current.useDeferredValue(I)},_t.useEffect=function(I,re){return te.current.useEffect(I,re)},_t.useId=function(){return te.current.useId()},_t.useImperativeHandle=function(I,re,Se){return te.current.useImperativeHandle(I,re,Se)},_t.useInsertionEffect=function(I,re){return te.current.useInsertionEffect(I,re)},_t.useLayoutEffect=function(I,re){return te.current.useLayoutEffect(I,re)},_t.useMemo=function(I,re){return te.current.useMemo(I,re)},_t.useReducer=function(I,re,Se){return te.current.useReducer(I,re,Se)},_t.useRef=function(I){return te.current.useRef(I)},_t.useState=function(I){return te.current.useState(I)},_t.useSyncExternalStore=function(I,re,Se){return te.current.useSyncExternalStore(I,re,Se)},_t.useTransition=function(){return te.current.useTransition()},_t.version="18.3.1",_t}var nm;function fd(){return nm||(nm=1,Pu.exports=j_()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Z_(){if(im)return Ba;im=1;var s=fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,v={},m=null,y=null;p!==void 0&&(m=""+p),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Ba.Fragment=t,Ba.jsx=u,Ba.jsxs=u,Ba}var rm;function J_(){return rm||(rm=1,bu.exports=Z_()),bu.exports}var ae=J_(),vt=fd(),ul={},Lu={exports:{}},zn={},Nu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Q_(){return sm||(sm=1,(function(s){function e(J,B){var Y=J.length;J.push(B);e:for(;0<Y;){var I=Y-1>>>1,re=J[I];if(0<o(re,B))J[I]=B,J[Y]=re,Y=I;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var B=J[0],Y=J.pop();if(Y!==B){J[0]=Y;e:for(var I=0,re=J.length,Se=re>>>1;I<Se;){var Ge=2*(I+1)-1,He=J[Ge],We=Ge+1,le=J[We];if(0>o(He,Y))We<re&&0>o(le,He)?(J[I]=le,J[We]=Y,I=We):(J[I]=He,J[Ge]=Y,I=Ge);else if(We<re&&0>o(le,Y))J[I]=le,J[We]=Y,I=We;else break e}}return B}function o(J,B){var Y=J.sortIndex-B.sortIndex;return Y!==0?Y:J.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,v=null,m=3,y=!1,E=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(J){for(var B=t(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=J)r(p),B.sortIndex=B.expirationTime,e(h,B);else break;B=t(p)}}function A(J){if(R=!1,F(J),!E)if(t(h)!==null)E=!0,fe(P);else{var B=t(p);B!==null&&te(A,B.startTime-J)}}function P(J,B){E=!1,R&&(R=!1,x(M),M=-1),y=!0;var Y=m;try{for(F(B),v=t(h);v!==null&&(!(v.expirationTime>B)||J&&!z());){var I=v.callback;if(typeof I=="function"){v.callback=null,m=v.priorityLevel;var re=I(v.expirationTime<=B);B=s.unstable_now(),typeof re=="function"?v.callback=re:v===t(h)&&r(h),F(B)}else r(h);v=t(h)}if(v!==null)var Se=!0;else{var Ge=t(p);Ge!==null&&te(A,Ge.startTime-B),Se=!1}return Se}finally{v=null,m=Y,y=!1}}var N=!1,D=null,M=-1,L=5,O=-1;function z(){return!(s.unstable_now()-O<L)}function H(){if(D!==null){var J=s.unstable_now();O=J;var B=!0;try{B=D(!0,J)}finally{B?j():(N=!1,D=null)}}else N=!1}var j;if(typeof b=="function")j=function(){b(H)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=H,j=function(){Z.postMessage(null)}}else j=function(){S(H,0)};function fe(J){D=J,N||(N=!0,j())}function te(J,B){M=S(function(){J(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,fe(P))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var Y=m;m=B;try{return J()}finally{m=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,B){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var Y=m;m=J;try{return B()}finally{m=Y}},s.unstable_scheduleCallback=function(J,B,Y){var I=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?I+Y:I):Y=I,J){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,J={id:_++,callback:B,priorityLevel:J,startTime:Y,expirationTime:re,sortIndex:-1},Y>I?(J.sortIndex=Y,e(p,J),t(h)===null&&J===t(p)&&(R?(x(M),M=-1):R=!0,te(A,Y-I))):(J.sortIndex=re,e(h,J),E||y||(E=!0,fe(P))),J},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(J){var B=m;return function(){var Y=m;m=B;try{return J.apply(this,arguments)}finally{m=Y}}}})(Du)),Du}var am;function ev(){return am||(am=1,Nu.exports=Q_()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function tv(){if(om)return zn;om=1;var s=fd(),e=ev();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function m(n){return h.call(v,n)?!0:h.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,b);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,b);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,b);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),N=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),J=Symbol.iterator;function B(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Se=!1;function Ge(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),g=c.stack.split(`
`),T=d.length-1,k=g.length-1;1<=T&&0<=k&&d[T]!==g[k];)k--;for(;1<=T&&0<=k;T--,k--)if(d[T]!==g[k]){if(T!==1||k!==1)do if(T--,k--,0>k||d[T]!==g[k]){var V=`
`+d[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=k);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function He(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function We(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case N:return"Portal";case L:return"Profiler";case M:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:We(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return We(n(i))}catch{}}return null}function le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=et(n))}function ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function St(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Dt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function ht(n,i){Dt(n,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Zt(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Zt(n,i,a){(i!=="number"||Vt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nn=Array.isArray;function Nt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(nn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function an(n,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Rt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?U(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Ae.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var be=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var tt=null,rt=null,W=null;function Re(n){if(n=wa(n)){if(typeof tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=To(i),tt(n.stateNode,n.type,i))}}function me(n){rt?W?W.push(n):W=[n]:rt=n}function Ce(){if(rt){var n=rt,i=W;if(W=rt=null,Re(n),i)for(n=0;n<i.length;n++)Re(i[n])}}function Fe(n,i){return n(i)}function _e(){}var Je=!1;function Ye(n,i,a){if(Je)return n(i,a);Je=!0;try{return Fe(n,i,a)}finally{Je=!1,(rt!==null||W!==null)&&(_e(),Ce())}}function Ct(n,i){var a=n.stateNode;if(a===null)return null;var c=To(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var wt=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{wt=!1}function Qn(n,i,a,c,d,g,T,k,V){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var Nr=!1,us=null,Dr=!1,Ir=null,Jl={onError:function(n){Nr=!0,us=n}};function ao(n,i,a,c,d,g,T,k,V){Nr=!1,us=null,Qn.apply(Jl,arguments)}function oo(n,i,a,c,d,g,T,k,V){if(ao.apply(this,arguments),Nr){if(Nr){var ue=us;Nr=!1,us=null}else throw Error(t(198));Dr||(Dr=!0,Ir=ue)}}function Ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function fs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ia(n){if(Ln(n)!==n)throw Error(t(188))}function lo(n){var i=n.alternate;if(!i){if(i=Ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return ia(d),n;if(g===c)return ia(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var T=!1,k=d.child;k;){if(k===a){T=!0,a=d,c=g;break}if(k===c){T=!0,c=d,a=g;break}k=k.sibling}if(!T){for(k=g.child;k;){if(k===a){T=!0,a=g,c=d;break}if(k===c){T=!0,c=g,a=d;break}k=k.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ur(n){return n=lo(n),n!==null?ra(n):null}function ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ra(n);if(i!==null)return i;n=n.sibling}return null}var Fr=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,co=e.unstable_shouldYield,Ql=e.unstable_requestPaint,qt=e.unstable_now,ec=e.unstable_getCurrentPriorityLevel,aa=e.unstable_ImmediatePriority,oa=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,X=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ne=null,ee=null;function Ie(n){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Ze,Ne=Math.log,Xe=Math.LN2;function Ze(n){return n>>>=0,n===0?32:31-(Ne(n)/Xe|0)|0}var lt=64,ut=4194304;function ze(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var k=T&~d;k!==0?c=ze(k):(g&=T,g!==0&&(c=ze(g)))}else T=a&~d,T!==0?c=ze(T):g!==0&&(c=ze(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Le(i),d=1<<a,c|=n[a],i&=~d;return c}function Jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-Le(g),k=1<<T,V=d[T];V===-1?((k&a)===0||(k&c)!==0)&&(d[T]=Jt(k,i)):V<=i&&(n.expiredLanes|=k),g&=~k}}function Lt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function on(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function ke(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function en(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Le(i),n[i]=a}function Mt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Le(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Mn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Le(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var pt=0;function fi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bi,bt,Wt,di,It,ei=!1,hi=[],pi=null,sr=null,ar=null,la=new Map,ca=new Map,or=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kd(n,i){switch(n){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":la.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(i.pointerId)}}function ua(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=wa(i),i!==null&&bt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function _0(n,i,a,c,d){switch(i){case"focusin":return pi=ua(pi,n,i,a,c,d),!0;case"dragenter":return sr=ua(sr,n,i,a,c,d),!0;case"mouseover":return ar=ua(ar,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return la.set(g,ua(la.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ca.set(g,ua(ca.get(g)||null,n,i,a,c,d)),!0}return!1}function Bd(n){var i=Or(n.target);if(i!==null){var a=Ln(i);if(a!==null){if(i=a.tag,i===13){if(i=fs(a),i!==null){n.blockedOn=i,It(n.priority,function(){Wt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function uo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=nc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=wa(a),i!==null&&bt(i),n.blockedOn=a,!1;i.shift()}return!0}function zd(n,i,a){uo(n)&&a.delete(i)}function v0(){ei=!1,pi!==null&&uo(pi)&&(pi=null),sr!==null&&uo(sr)&&(sr=null),ar!==null&&uo(ar)&&(ar=null),la.forEach(zd),ca.forEach(zd)}function fa(n,i){n.blockedOn===i&&(n.blockedOn=null,ei||(ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,v0)))}function da(n){function i(d){return fa(d,n)}if(0<hi.length){fa(hi[0],n);for(var a=1;a<hi.length;a++){var c=hi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(pi!==null&&fa(pi,n),sr!==null&&fa(sr,n),ar!==null&&fa(ar,n),la.forEach(i),ca.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Bd(a),a.blockedOn===null&&or.shift()}var ds=A.ReactCurrentBatchConfig,fo=!0;function x0(n,i,a,c){var d=pt,g=ds.transition;ds.transition=null;try{pt=1,tc(n,i,a,c)}finally{pt=d,ds.transition=g}}function S0(n,i,a,c){var d=pt,g=ds.transition;ds.transition=null;try{pt=4,tc(n,i,a,c)}finally{pt=d,ds.transition=g}}function tc(n,i,a,c){if(fo){var d=nc(n,i,a,c);if(d===null)xc(n,i,c,ho,a),kd(n,c);else if(_0(d,n,i,a,c))c.stopPropagation();else if(kd(n,c),i&4&&-1<g0.indexOf(n)){for(;d!==null;){var g=wa(d);if(g!==null&&Bi(g),g=nc(n,i,a,c),g===null&&xc(n,i,c,ho,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else xc(n,i,c,null,a)}}var ho=null;function nc(n,i,a,c){if(ho=null,n=je(c),n=Or(n),n!==null)if(i=Ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=fs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ho=n,null}function Hd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case aa:return 1;case oa:return 4;case C:case X:return 16;case ce:return 536870912;default:return 16}default:return 16}}var lr=null,ic=null,po=null;function Vd(){if(po)return po;var n,i=ic,a=i.length,c,d="value"in lr?lr.value:lr.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[g-c];c++);return po=d.slice(n,1<c?1-c:void 0)}function mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function go(){return!0}function Gd(){return!1}function Wn(n){function i(a,c,d,g,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?go:Gd,this.isPropagationStopped=Gd,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Wn(hs),ha=Y({},hs,{view:0,detail:0}),y0=Wn(ha),sc,ac,pa,_o=Y({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pa&&(pa&&n.type==="mousemove"?(sc=n.screenX-pa.screenX,ac=n.screenY-pa.screenY):ac=sc=0,pa=n),sc)},movementY:function(n){return"movementY"in n?n.movementY:ac}}),Wd=Wn(_o),M0=Y({},_o,{dataTransfer:0}),E0=Wn(M0),w0=Y({},ha,{relatedTarget:0}),oc=Wn(w0),T0=Y({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=Wn(T0),R0=Y({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),C0=Wn(R0),b0=Y({},hs,{data:0}),Xd=Wn(b0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=N0[n])?!!i[n]:!1}function lc(){return D0}var I0=Y({},ha,{key:function(n){if(n.key){var i=P0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(n){return n.type==="keypress"?mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),U0=Wn(I0),F0=Y({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Wn(F0),O0=Y({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),k0=Wn(O0),B0=Y({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=Wn(B0),H0=Y({},_o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=Wn(H0),G0=[9,13,27,32],cc=f&&"CompositionEvent"in window,ma=null;f&&"documentMode"in document&&(ma=document.documentMode);var W0=f&&"TextEvent"in window&&!ma,Yd=f&&(!cc||ma&&8<ma&&11>=ma),$d=" ",Kd=!1;function jd(n,i){switch(n){case"keyup":return G0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function X0(n,i){switch(n){case"compositionend":return Zd(i);case"keypress":return i.which!==32?null:(Kd=!0,$d);case"textInput":return n=i.data,n===$d&&Kd?null:n;default:return null}}function q0(n,i){if(ps)return n==="compositionend"||!cc&&jd(n,i)?(n=Vd(),po=ic=lr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yd&&i.locale!=="ko"?null:i.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Y0[n.type]:i==="textarea"}function Qd(n,i,a,c){me(c),i=Mo(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ga=null,_a=null;function $0(n){_h(n,0)}function vo(n){var i=xs(n);if(ft(i))return n}function K0(n,i){if(n==="change")return i}var eh=!1;if(f){var uc;if(f){var fc="oninput"in document;if(!fc){var th=document.createElement("div");th.setAttribute("oninput","return;"),fc=typeof th.oninput=="function"}uc=fc}else uc=!1;eh=uc&&(!document.documentMode||9<document.documentMode)}function nh(){ga&&(ga.detachEvent("onpropertychange",ih),_a=ga=null)}function ih(n){if(n.propertyName==="value"&&vo(_a)){var i=[];Qd(i,_a,n,je(n)),Ye($0,i)}}function j0(n,i,a){n==="focusin"?(nh(),ga=i,_a=a,ga.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function Z0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vo(_a)}function J0(n,i){if(n==="click")return vo(i)}function Q0(n,i){if(n==="input"||n==="change")return vo(i)}function e_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:e_;function va(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Vt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Vt(n.document)}return i}function dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function t_(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(c!==null&&dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=sh(a,g);var T=sh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n_=f&&"documentMode"in document&&11>=document.documentMode,ms=null,hc=null,xa=null,pc=!1;function lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||ms==null||ms!==Vt(c)||(c=ms,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xa&&va(xa,c)||(xa=c,c=Mo(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function xo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},mc={},ch={};f&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function So(n){if(mc[n])return mc[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ch)return mc[n]=i[a];return n}var uh=So("animationend"),fh=So("animationiteration"),dh=So("animationstart"),hh=So("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){ph.set(n,i),l(i,[n])}for(var gc=0;gc<mh.length;gc++){var _c=mh[gc],i_=_c.toLowerCase(),r_=_c[0].toUpperCase()+_c.slice(1);cr(i_,"on"+r_)}cr(uh,"onAnimationEnd"),cr(fh,"onAnimationIteration"),cr(dh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,oo(c,i,void 0,n),n.currentTarget=null}function _h(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],V=k.instance,ue=k.currentTarget;if(k=k.listener,V!==g&&d.isPropagationStopped())break e;gh(d,k,ue),g=V}else for(T=0;T<c.length;T++){if(k=c[T],V=k.instance,ue=k.currentTarget,k=k.listener,V!==g&&d.isPropagationStopped())break e;gh(d,k,ue),g=V}}}if(Dr)throw n=Ir,Dr=!1,Ir=null,n}function Bt(n,i){var a=i[Tc];a===void 0&&(a=i[Tc]=new Set);var c=n+"__bubble";a.has(c)||(vh(i,n,2,!1),a.add(c))}function vc(n,i,a){var c=0;i&&(c|=4),vh(a,n,c,i)}var yo="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[yo]){n[yo]=!0,r.forEach(function(a){a!=="selectionchange"&&(s_.has(a)||vc(a,!1,n),vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[yo]||(i[yo]=!0,vc("selectionchange",!1,i))}}function vh(n,i,a,c){switch(Hd(i)){case 1:var d=x0;break;case 4:d=S0;break;default:d=tc}a=d.bind(null,i,a,n),d=void 0,!wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function xc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;T=T.return}for(;k!==null;){if(T=Or(k),T===null)return;if(V=T.tag,V===5||V===6){c=g=T;continue e}k=k.parentNode}}c=c.return}Ye(function(){var ue=g,xe=je(a),ye=[];e:{var ve=ph.get(n);if(ve!==void 0){var Be=rc,qe=n;switch(n){case"keypress":if(mo(a)===0)break e;case"keydown":case"keyup":Be=U0;break;case"focusin":qe="focus",Be=oc;break;case"focusout":qe="blur",Be=oc;break;case"beforeblur":case"afterblur":Be=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=E0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=k0;break;case uh:case fh:case dh:Be=A0;break;case hh:Be=z0;break;case"scroll":Be=y0;break;case"wheel":Be=V0;break;case"copy":case"cut":case"paste":Be=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=qd}var $e=(i&4)!==0,tn=!$e&&n==="scroll",ie=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var K=ue,se;K!==null;){se=K;var we=se.stateNode;if(se.tag===5&&we!==null&&(se=we,ie!==null&&(we=Ct(K,ie),we!=null&&$e.push(Ma(K,we,se)))),tn)break;K=K.return}0<$e.length&&(ve=new Be(ve,qe,null,a,xe),ye.push({event:ve,listeners:$e}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",ve&&a!==Te&&(qe=a.relatedTarget||a.fromElement)&&(Or(qe)||qe[zi]))break e;if((Be||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?(qe=a.relatedTarget||a.toElement,Be=ue,qe=qe?Or(qe):null,qe!==null&&(tn=Ln(qe),qe!==tn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Be=null,qe=ue),Be!==qe)){if($e=Wd,we="onMouseLeave",ie="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&($e=qd,we="onPointerLeave",ie="onPointerEnter",K="pointer"),tn=Be==null?ve:xs(Be),se=qe==null?ve:xs(qe),ve=new $e(we,K+"leave",Be,a,xe),ve.target=tn,ve.relatedTarget=se,we=null,Or(xe)===ue&&($e=new $e(ie,K+"enter",qe,a,xe),$e.target=se,$e.relatedTarget=tn,we=$e),tn=we,Be&&qe)t:{for($e=Be,ie=qe,K=0,se=$e;se;se=_s(se))K++;for(se=0,we=ie;we;we=_s(we))se++;for(;0<K-se;)$e=_s($e),K--;for(;0<se-K;)ie=_s(ie),se--;for(;K--;){if($e===ie||ie!==null&&$e===ie.alternate)break t;$e=_s($e),ie=_s(ie)}$e=null}else $e=null;Be!==null&&xh(ye,ve,Be,$e,!1),qe!==null&&tn!==null&&xh(ye,tn,qe,$e,!0)}}e:{if(ve=ue?xs(ue):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Qe=K0;else if(Jd(ve))if(eh)Qe=Q0;else{Qe=Z0;var nt=j0}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=J0);if(Qe&&(Qe=Qe(n,ue))){Qd(ye,Qe,a,xe);break e}nt&&nt(n,ve,ue),n==="focusout"&&(nt=ve._wrapperState)&&nt.controlled&&ve.type==="number"&&Zt(ve,"number",ve.value)}switch(nt=ue?xs(ue):window,n){case"focusin":(Jd(nt)||nt.contentEditable==="true")&&(ms=nt,hc=ue,xa=null);break;case"focusout":xa=hc=ms=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,lh(ye,a,xe);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":lh(ye,a,xe)}var it;if(cc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ps?jd(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Yd&&a.locale!=="ko"&&(ps||st!=="onCompositionStart"?st==="onCompositionEnd"&&ps&&(it=Vd()):(lr=xe,ic="value"in lr?lr.value:lr.textContent,ps=!0)),nt=Mo(ue,st),0<nt.length&&(st=new Xd(st,n,null,a,xe),ye.push({event:st,listeners:nt}),it?st.data=it:(it=Zd(a),it!==null&&(st.data=it)))),(it=W0?X0(n,a):q0(n,a))&&(ue=Mo(ue,"onBeforeInput"),0<ue.length&&(xe=new Xd("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:ue}),xe.data=it))}_h(ye,i)})}function Ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Mo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Ct(n,a),g!=null&&c.unshift(Ma(n,g,d)),g=Ct(n,i),g!=null&&c.push(Ma(n,g,d))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xh(n,i,a,c,d){for(var g=i._reactName,T=[];a!==null&&a!==c;){var k=a,V=k.alternate,ue=k.stateNode;if(V!==null&&V===c)break;k.tag===5&&ue!==null&&(k=ue,d?(V=Ct(a,g),V!=null&&T.unshift(Ma(a,V,k))):d||(V=Ct(a,g),V!=null&&T.push(Ma(a,V,k)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var a_=/\r\n?/g,o_=/\u0000|\uFFFD/g;function Sh(n){return(typeof n=="string"?n:""+n).replace(a_,`
`).replace(o_,"")}function Eo(n,i,a){if(i=Sh(i),Sh(n)!==i&&a)throw Error(t(425))}function wo(){}var Sc=null,yc=null;function Mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,c_=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(u_)}:Ec;function u_(n){setTimeout(function(){throw n})}function wc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),da(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);da(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Ai="__reactFiber$"+vs,Ea="__reactProps$"+vs,zi="__reactContainer$"+vs,Tc="__reactEvents$"+vs,f_="__reactListeners$"+vs,d_="__reactHandles$"+vs;function Or(n){var i=n[Ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[zi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mh(n);n!==null;){if(a=n[Ai])return a;n=Mh(n)}return i}n=a,a=n.parentNode}return null}function wa(n){return n=n[Ai]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function To(n){return n[Ea]||null}var Ac=[],Ss=-1;function fr(n){return{current:n}}function zt(n){0>Ss||(n.current=Ac[Ss],Ac[Ss]=null,Ss--)}function kt(n,i){Ss++,Ac[Ss]=n.current,n.current=i}var dr={},En=fr(dr),Un=fr(!1),kr=dr;function ys(n,i){var a=n.type.contextTypes;if(!a)return dr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Fn(n){return n=n.childContextTypes,n!=null}function Ao(){zt(Un),zt(En)}function Eh(n,i,a){if(En.current!==dr)throw Error(t(168));kt(En,i),kt(Un,a)}function wh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,le(n)||"Unknown",d));return Y({},a,c)}function Ro(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,kr=En.current,kt(En,n),kt(Un,Un.current),!0}function Th(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wh(n,i,kr),c.__reactInternalMemoizedMergedChildContext=n,zt(Un),zt(En),kt(En,n)):zt(Un),kt(Un,a)}var Hi=null,Co=!1,Rc=!1;function Ah(n){Hi===null?Hi=[n]:Hi.push(n)}function h_(n){Co=!0,Ah(n)}function hr(){if(!Rc&&Hi!==null){Rc=!0;var n=0,i=pt;try{var a=Hi;for(pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Hi=null,Co=!1}catch(d){throw Hi!==null&&(Hi=Hi.slice(n+1)),Fr(aa,hr),d}finally{pt=i,Rc=!1}}return null}var Ms=[],Es=0,bo=null,Po=0,ti=[],ni=0,Br=null,Vi=1,Gi="";function zr(n,i){Ms[Es++]=Po,Ms[Es++]=bo,bo=n,Po=i}function Rh(n,i,a){ti[ni++]=Vi,ti[ni++]=Gi,ti[ni++]=Br,Br=n;var c=Vi;n=Gi;var d=32-Le(c)-1;c&=~(1<<d),a+=1;var g=32-Le(i)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Vi=1<<32-Le(i)+d|a<<d|c,Gi=g+n}else Vi=1<<g|a<<d|c,Gi=n}function Cc(n){n.return!==null&&(zr(n,1),Rh(n,1,0))}function bc(n){for(;n===bo;)bo=Ms[--Es],Ms[Es]=null,Po=Ms[--Es],Ms[Es]=null;for(;n===Br;)Br=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null,Vi=ti[--ni],ti[ni]=null}var Xn=null,qn=null,Xt=!1,gi=null;function Ch(n,i){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function bh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,qn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Vi,overflow:Gi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,qn=null,!0):!1;default:return!1}}function Pc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Xt){var i=qn;if(i){var a=i;if(!bh(n,i)){if(Pc(n))throw Error(t(418));i=ur(a.nextSibling);var c=Xn;i&&bh(n,i)?Ch(c,a):(n.flags=n.flags&-4097|2,Xt=!1,Xn=n)}}else{if(Pc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Xn=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Lo(n){if(n!==Xn)return!1;if(!Xt)return Ph(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mc(n.type,n.memoizedProps)),i&&(i=qn)){if(Pc(n))throw Lh(),Error(t(418));for(;i;)Ch(n,i),i=ur(i.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Xn?ur(n.stateNode.nextSibling):null;return!0}function Lh(){for(var n=qn;n;)n=ur(n.nextSibling)}function ws(){qn=Xn=null,Xt=!1}function Nc(n){gi===null?gi=[n]:gi.push(n)}var p_=A.ReactCurrentBatchConfig;function Ta(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var k=d.refs;T===null?delete k[g]:k[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function No(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Nh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(ie,K){if(n){var se=ie.deletions;se===null?(ie.deletions=[K],ie.flags|=16):se.push(K)}}function a(ie,K){if(!n)return null;for(;K!==null;)i(ie,K),K=K.sibling;return null}function c(ie,K){for(ie=new Map;K!==null;)K.key!==null?ie.set(K.key,K):ie.set(K.index,K),K=K.sibling;return ie}function d(ie,K){return ie=yr(ie,K),ie.index=0,ie.sibling=null,ie}function g(ie,K,se){return ie.index=se,n?(se=ie.alternate,se!==null?(se=se.index,se<K?(ie.flags|=2,K):se):(ie.flags|=2,K)):(ie.flags|=1048576,K)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function k(ie,K,se,we){return K===null||K.tag!==6?(K=Eu(se,ie.mode,we),K.return=ie,K):(K=d(K,se),K.return=ie,K)}function V(ie,K,se,we){var Qe=se.type;return Qe===D?xe(ie,K,se.props.children,we,se.key):K!==null&&(K.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===fe&&Nh(Qe)===K.type)?(we=d(K,se.props),we.ref=Ta(ie,K,se),we.return=ie,we):(we=nl(se.type,se.key,se.props,null,ie.mode,we),we.ref=Ta(ie,K,se),we.return=ie,we)}function ue(ie,K,se,we){return K===null||K.tag!==4||K.stateNode.containerInfo!==se.containerInfo||K.stateNode.implementation!==se.implementation?(K=wu(se,ie.mode,we),K.return=ie,K):(K=d(K,se.children||[]),K.return=ie,K)}function xe(ie,K,se,we,Qe){return K===null||K.tag!==7?(K=$r(se,ie.mode,we,Qe),K.return=ie,K):(K=d(K,se),K.return=ie,K)}function ye(ie,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Eu(""+K,ie.mode,se),K.return=ie,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return se=nl(K.type,K.key,K.props,null,ie.mode,se),se.ref=Ta(ie,null,K),se.return=ie,se;case N:return K=wu(K,ie.mode,se),K.return=ie,K;case fe:var we=K._init;return ye(ie,we(K._payload),se)}if(nn(K)||B(K))return K=$r(K,ie.mode,se,null),K.return=ie,K;No(ie,K)}return null}function ve(ie,K,se,we){var Qe=K!==null?K.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Qe!==null?null:k(ie,K,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case P:return se.key===Qe?V(ie,K,se,we):null;case N:return se.key===Qe?ue(ie,K,se,we):null;case fe:return Qe=se._init,ve(ie,K,Qe(se._payload),we)}if(nn(se)||B(se))return Qe!==null?null:xe(ie,K,se,we,null);No(ie,se)}return null}function Be(ie,K,se,we,Qe){if(typeof we=="string"&&we!==""||typeof we=="number")return ie=ie.get(se)||null,k(K,ie,""+we,Qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case P:return ie=ie.get(we.key===null?se:we.key)||null,V(K,ie,we,Qe);case N:return ie=ie.get(we.key===null?se:we.key)||null,ue(K,ie,we,Qe);case fe:var nt=we._init;return Be(ie,K,se,nt(we._payload),Qe)}if(nn(we)||B(we))return ie=ie.get(se)||null,xe(K,ie,we,Qe,null);No(K,we)}return null}function qe(ie,K,se,we){for(var Qe=null,nt=null,it=K,st=K=0,pn=null;it!==null&&st<se.length;st++){it.index>st?(pn=it,it=null):pn=it.sibling;var Pt=ve(ie,it,se[st],we);if(Pt===null){it===null&&(it=pn);break}n&&it&&Pt.alternate===null&&i(ie,it),K=g(Pt,K,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt,it=pn}if(st===se.length)return a(ie,it),Xt&&zr(ie,st),Qe;if(it===null){for(;st<se.length;st++)it=ye(ie,se[st],we),it!==null&&(K=g(it,K,st),nt===null?Qe=it:nt.sibling=it,nt=it);return Xt&&zr(ie,st),Qe}for(it=c(ie,it);st<se.length;st++)pn=Be(it,ie,st,se[st],we),pn!==null&&(n&&pn.alternate!==null&&it.delete(pn.key===null?st:pn.key),K=g(pn,K,st),nt===null?Qe=pn:nt.sibling=pn,nt=pn);return n&&it.forEach(function(Mr){return i(ie,Mr)}),Xt&&zr(ie,st),Qe}function $e(ie,K,se,we){var Qe=B(se);if(typeof Qe!="function")throw Error(t(150));if(se=Qe.call(se),se==null)throw Error(t(151));for(var nt=Qe=null,it=K,st=K=0,pn=null,Pt=se.next();it!==null&&!Pt.done;st++,Pt=se.next()){it.index>st?(pn=it,it=null):pn=it.sibling;var Mr=ve(ie,it,Pt.value,we);if(Mr===null){it===null&&(it=pn);break}n&&it&&Mr.alternate===null&&i(ie,it),K=g(Mr,K,st),nt===null?Qe=Mr:nt.sibling=Mr,nt=Mr,it=pn}if(Pt.done)return a(ie,it),Xt&&zr(ie,st),Qe;if(it===null){for(;!Pt.done;st++,Pt=se.next())Pt=ye(ie,Pt.value,we),Pt!==null&&(K=g(Pt,K,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt);return Xt&&zr(ie,st),Qe}for(it=c(ie,it);!Pt.done;st++,Pt=se.next())Pt=Be(it,ie,st,Pt.value,we),Pt!==null&&(n&&Pt.alternate!==null&&it.delete(Pt.key===null?st:Pt.key),K=g(Pt,K,st),nt===null?Qe=Pt:nt.sibling=Pt,nt=Pt);return n&&it.forEach(function(Y_){return i(ie,Y_)}),Xt&&zr(ie,st),Qe}function tn(ie,K,se,we){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case P:e:{for(var Qe=se.key,nt=K;nt!==null;){if(nt.key===Qe){if(Qe=se.type,Qe===D){if(nt.tag===7){a(ie,nt.sibling),K=d(nt,se.props.children),K.return=ie,ie=K;break e}}else if(nt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===fe&&Nh(Qe)===nt.type){a(ie,nt.sibling),K=d(nt,se.props),K.ref=Ta(ie,nt,se),K.return=ie,ie=K;break e}a(ie,nt);break}else i(ie,nt);nt=nt.sibling}se.type===D?(K=$r(se.props.children,ie.mode,we,se.key),K.return=ie,ie=K):(we=nl(se.type,se.key,se.props,null,ie.mode,we),we.ref=Ta(ie,K,se),we.return=ie,ie=we)}return T(ie);case N:e:{for(nt=se.key;K!==null;){if(K.key===nt)if(K.tag===4&&K.stateNode.containerInfo===se.containerInfo&&K.stateNode.implementation===se.implementation){a(ie,K.sibling),K=d(K,se.children||[]),K.return=ie,ie=K;break e}else{a(ie,K);break}else i(ie,K);K=K.sibling}K=wu(se,ie.mode,we),K.return=ie,ie=K}return T(ie);case fe:return nt=se._init,tn(ie,K,nt(se._payload),we)}if(nn(se))return qe(ie,K,se,we);if(B(se))return $e(ie,K,se,we);No(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,K!==null&&K.tag===6?(a(ie,K.sibling),K=d(K,se),K.return=ie,ie=K):(a(ie,K),K=Eu(se,ie.mode,we),K.return=ie,ie=K),T(ie)):a(ie,K)}return tn}var Ts=Dh(!0),Ih=Dh(!1),Do=fr(null),Io=null,As=null,Dc=null;function Ic(){Dc=As=Io=null}function Uc(n){var i=Do.current;zt(Do),n._currentValue=i}function Fc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Io=n,Dc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ii(n){var i=n._currentValue;if(Dc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Io===null)throw Error(t(308));As=n,Io.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Hr=null;function Oc(n){Hr===null?Hr=[n]:Hr.push(n)}function Uh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Oc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Wi(n,c)}function Wi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Wi(n,a)}return d=c.interleaved,d===null?(i.next=i,Oc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Wi(n,a)}function Uo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}function Oh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Fo(n,i,a,c){var d=n.updateQueue;pr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var V=k,ue=V.next;V.next=null,T===null?g=ue:T.next=ue,T=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,k=xe.lastBaseUpdate,k!==T&&(k===null?xe.firstBaseUpdate=ue:k.next=ue,xe.lastBaseUpdate=V))}if(g!==null){var ye=d.baseState;T=0,xe=ue=V=null,k=g;do{var ve=k.lane,Be=k.eventTime;if((c&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var qe=n,$e=k;switch(ve=i,Be=a,$e.tag){case 1:if(qe=$e.payload,typeof qe=="function"){ye=qe.call(Be,ye,ve);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=$e.payload,ve=typeof qe=="function"?qe.call(Be,ye,ve):qe,ve==null)break e;ye=Y({},ye,ve);break e;case 2:pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[k]:ve.push(k))}else Be={eventTime:Be,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},xe===null?(ue=xe=Be,V=ye):xe=xe.next=Be,T|=ve;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(V=ye),d.baseState=V,d.firstBaseUpdate=ue,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Wr|=T,n.lanes=T,n.memoizedState=ye}}function kh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Aa={},Ri=fr(Aa),Ra=fr(Aa),Ca=fr(Aa);function Vr(n){if(n===Aa)throw Error(t(174));return n}function Bc(n,i){switch(kt(Ca,i),kt(Ra,n),kt(Ri,Aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}zt(Ri),kt(Ri,i)}function Cs(){zt(Ri),zt(Ra),zt(Ca)}function Bh(n){Vr(Ca.current);var i=Vr(Ri.current),a=w(i,n.type);i!==a&&(kt(Ra,n),kt(Ri,a))}function zc(n){Ra.current===n&&(zt(Ri),zt(Ra))}var Yt=fr(0);function Oo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var n=0;n<Hc.length;n++)Hc[n]._workInProgressVersionPrimary=null;Hc.length=0}var ko=A.ReactCurrentDispatcher,Gc=A.ReactCurrentBatchConfig,Gr=0,$t=null,ln=null,dn=null,Bo=!1,ba=!1,Pa=0,m_=0;function wn(){throw Error(t(321))}function Wc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function Xc(n,i,a,c,d,g){if(Gr=g,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=n===null||n.memoizedState===null?x_:S_,n=a(c,d),ba){g=0;do{if(ba=!1,Pa=0,25<=g)throw Error(t(301));g+=1,dn=ln=null,i.updateQueue=null,ko.current=y_,n=a(c,d)}while(ba)}if(ko.current=Vo,i=ln!==null&&ln.next!==null,Gr=0,dn=ln=$t=null,Bo=!1,i)throw Error(t(300));return n}function qc(){var n=Pa!==0;return Pa=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?$t.memoizedState=dn=n:dn=dn.next=n,dn}function ri(){if(ln===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var i=dn===null?$t.memoizedState:dn.next;if(i!==null)dn=i,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},dn===null?$t.memoizedState=dn=n:dn=dn.next=n}return dn}function La(n,i){return typeof i=="function"?i(n):i}function Yc(n){var i=ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ln,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var k=T=null,V=null,ue=g;do{var xe=ue.lane;if((Gr&xe)===xe)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var ye={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(k=V=ye,T=c):V=V.next=ye,$t.lanes|=xe,Wr|=xe}ue=ue.next}while(ue!==null&&ue!==g);V===null?T=c:V.next=k,mi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,$t.lanes|=g,Wr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $c(n){var i=ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);mi(g,i.memoizedState)||(On=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function zh(){}function Hh(n,i){var a=$t,c=ri(),d=i(),g=!mi(c.memoizedState,d);if(g&&(c.memoizedState=d,On=!0),c=c.queue,Kc(Wh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,Na(9,Gh.bind(null,a,c,d,i),void 0,null),hn===null)throw Error(t(349));(Gr&30)!==0||Vh(a,i,d)}return d}function Vh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,c){i.value=a,i.getSnapshot=c,Xh(i)&&qh(n)}function Wh(n,i,a){return a(function(){Xh(i)&&qh(n)})}function Xh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function qh(n){var i=Wi(n,1);i!==null&&Si(i,n,1,-1)}function Yh(n){var i=Ci();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:n},i.queue=n,n=n.dispatch=v_.bind(null,$t,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function $h(){return ri().memoizedState}function zo(n,i,a,c){var d=Ci();$t.flags|=n,d.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function Ho(n,i,a,c){var d=ri();c=c===void 0?null:c;var g=void 0;if(ln!==null){var T=ln.memoizedState;if(g=T.destroy,c!==null&&Wc(c,T.deps)){d.memoizedState=Na(i,a,g,c);return}}$t.flags|=n,d.memoizedState=Na(1|i,a,g,c)}function Kh(n,i){return zo(8390656,8,n,i)}function Kc(n,i){return Ho(2048,8,n,i)}function jh(n,i){return Ho(4,2,n,i)}function Zh(n,i){return Ho(4,4,n,i)}function Jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,a){return a=a!=null?a.concat([n]):null,Ho(4,4,Jh.bind(null,i,n),a)}function jc(){}function ep(n,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(Gr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=a):(mi(a,i)||(a=on(),$t.lanes|=a,Wr|=a,n.baseState=!0),i)}function g_(n,i){var a=pt;pt=a!==0&&4>a?a:4,n(!0);var c=Gc.transition;Gc.transition={};try{n(!1),i()}finally{pt=a,Gc.transition=c}}function ip(){return ri().memoizedState}function __(n,i,a){var c=xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=Uh(n,i,a,c),a!==null){var d=Dn();Si(a,n,c,d),ap(a,i,c)}}function v_(n,i,a){var c=xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,k=g(T,a);if(d.hasEagerState=!0,d.eagerState=k,mi(k,T)){var V=i.interleaved;V===null?(d.next=d,Oc(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=Uh(n,i,d,c),a!==null&&(d=Dn(),Si(a,n,c,d),ap(a,i,c))}}function rp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function sp(n,i){ba=Bo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}var Vo={readContext:ii,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},x_={readContext:ii,useCallback:function(n,i){return Ci().memoizedState=[n,i===void 0?null:i],n},useContext:ii,useEffect:Kh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,zo(4194308,4,Jh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return zo(4,2,n,i)},useMemo:function(n,i){var a=Ci();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ci();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=__.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=Ci();return n={current:n},i.memoizedState=n},useState:Yh,useDebugValue:jc,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=Yh(!1),i=n[0];return n=g_.bind(null,n[1]),Ci().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=$t,d=Ci();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),hn===null)throw Error(t(349));(Gr&30)!==0||Vh(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Kh(Wh.bind(null,c,g,n),[n]),c.flags|=2048,Na(9,Gh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ci(),i=hn.identifierPrefix;if(Xt){var a=Gi,c=Vi;a=(c&~(1<<32-Le(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Pa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=m_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},S_={readContext:ii,useCallback:ep,useContext:ii,useEffect:Kc,useImperativeHandle:Qh,useInsertionEffect:jh,useLayoutEffect:Zh,useMemo:tp,useReducer:Yc,useRef:$h,useState:function(){return Yc(La)},useDebugValue:jc,useDeferredValue:function(n){var i=ri();return np(i,ln.memoizedState,n)},useTransition:function(){var n=Yc(La)[0],i=ri().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1},y_={readContext:ii,useCallback:ep,useContext:ii,useEffect:Kc,useImperativeHandle:Qh,useInsertionEffect:jh,useLayoutEffect:Zh,useMemo:tp,useReducer:$c,useRef:$h,useState:function(){return $c(La)},useDebugValue:jc,useDeferredValue:function(n){var i=ri();return ln===null?i.memoizedState=n:np(i,ln.memoizedState,n)},useTransition:function(){var n=$c(La)[0],i=ri().memoizedState;return[n,i]},useMutableSource:zh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Zc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Go={isMounted:function(n){return(n=n._reactInternals)?Ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Dn(),d=xr(n),g=Xi(c,d);g.payload=i,a!=null&&(g.callback=a),i=mr(n,g,d),i!==null&&(Si(i,n,d,c),Uo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Dn(),d=xr(n),g=Xi(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=mr(n,g,d),i!==null&&(Si(i,n,d,c),Uo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),c=xr(n),d=Xi(a,c);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,c),i!==null&&(Si(i,n,c,a),Uo(i,n,c))}};function op(n,i,a,c,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!va(a,c)||!va(d,g):!0}function lp(n,i,a){var c=!1,d=dr,g=i.contextType;return typeof g=="object"&&g!==null?g=ii(g):(d=Fn(i)?kr:En.current,c=i.contextTypes,g=(c=c!=null)?ys(n,d):dr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Go,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Go.enqueueReplaceState(i,i.state,null)}function Jc(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},kc(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=ii(g):(g=Fn(i)?kr:En.current,d.context=ys(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Zc(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Go.enqueueReplaceState(d,d.state,null),Fo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=He(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Qc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function eu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){jo||(jo=!0,mu=c),eu(n,i)},a}function fp(n,i,a){a=Xi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){eu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){eu(n,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function dp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new M_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=F_.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Xi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var E_=A.ReactCurrentOwner,On=!1;function Nn(n,i,a,c){i.child=n===null?Ih(i,null,a,c):Ts(i,n.child,a,c)}function mp(n,i,a,c,d){a=a.render;var g=i.ref;return Rs(i,d),c=Xc(n,i,a,c,g,d),a=qc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,qi(n,i,d)):(Xt&&a&&Cc(i),i.flags|=1,Nn(n,i,c,d),i.child)}function gp(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Mu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,_p(n,i,g,c,d)):(n=nl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(T,c)&&n.ref===i.ref)return qi(n,i,d)}return i.flags|=1,n=yr(g,c),n.ref=i.ref,n.return=i,i.child=n}function _p(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(va(g,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,qi(n,i,d)}return tu(n,i,a,c,d)}function vp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ls,Yn),Yn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ls,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,kt(Ls,Yn),Yn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,kt(Ls,Yn),Yn|=c;return Nn(n,i,d,a),i.child}function xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(n,i,a,c,d){var g=Fn(a)?kr:En.current;return g=ys(i,g),Rs(i,d),a=Xc(n,i,a,c,g,d),c=qc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,qi(n,i,d)):(Xt&&c&&Cc(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Sp(n,i,a,c,d){if(Fn(a)){var g=!0;Ro(i)}else g=!1;if(Rs(i,d),i.stateNode===null)Xo(n,i),lp(i,a,c),Jc(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var V=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=Fn(a)?kr:En.current,ue=ys(i,ue));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||V!==ue)&&cp(i,T,c,ue),pr=!1;var ve=i.memoizedState;T.state=ve,Fo(i,c,T,d),V=i.memoizedState,k!==c||ve!==V||Un.current||pr?(typeof xe=="function"&&(Zc(i,a,xe,c),V=i.memoizedState),(k=pr||op(i,a,k,c,ve,V,ue))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=ue,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Fh(n,i),k=i.memoizedProps,ue=i.type===i.elementType?k:_i(i.type,k),T.props=ue,ye=i.pendingProps,ve=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=ii(V):(V=Fn(a)?kr:En.current,V=ys(i,V));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==ye||ve!==V)&&cp(i,T,c,V),pr=!1,ve=i.memoizedState,T.state=ve,Fo(i,c,T,d);var qe=i.memoizedState;k!==ye||ve!==qe||Un.current||pr?(typeof Be=="function"&&(Zc(i,a,Be,c),qe=i.memoizedState),(ue=pr||op(i,a,ue,c,ve,qe,V)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,qe,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,qe,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=qe),T.props=c,T.state=qe,T.context=V,c=ue):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return nu(n,i,a,c,g,d)}function nu(n,i,a,c,d,g){xp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Th(i,a,!1),qi(n,i,g);c=i.stateNode,E_.current=i;var k=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,g),i.child=Ts(i,null,k,g)):Nn(n,i,k,g),i.memoizedState=c.state,d&&Th(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Eh(n,i.context,!1),Bc(n,i.containerInfo)}function Mp(n,i,a,c,d){return ws(),Nc(d),i.flags|=256,Nn(n,i,a,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ep(n,i,a){var c=i.pendingProps,d=Yt.current,g=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(d&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Yt,d&1),n===null)return Lc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=il(T,c,0,null),n=$r(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ru(a),i.memoizedState=iu,n):su(i,T));if(d=n.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return w_(n,i,T,c,k,d,a);if(g){g=c.fallback,T=i.mode,d=n.child,k=d.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=yr(d,V),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?g=yr(k,g):(g=$r(g,T,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?ru(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=iu,c}return g=n.child,n=g.sibling,c=yr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function su(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wo(n,i,a,c){return c!==null&&Nc(c),Ts(i,n.child,null,a),n=su(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function w_(n,i,a,c,d,g,T){if(a)return i.flags&256?(i.flags&=-257,c=Qc(Error(t(422))),Wo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=il({mode:"visible",children:c.children},d,0,null),g=$r(g,d,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=ru(T),i.memoizedState=iu,g);if((i.mode&1)===0)return Wo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=Qc(g,c,void 0),Wo(n,i,T,c)}if(k=(T&n.childLanes)!==0,On||k){if(c=hn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Wi(n,d),Si(c,n,d,-1))}return yu(),c=Qc(Error(t(421))),Wo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=O_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,qn=ur(d.nextSibling),Xn=i,Xt=!0,gi=null,n!==null&&(ti[ni++]=Vi,ti[ni++]=Gi,ti[ni++]=Br,Vi=n.id,Gi=n.overflow,Br=i),i=su(i,c.children),i.flags|=4096,i)}function wp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Fc(n.return,i,a)}function au(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Tp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Nn(n,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,a,i);else if(n.tag===19)wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Oo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),au(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}au(i,!0,a,null,g);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function qi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=yr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=yr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function T_(n,i,a){switch(i.tag){case 3:yp(i),ws();break;case 5:Bh(i);break;case 1:Fn(i.type)&&Ro(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Do,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ep(n,i,a):(kt(Yt,Yt.current&1),n=qi(n,i,a),n!==null?n.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Tp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,a)}return qi(n,i,a)}var Ap,ou,Rp,Cp;Ap=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},Rp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Vr(Ri.current);var g=null;switch(a){case"input":d=dt(n,d),c=dt(n,c),g=[];break;case"select":d=Y({},d,{value:void 0}),c=Y({},c,{value:void 0}),g=[];break;case"textarea":d=Gt(n,d),c=Gt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=wo)}Ke(a,c);var T;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var k=d[ue];for(T in k)k.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in c){var V=c[ue];if(k=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&V!==k&&(V!=null||k!=null))if(ue==="style")if(k){for(T in k)!k.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&k[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(g||(g=[]),g.push(ue,a)),a=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(g=g||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Bt("scroll",n),g||k===V||(g=[])):(g=g||[]).push(ue,V))}a&&(g=g||[]).push("style",a);var ue=g;(i.updateQueue=ue)&&(i.flags|=4)}},Cp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Da(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function A_(n,i,a){var c=i.pendingProps;switch(bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Fn(i.type)&&Ao(),Tn(i),null;case 3:return c=i.stateNode,Cs(),zt(Un),zt(En),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Lo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(vu(gi),gi=null))),ou(n,i),Tn(i),null;case 5:zc(i);var d=Vr(Ca.current);if(a=i.type,n!==null&&i.stateNode!=null)Rp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Vr(Ri.current),Lo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ai]=i,c[Ea]=g,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Sa.length;d++)Bt(Sa[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":St(c,g),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",c);break;case"textarea":$(c,g),Bt("invalid",c)}Ke(a,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var k=g[T];T==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Eo(c.textContent,k,n),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Eo(c.textContent,k,n),d=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Oe(c),Ft(c,g,!0);break;case"textarea":Oe(c),Rt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=wo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ai]=i,n[Ea]=c,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(T=Pe(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Sa.length;d++)Bt(Sa[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":St(n,c),d=dt(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=Y({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":$(n,c),d=Gt(n,c),Bt("invalid",n);break;default:d=c}Ke(a,d),k=d;for(g in k)if(k.hasOwnProperty(g)){var V=k[g];g==="style"?ge(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&oe(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Bt("scroll",n):V!=null&&F(n,g,V,T))}switch(a){case"input":Oe(n),Ft(n,c,!1);break;case"textarea":Oe(n),Rt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Nt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Nt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Ca.current),Vr(Ri.current),Lo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ai]=i,(g=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:Eo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Eo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return Tn(i),null;case 13:if(zt(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),ws(),i.flags|=98560,g=!1;else if(g=Lo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ai]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),g=!1}else gi!==null&&(vu(gi),gi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?cn===0&&(cn=3):yu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Cs(),ou(n,i),n===null&&ya(i.stateNode.containerInfo),Tn(i),null;case 10:return Uc(i.type._context),Tn(i),null;case 17:return Fn(i.type)&&Ao(),Tn(i),null;case 19:if(zt(Yt),g=i.memoizedState,g===null)return Tn(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)Da(g,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Oo(n),T!==null){for(i.flags|=128,Da(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Yt,Yt.current&1|2),i.child}n=n.sibling}g.tail!==null&&qt()>Ns&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304)}else{if(!c)if(n=Oo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!Xt)return Tn(i),null}else 2*qt()-g.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qt(),i.sibling=null,a=Yt.current,kt(Yt,c?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function R_(n,i){switch(bc(i),i.tag){case 1:return Fn(i.type)&&Ao(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),zt(Un),zt(En),Vc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return zc(i),null;case 13:if(zt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Yt),null;case 4:return Cs(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var qo=!1,An=!1,C_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(n,i,c)}else a.current=null}function lu(n,i,a){try{a()}catch(c){Qt(n,i,c)}}var bp=!1;function b_(n,i){if(Sc=fo,n=oh(),dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,k=-1,V=-1,ue=0,xe=0,ye=n,ve=null;t:for(;;){for(var Be;ye!==a||d!==0&&ye.nodeType!==3||(k=T+d),ye!==g||c!==0&&ye.nodeType!==3||(V=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)ve=ye,ye=Be;for(;;){if(ye===n)break t;if(ve===a&&++ue===d&&(k=T),ve===g&&++xe===c&&(V=T),(Be=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Be}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(yc={focusedElem:n,selectionRange:a},fo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var $e=qe.memoizedProps,tn=qe.memoizedState,ie=i.stateNode,K=ie.getSnapshotBeforeUpdate(i.elementType===i.type?$e:_i(i.type,$e),tn);ie.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Qt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return qe=bp,bp=!1,qe}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&lu(i,a,g)}d=d.next}while(d!==c)}}function Yo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function cu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Pp(n){var i=n.alternate;i!==null&&(n.alternate=null,Pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[Ea],delete i[Tc],delete i[f_],delete i[d_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Np(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=wo));else if(c!==4&&(n=n.child,n!==null))for(uu(n,i,a),n=n.sibling;n!==null;)uu(n,i,a),n=n.sibling}function fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fu(n,i,a),n=n.sibling;n!==null;)fu(n,i,a),n=n.sibling}var _n=null,vi=!1;function gr(n,i,a){for(a=a.child;a!==null;)Dp(n,i,a),a=a.sibling}function Dp(n,i,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:An||Ps(a,i);case 6:var c=_n,d=vi;_n=null,gr(n,i,a),_n=c,vi=d,_n!==null&&(vi?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(vi?(n=_n,a=a.stateNode,n.nodeType===8?wc(n.parentNode,a):n.nodeType===1&&wc(n,a),da(n)):wc(_n,a.stateNode));break;case 4:c=_n,d=vi,_n=a.stateNode.containerInfo,vi=!0,gr(n,i,a),_n=c,vi=d;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&lu(a,i,T),d=d.next}while(d!==c)}gr(n,i,a);break;case 1:if(!An&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Qt(a,i,k)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,gr(n,i,a),An=c):gr(n,i,a);break;default:gr(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new C_),i.forEach(function(c){var d=k_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:_n=k.stateNode,vi=!1;break e;case 3:_n=k.stateNode.containerInfo,vi=!0;break e;case 4:_n=k.stateNode.containerInfo,vi=!0;break e}k=k.return}if(_n===null)throw Error(t(160));Dp(g,T,d),_n=null,vi=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ue){Qt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Up(i,n),i=i.sibling}function Up(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(i,n),bi(n),c&4){try{Ia(3,n,n.return),Yo(3,n)}catch($e){Qt(n,n.return,$e)}try{Ia(5,n,n.return)}catch($e){Qt(n,n.return,$e)}}break;case 1:xi(i,n),bi(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(xi(i,n),bi(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch($e){Qt(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,k=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&Dt(d,g),Pe(k,T);var ue=Pe(k,g);for(T=0;T<V.length;T+=2){var xe=V[T],ye=V[T+1];xe==="style"?ge(d,ye):xe==="dangerouslySetInnerHTML"?oe(d,ye):xe==="children"?he(d,ye):F(d,xe,ye,ue)}switch(k){case"input":ht(d,g);break;case"textarea":an(d,g);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Be=g.value;Be!=null?Nt(d,!!g.multiple,Be,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Nt(d,!!g.multiple,g.defaultValue,!0):Nt(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ea]=g}catch($e){Qt(n,n.return,$e)}}break;case 6:if(xi(i,n),bi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch($e){Qt(n,n.return,$e)}}break;case 3:if(xi(i,n),bi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{da(i.containerInfo)}catch($e){Qt(n,n.return,$e)}break;case 4:xi(i,n),bi(n);break;case 13:xi(i,n),bi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=qt())),c&4&&Ip(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(An=(ue=An)||xe,xi(i,n),An=ue):xi(i,n),bi(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(ye=Ve=xe;Ve!==null;){switch(ve=Ve,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ia(4,ve,ve.return);break;case 1:Ps(ve,ve.return);var qe=ve.stateNode;if(typeof qe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch($e){Qt(c,a,$e)}}break;case 5:Ps(ve,ve.return);break;case 22:if(ve.memoizedState!==null){kp(ye);continue}}Be!==null?(Be.return=ve,Ve=Be):kp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,ue?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=ye.stateNode,V=ye.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=pe("display",T))}catch($e){Qt(n,n.return,$e)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ue?"":ye.memoizedProps}catch($e){Qt(n,n.return,$e)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:xi(i,n),bi(n),c&4&&Ip(n);break;case 21:break;default:xi(i,n),bi(n)}}function bi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var g=Np(n);fu(n,g,d);break;case 3:case 4:var T=c.stateNode.containerInfo,k=Np(n);uu(n,k,T);break;default:throw Error(t(161))}}catch(V){Qt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function P_(n,i,a){Ve=n,Fp(n)}function Fp(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var d=Ve,g=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||qo;if(!T){var k=d.alternate,V=k!==null&&k.memoizedState!==null||An;k=qo;var ue=An;if(qo=T,(An=V)&&!ue)for(Ve=d;Ve!==null;)T=Ve,V=T.child,T.tag===22&&T.memoizedState!==null?Bp(d):V!==null?(V.return=T,Ve=V):Bp(d);for(;g!==null;)Ve=g,Fp(g),g=g.sibling;Ve=d,qo=k,An=ue}Op(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ve=g):Op(n)}}function Op(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Yo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&kh(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}kh(i,T,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&da(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&cu(i)}catch(ve){Qt(i,i.return,ve)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function kp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Bp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yo(4,i)}catch(V){Qt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){Qt(i,d,V)}}var g=i.return;try{cu(i)}catch(V){Qt(i,g,V)}break;case 5:var T=i.return;try{cu(i)}catch(V){Qt(i,T,V)}}}catch(V){Qt(i,i.return,V)}if(i===n){Ve=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ve=k;break}Ve=i.return}}var L_=Math.ceil,$o=A.ReactCurrentDispatcher,du=A.ReactCurrentOwner,si=A.ReactCurrentBatchConfig,Tt=0,hn=null,rn=null,vn=0,Yn=0,Ls=fr(0),cn=0,Ua=null,Wr=0,Ko=0,hu=0,Fa=null,kn=null,pu=0,Ns=1/0,Yi=null,jo=!1,mu=null,_r=null,Zo=!1,vr=null,Jo=0,Oa=0,gu=null,Qo=-1,el=0;function Dn(){return(Tt&6)!==0?qt():Qo!==-1?Qo:Qo=qt()}function xr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&vn!==0?vn&-vn:p_.transition!==null?(el===0&&(el=on()),el):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Hd(n.type)),n)}function Si(n,i,a,c){if(50<Oa)throw Oa=0,gu=null,Error(t(185));en(n,a,c),((Tt&2)===0||n!==hn)&&(n===hn&&((Tt&2)===0&&(Ko|=a),cn===4&&Sr(n,vn)),Bn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Ns=qt()+500,Co&&hr()))}function Bn(n,i){var a=n.callbackNode;Ot(n,i);var c=yt(n,n===hn?vn:0);if(c===0)a!==null&&sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sa(a),i===1)n.tag===0?h_(Hp.bind(null,n)):Ah(Hp.bind(null,n)),c_(function(){(Tt&6)===0&&hr()}),a=null;else{switch(fi(c)){case 1:a=aa;break;case 4:a=oa;break;case 16:a=C;break;case 536870912:a=ce;break;default:a=C}a=Kp(a,zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zp(n,i){if(Qo=-1,el=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ds()&&n.callbackNode!==a)return null;var c=yt(n,n===hn?vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=tl(n,c);else{i=c;var d=Tt;Tt|=2;var g=Gp();(hn!==n||vn!==i)&&(Yi=null,Ns=qt()+500,qr(n,i));do try{I_();break}catch(k){Vp(n,k)}while(!0);Ic(),$o.current=g,Tt=d,rn!==null?i=0:(hn=null,vn=0,i=cn)}if(i!==0){if(i===2&&(d=Lt(n),d!==0&&(c=d,i=_u(n,d))),i===1)throw a=Ua,qr(n,0),Sr(n,c),Bn(n,qt()),a;if(i===6)Sr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!N_(d)&&(i=tl(n,c),i===2&&(g=Lt(n),g!==0&&(c=g,i=_u(n,g))),i===1))throw a=Ua,qr(n,0),Sr(n,c),Bn(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,kn,Yi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=pu+500-qt(),10<i)){if(yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ec(Yr.bind(null,n,kn,Yi),i);break}Yr(n,kn,Yi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Le(c);g=1<<T,T=i[T],T>d&&(d=T),c&=~g}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*L_(c/1960))-c,10<c){n.timeoutHandle=Ec(Yr.bind(null,n,kn,Yi),c);break}Yr(n,kn,Yi);break;case 5:Yr(n,kn,Yi);break;default:throw Error(t(329))}}}return Bn(n,qt()),n.callbackNode===a?zp.bind(null,n):null}function _u(n,i){var a=Fa;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=tl(n,i),n!==2&&(i=kn,kn=a,i!==null&&vu(i)),n}function vu(n){kn===null?kn=n:kn.push.apply(kn,n)}function N_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!mi(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~hu,i&=~Ko,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Le(i),c=1<<a;n[a]=-1,i&=~c}}function Hp(n){if((Tt&6)!==0)throw Error(t(327));Ds();var i=yt(n,0);if((i&1)===0)return Bn(n,qt()),null;var a=tl(n,i);if(n.tag!==0&&a===2){var c=Lt(n);c!==0&&(i=c,a=_u(n,c))}if(a===1)throw a=Ua,qr(n,0),Sr(n,i),Bn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,kn,Yi),Bn(n,qt()),null}function xu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Ns=qt()+500,Co&&hr())}}function Xr(n){vr!==null&&vr.tag===0&&(Tt&6)===0&&Ds();var i=Tt;Tt|=1;var a=si.transition,c=pt;try{if(si.transition=null,pt=1,n)return n()}finally{pt=c,si.transition=a,Tt=i,(Tt&6)===0&&hr()}}function Su(){Yn=Ls.current,zt(Ls)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,l_(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ao();break;case 3:Cs(),zt(Un),zt(En),Vc();break;case 5:zc(c);break;case 4:Cs();break;case 13:zt(Yt);break;case 19:zt(Yt);break;case 10:Uc(c.type._context);break;case 22:case 23:Su()}a=a.return}if(hn=n,rn=n=yr(n.current,null),vn=Yn=i,cn=0,Ua=null,hu=Ko=Wr=0,kn=Fa=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var T=g.next;g.next=d,c.next=T}a.pending=c}Hr=null}return n}function Vp(n,i){do{var a=rn;try{if(Ic(),ko.current=Vo,Bo){for(var c=$t.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Bo=!1}if(Gr=0,dn=ln=$t=null,ba=!1,Pa=0,du.current=null,a===null||a.return===null){cn=1,Ua=i,rn=null;break}e:{var g=n,T=a.return,k=a,V=i;if(i=vn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,xe=k,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=hp(T);if(Be!==null){Be.flags&=-257,pp(Be,T,k,g,i),Be.mode&1&&dp(g,ue,i),i=Be,V=ue;var qe=i.updateQueue;if(qe===null){var $e=new Set;$e.add(V),i.updateQueue=$e}else qe.add(V);break e}else{if((i&1)===0){dp(g,ue,i),yu();break e}V=Error(t(426))}}else if(Xt&&k.mode&1){var tn=hp(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),pp(tn,T,k,g,i),Nc(bs(V,k));break e}}g=V=bs(V,k),cn!==4&&(cn=2),Fa===null?Fa=[g]:Fa.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ie=up(g,V,i);Oh(g,ie);break e;case 1:k=V;var K=g.type,se=g.stateNode;if((g.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(_r===null||!_r.has(se)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=fp(g,k,i);Oh(g,we);break e}}g=g.return}while(g!==null)}Xp(a)}catch(Qe){i=Qe,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Gp(){var n=$o.current;return $o.current=Vo,n===null?Vo:n}function yu(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(Wr&268435455)===0&&(Ko&268435455)===0||Sr(hn,vn)}function tl(n,i){var a=Tt;Tt|=2;var c=Gp();(hn!==n||vn!==i)&&(Yi=null,qr(n,i));do try{D_();break}catch(d){Vp(n,d)}while(!0);if(Ic(),Tt=a,$o.current=c,rn!==null)throw Error(t(261));return hn=null,vn=0,cn}function D_(){for(;rn!==null;)Wp(rn)}function I_(){for(;rn!==null&&!co();)Wp(rn)}function Wp(n){var i=$p(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?Xp(n):rn=i,du.current=null}function Xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=A_(a,i,Yn),a!==null){rn=a;return}}else{if(a=R_(a,i),a!==null){a.flags&=32767,rn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);cn===0&&(cn=5)}function Yr(n,i,a){var c=pt,d=si.transition;try{si.transition=null,pt=1,U_(n,i,a,c)}finally{si.transition=d,pt=c}return null}function U_(n,i,a,c){do Ds();while(vr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Mt(n,g),n===hn&&(rn=hn=null,vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zo||(Zo=!0,Kp(C,function(){return Ds(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=si.transition,si.transition=null;var T=pt;pt=1;var k=Tt;Tt|=4,du.current=null,b_(n,a),Up(a,n),t_(yc),fo=!!Sc,yc=Sc=null,n.current=a,P_(a),Ql(),Tt=k,pt=T,si.transition=g}else n.current=a;if(Zo&&(Zo=!1,vr=n,Jo=d),g=n.pendingLanes,g===0&&(_r=null),Ie(a.stateNode),Bn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(jo)throw jo=!1,n=mu,mu=null,n;return(Jo&1)!==0&&n.tag!==0&&Ds(),g=n.pendingLanes,(g&1)!==0?n===gu?Oa++:(Oa=0,gu=n):Oa=0,hr(),null}function Ds(){if(vr!==null){var n=fi(Jo),i=si.transition,a=pt;try{if(si.transition=null,pt=16>n?16:n,vr===null)var c=!1;else{if(n=vr,vr=null,Jo=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,Ve=n.current;Ve!==null;){var g=Ve,T=g.child;if((Ve.flags&16)!==0){var k=g.deletions;if(k!==null){for(var V=0;V<k.length;V++){var ue=k[V];for(Ve=ue;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Ia(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Ve=ye;else for(;Ve!==null;){xe=Ve;var ve=xe.sibling,Be=xe.return;if(Pp(xe),xe===ue){Ve=null;break}if(ve!==null){ve.return=Be,Ve=ve;break}Ve=Be}}}var qe=g.alternate;if(qe!==null){var $e=qe.child;if($e!==null){qe.child=null;do{var tn=$e.sibling;$e.sibling=null,$e=tn}while($e!==null)}}Ve=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ve=T;else e:for(;Ve!==null;){if(g=Ve,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ia(9,g,g.return)}var ie=g.sibling;if(ie!==null){ie.return=g.return,Ve=ie;break e}Ve=g.return}}var K=n.current;for(Ve=K;Ve!==null;){T=Ve;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,Ve=se;else e:for(T=K;Ve!==null;){if(k=Ve,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Yo(9,k)}}catch(Qe){Qt(k,k.return,Qe)}if(k===T){Ve=null;break e}var we=k.sibling;if(we!==null){we.return=k.return,Ve=we;break e}Ve=k.return}}if(Tt=d,hr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{pt=a,si.transition=i}}return!1}function qp(n,i,a){i=bs(a,i),i=up(n,i,1),n=mr(n,i,1),i=Dn(),n!==null&&(en(n,1,i),Bn(n,i))}function Qt(n,i,a){if(n.tag===3)qp(n,n,a);else for(;i!==null;){if(i.tag===3){qp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=bs(a,n),n=fp(i,n,1),i=mr(i,n,1),n=Dn(),i!==null&&(en(i,1,n),Bn(i,n));break}}i=i.return}}function F_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&a,hn===n&&(vn&a)===a&&(cn===4||cn===3&&(vn&130023424)===vn&&500>qt()-pu?qr(n,0):hu|=a),Bn(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ut,ut<<=1,(ut&130023424)===0&&(ut=4194304)));var a=Dn();n=Wi(n,i),n!==null&&(en(n,i,a),Bn(n,a))}function O_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Yp(n,a)}function k_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Yp(n,a)}var $p;$p=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Un.current)On=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return On=!1,T_(n,i,a);On=(n.flags&131072)!==0}else On=!1,Xt&&(i.flags&1048576)!==0&&Rh(i,Po,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Xo(n,i),n=i.pendingProps;var d=ys(i,En.current);Rs(i,a),d=Xc(null,i,c,n,d,a);var g=qc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(c)?(g=!0,Ro(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,kc(i),d.updater=Go,i.stateNode=d,d._reactInternals=i,Jc(i,c,n,a),i=nu(null,i,c,!0,g,a)):(i.tag=0,Xt&&g&&Cc(i),Nn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Xo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=z_(c),n=_i(c,n),d){case 0:i=tu(null,i,c,n,a);break e;case 1:i=Sp(null,i,c,n,a);break e;case 11:i=mp(null,i,c,n,a);break e;case 14:i=gp(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),tu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Sp(n,i,c,d,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Fh(n,i),Fo(i,c,null,a);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=bs(Error(t(423)),i),i=Mp(n,i,c,a,d);break e}else if(c!==d){d=bs(Error(t(424)),i),i=Mp(n,i,c,a,d);break e}else for(qn=ur(i.stateNode.containerInfo.firstChild),Xn=i,Xt=!0,gi=null,a=Ih(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===d){i=qi(n,i,a);break e}Nn(n,i,c,a)}i=i.child}return i;case 5:return Bh(i),n===null&&Lc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,Mc(c,d)?T=null:g!==null&&Mc(c,g)&&(i.flags|=32),xp(n,i),Nn(n,i,T,a),i.child;case 6:return n===null&&Lc(i),null;case 13:return Ep(n,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):Nn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),mp(n,i,c,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,kt(Do,c._currentValue),c._currentValue=T,g!==null)if(mi(g.value,T)){if(g.children===d.children&&!Un.current){i=qi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){T=g.child;for(var V=k.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=Xi(-1,a&-a),V.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),ue.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),Fc(g.return,a,i),k.lanes|=a;break}V=V.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,k=T.alternate,k!==null&&(k.lanes|=a),Fc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Rs(i,a),d=ii(d),c=c(d),i.flags|=1,Nn(n,i,c,a),i.child;case 14:return c=i.type,d=_i(c,i.pendingProps),d=_i(c.type,d),gp(n,i,c,d,a);case 15:return _p(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Xo(n,i),i.tag=1,Fn(c)?(n=!0,Ro(i)):n=!1,Rs(i,a),lp(i,c,d),Jc(i,c,d,a),nu(null,i,c,!0,n,a);case 19:return Tp(n,i,a);case 22:return vp(n,i,a)}throw Error(t(156,i.tag))};function Kp(n,i){return Fr(n,i)}function B_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,i,a,c){return new B_(n,i,a,c)}function Mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z_(n){if(typeof n=="function")return Mu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===Z)return 14}return 2}function yr(n,i){var a=n.alternate;return a===null?(a=ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function nl(n,i,a,c,d,g){var T=2;if(c=n,typeof n=="function")Mu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case D:return $r(a.children,d,g,i);case M:T=8,d|=8;break;case L:return n=ai(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case j:return n=ai(13,a,i,d),n.elementType=j,n.lanes=g,n;case G:return n=ai(19,a,i,d),n.elementType=G,n.lanes=g,n;case te:return il(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:T=10;break e;case z:T=9;break e;case H:T=11;break e;case Z:T=14;break e;case fe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ai(T,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function $r(n,i,a,c){return n=ai(7,n,c,i),n.lanes=a,n}function il(n,i,a,c){return n=ai(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function Eu(n,i,a){return n=ai(6,n,null,i),n.lanes=a,n}function wu(n,i,a){return i=ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function H_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ke(0),this.expirationTimes=ke(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(n,i,a,c,d,g,T,k,V){return n=new H_(n,i,a,k,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ai(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(g),n}function V_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function jp(n){if(!n)return dr;n=n._reactInternals;e:{if(Ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Fn(a))return wh(n,a,i)}return i}function Zp(n,i,a,c,d,g,T,k,V){return n=Tu(a,c,!0,n,d,g,T,k,V),n.context=jp(null),a=n.current,c=Dn(),d=xr(a),g=Xi(c,d),g.callback=i??null,mr(a,g,d),n.current.lanes=d,en(n,d,c),Bn(n,c),n}function rl(n,i,a,c){var d=i.current,g=Dn(),T=xr(d);return a=jp(a),i.context===null?i.context=a:i.pendingContext=a,i=Xi(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=mr(d,i,T),n!==null&&(Si(n,d,T,g),Uo(n,d,T)),T}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Au(n,i){Jp(n,i),(n=n.alternate)&&Jp(n,i)}function G_(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ru(n){this._internalRoot=n}al.prototype.render=Ru.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},al.prototype.unmount=Ru.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xr(function(){rl(null,n,null,null)}),i[zi]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&Bd(n)}};function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function W_(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ue=sl(T);g.call(ue)}}var T=Zp(i,c,n,0,null,!1,!1,"",em);return n._reactRootContainer=T,n[zi]=T.current,ya(n.nodeType===8?n.parentNode:n),Xr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var ue=sl(V);k.call(ue)}}var V=Tu(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=V,n[zi]=V.current,ya(n.nodeType===8?n.parentNode:n),Xr(function(){rl(i,V,a,c)}),V}function ll(n,i,a,c,d){var g=a._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var k=d;d=function(){var V=sl(T);k.call(V)}}rl(i,T,n,d)}else T=W_(a,i,n,d,c);return sl(T)}Bi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ze(i.pendingLanes);a!==0&&(Mn(i,a|1),Bn(i,qt()),(Tt&6)===0&&(Ns=qt()+500,hr()))}break;case 13:Xr(function(){var c=Wi(n,1);if(c!==null){var d=Dn();Si(c,n,1,d)}}),Au(n,1)}},bt=function(n){if(n.tag===13){var i=Wi(n,134217728);if(i!==null){var a=Dn();Si(i,n,134217728,a)}Au(n,134217728)}},Wt=function(n){if(n.tag===13){var i=xr(n),a=Wi(n,i);if(a!==null){var c=Dn();Si(a,n,i,c)}Au(n,i)}},di=function(){return pt},It=function(n,i){var a=pt;try{return pt=n,i()}finally{pt=a}},tt=function(n,i,a){switch(i){case"input":if(ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=To(c);if(!d)throw Error(t(90));ft(c),ht(c,d)}}}break;case"textarea":an(n,a);break;case"select":i=a.value,i!=null&&Nt(n,!!a.multiple,i,!1)}},Fe=xu,_e=Xr;var X_={usingClientEntryPoint:!1,Events:[wa,xs,To,me,Ce,xu]},ka={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ur(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ne=cl.inject(q_),ee=cl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_,zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(t(200));return V_(n,i,null,a)},zn.createRoot=function(n,i){if(!Cu(n))throw Error(t(299));var a=!1,c="",d=Qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(n,1,!1,null,null,a,!1,c,d),n[zi]=i.current,ya(n.nodeType===8?n.parentNode:n),new Ru(i)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ur(i),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Xr(n)},zn.hydrate=function(n,i,a){if(!ol(i))throw Error(t(200));return ll(null,n,i,!0,a)},zn.hydrateRoot=function(n,i,a){if(!Cu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",T=Qp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,d,!1,g,T),n[zi]=i.current,ya(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new al(i)},zn.render=function(n,i,a){if(!ol(i))throw Error(t(200));return ll(null,n,i,!1,a)},zn.unmountComponentAtNode=function(n){if(!ol(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},zn.unstable_batchedUpdates=xu,zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ol(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,a,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var lm;function nv(){if(lm)return Lu.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=tv(),Lu.exports}var cm;function iv(){if(cm)return ul;cm=1;var s=nv();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var rv=iv();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function av(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:sv(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=s=>{const e=ov(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Iu(s){return s!=null}function cv(s,e={}){var m,y;const t=e.attributeNames??{},r=E=>t[E]??E,o=s.size??s.width??Kr.width,l=s.size??s.height??Kr.height,u=((m=s.aliases)==null?void 0:m.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((y=e.className)==null?void 0:y.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?_f(...h):_f("lucide",...f,...h),_=e.absoluteStrokeWidth?Number(e.strokeWidth??Kr["stroke-width"])*Number(s.size??s.width??Kr.width)/Number(e.size??e.width??Kr.width):e.strokeWidth??Kr["stroke-width"];return["svg",{...Object.entries(Kr).reduce((E,[R,S])=>(E[r(R)]=S,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Iu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Iu(e.width)&&{[r("width")]:e.width},..."height"in e&&Iu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[R,S,x]=E,b=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return x?[R,b,x]:[R,b]})]}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function uv(s,e={}){return cv(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},dv=vt.createContext({}),hv=()=>vt.useContext(dv),pv=vt.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:p=[],icon:_={node:p,aliases:[],size:24},...v},m)=>{const{size:y=24,strokeWidth:E=2,absoluteStrokeWidth:R=!1,nonScalingStroke:S=!1,color:x="currentColor",className:b=""}=hv()??{},F=!!h||fv(v),[A,P,N=[]]=uv(_,{color:s??x,width:t??e??y,height:r??e??y,strokeWidth:o??E,absoluteStrokeWidth:l??R,nonScalingStroke:u??S,className:_f(b,f),hasA11yProp:F,attributes:v});return vt.createElement(A,{ref:m,...P},[...N.map(([D,M])=>vt.createElement(D,M)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jn(s,e=[],t=[]){const r=typeof s=="string"?av(s,e,t):s,o=vt.forwardRef(({className:l,...u},f)=>vt.createElement(pv,{ref:f,icon:r,className:l,...u}));return r.name&&(o.displayName=lv(r.name)),o}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};pg.node;const Uu=Jn(pg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};mg.node;const mv=Jn(mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};gg.node;const gv=Jn(gg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"hand",size:24,node:[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]};_g.node;const _v=Jn(_g);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};vg.node;const vv=Jn(vg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};xg.node;const um=Jn(xg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};Sg.node;const xv=Jn(Sg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};yg.node;const Sv=Jn(yg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"snowflake",size:24,node:[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]]};Mg.node;const yv=Jn(Mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Eg.node;const Mv=Jn(Eg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};wg.node;const fm=Jn(wg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Tg.node;const Ev=Jn(Tg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ag.node;const wv=Jn(Ag);function Tv({pause:s,clearInput:e,onReturnHome:t,disabled:r}){const[o,l]=vt.useState(!1),u=vt.useRef(null),f=vt.useRef(null),h=vt.useRef(null),p=vt.useCallback(()=>{const _=u.current;u.current=null,_==null||_(),l(!1),requestAnimationFrame(()=>{var v;return(v=h.current)==null?void 0:v.focus()})},[]);return vt.useEffect(()=>{var m,y;if(!o)return;const _=(m=f.current)==null?void 0:m.querySelectorAll("button");(y=_==null?void 0:_[0])==null||y.focus();const v=E=>{if(E.stopImmediatePropagation(),E.type==="keydown"){if(E.key==="Escape")E.preventDefault(),p();else if(E.key==="Tab"&&(_!=null&&_.length)){const R=_[0],S=_[_.length-1];E.shiftKey&&document.activeElement===R?(E.preventDefault(),S.focus()):!E.shiftKey&&document.activeElement===S&&(E.preventDefault(),R.focus())}}};return window.addEventListener("keydown",v,!0),window.addEventListener("keyup",v,!0),()=>{window.removeEventListener("keydown",v,!0),window.removeEventListener("keyup",v,!0)}},[o,p]),ae.jsxs(ae.Fragment,{children:[ae.jsx("button",{ref:h,className:"shell-home","aria-label":"홈으로 돌아가기",disabled:r||o,onClick:()=>{u.current||(e(),u.current=s(),l(!0))},children:ae.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:ae.jsx("path",{d:"M3 10.5 12 3l9 7.5M5.5 9v11h5v-6h3v6h5V9"})})}),o&&ae.jsx("div",{className:"shell-backdrop",children:ae.jsxs("div",{ref:f,className:"shell-confirm",role:"dialog","aria-modal":"true","aria-label":"홈으로 돌아갈까요?",children:[ae.jsx("h2",{children:"홈으로 돌아갈까요?"}),ae.jsxs("p",{children:["진행 중인 게임은 종료됩니다.",ae.jsx("br",{}),"저장된 기록은 유지됩니다."]}),ae.jsxs("div",{className:"shell-actions",children:[ae.jsx("button",{onClick:p,children:"계속하기"}),ae.jsx("button",{className:"shell-primary",onClick:()=>{u.current=null,l(!1),t()},children:"홈으로 돌아가기"})]})]})})]})}const Av=[{appName:"kick-apple",title:"사과부수기",desc:"쏟아지는 사과를 부수는 손맛 액션",accent:"#ff5a5a",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/kick-apple.png",url:"intoss://kick-apple"},{appName:"the-farmer",title:"농부이야기",desc:"밭 갈고 낚시하는 아기자기 농장 생활 RPG",accent:"#7CB342",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/the-farmer.png",url:"intoss://the-farmer"},{appName:"landgrab",title:"땅따먹기",desc:"선을 그어 내 땅을 넓히는 점령 서바이벌",accent:"#e9c93a",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/landgrab.png",url:"intoss://landgrab"},{appName:"landgrab-3d",title:"땅따먹기:3D",desc:"입체로 즐기는 땅따먹기 · 3D 영역 점령",accent:"#e9c93a",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/landgrab-3d.png",url:"intoss://landgrab-3d"},{appName:"evolve-war",title:"에볼루션",desc:"단세포에서 초월생명까지! 진화 레인 전투",accent:"#28B391",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/evolve-war.png",url:"intoss://evolve-war"},{appName:"chem-lab",title:"케미랩",desc:"원소를 조합해 화합물을 만드는 화학 실험 퍼즐",accent:"#3fe8c0",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/chem-lab.png",url:"intoss://chem-lab"},{appName:"cats-are-cute",title:"고양이는귀엽다",desc:"방치형 가챠로 귀여운 고양이 수집",accent:"#ffb24a",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/cats-are-cute.png",url:"intoss://cats-are-cute"},{appName:"arrow-brawl",title:"화살난투",desc:"회전 방패와 화살로 끝까지 살아남기",accent:"#5fa8ff",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/arrow-brawl.png",url:"intoss://arrow-brawl"},{appName:"ball-defense",title:"볼 디펜스:발릭스",desc:"공을 튕겨 몰려오는 적을 막는 디펜스",accent:"#42d6a8",icon:"https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/icons/ball-defense.png",url:"intoss://ball-defense"},{appName:"our-sign-game",title:"우리사이는?",desc:"카톡 대화로 보는 우리 관계 신호",accent:"#FF5A7A",icon:"https://static.toss.im/appsintoss/29059/b3c1ffa1-695c-4be9-b446-d0d883ee8736.png",url:"intoss://our-sign-game"},{appName:"invasion",title:"인베이젼",desc:"외계 기생체로 인류를 감염·동화시키는 전략 시뮬레이션",accent:"#3FBFA3",icon:"https://static.toss.im/appsintoss/29059/f43df8dc-8e1a-42f3-8d44-6aa1c157e93d.png",url:"intoss://invasion"},{appName:"arrow-clash",title:"화살 격돌",desc:"활을 당겨 다양한 화살로 살아남는 물리 궁술 액션",accent:"#42D8C4",icon:"https://static.toss.im/appsintoss/29059/live-managed-v1-e256f4ab-672b-4cf5-a8f2-5ac818586404.png",url:"intoss://arrow-clash"},{appName:"my-buddha",title:"나의 부처님",desc:"불안할 때 찾아오는 작은 절",accent:"#D9A93A",icon:"https://static.toss.im/appsintoss/29059/live-managed-v1-3d84094a-98ee-4932-b0df-ea3ec5838dec.png",url:"intoss://my-buddha"}],Rv="https://cdn.jsdelivr.net/gh/Aiden-Kwak/appintoss-promo@main/games.json";function Cv(s){if(!s||typeof s!="object")return!1;const e=s;return/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.appName)&&typeof e.title=="string"&&typeof e.desc=="string"&&/^#[\da-f]{6}$/i.test(e.accent)&&typeof e.icon=="string"&&e.icon.startsWith("https://")&&e.url===`intoss://${e.appName}`}function bv({appName:s,onClose:e}){const[t,r]=vt.useState(Av);return vt.useEffect(()=>{const o=new AbortController,l=setTimeout(()=>o.abort(),8e3);return fetch(Rv,{cache:"no-cache",signal:o.signal}).then(u=>{if(!u.ok)throw new Error("Registry unavailable");return u.json()}).then(u=>{if(Array.isArray(u)&&u.length&&u.every(Cv)){const f=new Map(u.map(h=>[h.appName,h]));r([...f.values()])}}).catch(()=>{}).finally(()=>clearTimeout(l)),()=>{clearTimeout(l),o.abort()}},[]),ae.jsxs("section",{className:"shell-promo",children:[ae.jsxs("header",{children:[ae.jsx("button",{onClick:e,children:"← 돌아가기"}),ae.jsx("h1",{children:"더 많은 게임"})]}),ae.jsx("div",{className:"shell-game-list",children:t.filter(o=>o.appName!==s).map(o=>ae.jsxs("button",{className:"shell-game",onClick:()=>{window.location.href=o.url},children:[ae.jsx("img",{src:o.icon,alt:"",style:{background:o.accent},loading:"lazy"}),ae.jsxs("span",{children:[ae.jsx("strong",{children:o.title}),ae.jsx("small",{children:o.desc})]})]},o.appName))})]})}const ts=[{id:"rainbow",name:"파스텔 마블",english:"PASTEL MARBLE",note:"보드라운 컬러 속, 바삭한 반전",tag:"SIGNATURE",colors:["#f29bb4","#a6cde4","#f5de9b","#b7aedc"],core:"#f2c5db",roughness:.36,pitch:1,shape:"ball"},{id:"butter",name:"크런치 버터",english:"CRUNCHY BUTTER",note:"두툼한 껍질이 와작, 쫀득한 속",tag:"DEEP CRUNCH",colors:["#f3cf6c","#ffebb0"],core:"#ffdf83",roughness:.48,pitch:.72,shape:"block"},{id:"berry",name:"딸기 밀크",english:"STRAWBERRY MILK",note:"딸기빛 왁스 아래 말랑한 밀크",tag:"SOFT POP",colors:["#e78fa9","#f7ccd4","#fff0db"],core:"#ffe0db",roughness:.42,pitch:1.16,shape:"ball"},{id:"choco",name:"두바이 초코",english:"DUBAI CHOCOLATE",note:"초코 코팅 속 피스타치오 컬러",tag:"RICH CRACK",colors:["#653d30","#9b6a49","#c79762"],core:"#b5c87e",roughness:.32,pitch:.62,shape:"ball"},{id:"ice",name:"프로스트 블루",english:"FROST BLUE",note:"서리 같은 표면, 잘게 부서지는 소리",tag:"EXTRA CRISP",colors:["#a8dce3","#edf6ed","#a7bcd9"],core:"#c5e7df",roughness:.65,pitch:1.4,shape:"ball"},{id:"apple",name:"청사과 왁뿌",english:"GREEN APPLE",note:"연두빛 볼 속 사과 파츠, 아삭한 껍질",tag:"APPLE CRUNCH",colors:["#bbd96b","#d9eb8f","#a8cc56"],core:"#d6ed9a",roughness:.24,pitch:.92,shape:"ball"},{id:"heart",name:"로즈 하트",english:"ROSE HEART",note:"통통한 하트, 꾹 눌러 바삭하게",tag:"HEART POP",colors:["#df819e","#f4bdc9","#f4d9d9"],core:"#ffd5db",roughness:.38,pitch:1.08,shape:"heart"},{id:"star",name:"허니 스타",english:"HONEY STAR",note:"둥근 별 끝부터 조각조각 와작",tag:"STAR CRACK",colors:["#ebc45e","#f6db91","#fff0ba"],core:"#ffe5a4",roughness:.46,pitch:.86,shape:"star"},{id:"flower",name:"라일락 꽃",english:"LILAC BLOOM",note:"다섯 꽃잎을 하나씩 눌러 바스락",tag:"PETAL CRISP",colors:["#b7a1d9","#d8c8ea","#c1b0e1"],core:"#e5d8f3",roughness:.5,pitch:1.24,shape:"flower"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="186",Pv=0,dm=1,Lv=2,Fl=1,Rg=2,Ya=3,ss=0,Vn=1,ci=2,tr=0,ja=1,hm=2,pm=3,mm=4,Nv=5,Ys=100,Dv=101,Iv=102,Uv=103,Fv=104,Ov=200,kv=201,Bv=202,zv=203,Cg=204,bg=205,Hv=206,Vv=207,Gv=208,Wv=209,Xv=210,qv=211,Yv=212,$v=213,Kv=214,vf=0,xf=1,Sf=2,Za=3,yf=4,Mf=5,Ef=6,wf=7,Pg=0,jv=1,Zv=2,Ui=0,Lg=1,Ng=2,Dg=3,hd=4,Ig=5,Ug=6,Fg=7,Og=300,as=301,Zs=302,Fu=303,Ou=304,Kl=306,Ja=1e3,er=1001,Tf=1002,Sn=1003,Jv=1004,fl=1005,bn=1006,ku=1007,is=1008,Zn=1009,kg=1010,Bg=1011,Qa=1012,pd=1013,Fi=1014,Di=1015,Oi=1016,md=1017,gd=1018,eo=1020,zg=35902,Hg=35899,Vg=1021,Gg=1022,wi=1023,rr=1026,rs=1027,Wg=1028,_d=1029,os=1030,vd=1031,xd=1033,Ol=33776,kl=33777,Bl=33778,zl=33779,Af=35840,Rf=35841,Cf=35842,bf=35843,Pf=36196,Lf=37492,Nf=37496,Df=37488,If=37489,Gl=37490,Uf=37491,Ff=37808,Of=37809,kf=37810,Bf=37811,zf=37812,Hf=37813,Vf=37814,Gf=37815,Wf=37816,Xf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,jf=36492,Zf=36494,Jf=36495,Qf=36283,ed=36284,Wl=36285,td=36286,Qv=3200,nd=0,ex=1,br="",jn="srgb",Xl="srgb-linear",ql="linear",Ut="srgb",Bu=7680,tx=519,nx=512,ix=513,rx=514,Sd=515,sx=516,ax=517,yd=518,ox=519,lx=35044,gm="300 es",Ii=2e3,to=2001;function cx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ux(){const s=Yl("canvas");return s.style.display="block",s}const _m={};function vm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function At(...s){s=Xg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ks(...s){const e=s.join(" ");e in _m||(_m[e]=!0,at(...s))}function fx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const dx={[vf]:xf,[Sf]:Ef,[yf]:wf,[Za]:Mf,[xf]:vf,[Ef]:Sf,[wf]:yf,[Mf]:Za};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=Math.PI/180,id=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function hx(s,e){return(s%e+e)%e}function Hu(s,e,t){return(1-t)*s+t*e}function za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Dd=class Dd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dd.prototype.isVector2=!0;let gt=Dd;class cs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],m=l[u+0],y=l[u+1],E=l[u+2],R=l[u+3];if(v!==R||h!==m||p!==y||_!==E){let S=h*m+p*y+_*E+v*R;S<0&&(m=-m,y=-y,E=-E,R=-R,S=-S);let x=1-f;if(S<.9995){const b=Math.acos(S),F=Math.sin(b);x=Math.sin(x*b)/F,f=Math.sin(f*b)/F,h=h*x+m*f,p=p*x+y*f,_=_*x+E*f,v=v*x+R*f}else{h=h*x+m*f,p=p*x+y*f,_=_*x+E*f,v=v*x+R*f;const b=1/Math.sqrt(h*h+p*p+_*_+v*v);h*=b,p*=b,_*=b,v*=b}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],_=r[o+3],v=l[u],m=l[u+1],y=l[u+2],E=l[u+3];return e[t]=f*E+_*v+h*y-p*m,e[t+1]=h*E+_*m+p*v-f*y,e[t+2]=p*E+_*y+f*m-h*v,e[t+3]=_*E-f*v-h*m-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(o/2),v=f(l/2),m=h(r/2),y=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=m*_*v+p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v-m*y*E;break;case"YXZ":this._x=m*_*v+p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v+m*y*E;break;case"ZXY":this._x=m*_*v-p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v-m*y*E;break;case"ZYX":this._x=m*_*v-p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v+m*y*E;break;case"YZX":this._x=m*_*v+p*y*E,this._y=p*y*v+m*_*E,this._z=p*_*E-m*y*v,this._w=p*_*v-m*y*E;break;case"XZY":this._x=m*_*v-p*y*E,this._y=p*y*v-m*_*E,this._z=p*_*E+m*y*v,this._w=p*_*v+m*y*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],v=t[10],m=r+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(_-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+o*p-l*h,this._y=o*_+u*h+l*f-r*p,this._z=l*_+u*p+r*h-o*f,this._w=u*_-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Id=class Id{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),_=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+h*p+u*v-f*_,this.y=r+h*_+f*p-l*v,this.z=o+h*v+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Id.prototype.isVector3=!0;let q=Id;const Vu=new q,xm=new cs,Ud=class Ud{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],_=r[4],v=r[7],m=r[2],y=r[5],E=r[8],R=o[0],S=o[3],x=o[6],b=o[1],F=o[4],A=o[7],P=o[2],N=o[5],D=o[8];return l[0]=u*R+f*b+h*P,l[3]=u*S+f*F+h*N,l[6]=u*x+f*A+h*D,l[1]=p*R+_*b+v*P,l[4]=p*S+_*F+v*N,l[7]=p*x+_*A+v*D,l[2]=m*R+y*b+E*P,l[5]=m*S+y*F+E*N,l[8]=m*x+y*A+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=_*u-f*p,m=f*h-_*l,y=p*l-u*h,E=t*v+r*m+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(o*p-_*r)*R,e[2]=(f*r-o*u)*R,e[3]=m*R,e[4]=(_*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(r*h-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ud.prototype.isMatrix3=!0;let ct=Ud;const Gu=new ct,Sm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function px(){const s={enabled:!0,workingColorSpace:Xl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xl]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const Et=px();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class mx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Is===void 0&&(Is=Yl("canvas")),Is.width=e.width,Is.height=e.height;const o=Is.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Is}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class Md{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Wu(o[u].image)):l.push(Wu(o[u]))}else l=Wu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let _x=0;const Xu=new q;class Pn extends ls{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,r=er,o=er,l=bn,u=is,f=wi,h=Zn,p=Pn.DEFAULT_ANISOTROPY,_=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=io(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ja:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ja:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Og;Pn.DEFAULT_ANISOTROPY=1;const Fd=class Fd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],v=h[8],m=h[1],y=h[5],E=h[9],R=h[2],S=h[6],x=h[10];if(Math.abs(_-m)<.01&&Math.abs(v-R)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+m)<.1&&Math.abs(v+R)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,A=(y+1)/2,P=(x+1)/2,N=(_+m)/4,D=(v+R)/4,M=(E+S)/4;return F>A&&F>P?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=N/r,l=D/r):A>P?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=N/o,l=M/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=D/l,o=M/l),this.set(r,o,l,t),this}let b=Math.sqrt((S-E)*(S-E)+(v-R)*(v-R)+(m-_)*(m-_));return Math.abs(b)<.001&&(b=1),this.x=(S-E)/b,this.y=(v-R)/b,this.z=(m-_)/b,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fd.prototype.isVector4=!0;let Kt=Fd;class vx extends ls{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Pn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Md(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends vx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class qg extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends Pn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,t,r,o,l,u,f,h,p,_,v,m,y,E,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,_,v,m,y,E,R,S)}set(e,t,r,o,l,u,f,h,p,_,v,m,y,E,R,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=_,x[10]=v,x[14]=m,x[3]=y,x[7]=E,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),u=1/Us.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const m=u*_,y=u*v,E=f*_,R=f*v;t[0]=h*_,t[4]=-h*v,t[8]=p,t[1]=y+E*p,t[5]=m-R*p,t[9]=-f*h,t[2]=R-m*p,t[6]=E+y*p,t[10]=u*h}else if(e.order==="YXZ"){const m=h*_,y=h*v,E=p*_,R=p*v;t[0]=m+R*f,t[4]=E*f-y,t[8]=u*p,t[1]=u*v,t[5]=u*_,t[9]=-f,t[2]=y*f-E,t[6]=R+m*f,t[10]=u*h}else if(e.order==="ZXY"){const m=h*_,y=h*v,E=p*_,R=p*v;t[0]=m-R*f,t[4]=-u*v,t[8]=E+y*f,t[1]=y+E*f,t[5]=u*_,t[9]=R-m*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const m=u*_,y=u*v,E=f*_,R=f*v;t[0]=h*_,t[4]=E*p-y,t[8]=m*p+R,t[1]=h*v,t[5]=R*p+m,t[9]=y*p-E,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const m=u*h,y=u*p,E=f*h,R=f*p;t[0]=h*_,t[4]=R-m*v,t[8]=E*v+y,t[1]=v,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*v+E,t[10]=m-R*v}else if(e.order==="XZY"){const m=u*h,y=u*p,E=f*h,R=f*p;t[0]=h*_,t[4]=-v,t[8]=p*_,t[1]=m*v+R,t[5]=u*_,t[9]=y*v-E,t[2]=E*v-y,t[6]=f*_,t[10]=R*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,yx)}lookAt(e,t,r){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Er.crossVectors(r,$n),Er.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Er.crossVectors(r,$n)),Er.normalize(),dl.crossVectors($n,Er),o[0]=Er.x,o[4]=dl.x,o[8]=$n.x,o[1]=Er.y,o[5]=dl.y,o[9]=$n.y,o[2]=Er.z,o[6]=dl.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],_=r[1],v=r[5],m=r[9],y=r[13],E=r[2],R=r[6],S=r[10],x=r[14],b=r[3],F=r[7],A=r[11],P=r[15],N=o[0],D=o[4],M=o[8],L=o[12],O=o[1],z=o[5],H=o[9],j=o[13],G=o[2],Z=o[6],fe=o[10],te=o[14],J=o[3],B=o[7],Y=o[11],I=o[15];return l[0]=u*N+f*O+h*G+p*J,l[4]=u*D+f*z+h*Z+p*B,l[8]=u*M+f*H+h*fe+p*Y,l[12]=u*L+f*j+h*te+p*I,l[1]=_*N+v*O+m*G+y*J,l[5]=_*D+v*z+m*Z+y*B,l[9]=_*M+v*H+m*fe+y*Y,l[13]=_*L+v*j+m*te+y*I,l[2]=E*N+R*O+S*G+x*J,l[6]=E*D+R*z+S*Z+x*B,l[10]=E*M+R*H+S*fe+x*Y,l[14]=E*L+R*j+S*te+x*I,l[3]=b*N+F*O+A*G+P*J,l[7]=b*D+F*z+A*Z+P*B,l[11]=b*M+F*H+A*fe+P*Y,l[15]=b*L+F*j+A*te+P*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],v=e[6],m=e[10],y=e[14],E=e[3],R=e[7],S=e[11],x=e[15],b=h*y-p*m,F=f*y-p*v,A=f*m-h*v,P=u*y-p*_,N=u*m-h*_,D=u*v-f*_;return t*(R*b-S*F+x*A)-r*(E*b-S*P+x*N)+o*(E*F-R*P+x*D)-l*(E*A-R*N+S*D)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],_=e[10];return t*(u*_-f*p)-r*(l*_-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],v=e[9],m=e[10],y=e[11],E=e[12],R=e[13],S=e[14],x=e[15],b=t*f-r*u,F=t*h-o*u,A=t*p-l*u,P=r*h-o*f,N=r*p-l*f,D=o*p-l*h,M=_*R-v*E,L=_*S-m*E,O=_*x-y*E,z=v*S-m*R,H=v*x-y*R,j=m*x-y*S,G=b*j-F*H+A*z+P*O-N*L+D*M;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/G;return e[0]=(f*j-h*H+p*z)*Z,e[1]=(o*H-r*j-l*z)*Z,e[2]=(R*D-S*N+x*P)*Z,e[3]=(m*N-v*D-y*P)*Z,e[4]=(h*O-u*j-p*L)*Z,e[5]=(t*j-o*O+l*L)*Z,e[6]=(S*A-E*D-x*F)*Z,e[7]=(_*D-m*A+y*F)*Z,e[8]=(u*H-f*O+p*M)*Z,e[9]=(r*O-t*H-l*M)*Z,e[10]=(E*N-R*A+x*b)*Z,e[11]=(v*A-_*N-y*b)*Z,e[12]=(f*L-u*z-h*M)*Z,e[13]=(t*z-r*L+o*M)*Z,e[14]=(R*F-E*P-S*b)*Z,e[15]=(_*P-v*F+m*b)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+r,_*h-o*u,0,p*h-o*f,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,v=f+f,m=l*p,y=l*_,E=l*v,R=u*_,S=u*v,x=f*v,b=h*p,F=h*_,A=h*v,P=r.x,N=r.y,D=r.z;return o[0]=(1-(R+x))*P,o[1]=(y+A)*P,o[2]=(E-F)*P,o[3]=0,o[4]=(y-A)*N,o[5]=(1-(m+x))*N,o[6]=(S+b)*N,o[7]=0,o[8]=(E+F)*D,o[9]=(S-b)*D,o[10]=(1-(m+R))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Us.set(o[0],o[1],o[2]).length();const f=Us.set(o[4],o[5],o[6]).length(),h=Us.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const p=1/u,_=1/f,v=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=_,yi.elements[5]*=_,yi.elements[6]*=_,yi.elements[8]*=v,yi.elements[9]*=v,yi.elements[10]*=v,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Ii,h=!1){const p=this.elements,_=2*l/(t-e),v=2*l/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let E,R;if(h)E=l/(u-l),R=u*l/(u-l);else if(f===Ii)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===to)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Ii,h=!1){const p=this.elements,_=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,R;if(h)E=1/(u-l),R=u/(u-l);else if(f===Ii)E=-2/(u-l),R=-(u+l)/(u-l);else if(f===to)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=m,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};$l.prototype.isMatrix4=!0;let jt=$l;const Us=new q,yi=new jt,Sx=new q(0,0,0),yx=new q(1,1,1),Er=new q,dl=new q,$n=new q,Mm=new jt,Em=new cs;class Lr{constructor(e=0,t=0,r=0,o=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],_=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class Ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const wm=new q,Fs=new cs,$i=new jt,hl=new q,Ha=new q,Ex=new q,wx=new cs,Tm=new q(1,0,0),Am=new q(0,1,0),Rm=new q(0,0,1),Cm={type:"added"},Tx={type:"removed"},Os={type:"childadded",child:null},qu={type:"childremoved",child:null};class yn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new q,t=new Lr,r=new cs,o=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?hl.copy(e):hl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ha,hl,this.up):$i.lookAt(hl,Ha,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix($i),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),Os.child=e,this.dispatchEvent(Os),Os.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),m=u(e.skeletons),y=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $a extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ax={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,r),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],m=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&m>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&m<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $a;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function $u(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=hx(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=$u(u,l,e+1/3),this.g=$u(u,l,e),this.b=$u(u,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=jn){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=Yg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Et.workingToColorSpace(Cn.copy(this),e),Math.round(xt(Cn.r*255,0,255))*65536+Math.round(xt(Cn.g*255,0,255))*256+Math.round(xt(Cn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const v=u-f;switch(p=_<=.5?v/(u+f):v/(2-u-f),u){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=jn){Et.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(pl);const r=Hu(wr.h,pl.h,t),o=Hu(wr.s,pl.s,t),l=Hu(wr.l,pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ot;ot.NAMES=Yg;class bm extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new q,Ki=new q,Ku=new q,ji=new q,ks=new q,Bs=new q,Pm=new q,ju=new q,Zu=new q,Ju=new q,Qu=new Kt,ef=new Kt,tf=new Kt;class ui{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),Ki.subVectors(r,t),Ku.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(Ki),h=Mi.dot(Ku),p=Ki.dot(Ki),_=Ki.dot(Ku),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const m=1/v,y=(p*h-f*_)*m,E=(u*_-f*h)*m;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ji.x),h.addScaledVector(u,ji.y),h.addScaledVector(f,ji.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Qu.setScalar(0),ef.setScalar(0),tf.setScalar(0),Qu.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qu,l.x),u.addScaledVector(ef,l.y),u.addScaledVector(tf,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),Ki.subVectors(e,t),Mi.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ks.subVectors(o,r),Bs.subVectors(l,r),ju.subVectors(e,r);const h=ks.dot(ju),p=Bs.dot(ju);if(h<=0&&p<=0)return t.copy(r);Zu.subVectors(e,o);const _=ks.dot(Zu),v=Bs.dot(Zu);if(_>=0&&v<=_)return t.copy(o);const m=h*v-_*p;if(m<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(r).addScaledVector(ks,u);Ju.subVectors(e,l);const y=ks.dot(Ju),E=Bs.dot(Ju);if(E>=0&&y<=E)return t.copy(l);const R=y*p-h*E;if(R<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(Bs,f);const S=_*E-y*v;if(S<=0&&v-_>=0&&y-E>=0)return Pm.subVectors(l,o),f=(v-_)/(v-_+(y-E)),t.copy(o).addScaledVector(Pm,f);const x=1/(S+R+m);return u=R*x,f=m*x,t.copy(r).addScaledVector(ks,u).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ro{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),gl.subVectors(this.max,Va),zs.subVectors(e.a,Va),Hs.subVectors(e.b,Va),Vs.subVectors(e.c,Va),Tr.subVectors(Hs,zs),Ar.subVectors(Vs,Hs),jr.subVectors(zs,Vs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-jr.z,jr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,jr.z,0,-jr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-jr.y,jr.x,0];return!nf(t,zs,Hs,Vs,gl)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,zs,Hs,Vs,gl))?!1:(_l.crossVectors(Tr,Ar),t=[_l.x,_l.y,_l.z],nf(t,zs,Hs,Vs,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new q,new q,new q,new q,new q,new q,new q,new q],Ei=new q,ml=new ro,zs=new q,Hs=new q,Vs=new q,Tr=new q,Ar=new q,jr=new q,Va=new q,gl=new q,_l=new q,Zr=new q;function nf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),h=e.dot(Zr),p=t.dot(Zr),_=r.dot(Zr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const sn=new q,vl=new gt;let Rx=0;class ir extends ls{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=lx,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=za(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),o=Hn(o,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $g extends ir{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kg extends ir{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ht extends ir{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Cx=new ro,Ga=new q,rf=new q;class wd{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Cx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const t=Ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(rf)),this.expandByPoint(Ga.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bx=0;const oi=new jt,sf=new yn,Gs=new q,Kn=new ro,Wa=new ro,mn=new q;class Gn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?Kg:$g)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ht(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Wa.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Kn.min,Wa.min),Kn.expandByPoint(mn),mn.addVectors(Kn.max,Wa.max),Kn.expandByPoint(mn)):(Kn.expandByPoint(Wa.min),Kn.expandByPoint(Wa.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)mn.fromBufferAttribute(f,p),h&&(Gs.fromBufferAttribute(e,p),mn.add(Gs)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ir(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let M=0;M<r.count;M++)f[M]=new q,h[M]=new q;const p=new q,_=new q,v=new q,m=new gt,y=new gt,E=new gt,R=new q,S=new q;function x(M,L,O){p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,L),v.fromBufferAttribute(r,O),m.fromBufferAttribute(l,M),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,O),_.sub(p),v.sub(p),y.sub(m),E.sub(m);const z=1/(y.x*E.y-E.x*y.y);isFinite(z)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(z),S.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(z),f[M].add(R),f[L].add(R),f[O].add(R),h[M].add(S),h[L].add(S),h[O].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let M=0,L=b.length;M<L;++M){const O=b[M],z=O.start,H=O.count;for(let j=z,G=z+H;j<G;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const F=new q,A=new q,P=new q,N=new q;function D(M){P.fromBufferAttribute(o,M),N.copy(P);const L=f[M];F.copy(L),F.sub(P.multiplyScalar(P.dot(L))).normalize(),A.crossVectors(N,L);const z=A.dot(h[M])<0?-1:1;u.setXYZW(M,F.x,F.y,F.z,z)}for(let M=0,L=b.length;M<L;++M){const O=b[M],z=O.start,H=O.count;for(let j=z,G=z+H;j<G;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ir(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new q,l=new q,u=new q,f=new q,h=new q,p=new q,_=new q,v=new q;if(e)for(let m=0,y=e.count;m<y;m+=3){const E=e.getX(m+0),R=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),f.add(_),h.add(_),p.add(_),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),r.setXYZ(m+0,_.x,_.y,_.z),r.setXYZ(m+1,_.x,_.y,_.z),r.setXYZ(m+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,v=f.normalized,m=new p.constructor(h.length*_);let y=0,E=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*_;for(let x=0;x<_;x++)m[E++]=p[y++]}return new ir(m,_,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,v=p.length;_<v;_++){const m=p[_],y=e(m,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let v=0,m=p.length;v<m;v++){const y=p[v];_.push(y.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],v=l[p];for(let m=0,y=v.length;m<y;m++)_.push(v[m].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new q,Px=new q,Lx=new ct;class Qi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=af.subVectors(r,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(af),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Lx.getNormalMatrix(e),o=this.coplanarPoint(af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Nx=0;class ta extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=io(),this.name="",this.type="Material",this.blending=ja,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cg,this.blendDst=bg,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bu,this.stencilZFail=Bu,this.stencilZPass=Bu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Qi().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new q,of=new q,xl=new q,Sl=new q;class jg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){of.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),Sl.copy(this.origin).sub(of);const l=e.distanceTo(t)*.5,u=-this.direction.dot(xl),f=Sl.dot(this.direction),h=-Sl.dot(xl),p=Sl.lengthSq(),_=Math.abs(1-u*u);let v,m,y,E;if(_>0)if(v=u*h-f,m=u*f-h,E=l*_,v>=0)if(m>=-E)if(m<=E){const R=1/_;v*=R,m*=R,y=v*(v+u*m+2*f)+m*(u*v+m+2*h)+p}else m=l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*h)+p;else m=-l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*h)+p;else m<=-E?(v=Math.max(0,-(-u*l+f)),m=v>0?-l:Math.min(Math.max(-l,-h),l),y=-v*v+m*(m+2*h)+p):m<=E?(v=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+p):(v=Math.max(0,-(u*l+f)),m=v>0?l:Math.min(Math.max(-l,-h),l),y=-v*v+m*(m+2*h)+p);else m=u>0?-l:l,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(of).addScaledVector(xl,m),y}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),o=Ji.dot(Ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,m=this.origin;return p>=0?(r=(e.min.x-m.x)*p,o=(e.max.x-m.x)*p):(r=(e.max.x-m.x)*p,o=(e.min.x-m.x)*p),_>=0?(l=(e.min.y-m.y)*_,u=(e.max.y-m.y)*_):(l=(e.max.y-m.y)*_,u=(e.min.y-m.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-m.z)*v,h=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,h=(e.min.z-m.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,_=f.z,v=e.x-u.x,m=e.y-u.y,y=e.z-u.z,E=t.x-u.x,R=t.y-u.y,S=t.z-u.z,x=r.x-u.x,b=r.y-u.y,F=r.z-u.z,A=Math.abs(h),P=Math.abs(p),N=Math.abs(_);let D,M,L,O,z,H,j,G,Z,fe,te,J;if(A>=P&&A>=N?(L=h,H=v,Z=E,J=x,h>=0?(D=p,M=_,O=m,z=y,j=R,G=S,fe=b,te=F):(D=_,M=p,O=y,z=m,j=S,G=R,fe=F,te=b)):P>=N?(L=p,H=m,Z=R,J=b,p>=0?(D=_,M=h,O=y,z=v,j=S,G=E,fe=F,te=x):(D=h,M=_,O=v,z=y,j=E,G=S,fe=x,te=F)):(L=_,H=y,Z=S,J=F,_>=0?(D=h,M=p,O=v,z=m,j=E,G=R,fe=x,te=b):(D=p,M=h,O=m,z=v,j=R,G=E,fe=b,te=x)),L===0)return null;const B=D/L,Y=M/L,I=1/L,re=O-B*H,Se=z-Y*H,Ge=j-B*Z,He=G-Y*Z,We=fe-B*J,le=te-Y*J,de=We*He-le*Ge,Ee=re*le-Se*We,et=Ge*Se-He*re;if(o){if(de<0||Ee<0||et<0)return null}else if((de<0||Ee<0||et<0)&&(de>0||Ee>0||et>0))return null;const Oe=de+Ee+et;if(Oe===0)return null;const ft=I*(de*H+Ee*Z+et*J);return(Oe>0?ft<0:ft>0)?null:this.at(ft/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Td extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lm=new jt,Jr=new jg,yl=new wd,Nm=new q,Ml=new q,El=new q,wl=new q,lf=new q,Tl=new q,Dm=new q,Al=new q;class xn extends yn{constructor(e=new Gn,t=new Td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Tl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],v=l[h];_!==0&&(lf.fromBufferAttribute(v,e),u?Tl.addScaledVector(lf,_):Tl.addScaledVector(lf.sub(t),_))}t.add(Tl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(yl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(yl,Nm)===null||Jr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Lm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,m=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,R=m.length;E<R;E++){const S=m[E],x=u[S.materialIndex],b=Math.max(S.start,y.start),F=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,P=F;A<P;A+=3){const N=f.getX(A),D=f.getX(A+1),M=f.getX(A+2);o=Rl(this,x,e,r,p,_,v,N,D,M),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let S=E,x=R;S<x;S+=3){const b=f.getX(S),F=f.getX(S+1),A=f.getX(S+2);o=Rl(this,u,e,r,p,_,v,b,F,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,R=m.length;E<R;E++){const S=m[E],x=u[S.materialIndex],b=Math.max(S.start,y.start),F=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,P=F;A<P;A+=3){const N=A,D=A+1,M=A+2;o=Rl(this,x,e,r,p,_,v,N,D,M),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let S=E,x=R;S<x;S+=3){const b=S,F=S+1,A=S+2;o=Rl(this,u,e,r,p,_,v,b,F,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Dx(s,e,t,r,o,l,u,f){let h;if(e.side===Vn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ss,f),h===null)return null;Al.copy(f),Al.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Al);return p<t.near||p>t.far?null:{distance:p,point:Al.clone(),object:s}}function Rl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Ml),s.getVertexPosition(h,El),s.getVertexPosition(p,wl);const _=Dx(s,e,t,r,Ml,El,wl,Dm);if(_){const v=new q;ui.getBarycoord(Dm,Ml,El,wl,v),o&&(_.uv=ui.getInterpolatedAttribute(o,f,h,p,v,new gt)),l&&(_.uv1=ui.getInterpolatedAttribute(l,f,h,p,v,new gt)),u&&(_.normal=ui.getInterpolatedAttribute(u,f,h,p,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const m={a:f,b:h,c:p,normal:new q,materialIndex:0};ui.getNormal(Ml,El,wl,m.normal),_.face=m,_.barycoord=v}return _}class Ix extends Pn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Sn,_=Sn,v,m){super(null,u,f,h,p,_,o,l,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new wd,Ux=new gt(.5,.5),Cl=new q;class Ad{constructor(e=new Qi,t=new Qi,r=new Qi,o=new Qi,l=new Qi,u=new Qi){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],v=l[5],m=l[6],y=l[7],E=l[8],R=l[9],S=l[10],x=l[11],b=l[12],F=l[13],A=l[14],P=l[15];if(o[0].setComponents(p-u,y-_,x-E,P-b).normalize(),o[1].setComponents(p+u,y+_,x+E,P+b).normalize(),o[2].setComponents(p+f,y+v,x+R,P+F).normalize(),o[3].setComponents(p-f,y-v,x-R,P-F).normalize(),r)o[4].setComponents(h,m,S,A).normalize(),o[5].setComponents(p-h,y-m,x-S,P-A).normalize();else if(o[4].setComponents(p-h,y-m,x-S,P-A).normalize(),t===Ii)o[5].setComponents(p+h,y+m,x+S,P+A).normalize();else if(t===to)o[5].setComponents(h,m,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const t=Ux.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Cl.x=o.normal.x>0?e.max.x:e.min.x,Cl.y=o.normal.y>0?e.max.y:e.min.y,Cl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zg extends Pn{constructor(e=[],t=as,r,o,l,u,f,h,p,_){super(e,t,r,o,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jg extends Pn{constructor(e,t,r,o,l,u,f,h,p){super(e,t,r,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class no extends Pn{constructor(e,t,r=Fi,o,l,u,f=Sn,h=Sn,p,_=rr,v=1){if(_!==rr&&_!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,l,u,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fx extends no{constructor(e,t=Fi,r=as,o,l,u=Sn,f=Sn,h,p=rr){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,h,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qg extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class so extends Gn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],v=[];let m=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(v,2));function E(R,S,x,b,F,A,P,N,D,M,L){const O=A/D,z=P/M,H=A/2,j=P/2,G=N/2,Z=D+1,fe=M+1;let te=0,J=0;const B=new q;for(let Y=0;Y<fe;Y++){const I=Y*z-j;for(let re=0;re<Z;re++){const Se=re*O-H;B[R]=Se*b,B[S]=I*F,B[x]=G,p.push(B.x,B.y,B.z),B[R]=0,B[S]=0,B[x]=N>0?1:-1,_.push(B.x,B.y,B.z),v.push(re/D),v.push(1-Y/M),te+=1}}for(let Y=0;Y<M;Y++)for(let I=0;I<D;I++){const re=m+I+Z*Y,Se=m+I+Z*(Y+1),Ge=m+(I+1)+Z*(Y+1),He=m+(I+1)+Z*Y;h.push(re,Se,He),h.push(Se,Ge,He),J+=6}f.addGroup(y,J,L),y+=J,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rd extends Gn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],v=[],m=[],y=[];let E=0;const R=[],S=r/2;let x=0;b(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(y,2));function b(){const A=new q,P=new q;let N=0;const D=(t-e)/r;for(let M=0;M<=l;M++){const L=[],O=M/l,z=O*(t-e)+e;for(let H=0;H<=o;H++){const j=H/o,G=j*h+f,Z=Math.sin(G),fe=Math.cos(G);P.x=z*Z,P.y=-O*r+S,P.z=z*fe,v.push(P.x,P.y,P.z),A.set(Z,D,fe).normalize(),m.push(A.x,A.y,A.z),y.push(j,1-O),L.push(E++)}R.push(L)}for(let M=0;M<o;M++)for(let L=0;L<l;L++){const O=R[L][M],z=R[L+1][M],H=R[L+1][M+1],j=R[L][M+1];(e>0||L!==0)&&(_.push(O,z,j),N+=3),(t>0||L!==l-1)&&(_.push(z,H,j),N+=3)}p.addGroup(x,N,0),x+=N}function F(A){const P=E,N=new gt,D=new q;let M=0;const L=A===!0?e:t,O=A===!0?1:-1;for(let H=1;H<=o;H++)v.push(0,S*O,0),m.push(0,O,0),y.push(.5,.5),E++;const z=E;for(let H=0;H<=o;H++){const G=H/o*h+f,Z=Math.cos(G),fe=Math.sin(G);D.x=L*fe,D.y=S*O,D.z=L*Z,v.push(D.x,D.y,D.z),m.push(0,O,0),N.x=Z*.5+.5,N.y=fe*.5*O+.5,y.push(N.x,N.y),E++}for(let H=0;H<o;H++){const j=P+H,G=z+H;A===!0?_.push(G,G+1,j):_.push(G+1,G,j),M+=3}p.addGroup(x,M,A===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cd extends Gn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),p(r),_(),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(l.slice(),3)),this.setAttribute("uv",new Ht(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const F=new q,A=new q,P=new q;for(let N=0;N<t.length;N+=3)y(t[N+0],F),y(t[N+1],A),y(t[N+2],P),h(F,A,P,b)}function h(b,F,A,P){const N=P+1,D=[];for(let M=0;M<=N;M++){D[M]=[];const L=b.clone().lerp(A,M/N),O=F.clone().lerp(A,M/N),z=N-M;for(let H=0;H<=z;H++)H===0&&M===N?D[M][H]=L:D[M][H]=L.clone().lerp(O,H/z)}for(let M=0;M<N;M++)for(let L=0;L<2*(N-M)-1;L++){const O=Math.floor(L/2);L%2===0?(m(D[M][O+1]),m(D[M+1][O]),m(D[M][O])):(m(D[M][O+1]),m(D[M+1][O+1]),m(D[M+1][O]))}}function p(b){const F=new q;for(let A=0;A<l.length;A+=3)F.x=l[A+0],F.y=l[A+1],F.z=l[A+2],F.normalize().multiplyScalar(b),l[A+0]=F.x,l[A+1]=F.y,l[A+2]=F.z}function _(){const b=new q;for(let F=0;F<l.length;F+=3){b.x=l[F+0],b.y=l[F+1],b.z=l[F+2];const A=S(b)/2/Math.PI+.5,P=x(b)/Math.PI+.5;u.push(A,1-P)}E(),v()}function v(){for(let b=0;b<u.length;b+=6){const F=u[b+0],A=u[b+2],P=u[b+4],N=Math.max(F,A,P),D=Math.min(F,A,P);N>.9&&D<.1&&(F<.2&&(u[b+0]+=1),A<.2&&(u[b+2]+=1),P<.2&&(u[b+4]+=1))}}function m(b){l.push(b.x,b.y,b.z)}function y(b,F){const A=b*3;F.x=e[A+0],F.y=e[A+1],F.z=e[A+2]}function E(){const b=new q,F=new q,A=new q,P=new q,N=new gt,D=new gt,M=new gt;for(let L=0,O=0;L<l.length;L+=9,O+=6){b.set(l[L+0],l[L+1],l[L+2]),F.set(l[L+3],l[L+4],l[L+5]),A.set(l[L+6],l[L+7],l[L+8]),N.set(u[O+0],u[O+1]),D.set(u[O+2],u[O+3]),M.set(u[O+4],u[O+5]),P.copy(b).add(F).add(A).divideScalar(3);const z=S(P);R(N,O+0,b,z),R(D,O+2,F,z),R(M,O+4,A,z)}}function R(b,F,A,P){P<0&&b.x===1&&(u[F]=b.x-1),A.x===0&&A.z===0&&(u[F]=P/2/Math.PI+.5)}function S(b){return Math.atan2(b.z,-b.x)}function x(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cd(e.vertices,e.indices,e.radius,e.detail)}}class bd extends Cd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bd(e.radius,e.detail)}}class Js extends Gn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,_=h+1,v=e/f,m=t/h,y=[],E=[],R=[],S=[];for(let x=0;x<_;x++){const b=x*m-u;for(let F=0;F<p;F++){const A=F*v-l;E.push(A,-b,0),R.push(0,0,1),S.push(F/f),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let b=0;b<f;b++){const F=b+p*x,A=b+p*(x+1),P=b+1+p*(x+1),N=b+1+p*x;y.push(F,A,N),y.push(A,P,N)}this.setIndex(y),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(R,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pd extends Gn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const _=[],v=new q,m=new q,y=[],E=[],R=[],S=[];for(let x=0;x<=r;x++){const b=[],F=x/r,A=u+F*f,P=e*Math.cos(A),N=Math.sqrt(e*e-P*P);let D=0;x===0&&u===0?D=.5/t:x===r&&h===Math.PI&&(D=-.5/t);for(let M=0;M<=t;M++){const L=M/t,O=o+L*l;v.x=-N*Math.cos(O),v.y=P,v.z=N*Math.sin(O),E.push(v.x,v.y,v.z),m.copy(v).normalize(),R.push(m.x,m.y,m.z),S.push(L+D,1-F),b.push(p++)}_.push(b)}for(let x=0;x<r;x++)for(let b=0;b<t;b++){const F=_[x][b+1],A=_[x][b],P=_[x+1][b],N=_[x+1][b+1];(x!==0||u>0)&&y.push(F,A,N),(x!==r-1||h<Math.PI)&&y.push(A,P,N)}this.setIndex(y),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(R,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ld extends Gn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],_=[],v=[],m=new q,y=new q,E=new q;for(let R=0;R<=r;R++){const S=u+R/r*f;for(let x=0;x<=o;x++){const b=x/o*l;y.x=(e+t*Math.cos(S))*Math.cos(b),y.y=(e+t*Math.cos(S))*Math.sin(b),y.z=t*Math.sin(S),p.push(y.x,y.y,y.z),m.x=e*Math.cos(b),m.y=e*Math.sin(b),E.subVectors(y,m).normalize(),_.push(E.x,E.y,E.z),v.push(x/o),v.push(R/r)}}for(let R=1;R<=r;R++)for(let S=1;S<=o;S++){const x=(o+1)*R+S-1,b=(o+1)*(R-1)+S-1,F=(o+1)*(R-1)+S,A=(o+1)*R+S;h.push(x,b,A),h.push(b,F,A)}this.setIndex(h),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ox extends ta{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Qs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Im(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Im(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const r=Qs(s[t]);for(const o in r)e[o]=r[o]}return e}function Im(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function e0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Bx={clone:Qs,merge:In};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new ot().setHex(o.value);break;case"v2":this.uniforms[r].value=new gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new q().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vx extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class t0 extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bl extends t0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gx extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wx extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class n0 extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xx extends n0{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const cf=new jt,Um=new q,Fm=new q;class qx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){cf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(cf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===to||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(cf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pl=new q,Ll=new cs,Pi=new q;class i0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Ll,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Pl,Ll,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Ll,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new q,Om=new gt,km=new gt;class li extends i0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Om,km),t.subVectors(km,Om)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nd extends i0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yx extends qx{constructor(){super(new Nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends n0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Yx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ws=-90,Xs=1;class $x extends yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new li(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new li(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const f=new li(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const h=new li(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const p=new li(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===to)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,m,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Kx extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zm=new jt;class jx{constructor(e,t,r=0,o=1/0){this.ray=new jg(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Ed,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):At("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(e,t=!0,r=[]){return rd(e,this,r,t),r.sort(Hm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)rd(e[o],this,r,t);return r.sort(Hm),r}}function Hm(s,e){return s.distance-e.distance}function rd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)rd(l[u],e,t,!0)}}const Od=class Od{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Od.prototype.isMatrix2=!0;let Vm=Od;function Gm(s,e,t,r){const o=Zx(r);switch(t){case Vg:return s*e;case Wg:return s*e/o.components*o.byteLength;case _d:return s*e/o.components*o.byteLength;case os:return s*e*2/o.components*o.byteLength;case vd:return s*e*2/o.components*o.byteLength;case Gg:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case xd:return s*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case Lf:case Df:case If:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nf:case Gl:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $f:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jf:case Zf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wl:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zx(s){switch(s){case Zn:case kg:return{byteLength:1,components:1};case Qa:case Bg:case Oi:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case Fi:case pd:case Di:return{byteLength:4,components:1};case zg:case Hg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Jx(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,v=p.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const _=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let m=0;for(let y=1;y<v.length;y++){const E=v[m],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++m,v[m]=R)}v.length=m+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Qx,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:nS,alphatest_fragment:iS,alphatest_pars_fragment:rS,aomap_fragment:sS,aomap_pars_fragment:aS,batching_pars_vertex:oS,batching_vertex:lS,begin_vertex:cS,beginnormal_vertex:uS,bsdfs:fS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:_S,color_fragment:vS,color_pars_fragment:xS,color_pars_vertex:SS,color_vertex:yS,common:MS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:wS,displacementmap_pars_vertex:TS,displacementmap_vertex:AS,emissivemap_fragment:RS,emissivemap_pars_fragment:CS,colorspace_fragment:bS,colorspace_pars_fragment:PS,envmap_fragment:LS,envmap_common_pars_fragment:NS,envmap_pars_fragment:DS,envmap_pars_vertex:IS,envmap_physical_pars_fragment:XS,envmap_vertex:US,fog_vertex:FS,fog_pars_vertex:OS,fog_fragment:kS,fog_pars_fragment:BS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:HS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:WS,lights_toon_fragment:qS,lights_toon_pars_fragment:YS,lights_phong_fragment:$S,lights_phong_pars_fragment:KS,lights_physical_fragment:jS,lights_physical_pars_fragment:ZS,lights_fragment_begin:JS,lights_fragment_maps:QS,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphinstance_vertex:dy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:Sy,normal_vertex:yy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Ry,packing:Cy,premultiplied_alpha_fragment:by,project_vertex:Py,dithering_fragment:Ly,dithering_pars_fragment:Ny,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:ky,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:qy,transmission_fragment:Yy,transmission_pars_fragment:$y,uv_pars_fragment:Ky,uv_pars_vertex:jy,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:rM,depth_vert:sM,depth_frag:aM,distance_vert:oM,distance_frag:lM,equirect_vert:cM,equirect_frag:uM,linedashed_vert:fM,linedashed_frag:dM,meshbasic_vert:hM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:_M,meshmatcap_frag:vM,meshnormal_vert:xM,meshnormal_frag:SM,meshphong_vert:yM,meshphong_frag:MM,meshphysical_vert:EM,meshphysical_frag:wM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:RM,points_frag:CM,shadow_vert:bM,shadow_frag:PM,sprite_vert:LM,sprite_frag:NM},Ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:In([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:In([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:In([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:In([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:In([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:In([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:In([Ue.common,Ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:In([Ue.lights,Ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Nl={r:0,b:0,g:0},DM=new jt,s0=new ct;s0.set(-1,0,0,0,1,0,0,0,1);function IM(s,e,t,r,o,l){const u=new ot(0);let f=o===!0?0:1,h,p,_=null,v=0,m=null;function y(b){let F=b.isScene===!0?b.background:null;if(F&&F.isTexture){const A=b.backgroundBlurriness>0;F=e.get(F,A)}return F}function E(b){let F=!1;const A=y(b);A===null?S(u,f):A&&A.isColor&&(S(A,1),F=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,F){const A=y(F);A&&(A.isCubeTexture||A.mapping===Kl)?(p===void 0&&(p=new xn(new so(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Qs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(F.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(s0),p.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ut,(_!==A||v!==A.version||m!==s.toneMapping)&&(p.material.needsUpdate=!0,_=A,v=A.version,m=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new xn(new Js(2,2),new ki({name:"BackgroundMaterial",uniforms:Qs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||v!==A.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,_=A,v=A.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function S(b,F){b.getRGB(Nl,e0(s)),t.buffers.color.setClear(Nl.r,Nl.g,Nl.b,F,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,F=1){u.set(b),f=F,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,S(u,f)},render:E,addToRenderList:R,dispose:x}}function UM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,u=!1;function f(z,H,j,G,Z){let fe=!1;const te=v(z,G,j,H);l!==te&&(l=te,p(l.object)),fe=y(z,G,j,Z),fe&&E(z,G,j,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(z,H,j,G),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function _(z){return s.deleteVertexArray(z)}function v(z,H,j,G){const Z=G.wireframe===!0;let fe=r[H.id];fe===void 0&&(fe={},r[H.id]=fe);const te=z.isInstancedMesh===!0?z.id:0;let J=fe[te];J===void 0&&(J={},fe[te]=J);let B=J[j.id];B===void 0&&(B={},J[j.id]=B);let Y=B[Z];return Y===void 0&&(Y=m(h()),B[Z]=Y),Y}function m(z){const H=[],j=[],G=[];for(let Z=0;Z<t;Z++)H[Z]=0,j[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:G,object:z,attributes:{},index:null}}function y(z,H,j,G){const Z=l.attributes,fe=H.attributes;let te=0;const J=j.getAttributes();for(const B in J)if(J[B].location>=0){const I=Z[B];let re=fe[B];if(re===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),I===void 0||I.attribute!==re||re&&I.data!==re.data)return!0;te++}return l.attributesNum!==te||l.index!==G}function E(z,H,j,G){const Z={},fe=H.attributes;let te=0;const J=j.getAttributes();for(const B in J)if(J[B].location>=0){let I=fe[B];I===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(I=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(I=z.instanceColor));const re={};re.attribute=I,I&&I.data&&(re.data=I.data),Z[B]=re,te++}l.attributes=Z,l.attributesNum=te,l.index=G}function R(){const z=l.newAttributes;for(let H=0,j=z.length;H<j;H++)z[H]=0}function S(z){x(z,0)}function x(z,H){const j=l.newAttributes,G=l.enabledAttributes,Z=l.attributeDivisors;j[z]=1,G[z]===0&&(s.enableVertexAttribArray(z),G[z]=1),Z[z]!==H&&(s.vertexAttribDivisor(z,H),Z[z]=H)}function b(){const z=l.newAttributes,H=l.enabledAttributes;for(let j=0,G=H.length;j<G;j++)H[j]!==z[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function F(z,H,j,G,Z,fe,te){te===!0?s.vertexAttribIPointer(z,H,j,Z,fe):s.vertexAttribPointer(z,H,j,G,Z,fe)}function A(z,H,j,G){R();const Z=G.attributes,fe=j.getAttributes(),te=H.defaultAttributeValues;for(const J in fe){const B=fe[J];if(B.location>=0){let Y=Z[J];if(Y===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){const I=Y.normalized,re=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Ge=Se.buffer,He=Se.type,We=Se.bytesPerElement,le=He===s.INT||He===s.UNSIGNED_INT||Y.gpuType===pd;if(Y.isInterleavedBufferAttribute){const de=Y.data,Ee=de.stride,et=Y.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<B.locationSize;Oe++)x(B.location+Oe,de.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<B.locationSize;Oe++)S(B.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Oe=0;Oe<B.locationSize;Oe++)F(B.location+Oe,re/B.locationSize,He,I,Ee*We,(et+re/B.locationSize*Oe)*We,le)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)x(B.location+de,Y.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<B.locationSize;de++)S(B.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let de=0;de<B.locationSize;de++)F(B.location+de,re/B.locationSize,He,I,re*We,re/B.locationSize*de*We,le)}}else if(te!==void 0){const I=te[J];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(B.location,I);break;case 3:s.vertexAttrib3fv(B.location,I);break;case 4:s.vertexAttrib4fv(B.location,I);break;default:s.vertexAttrib1fv(B.location,I)}}}}b()}function P(){L();for(const z in r){const H=r[z];for(const j in H){const G=H[j];for(const Z in G){const fe=G[Z];for(const te in fe)_(fe[te].object),delete fe[te];delete G[Z]}}delete r[z]}}function N(z){if(r[z.id]===void 0)return;const H=r[z.id];for(const j in H){const G=H[j];for(const Z in G){const fe=G[Z];for(const te in fe)_(fe[te].object),delete fe[te];delete G[Z]}}delete r[z.id]}function D(z){for(const H in r){const j=r[H];for(const G in j){const Z=j[G];if(Z[z.id]===void 0)continue;const fe=Z[z.id];for(const te in fe)_(fe[te].object),delete fe[te];delete Z[z.id]}}}function M(z){for(const H in r){const j=r[H],G=z.isInstancedMesh===!0?z.id:0,Z=j[G];if(Z!==void 0){for(const fe in Z){const te=Z[fe];for(const J in te)_(te[J].object),delete te[J];delete Z[fe]}delete j[G],Object.keys(j).length===0&&delete r[H]}}}function L(){O(),u=!0,l!==o&&(l=o,p(l.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:R,enableAttribute:S,disableUnusedAttributes:b}}function FM(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let m=0;for(let y=0;y<_;y++)m+=p[y];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function OM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==wi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const M=D===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Zn&&D!==Di&&!M&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(at("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:b,maxVaryings:F,maxFragmentUniforms:A,maxSamples:P,samples:N}}function kM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Qi,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,m){t=_(v,m,0)},this.setState=function(v,m,y){const E=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!o||E===null||E.length===0||l&&!S)l?_(null):p();else{const b=l?0:r,F=b*4;let A=x.clippingState||null;h.value=A,A=_(E,m,F,y);for(let P=0;P!==F;++P)A[P]=t[P];x.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,m,y,E){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=h.value,E!==!0||S===null){const x=y+R*4,b=m.matrixWorldInverse;f.getNormalMatrix(b),(S===null||S.length<x)&&(S=new Float32Array(x));for(let F=0,A=y;F!==R;++F,A+=4)u.copy(v[F]).applyMatrix4(b,f),u.normal.toArray(S,A),S[A+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const $s=4,BM=6,zM=20,HM=256,Xa=new Nd,Wm=new ot;let uf=null,ff=0,df=0,hf=!1;const VM=new q,es=new q;class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=VM}=l;uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Oi,format:wi,colorSpace:Xl,depthBuffer:!1},o=Xm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=GM(l)),this._blurMaterial=XM(l,e,t),this._ggxMaterial=WM(l,e,t)}return o}_compileMaterial(e){const t=new xn(new Gn,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,r,o,l){const h=new li(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(Wm),v.toneMapping=Ui,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new so,new Td({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,x=!0):(S.color.copy(Wm),x=!0);for(let F=0;F<6;F++){const A=F%3;A===0?(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[F],l.y,l.z)):A===1?(h.up.set(0,0,p[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[F],l.z)):(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[F]));const P=this._cubeSize;qs(o,A*P,F>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(R,h),v.render(e,h)}v.toneMapping=y,v.autoClear=m,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===as||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;qs(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Xa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),m=p*1.25,y=v*m,{_lodMax:E}=this,R=this._sizeLods[r],S=3*R*(r>E-$s?r-E+$s:0),x=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,qs(l,S,x,3*R,2*R),o.setRenderTarget(l),o.render(f,Xa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,qs(e,S,x,3*R,2*R),o.setRenderTarget(e),o.render(f,Xa)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],v=3*_*(o>this._lodMax-$s?o-this._lodMax+$s:0),m=4*(this._cubeSize-_);qs(t,v,m,3*_,2*_),u.setRenderTarget(t),u.render(h,Xa)}}function GM(s){const e=[],t=[];let r=s;const o=s-$s+1+BM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,p=1+f,_=[h,h,p,h,p,p,h,h,p,p,h,p],v=6,m=6,y=3,E=new Float32Array(y*m*v),R=new Float32Array(y*m*v);for(let x=0;x<v;x++){const b=x%3*2/3-1,F=x>2?0:-1,A=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];E.set(A,y*m*x);for(let P=0;P<m;P++){const N=_[P*2]*2-1,D=_[P*2+1]*2-1;x===0?es.set(1,D,N):x===1?es.set(-N,1,-D):x===2?es.set(-N,D,1):x===3?es.set(-1,D,-N):x===4?es.set(-N,-1,D):es.set(N,D,-1),es.toArray(R,(x*m+P)*y)}}const S=new Gn;S.setAttribute("position",new ir(E,y)),S.setAttribute("outputDirection",new ir(R,y)),t.push(new xn(S,null)),r>$s&&r--}return{lodMeshes:t,sizeLods:e}}function Xm(s,e,t){const r=new Ti(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qs(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function WM(s,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function XM(s,e,t){return new ki({name:"SphericalGaussianBlur",defines:{SAMPLES:zM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function qm(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ym(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class a0 extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Zg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new so(5,5,5),l=new ki({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:tr});l.uniforms.tEquirect.value=t;const u=new xn(o,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=bn),new $x(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function qM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?u(m):l(m)}function l(m){if(m&&m.isTexture){const y=m.mapping;if(y===Fu||y===Ou)if(e.has(m)){const E=e.get(m).texture;return f(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const R=new a0(E.height);return R.fromEquirectangularTexture(s,m),e.set(m,R),m.addEventListener("dispose",p),f(R.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,E=y===Fu||y===Ou,R=y===as||y===Zs;if(E||R){let S=t.get(m);const x=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return r===null&&(r=new sd(s)),S=E?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const b=m.image;return E&&b&&b.height>0||R&&b&&h(b)?(r===null&&(r=new sd(s)),S=E?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",_),S.texture):null}}}return m}function f(m,y){return y===Fu?m.mapping=as:y===Ou&&(m.mapping=Zs),m}function h(m){let y=0;const E=6;for(let R=0;R<E;R++)m[R]!==void 0&&y++;return y===E}function p(m){const y=m.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function _(m){const y=m.target;y.removeEventListener("dispose",_);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function YM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ks("WebGLRenderer: "+r+" extension not supported."),o}}}function $M(s,e,t,r){const o={},l=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",u),delete o[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function h(v){const m=v.attributes;for(const y in m)e.update(m[y],s.ARRAY_BUFFER)}function p(v){const m=[],y=v.index,E=v.attributes.position;let R=0;if(E===void 0)return;if(y!==null){const b=y.array;R=y.version;for(let F=0,A=b.length;F<A;F+=3){const P=b[F+0],N=b[F+1],D=b[F+2];m.push(P,N,N,D,D,P)}}else{const b=E.array;R=E.version;for(let F=0,A=b.length/3-1;F<A;F+=3){const P=F+0,N=F+1,D=F+2;m.push(P,N,N,D,D,P)}}const S=new(E.count>=65535?Kg:$g)(m,1);S.version=R;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function _(v){const m=l.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function KM(s,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,m){s.drawElements(r,m,l,v*u),t.update(m,r,1)}function p(v,m,y){y!==0&&(s.drawElementsInstanced(r,m,l,v*u,y),t.update(m,r,y))}function _(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,v,0,y);let R=0;for(let S=0;S<y;S++)R+=m[S];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function jM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function ZM(s,e,t){const r=new WeakMap,o=new Kt;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(f);if(m===void 0||m.count!==v){let O=function(){M.dispose(),r.delete(f),f.removeEventListener("dispose",O)};var y=O;m!==void 0&&m.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let P=f.attributes.position.count*A,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*N*4*v),M=new qg(D,P,N,v);M.type=Di,M.needsUpdate=!0;const L=A*4;for(let z=0;z<v;z++){const H=x[z],j=b[z],G=F[z],Z=P*N*4*z;for(let fe=0;fe<H.count;fe++){const te=fe*L;E===!0&&(o.fromBufferAttribute(H,fe),D[Z+te+0]=o.x,D[Z+te+1]=o.y,D[Z+te+2]=o.z,D[Z+te+3]=0),R===!0&&(o.fromBufferAttribute(j,fe),D[Z+te+4]=o.x,D[Z+te+5]=o.y,D[Z+te+6]=o.z,D[Z+te+7]=0),S===!0&&(o.fromBufferAttribute(G,fe),D[Z+te+8]=o.x,D[Z+te+9]=o.y,D[Z+te+10]=o.z,D[Z+te+11]=G.itemSize===4?o.w:1)}}m={count:v,texture:M,size:new gt(P,N)},r.set(f,m),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const R=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function JM(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==_&&(e.update(m),l.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return m}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const QM={[Lg]:"LINEAR_TONE_MAPPING",[Ng]:"REINHARD_TONE_MAPPING",[Dg]:"CINEON_TONE_MAPPING",[hd]:"ACES_FILMIC_TONE_MAPPING",[Ug]:"AGX_TONE_MAPPING",[Fg]:"NEUTRAL_TONE_MAPPING",[Ig]:"CUSTOM_TONE_MAPPING"};function eE(s,e,t,r,o,l){const u=new Ti(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new Gn;p.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const _=new Vx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new xn(p,_),m=new Nd(-1,1,1,-1,0,1);let y=null,E=null,R=!1,S,x=null,b=[],F=!1;this.setSize=function(A,P){u.setSize(A,P),f!==null&&f.setSize(A,P),h!==null&&h.setSize(A,P);for(let N=0;N<b.length;N++){const D=b[N];D.setSize&&D.setSize(A,P)}},this.setEffects=function(A){b=A,F=b.length>0&&b[0].isRenderPass===!0;const P=u.width,N=u.height;b.length>0&&f===null&&(f=new Ti(P,N,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),h=new Ti(P,N,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<b.length;D++){const M=b[D];M.setSize&&M.setSize(P,N)}},this.begin=function(A,P){if(R||A.toneMapping===Ui&&b.length===0)return!1;if(x=P,P!==null){const N=P.width,D=P.height;(u.width!==N||u.height!==D)&&this.setSize(N,D)}return F===!1&&A.setRenderTarget(u),S=A.toneMapping,A.toneMapping=Ui,!0},this.hasRenderPass=function(){return F},this.end=function(A,P){A.toneMapping=S,R=!0;let N=u,D=f;for(let M=0;M<b.length;M++){const L=b[M];L.enabled!==!1&&(L.render(A,D,N,P),L.needsSwap!==!1&&(N=D,D=D===f?h:f))}if(y!==A.outputColorSpace||E!==A.toneMapping){y=A.outputColorSpace,E=A.toneMapping,_.defines={},Et.getTransfer(y)===Ut&&(_.defines.SRGB_TRANSFER="");const M=QM[E];M&&(_.defines[M]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(x),A.render(v,m),x=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),_.dispose()}}const o0=new Pn,ad=new no(1,1),l0=new qg,c0=new xx,u0=new Zg,$m=[],Km=[],jm=new Float32Array(16),Zm=new Float32Array(9),Jm=new Float32Array(4);function na(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=$m[o];if(l===void 0&&(l=new Float32Array(o),$m[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zl(s,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function tE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function sE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;Jm.set(r),s.uniformMatrix2fv(this.addr,!1,Jm),fn(t,r)}}function aE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;Zm.set(r),s.uniformMatrix3fv(this.addr,!1,Zm),fn(t,r)}}function oE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;jm.set(r),s.uniformMatrix4fv(this.addr,!1,jm),fn(t,r)}}function lE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function dE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function gE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ad.compareFunction=t.isReversedDepthBuffer()?yd:Sd,l=ad):l=o0,t.setTexture2D(e||l,o)}function _E(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||c0,o)}function vE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||u0,o)}function xE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||l0,o)}function SE(s){switch(s){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return aE;case 35676:return oE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return fE;case 5125:return dE;case 36294:return hE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}function yE(s,e){s.uniform1fv(this.addr,e)}function ME(s,e){const t=na(e,this.size,2);s.uniform2fv(this.addr,t)}function EE(s,e){const t=na(e,this.size,3);s.uniform3fv(this.addr,t)}function wE(s,e){const t=na(e,this.size,4);s.uniform4fv(this.addr,t)}function TE(s,e){const t=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function AE(s,e){const t=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function RE(s,e){const t=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CE(s,e){s.uniform1iv(this.addr,e)}function bE(s,e){s.uniform2iv(this.addr,e)}function PE(s,e){s.uniform3iv(this.addr,e)}function LE(s,e){s.uniform4iv(this.addr,e)}function NE(s,e){s.uniform1uiv(this.addr,e)}function DE(s,e){s.uniform2uiv(this.addr,e)}function IE(s,e){s.uniform3uiv(this.addr,e)}function UE(s,e){s.uniform4uiv(this.addr,e)}function FE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ad:u=o0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function OE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||c0,l[u])}function kE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||u0,l[u])}function BE(s,e,t){const r=this.cache,o=e.length,l=Zl(t,o);un(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||l0,l[u])}function zE(s){switch(s){case 5126:return yE;case 35664:return ME;case 35665:return EE;case 35666:return wE;case 35674:return TE;case 35675:return AE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return bE;case 35668:case 35672:return PE;case 35669:case 35673:return LE;case 5125:return NE;case 36294:return DE;case 36295:return IE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return BE}}class HE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=SE(t.type)}}class VE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zE(t.type)}}class GE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Qm(s,e){s.seq.push(e),s.map[e.id]=e}function WE(s,e,t){const r=s.name,o=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),u=pf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Qm(t,p===void 0?new HE(f,s,e):new VE(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new GE(f),Qm(t,v)),t=v}}}class Hl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);WE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function eg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const XE=37297;let qE=0;function YE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const tg=new ct;function $E(s){Et._getMatrix(tg,Et.workingColorSpace,s);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ng(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+YE(s.getShaderSource(e),f)}else return l}function KE(s,e){const t=$E(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jE={[Lg]:"Linear",[Ng]:"Reinhard",[Dg]:"Cineon",[hd]:"ACESFilmic",[Ug]:"AgX",[Fg]:"Neutral",[Ig]:"Custom"};function ZE(s,e){const t=jE[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new q;function JE(){Et.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function e1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function t1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Ka(s){return s!==""}function ig(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(s){return s.replace(n1,r1)}const i1=new Map;function r1(s,e){let t=mt[e];if(t===void 0){const r=i1.get(e);if(r!==void 0)t=mt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return od(t)}const s1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(s){return s.replace(s1,a1)}function a1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ag(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const o1={[Fl]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function l1(s){return o1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[as]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function u1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":c1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const f1={[Zs]:"ENVMAP_MODE_REFRACTION"};function d1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":f1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h1={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[jv]:"ENVMAP_BLENDING_MIX",[Zv]:"ENVMAP_BLENDING_ADD"};function p1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":h1[s.combine]||"ENVMAP_BLENDING_NONE"}function m1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function g1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=l1(t),p=u1(t),_=d1(t),v=p1(t),m=m1(t),y=QE(t),E=e1(l),R=o.createProgram();let S,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ka).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ka).join(`
`),x.length>0&&(x+=`
`)):(S=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),x=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?ZE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,KE("linearToOutputTexel",t.outputColorSpace),JE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),u=od(u),u=ig(u,t),u=rg(u,t),f=od(f),f=ig(f,t),f=rg(f,t),u=sg(u),f=sg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=b+S+u,A=b+x+f,P=eg(o,o.VERTEX_SHADER,F),N=eg(o,o.FRAGMENT_SHADER,A);o.attachShader(R,P),o.attachShader(R,N),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function D(z){if(s.debug.checkShaderErrors){const H=o.getProgramInfoLog(R)||"",j=o.getShaderInfoLog(P)||"",G=o.getShaderInfoLog(N)||"",Z=H.trim(),fe=j.trim(),te=G.trim();let J=!0,B=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,P,N);else{const Y=ng(o,P,"vertex"),I=ng(o,N,"fragment");At("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+Y+`
`+I)}else Z!==""?at("WebGLProgram: Program Info Log:",Z):(fe===""||te==="")&&(B=!1);B&&(z.diagnostics={runnable:J,programLog:Z,vertexShader:{log:fe,prefix:S},fragmentShader:{log:te,prefix:x}})}o.deleteShader(P),o.deleteShader(N),M=new Hl(o,R),L=t1(o,R)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(R,XE)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=N,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new x1(e),t.set(e,r)),r}}class x1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function S1(s){return s===os||s===Gl||s===Wl}function y1(s,e,t,r,o,l){const u=new Ed,f=new v1,h=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return h.add(M),M===0?"uv":`uv${M}`}function R(M,L,O,z,H,j){const G=z.fog,Z=H.geometry,fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,J=e.get(M.envMap||fe,te),B=J&&J.mapping===Kl?J.image.height:null,Y=y[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const I=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=I!==void 0?I.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ge,He,We,le;if(Y){const Ct=Ni[Y];Ge=Ct.vertexShader,He=Ct.fragmentShader}else{Ge=M.vertexShader,He=M.fragmentShader;const Ct=f.getVertexShaderStage(M),wt=f.getFragmentShaderStage(M);f.update(M,Ct,wt),We=Ct.id,le=wt.id}const de=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),et=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,ft=!!M.map,Vt=!!M.matcap,dt=!!J,St=!!M.aoMap,Dt=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,Zt=!!M.displacementMap,nn=!!M.emissiveMap,Nt=!!M.metalnessMap,Gt=!!M.roughnessMap,$=M.anisotropy>0,an=M.clearcoat>0,Rt=M.dispersion>0,U=M.retroreflectivity>0,w=M.iridescence>0,Q=M.sheen>0,oe=M.transmission>0,he=$&&!!M.anisotropyMap,Me=an&&!!M.clearcoatMap,Ae=an&&!!M.clearcoatNormalMap,pe=an&&!!M.clearcoatRoughnessMap,ge=w&&!!M.iridescenceMap,be=w&&!!M.iridescenceThicknessMap,Ke=Q&&!!M.sheenColorMap,Pe=Q&&!!M.sheenRoughnessMap,Te=!!M.specularMap,je=!!M.specularColorMap,tt=!!M.specularIntensityMap,rt=oe&&!!M.transmissionMap,W=oe&&!!M.thicknessMap,Re=!!M.gradientMap,me=!!M.alphaMap,Ce=M.alphaTest>0,Fe=!!M.alphaHash,_e=!!M.extensions;let Je=Ui;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Ye={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:He,defines:M.defines,customVertexShaderID:We,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&H._colorsTexture!==null,instancing:et,instancingColor:et&&H.instanceColor!==null,instancingMorph:et&&H.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:Vt,envMap:dt,envMapMode:dt&&J.mapping,envMapCubeUVHeight:B,aoMap:St,lightMap:Dt,bumpMap:ht,normalMap:Ft,displacementMap:Zt,emissiveMap:nn,normalMapObjectSpace:Ft&&M.normalMapType===ex,normalMapTangentSpace:Ft&&M.normalMapType===nd,packedNormalMap:Ft&&M.normalMapType===nd&&S1(M.normalMap.format),metalnessMap:Nt,roughnessMap:Gt,anisotropy:$,anisotropyMap:he,clearcoat:an,clearcoatMap:Me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:Rt,retroreflection:U,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:Q,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:je,specularIntensityMap:tt,transmission:oe,transmissionMap:rt,thicknessMap:W,gradientMap:Re,opaque:M.transparent===!1&&M.blending===ja&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:Ce,alphaHash:Fe,combine:M.combine,mapUv:ft&&E(M.map.channel),aoMapUv:St&&E(M.aoMap.channel),lightMapUv:Dt&&E(M.lightMap.channel),bumpMapUv:ht&&E(M.bumpMap.channel),normalMapUv:Ft&&E(M.normalMap.channel),displacementMapUv:Zt&&E(M.displacementMap.channel),emissiveMapUv:nn&&E(M.emissiveMap.channel),metalnessMapUv:Nt&&E(M.metalnessMap.channel),roughnessMapUv:Gt&&E(M.roughnessMap.channel),anisotropyMapUv:he&&E(M.anisotropyMap.channel),clearcoatMapUv:Me&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(M.sheenRoughnessMap.channel),specularMapUv:Te&&E(M.specularMap.channel),specularColorMapUv:je&&E(M.specularColorMap.channel),specularIntensityMapUv:tt&&E(M.specularIntensityMap.channel),transmissionMapUv:rt&&E(M.transmissionMap.channel),thicknessMapUv:W&&E(M.thicknessMap.channel),alphaMapUv:me&&E(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ft||$),vertexNormals:!!Z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(ft||me),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Z.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ee,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&Et.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:nn&&M.emissiveMap.isVideoTexture===!0&&Et.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ci,flipSided:M.side===Vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=h.has(1),Ye.vertexUv2s=h.has(2),Ye.vertexUv3s=h.has(3),h.clear(),Ye}function S(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)L.push(O),L.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(L,M),b(L,M),L.push(s.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function x(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function b(M,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function F(M){const L=y[M.type];let O;if(L){const z=Ni[L];O=Bx.clone(z.uniforms)}else O=M.uniforms;return O}function A(M,L){let O=_.get(L);return O!==void 0?++O.usedTimes:(O=new g1(s,L,M,o),p.push(O),_.set(L,O)),O}function P(M){if(--M.usedTimes===0){const L=p.indexOf(M);p[L]=p[p.length-1],p.pop(),_.delete(M.cacheKey),M.destroy()}}function N(M){f.remove(M)}function D(){f.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:F,acquireProgram:A,releaseProgram:P,releaseShaderCache:N,programs:p,dispose:D}}function M1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function E1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,E,R,S,x){let b=s[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:E,materialVariant:u(m),groupOrder:R,renderOrder:m.renderOrder,z:S,group:x},s[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=E,b.materialVariant=u(m),b.groupOrder=R,b.renderOrder=m.renderOrder,b.z=S,b.group=x),e++,b}function h(m,y,E,R,S,x,b){b.reversedDepth===!0&&(S=-S);const F=f(m,y,E,R,S,x);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):t.push(F)}function p(m,y,E,R,S,x){const b=f(m,y,E,R,S,x);E.transmission>0?r.unshift(b):E.transparent===!0?o.unshift(b):t.unshift(b)}function _(m,y){t.length>1&&t.sort(m||E1),r.length>1&&r.sort(y||og),o.length>1&&o.sort(y||og)}function v(){for(let m=e,y=s.length;m<y;m++){const E=s[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:v,sort:_}}function w1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new lg,s.set(r,[u])):o>=l.length?(u=new lg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function T1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new ot};break;case"SpotLight":t={position:new q,direction:new q,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function A1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let R1=0;function C1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b1(s){const e=new T1,t=A1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const o=new q,l=new jt,u=new jt;function f(p){let _=0,v=0,m=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,E=0,R=0,S=0,x=0,b=0,F=0,A=0,P=0,N=0,D=0,M=0,L=0,O=0;p.sort(C1);for(let H=0,j=p.length;H<j;H++){const G=p[H],Z=G.color,fe=G.intensity,te=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===os?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Z.r*fe,v+=Z.g*fe,m+=Z.b*fe;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],fe);O++}else if(G.isSunLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,I=t.get(G);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[E]=I,r.sunShadowMap[E]=J;const re=Y.getViewportCount();for(let Se=0;Se<re;Se++)r.sunShadowMatrix[R+Se]=Y.getMatrix(Se),r.sunShadowCascade[R+Se]=Y._cascadeData[Se];R+=re,E++}r.sun[y]=B,y++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,I=t.get(G);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,r.directionalShadow[S]=I,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=G.shadow.matrix,P++}r.directional[S]=B,S++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Z).multiplyScalar(fe),B.distance=te,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[b]=B;const Y=G.shadow;if(G.map&&(r.spotLightMap[M]=G.map,M++,Y.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[b]=Y.matrix,G.castShadow){const I=t.get(G);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,r.spotShadow[b]=I,r.spotShadowMap[b]=J,D++}b++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(Z).multiplyScalar(fe),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[F]=B,F++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Y=G.shadow,I=t.get(G);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,r.pointShadow[x]=I,r.pointShadowMap[x]=J,r.pointShadowMatrix[x]=G.shadow.matrix,N++}r.point[x]=B,x++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(fe),B.groundColor.copy(G.groundColor).multiplyScalar(fe),r.hemi[A]=B,A++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=m;const z=r.hash;(z.sunLength!==y||z.directionalLength!==S||z.pointLength!==x||z.spotLength!==b||z.rectAreaLength!==F||z.hemiLength!==A||z.numSunShadows!==E||z.numDirectionalShadows!==P||z.numPointShadows!==N||z.numSpotShadows!==D||z.numSpotMaps!==M||z.numLightProbes!==O)&&(r.sun.length=y,r.directional.length=S,r.spot.length=b,r.rectArea.length=F,r.point.length=x,r.hemi.length=A,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.pointShadowMatrix.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.spotLightMatrix.length=D+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,z.sunLength=y,z.directionalLength=S,z.pointLength=x,z.spotLength=b,z.rectAreaLength=F,z.hemiLength=A,z.numSunShadows=E,z.numDirectionalShadows=P,z.numPointShadows=N,z.numSpotShadows=D,z.numSpotMaps=M,z.numLightProbes=O,r.version=R1++)}function h(p,_){let v=0,m=0,y=0,E=0,R=0,S=0;const x=_.matrixWorldInverse;for(let b=0,F=p.length;b<F;b++){const A=p[b];if(A.isSunLight){const P=r.sun[v];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(x),v++}else if(A.isDirectionalLight){const P=r.directional[m];P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),m++}else if(A.isSpotLight){const P=r.spot[E];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),E++}else if(A.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(A.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),R++}else if(A.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),y++}else if(A.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(x),S++}}}return{setup:f,setupView:h,state:r}}function cg(s){const e=new b1(s),t=[],r=[],o=[];function l(m){v.camera=m,t.length=0,r.length=0,o.length=0}function u(m){t.push(m)}function f(m){r.push(m)}function h(m){o.push(m)}function p(){e.setup(t)}function _(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function P1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new cg(s),e.set(o,[f])):l>=u.length?(f=new cg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,D1=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],I1=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ug=new jt,qa=new q,mf=new q;function U1(s,e,t){let r=new Ad;const o=new gt,l=new gt,u=new Kt,f=new Gx,h=new Wx,p={},_=t.maxTextureSize,v={[ss]:Vn,[Vn]:ss,[ci]:ci},m=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:L1,fragmentShader:N1}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const E=new Gn;E.setAttribute("position",new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new xn(E,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let x=this.type;this.render=function(N,D,M){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Rg&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fl);const L=s.getRenderTarget(),O=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),H=s.state;H.setBlending(tr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=x!==this.type;j&&D.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Z=>Z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Z=N.length;G<Z;G++){const fe=N[G],te=fe.shadow;if(te===void 0){at("WebGLShadowMap:",fe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const J=te.getFrameExtents();o.multiply(J),l.copy(te.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/J.x),o.x=l.x*J.x,te.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/J.y),o.y=l.y*J.y,te.mapSize.y=l.y));const B=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=B,te.map===null||j===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Ya){if(fe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new Ti(o.x,o.y,{format:os,type:Oi,minFilter:bn,magFilter:bn,generateMipmaps:!1}),te.map.texture.name=fe.name+".shadowMap",te.map.depthTexture=new no(o.x,o.y,Di),te.map.depthTexture.name=fe.name+".shadowMapDepth",te.map.depthTexture.format=rr,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Sn,te.map.depthTexture.magFilter=Sn}else fe.isPointLight?(te.map=new a0(o.x),te.map.depthTexture=new Fx(o.x,Fi)):(te.map=new Ti(o.x,o.y),te.map.depthTexture=new no(o.x,o.y,Fi)),te.map.depthTexture.name=fe.name+".shadowMap",te.map.depthTexture.format=rr,this.type===Fl?(te.map.depthTexture.compareFunction=B?yd:Sd,te.map.depthTexture.minFilter=bn,te.map.depthTexture.magFilter=bn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Sn,te.map.depthTexture.magFilter=Sn);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==o.x||te.map.height!==o.y)&&te.map.setSize(o.x,o.y);const Y=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();fe.isPointLight!==!0&&te.updateMatrices(fe,M);for(let I=0;I<Y;I++){const re=te.getCamera(I);if(fe.isPointLight){const Se=te.camera,Ge=te.matrix,He=fe.distance||Se.far;He!==Se.far&&(Se.far=He,Se.updateProjectionMatrix()),qa.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(qa),mf.copy(Se.position),mf.add(D1[I]),Se.up.copy(I1[I]),Se.lookAt(mf),Se.updateMatrixWorld(),Ge.makeTranslation(-qa.x,-qa.y,-qa.z),ug.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),te._frustum.setFromProjectionMatrix(ug,Se.coordinateSystem,Se.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,I),s.clear();else{I===0&&(s.setRenderTarget(te.map),s.clear());const Se=te.getViewport(I);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),H.viewport(u)}r=te.getFrustum(I),A(D,M,re,fe,this.type)}te.isPointLightShadow!==!0&&this.type===Ya&&b(te,M),te.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(L,O,z)};function b(N,D){const M=e.update(R);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new Ti(o.x,o.y,{format:os,type:Oi}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),m.uniforms.shadow_pass.value=N.map.depthTexture,m.uniforms.resolution.value.set(N.map.width,N.map.height),m.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(D,null,M,m,R,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(D,null,M,y,R,null)}function F(N,D,M,L){let O=null;const z=M.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)O=z;else if(O=M.isPointLight===!0?h:f,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=O.uuid,j=D.uuid;let G=p[H];G===void 0&&(G={},p[H]=G);let Z=G[j];Z===void 0&&(Z=O.clone(),G[j]=Z,D.addEventListener("dispose",P)),O=Z}if(O.visible=D.visible,O.wireframe=D.wireframe,L===Ya?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:v[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,M.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const H=s.properties.get(O);H.light=M}return O}function A(N,D,M,L,O){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&O===Ya)&&(!N.frustumCulled||N.intersectsFrustum(r))){N.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,N.matrixWorld);const j=e.update(N),G=N.material;if(Array.isArray(G)){const Z=j.groups;for(let fe=0,te=Z.length;fe<te;fe++){const J=Z[fe],B=G[J.materialIndex];if(B&&B.visible){const Y=F(N,B,L,O);N.onBeforeShadow(s,N,D,M,j,Y,J),s.renderBufferDirect(M,null,j,Y,N,J),N.onAfterShadow(s,N,D,M,j,Y,J)}}}else if(G.visible){const Z=F(N,G,L,O);N.onBeforeShadow(s,N,D,M,j,Z,null),s.renderBufferDirect(M,null,j,Z,N,null),N.onAfterShadow(s,N,D,M,j,Z,null)}}const H=N.children;for(let j=0,G=H.length;j<G;j++)A(H[j],D,M,L,O)}function P(N){N.target.removeEventListener("dispose",P);for(const M in p){const L=p[M],O=N.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function F1(s,e){function t(){let W=!1;const Re=new Kt;let me=null;const Ce=new Kt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!W&&(s.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,_e,Je,Ye,Ct){Ct===!0&&(Fe*=Ye,_e*=Ye,Je*=Ye),Re.set(Fe,_e,Je,Ye),Ce.equals(Re)===!1&&(s.clearColor(Fe,_e,Je,Ye),Ce.copy(Re))},reset:function(){W=!1,me=null,Ce.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,me=null,Ce=null,Fe=null;return{setReversed:function(_e){if(Re!==_e){const Je=e.get("EXT_clip_control");_e?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const Ye=Fe;Fe=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(_e){_e?de(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(_e){me!==_e&&!W&&(s.depthMask(_e),me=_e)},setFunc:function(_e){if(Re&&(_e=dx[_e]),Ce!==_e){switch(_e){case vf:s.depthFunc(s.NEVER);break;case xf:s.depthFunc(s.ALWAYS);break;case Sf:s.depthFunc(s.LESS);break;case Za:s.depthFunc(s.LEQUAL);break;case yf:s.depthFunc(s.EQUAL);break;case Mf:s.depthFunc(s.GEQUAL);break;case Ef:s.depthFunc(s.GREATER);break;case wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Fe!==_e&&(Fe=_e,Re&&(_e=1-_e),s.clearDepth(_e))},reset:function(){W=!1,me=null,Ce=null,Fe=null,Re=!1}}}function o(){let W=!1,Re=null,me=null,Ce=null,Fe=null,_e=null,Je=null,Ye=null,Ct=null;return{setTest:function(wt){W||(wt?de(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(wt){Re!==wt&&!W&&(s.stencilMask(wt),Re=wt)},setFunc:function(wt,gn,Qn){(me!==wt||Ce!==gn||Fe!==Qn)&&(s.stencilFunc(wt,gn,Qn),me=wt,Ce=gn,Fe=Qn)},setOp:function(wt,gn,Qn){(_e!==wt||Je!==gn||Ye!==Qn)&&(s.stencilOp(wt,gn,Qn),_e=wt,Je=gn,Ye=Qn)},setLocked:function(wt){W=wt},setClear:function(wt){Ct!==wt&&(s.clearStencil(wt),Ct=wt)},reset:function(){W=!1,Re=null,me=null,Ce=null,Fe=null,_e=null,Je=null,Ye=null,Ct=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let _={},v={},m={},y=new WeakMap,E=[],R=null,S=!1,x=null,b=null,F=null,A=null,P=null,N=null,D=null,M=new ot(0,0,0),L=0,O=!1,z=null,H=null,j=null,G=null,Z=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,J=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),te=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),te=J>=2);let Y=null,I={};const re=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ge=new Kt().fromArray(re),He=new Kt().fromArray(Se);function We(W,Re,me,Ce){const Fe=new Uint8Array(4),_e=s.createTexture();s.bindTexture(W,_e),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<me;Je++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Re+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return _e}const le={};le[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(Za),ht(!1),Ft(dm),de(s.CULL_FACE),St(tr);function de(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ee(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function et(W,Re){return m[W]!==Re?(s.bindFramebuffer(W,Re),m[W]=Re,W===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Oe(W,Re){let me=E,Ce=!1;if(W){me=y.get(Re),me===void 0&&(me=[],y.set(Re,me));const Fe=W.textures;if(me.length!==Fe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Je=Fe.length;_e<Je;_e++)me[_e]=s.COLOR_ATTACHMENT0+_e;me.length=Fe.length,Ce=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(me)}function ft(W){return R!==W?(s.useProgram(W),R=W,!0):!1}const Vt={[Ys]:s.FUNC_ADD,[Dv]:s.FUNC_SUBTRACT,[Iv]:s.FUNC_REVERSE_SUBTRACT};Vt[Uv]=s.MIN,Vt[Fv]=s.MAX;const dt={[Ov]:s.ZERO,[kv]:s.ONE,[Bv]:s.SRC_COLOR,[Cg]:s.SRC_ALPHA,[Xv]:s.SRC_ALPHA_SATURATE,[Gv]:s.DST_COLOR,[Hv]:s.DST_ALPHA,[zv]:s.ONE_MINUS_SRC_COLOR,[bg]:s.ONE_MINUS_SRC_ALPHA,[Wv]:s.ONE_MINUS_DST_COLOR,[Vv]:s.ONE_MINUS_DST_ALPHA,[qv]:s.CONSTANT_COLOR,[Yv]:s.ONE_MINUS_CONSTANT_COLOR,[$v]:s.CONSTANT_ALPHA,[Kv]:s.ONE_MINUS_CONSTANT_ALPHA};function St(W,Re,me,Ce,Fe,_e,Je,Ye,Ct,wt){if(W===tr){S===!0&&(Ee(s.BLEND),S=!1);return}if(S===!1&&(de(s.BLEND),S=!0),W!==Nv){if(W!==x||wt!==O){if((b!==Ys||P!==Ys)&&(s.blendEquation(s.FUNC_ADD),b=Ys,P=Ys),wt)switch(W){case ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFunc(s.ONE,s.ONE);break;case pm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pm:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}F=null,A=null,N=null,D=null,M.set(0,0,0),L=0,x=W,O=wt}return}Fe=Fe||Re,_e=_e||me,Je=Je||Ce,(Re!==b||Fe!==P)&&(s.blendEquationSeparate(Vt[Re],Vt[Fe]),b=Re,P=Fe),(me!==F||Ce!==A||_e!==N||Je!==D)&&(s.blendFuncSeparate(dt[me],dt[Ce],dt[_e],dt[Je]),F=me,A=Ce,N=_e,D=Je),(Ye.equals(M)===!1||Ct!==L)&&(s.blendColor(Ye.r,Ye.g,Ye.b,Ct),M.copy(Ye),L=Ct),x=W,O=!1}function Dt(W,Re){W.side===ci?Ee(s.CULL_FACE):de(s.CULL_FACE);let me=W.side===Vn;Re&&(me=!me),ht(me),W.blending===ja&&W.transparent===!1?St(tr):St(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ce=W.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){z!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),z=W)}function Ft(W){W!==Pv?(de(s.CULL_FACE),W!==H&&(W===dm?s.cullFace(s.BACK):W===Lv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),H=W}function Zt(W){W!==j&&(te&&s.lineWidth(W),j=W)}function nn(W,Re,me){W?(de(s.POLYGON_OFFSET_FILL),(G!==Re||Z!==me)&&(G=Re,Z=me,u.getReversed()&&(Re=-Re),s.polygonOffset(Re,me))):Ee(s.POLYGON_OFFSET_FILL)}function Nt(W){W?de(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=s.TEXTURE0+fe-1),Y!==W&&(s.activeTexture(W),Y=W)}function $(W,Re,me){me===void 0&&(Y===null?me=s.TEXTURE0+fe-1:me=Y);let Ce=I[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},I[me]=Ce),(Ce.type!==W||Ce.texture!==Re)&&(Y!==me&&(s.activeTexture(me),Y=me),s.bindTexture(W,Re||le[W]),Ce.type=W,Ce.texture=Re)}function an(){const W=I[Y];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function w(){try{s.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Q(){try{s.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Me(){try{s.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Ae(){try{s.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function pe(){try{s.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function ge(){try{s.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function be(W){return v[W]!==void 0?v[W]:s.getParameter(W)}function Ke(W,Re){v[W]!==Re&&(s.pixelStorei(W,Re),v[W]=Re)}function Pe(W){Ge.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ge.copy(W))}function Te(W){He.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),He.copy(W))}function je(W,Re){let me=p.get(Re);me===void 0&&(me=new WeakMap,p.set(Re,me));let Ce=me.get(W);Ce===void 0&&(Ce=s.getUniformBlockIndex(Re,W.name),me.set(W,Ce))}function tt(W,Re){const Ce=p.get(Re).get(W);h.get(Re)!==Ce&&(s.uniformBlockBinding(Re,Ce,W.__bindingPointIndex),h.set(Re,Ce))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},Y=null,I={},m={},y=new WeakMap,E=[],R=null,S=!1,x=null,b=null,F=null,A=null,P=null,N=null,D=null,M=new ot(0,0,0),L=0,O=!1,z=null,H=null,j=null,G=null,Z=null,Ge.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Ee,bindFramebuffer:et,drawBuffers:Oe,useProgram:ft,setBlending:St,setMaterial:Dt,setFlipSided:ht,setCullFace:Ft,setLineWidth:Zt,setPolygonOffset:nn,setScissorTest:Nt,activeTexture:Gt,bindTexture:$,unbindTexture:an,compressedTexImage2D:Rt,compressedTexImage3D:U,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:be,updateUBOMapping:je,uniformBlockBinding:tt,texStorage2D:Me,texStorage3D:Ae,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Pe,viewport:Te,reset:rt}}function O1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new gt,_=new WeakMap,v=new Set;let m;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,w){return E?new OffscreenCanvas(U,w):Yl("canvas")}function S(U,w,Q){let oe=1;const he=Rt(U);if((he.width>Q||he.height>Q)&&(oe=Q/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(oe*he.width),Ae=Math.floor(oe*he.height);m===void 0&&(m=R(Me,Ae));const pe=w?R(Me,Ae):m;return pe.width=Me,pe.height=Ae,pe.getContext("2d").drawImage(U,0,0,Me,Ae),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Ae+")."),pe}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function x(U){return U.generateMipmaps}function b(U){s.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(U,w,Q,oe,he,Me=!1){if(U!==null){if(s[U]!==void 0)return s[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ae;oe&&(Ae=e.get("EXT_texture_norm16"),Ae||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===s.RED&&(Q===s.FLOAT&&(pe=s.R32F),Q===s.HALF_FLOAT&&(pe=s.R16F),Q===s.UNSIGNED_BYTE&&(pe=s.R8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.R8UI),Q===s.UNSIGNED_SHORT&&(pe=s.R16UI),Q===s.UNSIGNED_INT&&(pe=s.R32UI),Q===s.BYTE&&(pe=s.R8I),Q===s.SHORT&&(pe=s.R16I),Q===s.INT&&(pe=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(pe=s.RG32F),Q===s.HALF_FLOAT&&(pe=s.RG16F),Q===s.UNSIGNED_BYTE&&(pe=s.RG8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Q===s.UNSIGNED_INT&&(pe=s.RG32UI),Q===s.BYTE&&(pe=s.RG8I),Q===s.SHORT&&(pe=s.RG16I),Q===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Q===s.UNSIGNED_INT&&(pe=s.RGB32UI),Q===s.BYTE&&(pe=s.RGB8I),Q===s.SHORT&&(pe=s.RGB16I),Q===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Q===s.BYTE&&(pe=s.RGBA8I),Q===s.SHORT&&(pe=s.RGBA16I),Q===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const ge=Me?ql:Et.getTransfer(he);Q===s.FLOAT&&(pe=s.RGBA32F),Q===s.HALF_FLOAT&&(pe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(pe=ge===Ut?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(U,w){let Q;return U?w===null||w===Fi||w===eo?Q=s.DEPTH24_STENCIL8:w===Di?Q=s.DEPTH32F_STENCIL8:w===Qa&&(Q=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Fi||w===eo?Q=s.DEPTH_COMPONENT24:w===Di?Q=s.DEPTH_COMPONENT32F:w===Qa&&(Q=s.DEPTH_COMPONENT16),Q}function N(U,w){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Sn&&U.minFilter!==bn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function D(U){const w=U.target;w.removeEventListener("dispose",D),L(w),w.isVideoTexture&&_.delete(w),w.isHTMLTexture&&v.delete(w)}function M(U){const w=U.target;w.removeEventListener("dispose",M),z(w)}function L(U){const w=r.get(U);if(w.__webglInit===void 0)return;const Q=U.source,oe=y.get(Q);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(U),Object.keys(oe).length===0&&y.delete(Q)}r.remove(U)}function O(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const Q=U.source,oe=y.get(Q);delete oe[w.__cacheKey],u.memory.textures--}function z(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else s.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)s.deleteFramebuffer(w.__webglFramebuffer[oe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=U.textures;for(let oe=0,he=Q.length;oe<he;oe++){const Me=r.get(Q[oe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(Q[oe])}r.remove(U)}let H=0;function j(){H=0}function G(){return H}function Z(U){H=U}function fe(){const U=H;return U>=o.maxTextures&&at("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),H+=1,U}function te(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function J(U,w){const Q=r.get(U);if(U.isVideoTexture&&$(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const oe=U.image;if(oe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Q,U,w);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function B(U,w){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ee(Q,U,w);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function Y(U,w){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ee(Q,U,w);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function I(U,w){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){et(Q,U,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const re={[Ja]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[Tf]:s.MIRRORED_REPEAT},Se={[Sn]:s.NEAREST,[Jv]:s.NEAREST_MIPMAP_NEAREST,[fl]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[ku]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},Ge={[nx]:s.NEVER,[ox]:s.ALWAYS,[ix]:s.LESS,[Sd]:s.LEQUAL,[rx]:s.EQUAL,[yd]:s.GEQUAL,[sx]:s.GREATER,[ax]:s.NOTEQUAL};function He(U,w){if(w.type===Di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===bn||w.magFilter===ku||w.magFilter===fl||w.magFilter===is||w.minFilter===bn||w.minFilter===ku||w.minFilter===fl||w.minFilter===is)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,re[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,re[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,re[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Se[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==fl&&w.minFilter!==is||w.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function We(U,w){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",D));const oe=w.source;let he=y.get(oe);he===void 0&&(he={},y.set(oe,he));const Me=te(w);if(Me!==U.__cacheKey){he[Me]===void 0&&(he[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Me].usedTimes++;const Ae=he[U.__cacheKey];Ae!==void 0&&(he[U.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(w)),U.__cacheKey=Me,U.__webglTexture=he[Me].texture}return Q}function le(U,w,Q){return Math.floor(Math.floor(U/Q)/w)}function de(U,w,Q,oe){const Me=U.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Q,oe,w.data);else{Me.sort((Ke,Pe)=>Ke.start-Pe.start);let Ae=0;for(let Ke=1;Ke<Me.length;Ke++){const Pe=Me[Ae],Te=Me[Ke],je=Pe.start+Pe.count,tt=le(Te.start,w.width,4),rt=le(Pe.start,w.width,4);Te.start<=je+1&&tt===rt&&le(Te.start+Te.count-1,w.width,4)===tt?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++Ae,Me[Ae]=Te)}Me.length=Ae+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),be=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ke=0,Pe=Me.length;Ke<Pe;Ke++){const Te=Me[Ke],je=Math.floor(Te.start/4),tt=Math.ceil(Te.count/4),rt=je%w.width,W=Math.floor(je/w.width),Re=tt,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,rt,W,Re,me,Q,oe,w.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function Ee(U,w,Q){let oe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=s.TEXTURE_3D);const he=We(U,w),Me=w.source;t.bindTexture(oe,U.__webglTexture,s.TEXTURE0+Q);const Ae=r.get(Me);if(Me.version!==Ae.__version||he===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const me=Et.getPrimaries(Et.workingColorSpace),Ce=w.colorSpace===br?null:Et.getPrimaries(w.colorSpace),Fe=w.colorSpace===br||me===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,o.maxTextureSize);ge=an(w,ge);const be=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let Pe=A(w.internalFormat,be,Ke,w.normalized,w.colorSpace,w.isVideoTexture);He(oe,w);let Te;const je=w.mipmaps,tt=w.isVideoTexture!==!0,rt=Ae.__version===void 0||he===!0,W=Me.dataReady,Re=N(w,ge);if(w.isDepthTexture)Pe=P(w.format===rs,w.type),rt&&(tt?t.texStorage2D(s.TEXTURE_2D,1,Pe,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,Ke,null));else if(w.isDataTexture)if(je.length>0){tt&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,je[0].width,je[0].height);for(let me=0,Ce=je.length;me<Ce;me++)Te=je[me],tt?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,be,Ke,Te.data):t.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,be,Ke,Te.data);w.generateMipmaps=!1}else tt?(rt&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,ge.width,ge.height),W&&de(w,ge,be,Ke)):t.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,be,Ke,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,je[0].width,je[0].height,ge.depth);for(let me=0,Ce=je.length;me<Ce;me++)if(Te=je[me],w.format!==wi)if(be!==null)if(tt){if(W)if(w.layerUpdates.size>0){const Fe=Gm(Te.width,Te.height,w.format,w.type);for(const _e of w.layerUpdates){const Je=Te.data.subarray(_e*Fe/Te.data.BYTES_PER_ELEMENT,(_e+1)*Fe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,_e,Te.width,Te.height,1,be,Je)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,be,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Te.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,be,Ke,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,be,Ke,Te.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{tt&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,Pe,je[0].width,je[0].height);for(let me=0,Ce=je.length;me<Ce;me++)Te=je[me],w.format!==wi?be!==null?tt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Te.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,be,Ke,Te.data):t.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,be,Ke,Te.data)}else if(w.isDataArrayTexture)if(tt){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Pe,ge.width,ge.height,ge.depth),W)if(w.layerUpdates.size>0){const me=Gm(ge.width,ge.height,w.format,w.type);for(const Ce of w.layerUpdates){const Fe=ge.data.subarray(Ce*me/ge.data.BYTES_PER_ELEMENT,(Ce+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,be,Ke,Fe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,be,Ke,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,be,Ke,ge.data);else if(w.isData3DTexture)tt?(rt&&t.texStorage3D(s.TEXTURE_3D,Re,Pe,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,be,Ke,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,be,Ke,ge.data);else if(w.isFramebufferTexture){if(rt)if(tt)t.texStorage2D(s.TEXTURE_2D,Re,Pe,ge.width,ge.height);else{let me=ge.width,Ce=ge.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,Pe,me,Ce,0,be,Ke,null),me>>=1,Ce>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(w),me.onpaint=Ce=>{const Fe=Ce.changedElements;for(const _e of v)Fe.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Fe=s.RGBA,_e=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,_e,Je,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(tt&&rt){const me=Rt(je[0]);t.texStorage2D(s.TEXTURE_2D,Re,Pe,me.width,me.height)}for(let me=0,Ce=je.length;me<Ce;me++)Te=je[me],tt?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,be,Ke,Te):t.texImage2D(s.TEXTURE_2D,me,Pe,be,Ke,Te);w.generateMipmaps=!1}else if(tt){if(rt){const me=Rt(ge);t.texStorage2D(s.TEXTURE_2D,Re,Pe,me.width,me.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ke,ge)}else t.texImage2D(s.TEXTURE_2D,0,Pe,be,Ke,ge);x(w)&&b(oe),Ae.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function et(U,w,Q){if(w.image.length!==6)return;const oe=We(U,w),he=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Q);const Me=r.get(he);if(he.version!==Me.__version||oe===!0){t.activeTexture(s.TEXTURE0+Q);const Ae=Et.getPrimaries(Et.workingColorSpace),pe=w.colorSpace===br?null:Et.getPrimaries(w.colorSpace),ge=w.colorSpace===br||Ae===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const be=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!be&&!Ke?Pe[_e]=S(w.image[_e],!0,o.maxCubemapSize):Pe[_e]=Ke?w.image[_e].image:w.image[_e],Pe[_e]=an(w,Pe[_e]);const Te=Pe[0],je=l.convert(w.format,w.colorSpace),tt=l.convert(w.type),rt=A(w.internalFormat,je,tt,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Re=Me.__version===void 0||oe===!0,me=he.dataReady;let Ce=N(w,Te);He(s.TEXTURE_CUBE_MAP,w);let Fe;if(be){W&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Fe=Pe[_e].mipmaps;for(let Je=0;Je<Fe.length;Je++){const Ye=Fe[Je];w.format!==wi?je!==null?W?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,0,0,Ye.width,Ye.height,je,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,rt,Ye.width,Ye.height,0,Ye.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,0,0,Ye.width,Ye.height,je,tt,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je,rt,Ye.width,Ye.height,0,je,tt,Ye.data)}}}else{if(Fe=w.mipmaps,W&&Re){Fe.length>0&&Ce++;const _e=Rt(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ke){W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,je,tt,Pe[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Pe[_e].width,Pe[_e].height,0,je,tt,Pe[_e].data);for(let Je=0;Je<Fe.length;Je++){const Ct=Fe[Je].image[_e].image;W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,0,0,Ct.width,Ct.height,je,tt,Ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,rt,Ct.width,Ct.height,0,je,tt,Ct.data)}}else{W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,tt,Pe[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,je,tt,Pe[_e]);for(let Je=0;Je<Fe.length;Je++){const Ye=Fe[Je];W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,0,0,je,tt,Ye.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Je+1,rt,je,tt,Ye.image[_e])}}}x(w)&&b(s.TEXTURE_CUBE_MAP),Me.__version=he.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Oe(U,w,Q,oe,he,Me){const Ae=l.convert(Q.format,Q.colorSpace),pe=l.convert(Q.type),ge=A(Q.internalFormat,Ae,pe,Q.normalized,Q.colorSpace),be=r.get(w),Ke=r.get(Q);if(Ke.__renderTarget=w,!be.__hasExternalTextures){const Pe=Math.max(1,w.width>>Me),Te=Math.max(1,w.height>>Me);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,ge,Pe,Te,w.depth,0,Ae,pe,null):t.texImage2D(he,Me,ge,Pe,Te,0,Ae,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Gt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,he,Ke.__webglTexture,0,Nt(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,he,Ke.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(U,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Me=P(w.stencilBuffer,he),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(w),Me,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(w),Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,U)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const Me=oe[he],Ae=l.convert(Me.format,Me.colorSpace),pe=l.convert(Me.type),ge=A(Me.internalFormat,Ae,pe,Me.normalized,Me.colorSpace);Gt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(w),ge,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(w),ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ge,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(U,w,Q){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),He(s.TEXTURE_CUBE_MAP,w.depthTexture);const be=l.convert(w.depthTexture.format),Ke=l.convert(w.depthTexture.type);let Pe;w.depthTexture.format===rr?Pe=s.DEPTH_COMPONENT24:w.depthTexture.format===rs&&(Pe=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,w.width,w.height,0,be,Ke,null)}}else J(w.depthTexture,0);const Me=he.__webglTexture,Ae=Nt(w),pe=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,ge=w.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===rr)Gt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Me,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Me,0);else if(w.depthTexture.format===rs)Gt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Me,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(U){const w=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)Vt(w.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?Vt(w.__webglFramebuffer[0],U,0):Vt(w.__webglFramebuffer,U,0)}else if(Q){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=s.createRenderbuffer(),ft(w.__webglDepthbuffer[oe],U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ft(w.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,w,Q){const oe=r.get(U);w!==void 0&&Oe(oe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&dt(U)}function Dt(U){const w=U.texture,Q=r.get(U),oe=r.get(w);U.addEventListener("dispose",M);const he=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Ae=he.length>1;if(Ae||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=w.version,u.memory.textures++),Me){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)Q.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else Q.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let pe=0,ge=he.length;pe<ge;pe++){const be=r.get(he[pe]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Gt(U)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];Q.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const be=l.convert(ge.format,ge.colorSpace),Ke=l.convert(ge.type),Pe=A(ge.internalFormat,be,Ke,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),Te=Nt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),He(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Oe(Q.__webglFramebuffer[pe][ge],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Oe(Q.__webglFramebuffer[pe],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(w)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ge=he.length;pe<ge;pe++){const be=he[pe],Ke=r.get(be);let Pe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ke.__webglTexture),He(Pe,be),Oe(Q.__webglFramebuffer,U,be,s.COLOR_ATTACHMENT0+pe,Pe,0),x(be)&&b(Pe)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),He(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Oe(Q.__webglFramebuffer[ge],U,w,s.COLOR_ATTACHMENT0,pe,ge);else Oe(Q.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,pe,0);x(w)&&b(pe),t.unbindTexture()}U.depthBuffer&&dt(U)}function ht(U){const w=U.textures;for(let Q=0,oe=w.length;Q<oe;Q++){const he=w[Q];if(x(he)){const Me=F(U),Ae=r.get(he).__webglTexture;t.bindTexture(Me,Ae),b(Me),t.unbindTexture()}}}const Ft=[],Zt=[];function nn(U){if(U.samples>0){if(Gt(U)===!1){const w=U.textures,Q=U.width,oe=U.height;let he=s.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=r.get(U),pe=w.length>1;if(pe)for(let be=0;be<w.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<w.length;be++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const Ke=r.get(w[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,he,s.NEAREST),h===!0&&(Ft.length=0,Zt.length=0,Ft.push(s.COLOR_ATTACHMENT0+be),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ft.push(Me),Zt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<w.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const Ke=r.get(w[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Nt(U){return Math.min(o.maxSamples,U.samples)}function Gt(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(U){const w=u.render.frame;_.get(U)!==w&&(_.set(U,w),U.update())}function an(U,w){const Q=U.colorSpace,oe=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Xl&&Q!==br&&(Et.getTransfer(Q)===Ut?(oe!==wi||he!==Zn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",Q)),w}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=j,this.getTextureUnits=G,this.setTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=St,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k1(s,e){function t(r,o=br){let l;const u=Et.getTransfer(o);if(r===Zn)return s.UNSIGNED_BYTE;if(r===md)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===zg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===kg)return s.BYTE;if(r===Bg)return s.SHORT;if(r===Qa)return s.UNSIGNED_SHORT;if(r===pd)return s.INT;if(r===Fi)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===Oi)return s.HALF_FLOAT;if(r===Vg)return s.ALPHA;if(r===Gg)return s.RGB;if(r===wi)return s.RGBA;if(r===rr)return s.DEPTH_COMPONENT;if(r===rs)return s.DEPTH_STENCIL;if(r===Wg)return s.RED;if(r===_d)return s.RED_INTEGER;if(r===os)return s.RG;if(r===vd)return s.RG_INTEGER;if(r===xd)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===Bl||r===zl)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Rf||r===Cf||r===bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Af)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf||r===Lf||r===Nf||r===Df||r===If||r===Gl||r===Uf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pf||r===Lf)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Nf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Df)return l.COMPRESSED_R11_EAC;if(r===If)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Gl)return l.COMPRESSED_RG11_EAC;if(r===Uf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===qf||r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ff)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Of)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$f)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jf||r===Zf||r===Jf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===jf)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qf||r===ed||r===Wl||r===td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Qf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===eo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Qg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ki({vertexShader:B1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new Js(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V1 extends ls{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,v=null,m=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",S=new H1,x={},b=t.getContextAttributes();let F=null,A=null;const P=[],N=[],D=new gt;let M=null,L=null;const O=new li;O.viewport=new Kt;const z=new li;z.viewport=new Kt;const H=[O,z],j=new Kx;let G=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let de=P[le];return de===void 0&&(de=new Yu,P[le]=de),de.getTargetRaySpace()},this.getControllerGrip=function(le){let de=P[le];return de===void 0&&(de=new Yu,P[le]=de),de.getGripSpace()},this.getHand=function(le){let de=P[le];return de===void 0&&(de=new Yu,P[le]=de),de.getHandSpace()};function fe(le){const de=N.indexOf(le.inputSource);if(de===-1)return;const Ee=P[de];Ee!==void 0&&(Ee.update(le.inputSource,le.frame,p||u),Ee.dispatchEvent({type:le.type,data:le.inputSource}))}function te(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",J);for(let le=0;le<P.length;le++){const de=N[le];de!==null&&(N[le]=null,P[le].disconnect(de))}G=null,Z=null,S.reset();for(const le in x)delete x[le];if(e.setRenderTarget(F),y=null,m=null,v=null,o=null,A=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(D.width,D.height,!1),L!==null){const le=L.camera;le.fov=L.fov,le.zoom=L.zoom,le.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",te),o.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(D),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,et=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=b.stencil?rs:rr,et=b.stencil?eo:Fi);const ft={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};v=this.getBinding(),m=v.createProjectionLayer(ft),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new Ti(m.textureWidth,m.textureHeight,{format:wi,type:Zn,depthTexture:new no(m.textureWidth,m.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Ti(y.framebufferWidth,y.framebufferHeight,{format:wi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(le){for(let de=0;de<le.removed.length;de++){const Ee=le.removed[de],et=N.indexOf(Ee);et>=0&&(N[et]=null,P[et].disconnect(Ee))}for(let de=0;de<le.added.length;de++){const Ee=le.added[de];let et=N.indexOf(Ee);if(et===-1){for(let ft=0;ft<P.length;ft++)if(ft>=N.length){N.push(Ee),et=ft;break}else if(N[ft]===null){N[ft]=Ee,et=ft;break}if(et===-1)break}const Oe=P[et];Oe&&Oe.connect(Ee)}}const B=new q,Y=new q;function I(le,de,Ee){B.setFromMatrixPosition(de.matrixWorld),Y.setFromMatrixPosition(Ee.matrixWorld);const et=B.distanceTo(Y),Oe=de.projectionMatrix.elements,ft=Ee.projectionMatrix.elements,Vt=Oe[14]/(Oe[10]-1),dt=Oe[14]/(Oe[10]+1),St=(Oe[9]+1)/Oe[5],Dt=(Oe[9]-1)/Oe[5],ht=(Oe[8]-1)/Oe[0],Ft=(ft[8]+1)/ft[0],Zt=Vt*ht,nn=Vt*Ft,Nt=et/(-ht+Ft),Gt=Nt*-ht;if(de.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Gt),le.translateZ(Nt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Oe[10]===-1)le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $=Vt+Nt,an=dt+Nt,Rt=Zt-Gt,U=nn+(et-Gt),w=St*dt/an*$,Q=Dt*dt/an*$;le.projectionMatrix.makePerspective(Rt,U,w,Q,$,an),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function re(le,de){de===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(de.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let de=le.near,Ee=le.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),j.near=z.near=O.near=de,j.far=z.far=O.far=Ee,(G!==j.near||Z!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),G=j.near,Z=j.far),j.layers.mask=le.layers.mask|6,O.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;const et=le.parent,Oe=j.cameras;re(j,et);for(let ft=0;ft<Oe.length;ft++)re(Oe[ft],et);Oe.length===2?I(j,O,z):j.projectionMatrix.copy(O.projectionMatrix),L===null&&le.isPerspectiveCamera&&(L={camera:le,fov:le.fov,zoom:le.zoom}),Se(le,j,et)};function Se(le,de,Ee){Ee===null?le.matrix.copy(de.matrixWorld):(le.matrix.copy(Ee.matrixWorld),le.matrix.invert(),le.matrix.multiply(de.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=id*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(le){h=le,m!==null&&(m.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(le){return x[le]};let Ge=null;function He(le,de){if(_=de.getViewerPose(p||u),E=de,_!==null){const Ee=_.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let et=!1;Ee.length!==j.cameras.length&&(j.cameras.length=0,et=!0);for(let dt=0;dt<Ee.length;dt++){const St=Ee[dt];let Dt=null;if(y!==null)Dt=y.getViewport(St);else{const Ft=v.getViewSubImage(m,St);Dt=Ft.viewport,dt===0&&(e.setRenderTargetTextures(A,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(A))}let ht=H[dt];ht===void 0&&(ht=new li,ht.layers.enable(dt),ht.viewport=new Kt,H[dt]=ht),ht.matrix.fromArray(St.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(St.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),dt===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),et===!0&&j.cameras.push(ht)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const dt=v.getDepthInformation(Ee[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Ee.length;dt++){const St=Ee[dt].camera;if(St){let Dt=x[St];Dt||(Dt=new Qg,x[St]=Dt);const ht=v.getCameraImage(St);Dt.sourceTexture=ht}}}}for(let Ee=0;Ee<P.length;Ee++){const et=N[Ee],Oe=P[Ee];et!==null&&Oe!==void 0&&Oe.update(et,de,p||u)}Ge&&Ge(le,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const We=new r0;We.setAnimationLoop(He),this.setAnimationLoop=function(le){Ge=le},this.dispose=function(){}}}const G1=new jt,f0=new ct;f0.set(-1,0,0,0,1,0,0,0,1);function W1(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,e0(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,b,F,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),m(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),R(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?h(S,x,b,F):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Vn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Vn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const b=e.get(x),F=b.envMap,A=b.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(G1.makeRotationFromEuler(A)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(f0),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,b,F){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*b,S.scale.value=F*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function m(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,b){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const b=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function X1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,P){const N=P.program;r.uniformBlockBinding(A,N)}function p(A,P){let N=o[A.id];N===void 0&&(S(A),N=_(A),o[A.id]=N,A.addEventListener("dispose",b));const D=P.program;r.updateUBOMapping(A,D);const M=e.render.frame;l[A.id]!==M&&(m(A),l[A.id]=M)}function _(A){const P=v();A.__bindingPointIndex=P;const N=s.createBuffer(),D=A.__size,M=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,D,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function v(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const P=o[A.id],N=A.uniforms,D=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let M=0,L=N.length;M<L;M++){const O=N[M];if(Array.isArray(O))for(let z=0,H=O.length;z<H;z++)y(O[z],M,z,D);else y(O,M,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(A,P,N,D){if(R(A,P,N,D)===!0){const M=A.__offset,L=A.value;if(Array.isArray(L)){let O=0;for(let z=0;z<L.length;z++){const H=L[z],j=x(H);E(H,A.__data,O),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,A.__data)}}function E(A,P,N){typeof A=="number"||typeof A=="boolean"?P[0]=A:A.isMatrix3?(P[0]=A.elements[0],P[1]=A.elements[1],P[2]=A.elements[2],P[3]=0,P[4]=A.elements[3],P[5]=A.elements[4],P[6]=A.elements[5],P[7]=0,P[8]=A.elements[6],P[9]=A.elements[7],P[10]=A.elements[8],P[11]=0):ArrayBuffer.isView(A)?P.set(new A.constructor(A.buffer,A.byteOffset,P.length)):A.toArray(P,N)}function R(A,P,N,D){const M=A.value,L=P+"_"+N;if(D[L]===void 0)return typeof M=="number"||typeof M=="boolean"?D[L]=M:ArrayBuffer.isView(M)?D[L]=M.slice():D[L]=M.clone(),!0;{const O=D[L];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return D[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(O.equals(M)===!1)return O.copy(M),!0}}return!1}function S(A){const P=A.uniforms;let N=0;const D=16;for(let L=0,O=P.length;L<O;L++){const z=Array.isArray(P[L])?P[L]:[P[L]];for(let H=0,j=z.length;H<j;H++){const G=z[H],Z=Array.isArray(G.value)?G.value:[G.value];for(let fe=0,te=Z.length;fe<te;fe++){const J=Z[fe],B=x(J),Y=N%D,I=Y%B.boundary,re=Y+I;N+=I,re!==0&&D-re<B.storage&&(N+=D-re),G.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=N,N+=B.storage}}}const M=N%D;return M>0&&(N+=D-M),A.__size=N,A.__cache={},this}function x(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),P}function b(A){const P=A.target;P.removeEventListener("dispose",b);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function F(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:h,update:p,dispose:F}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function Y1(){return Li===null&&(Li=new Ix(q1,16,16,os,Oi),Li.name="DFG_LUT",Li.minFilter=bn,Li.magFilter=bn,Li.wrapS=er,Li.wrapT=er,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class $1{constructor(e={}){const{canvas:t=ux(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=Zn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=y,S=new Set([xd,vd,_d]),x=new Set([Zn,Fi,Qa,eo,md,gd]),b=new Uint32Array(4),F=new Int32Array(4),A=new q;let P=null,N=null;const D=[],M=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1,H=null,j=null,G=null,Z=null;this._outputColorSpace=jn;let fe=0,te=0,J=null,B=-1,Y=null;const I=new Kt,re=new Kt;let Se=null;const Ge=new ot(0);let He=0,We=t.width,le=t.height,de=1,Ee=null,et=null;const Oe=new Kt(0,0,We,le),ft=new Kt(0,0,We,le);let Vt=!1;const dt=new Ad;let St=!1,Dt=!1;const ht=new jt,Ft=new q,Zt=new Kt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Gt(){return J===null?de:1}let $=r;function an(C,X){return t.getContext(C,X)}let Rt,U,w,Q,oe,he,Me,Ae,pe,ge,be,Ke,Pe,Te,je,tt,rt,W,Re,me,Ce,Fe,_e;try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dd}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),$===null){const X="webgl2";if($=an(X,C),$===null)throw an(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(C){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),At("WebGLRenderer: "+C.message),C}function Je(){Rt=new YM($),Rt.init(),Ce=new k1($,Rt),U=new OM($,Rt,e,Ce),w=new F1($,Rt),U.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),j=$.createFramebuffer(),G=$.createFramebuffer(),Z=$.createFramebuffer(),Q=new jM($),oe=new M1,he=new O1($,Rt,w,oe,U,Ce,Q),Me=new qM(O),Ae=new Jx($),Fe=new UM($,Ae),pe=new $M($,Ae,Q,Fe),ge=new JM($,pe,Ae,Fe,Q),W=new ZM($,U,he),je=new kM(oe),be=new y1(O,Me,Rt,U,Fe,je),Ke=new W1(O,oe),Pe=new w1,Te=new P1(Rt),rt=new IM(O,Me,w,ge,E,h),tt=new U1(O,ge,U),_e=new X1($,Q,U,w),Re=new FM($,Rt,Q),me=new KM($,Rt,Q),Q.programs=be.programs,O.capabilities=U,O.extensions=Rt,O.properties=oe,O.renderLists=Pe,O.shadowMap=tt,O.state=w,O.info=Q}R!==Zn&&(L=new eE(R,t.width,t.height,f,o,l));const Ye=new V1(O,$);this.xr=Ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(We,le,!1))},this.getSize=function(C){return C.set(We,le)},this.setSize=function(C,X,ce=!0){if(Ye.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}We=C,le=X,t.width=Math.floor(C*de),t.height=Math.floor(X*de),ce===!0&&(t.style.width=C+"px",t.style.height=X+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(We*de,le*de).floor()},this.setDrawingBufferSize=function(C,X,ce){We=C,le=X,de=ce,t.width=Math.floor(C*ce),t.height=Math.floor(X*ce),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(R===Zn){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Oe)},this.setViewport=function(C,X,ce,ne){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,X,ce,ne),w.viewport(I.copy(Oe).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,X,ce,ne){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,X,ce,ne),w.scissor(re.copy(ft).multiplyScalar(de).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(C){w.setScissorTest(Vt=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){et=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ce=!0){let ne=0;if(C){let ee=!1;if(J!==null){const Ie=J.texture.format;ee=S.has(Ie)}if(ee){const Ie=J.texture.type,Le=x.has(Ie),Ne=rt.getClearColor(),Xe=rt.getClearAlpha(),Ze=Ne.r,lt=Ne.g,ut=Ne.b;Le?(b[0]=Ze,b[1]=lt,b[2]=ut,b[3]=Xe,$.clearBufferuiv($.COLOR,0,b)):(F[0]=Ze,F[1]=lt,F[2]=ut,F[3]=Xe,$.clearBufferiv($.COLOR,0,F))}else ne|=$.COLOR_BUFFER_BIT}X&&(ne|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),H=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),rt.dispose(),Pe.dispose(),Te.dispose(),oe.dispose(),Me.dispose(),ge.dispose(),Fe.dispose(),_e.dispose(),be.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",ao),Ye.removeEventListener("sessionend",oo),Ln.stop()};function Ct(C){C.preventDefault(),vm("WebGLRenderer: Context Lost."),z=!0}function wt(){vm("WebGLRenderer: Context Restored."),z=!1;const C=Q.autoReset,X=tt.enabled,ce=tt.autoUpdate,ne=tt.needsUpdate,ee=tt.type;Je(),Q.autoReset=C,tt.enabled=X,tt.autoUpdate=ce,tt.needsUpdate=ne,tt.type=ee}function gn(C){At("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qn(C){const X=C.target;X.removeEventListener("dispose",Qn),Nr(X)}function Nr(C){us(C),oe.remove(C)}function us(C){const X=oe.get(C).programs;X!==void 0&&(X.forEach(function(ce){be.releaseProgram(ce)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ce,ne,ee,Ie){X===null&&(X=nn);const Le=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ne=qt(C,X,ce,ne,ee);w.setMaterial(ne,Le);let Xe=ce.index,Ze=1;if(ne.wireframe===!0){if(Xe=pe.getWireframeAttribute(ce),Xe===void 0)return;Ze=2}const lt=ce.drawRange,ut=ce.attributes.position;let ze=lt.start*Ze,yt=(lt.start+lt.count)*Ze;Ie!==null&&(ze=Math.max(ze,Ie.start*Ze),yt=Math.min(yt,(Ie.start+Ie.count)*Ze)),Xe!==null?(ze=Math.max(ze,0),yt=Math.min(yt,Xe.count)):ut!=null&&(ze=Math.max(ze,0),yt=Math.min(yt,ut.count));const Jt=yt-ze;if(Jt<0||Jt===1/0)return;Fe.setup(ee,ne,Ne,ce,Xe);let Ot,Lt=Re;if(Xe!==null&&(Ot=Ae.get(Xe),Lt=me,Lt.setIndex(Ot)),ee.isMesh)ne.wireframe===!0?(w.setLineWidth(ne.wireframeLinewidth*Gt()),Lt.setMode($.LINES)):Lt.setMode($.TRIANGLES);else if(ee.isLine){let on=ne.linewidth;on===void 0&&(on=1),w.setLineWidth(on*Gt()),ee.isLineSegments?Lt.setMode($.LINES):ee.isLineLoop?Lt.setMode($.LINE_LOOP):Lt.setMode($.LINE_STRIP)}else ee.isPoints?Lt.setMode($.POINTS):ee.isSprite&&Lt.setMode($.TRIANGLES);if(ee.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const on=ee._multiDrawStarts,ke=ee._multiDrawCounts,en=ee._multiDrawCount,Mt=Xe?Ae.get(Xe).bytesPerElement:1,Mn=oe.get(ne).currentProgram.getUniforms();for(let pt=0;pt<en;pt++)Mn.setValue($,"_gl_DrawID",pt),Lt.render(on[pt]/Mt,ke[pt])}else if(ee.isInstancedMesh)Lt.renderInstances(ze,Jt,ee.count);else if(ce.isInstancedBufferGeometry){const on=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,on);Lt.renderInstances(ze,Jt,ke)}else Lt.render(ze,Jt)};function Dr(C,X,ce,ne){H!==null&&C.isNodeMaterial&&H.setObject(ne,C),St===!0&&je.setState(C,ce,!1),C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=Vn,C.needsUpdate=!0,Fr(C,X,ne),C.side=ss,C.needsUpdate=!0,Fr(C,X,ne),C.side=ci):Fr(C,X,ne)}this.compile=function(C,X,ce=null){ce===null&&(ce=C),H!==null&&H.renderStart(C,X,ce),N=Te.get(ce),N.init(X),M.push(N),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),C!==ce&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights(),H!==null&&H.updateLights(N.state.lightsArray),Dt=this.localClippingEnabled,St=je.init(this.clippingPlanes,Dt),St===!0&&je.setGlobalState(this.clippingPlanes,X),H!==null&&tt.render(N.state.shadowsArray,ce,X);const ne=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Le=0;Le<Ie.length;Le++){const Ne=Ie[Le];Dr(Ne,ce,X,ee),ne.add(Ne)}else Dr(Ie,ce,X,ee),ne.add(Ie)}),N=M.pop(),H!==null&&H.renderEnd(),ne},this.compileAsync=function(C,X,ce=null){const ne=this.compile(C,X,ce);return new Promise(ee=>{function Ie(){if(ne.forEach(function(Le){const Xe=oe.get(Le).currentProgram;(Xe===void 0||Xe.isReady())&&ne.delete(Le)}),ne.size===0){ee(C);return}setTimeout(Ie,10)}Rt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ir=null;function Jl(C){Ir&&Ir(C)}function ao(){Ln.stop()}function oo(){Ln.start()}const Ln=new r0;Ln.setAnimationLoop(Jl),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(C){Ir=C,Ye.setAnimationLoop(C),C===null?Ln.stop():Ln.start()},Ye.addEventListener("sessionstart",ao),Ye.addEventListener("sessionend",oo),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;H!==null&&H.renderStart(C,X);const ce=Ye.enabled===!0&&Ye.isPresenting===!0,ne=L!==null&&(J===null||ce)&&L.begin(O,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(X),X=Ye.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,X,J),N=Te.get(C,M.length),N.init(X),N.state.textureUnits=he.getTextureUnits(),M.push(N),ht.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),dt.setFromProjectionMatrix(ht,Ii,X.reversedDepth),Dt=this.localClippingEnabled,St=je.init(this.clippingPlanes,Dt),P=Pe.get(C,D.length),P.init(),D.push(P),Ye.enabled===!0&&Ye.isPresenting===!0){const Le=O.xr.getDepthSensingMesh();Le!==null&&fs(Le,X,-1/0,O.sortObjects)}fs(C,X,0,O.sortObjects),P.finish(),H!==null&&H.updateLights(N.state.lightsArray),O.sortObjects===!0&&P.sort(Ee,et),Nt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Nt&&rt.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&je.beginShadows();const ee=N.state.shadowsArray;if(tt.render(ee,C,X),St===!0&&je.endShadows(),(ne&&L.hasRenderPass())===!1){const Le=P.opaque,Ne=P.transmissive;if(N.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ne.length>0)for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ut=Xe[Ze];lo(Le,Ne,C,ut)}Nt&&rt.render(C);for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ut=Xe[Ze];ia(P,C,ut,ut.viewport)}}else Ne.length>0&&lo(Le,Ne,C,X),Nt&&rt.render(C),ia(P,C,X)}J!==null&&te===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),ne&&L.end(O),C.isScene===!0&&C.onAfterRender(O,C,X),Fe.resetDefaultState(),B=-1,Y=null,M.pop(),M.length>0?(N=M[M.length-1],he.setTextureUnits(N.state.textureUnits),St===!0&&je.setGlobalState(O.clippingPlanes,N.state.camera)):N=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,H!==null&&H.renderEnd()};function fs(C,X,ce,ne){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(dt)){ne&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Le=ge.update(C),Ne=C.material;Ne.visible&&P.push(C,Le,Ne,ce,Zt.z,null,X)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(dt))){const Le=ge.update(C),Ne=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Zt.copy(Le.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Ne)){const Xe=Le.groups;for(let Ze=0,lt=Xe.length;Ze<lt;Ze++){const ut=Xe[Ze],ze=Ne[ut.materialIndex];ze&&ze.visible&&P.push(C,Le,ze,ce,Zt.z,ut,X)}}else Ne.visible&&P.push(C,Le,Ne,ce,Zt.z,null,X)}}const Ie=C.children;for(let Le=0,Ne=Ie.length;Le<Ne;Le++)fs(Ie[Le],X,ce,ne)}function ia(C,X,ce,ne){const{opaque:ee,transmissive:Ie,transparent:Le}=C;N.setupLightsView(ce),St===!0&&je.setGlobalState(O.clippingPlanes,ce),ne&&w.viewport(I.copy(ne)),ee.length>0&&Ur(ee,X,ce),Ie.length>0&&Ur(Ie,X,ce),Le.length>0&&Ur(Le,X,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function lo(C,X,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const ze=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new Ti(1,1,{generateMipmaps:!0,type:ze?Oi:Zn,minFilter:is,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[ne.id],Le=ne.viewport||I;Ie.setSize(Le.z*O.transmissionResolutionScale,Le.w*O.transmissionResolutionScale);const Ne=O.getRenderTarget(),Xe=O.getActiveCubeFace(),Ze=O.getActiveMipmapLevel();O.setRenderTarget(Ie),O.getClearColor(Ge),He=O.getClearAlpha(),He<1&&O.setClearColor(16777215,.5),O.clear(),Nt&&rt.render(ce);const lt=O.toneMapping;O.toneMapping=Ui;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),St===!0&&je.setGlobalState(O.clippingPlanes,ne),Ur(C,ce,ne),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let yt=0,Jt=X.length;yt<Jt;yt++){const Ot=X[yt],{object:Lt,geometry:on,material:ke,group:en}=Ot;if(ke.side===ci&&Lt.layers.test(ne.layers)){const Mt=ke.side;ke.side=Vn,ke.needsUpdate=!0,ra(Lt,ce,ne,on,ke,en),ke.side=Mt,ke.needsUpdate=!0,ze=!0}}ze===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}O.setRenderTarget(Ne,Xe,Ze),O.setClearColor(Ge,He),ut!==void 0&&(ne.viewport=ut),O.toneMapping=lt}function Ur(C,X,ce){const ne=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Ie=C.length;ee<Ie;ee++){const Le=C[ee],{object:Ne,geometry:Xe,group:Ze}=Le;let lt=Le.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Ne.layers.test(ce.layers)&&ra(Ne,X,ce,Xe,lt,Ze)}}function ra(C,X,ce,ne,ee,Ie){H!==null&&ee.isNodeMaterial&&H.setObject(C,ee),C.onBeforeRender(O,X,ce,ne,ee,Ie),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(O,X,ce,ne,C,Ie),ee.transparent===!0&&ee.side===ci&&ee.forceSinglePass===!1?(ee.side=Vn,ee.needsUpdate=!0,O.renderBufferDirect(ce,X,ne,ee,C,Ie),ee.side=ss,ee.needsUpdate=!0,O.renderBufferDirect(ce,X,ne,ee,C,Ie),ee.side=ci):O.renderBufferDirect(ce,X,ne,ee,C,Ie),C.onAfterRender(O,X,ce,ne,ee,Ie)}function Fr(C,X,ce){X.isScene!==!0&&(X=nn);const ne=oe.get(C),ee=N.state.lights,Ie=N.state.shadowsArray,Le=ee.state.version,Ne=be.getParameters(C,ee.state,Ie,X,ce,N.state.lightProbeGridArray),Xe=be.getProgramCacheKey(Ne);let Ze=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=Me.get(C.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Qn),Ze=new Map,ne.programs=Ze);let ut=Ze.get(Xe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Le)return co(C,Ne),ut}else Ne.uniforms=be.getUniforms(C),H!==null&&C.isNodeMaterial&&H.build(C,ce,Ne),C.onBeforeCompile(Ne,O),ut=be.acquireProgram(Ne,Xe),Ze.set(Xe,ut),ne.uniforms=Ne.uniforms;const ze=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=je.uniform),co(C,Ne),ne.needsLights=aa(C),ne.lightsStateVersion=Le,ne.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.sunLights.value=ee.state.sun,ze.sunLightShadows.value=ee.state.sunShadow,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.sunShadowMatrix.value=ee.state.sunShadowMatrix,ze.sunShadowCascade.value=ee.state.sunShadowCascade,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function sa(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Hl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function co(C,X){const ce=oe.get(C);ce.outputColorSpace=X.outputColorSpace,ce.batching=X.batching,ce.batchingColor=X.batchingColor,ce.instancing=X.instancing,ce.instancingColor=X.instancingColor,ce.instancingMorph=X.instancingMorph,ce.skinning=X.skinning,ce.morphTargets=X.morphTargets,ce.morphNormals=X.morphNormals,ce.morphColors=X.morphColors,ce.morphTargetsCount=X.morphTargetsCount,ce.numClippingPlanes=X.numClippingPlanes,ce.numIntersection=X.numClipIntersection,ce.vertexAlphas=X.vertexAlphas,ce.vertexTangents=X.vertexTangents,ce.toneMapping=X.toneMapping}function Ql(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition(X.matrixWorld);for(let ce=0,ne=C.length;ce<ne;ce++){const ee=C[ce];if(ee.texture!==null&&ee.boundingBox.containsPoint(A))return ee}return null}function qt(C,X,ce,ne,ee){X.isScene!==!0&&(X=nn),he.resetTextureUnits();const Ie=X.fog,Le=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ne=J===null?O.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Et.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=Me.get(ne.envMap||Le,Xe),lt=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!ce.morphAttributes.position,yt=!!ce.morphAttributes.normal,Jt=!!ce.morphAttributes.color;let Ot=Ui;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ot=O.toneMapping);const Lt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,on=Lt!==void 0?Lt.length:0,ke=oe.get(ne),en=N.state.lights;if(St===!0&&(Dt===!0||C!==Y)){const It=C===Y&&ne.id===B;je.setState(ne,C,It)}let Mt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==en.state.version||ke.outputColorSpace!==Ne||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Ze||ne.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==je.numPlanes||ke.numIntersection!==je.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ut||ke.morphTargets!==ze||ke.morphNormals!==yt||ke.morphColors!==Jt||ke.toneMapping!==Ot||ke.morphTargetsCount!==on||!!ke.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=ne.version);let Mn=ke.currentProgram;Mt===!0&&(Mn=Fr(ne,X,ee),H&&ne.isNodeMaterial&&H.onUpdateProgram(ne,Mn,ke));let pt=!1,fi=!1,Bi=!1;const bt=Mn.getUniforms(),Wt=ke.uniforms;if(w.useProgram(Mn.program)&&(pt=!0,fi=!0,Bi=!0),ne.id!==B&&(B=ne.id,fi=!0),ke.needsLights){const It=Ql(N.state.lightProbeGridArray,ee);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,fi=!0)}if(pt||Y!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue($,"projectionMatrix",C.projectionMatrix),bt.setValue($,"viewMatrix",C.matrixWorldInverse);const ei=bt.map.cameraPosition;ei!==void 0&&ei.setValue($,Ft.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&bt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,fi=!0,Bi=!0)}if(ke.needsLights&&(en.state.sunShadowMap.length>0&&bt.setValue($,"sunShadowMap",en.state.sunShadowMap,he),en.state.directionalShadowMap.length>0&&bt.setValue($,"directionalShadowMap",en.state.directionalShadowMap,he),en.state.spotShadowMap.length>0&&bt.setValue($,"spotShadowMap",en.state.spotShadowMap,he),en.state.pointShadowMap.length>0&&bt.setValue($,"pointShadowMap",en.state.pointShadowMap,he)),ee.isSkinnedMesh){bt.setOptional($,ee,"bindMatrix"),bt.setOptional($,ee,"bindMatrixInverse");const It=ee.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),bt.setValue($,"boneTexture",It.boneTexture,he))}ee.isBatchedMesh&&(bt.setOptional($,ee,"batchingTexture"),bt.setValue($,"batchingTexture",ee._matricesTexture,he),bt.setOptional($,ee,"batchingIdTexture"),bt.setValue($,"batchingIdTexture",ee._indirectTexture,he),bt.setOptional($,ee,"batchingColorTexture"),ee._colorsTexture!==null&&bt.setValue($,"batchingColorTexture",ee._colorsTexture,he));const di=ce.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&W.update(ee,ce,Mn),(fi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,bt.setValue($,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Y1()),fi){if(bt.setValue($,"toneMappingExposure",O.toneMappingExposure),ke.needsLights&&ec(Wt,Bi),Ie&&ne.fog===!0&&Ke.refreshFogUniforms(Wt,Ie),Ke.refreshMaterialUniforms(Wt,ne,de,le,N.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;Wt.probesSH.value=It.texture,Wt.probesMin.value.copy(It.boundingBox.min),Wt.probesMax.value.copy(It.boundingBox.max),Wt.probesResolution.value.copy(It.resolution)}Hl.upload($,sa(ke),Wt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hl.upload($,sa(ke),Wt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue($,"center",ee.center),bt.setValue($,"modelViewMatrix",ee.modelViewMatrix),bt.setValue($,"normalMatrix",ee.normalMatrix),bt.setValue($,"modelMatrix",ee.matrixWorld),ne.uniformsGroups!==void 0){const It=ne.uniformsGroups;for(let ei=0,hi=It.length;ei<hi;ei++){const pi=It[ei];_e.update(pi,Mn),_e.bind(pi,Mn)}}return Mn}function ec(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function aa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,X,ce){const ne=oe.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(C.texture).__webglTexture=X,oe.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ce=oe.get(C);ce.__webglFramebuffer=X,ce.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ce=0){J=C,fe=X,te=ce;let ne=null,ee=!1,Ie=!1;if(C){const Ne=oe.get(C);if(Ne.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(C.viewport),re.copy(C.scissor),Se=C.scissorTest,w.viewport(I),w.scissor(re),w.setScissorTest(Se),B=-1;return}else if(Ne.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Ne.__hasExternalTextures)he.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ne.__boundDepthTexture!==lt){if(lt!==null&&oe.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ze=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ne=Ze[X][ce]:ne=Ze[X],ee=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?ne=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[ce]:ne=Ze,I.copy(C.viewport),re.copy(C.scissor),Se=C.scissorTest}else I.copy(Oe).multiplyScalar(de).floor(),re.copy(ft).multiplyScalar(de).floor(),Se=Vt;if(ce!==0&&(ne=j),w.bindFramebuffer($.FRAMEBUFFER,ne)&&w.drawBuffers(C,ne),w.viewport(I),w.scissor(re),w.setScissorTest(Se),ee){const Ne=oe.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,ce)}else if(Ie){const Ne=X;for(let Xe=0;Xe<C.textures.length;Xe++){const Ze=oe.get(C.textures[Xe]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,ce,Ne)}}else if(C!==null&&ce!==0){const Ne=oe.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ne.__webglTexture,ce)}B=-1};function oa(C){const X=oe.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=U.textureFormatReadable(C.format),X.__typeReadable=U.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,ce,ne,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe){w.bindFramebuffer($.FRAMEBUFFER,Xe);try{const Ze=C.textures[Ne],lt=Ze.format,ut=Ze.type;C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ne);const ze=oa(Ze);if(ze.__formatReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ne&&ce>=0&&ce<=C.height-ee&&$.readPixels(X,ce,ne,ee,Ce.convert(lt),Ce.convert(ut),Ie)}finally{const Ze=J!==null?oe.get(J).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,X,ce,ne,ee,Ie,Le,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Xe=Xe[Le]),Xe)if(X>=0&&X<=C.width-ne&&ce>=0&&ce<=C.height-ee){w.bindFramebuffer($.FRAMEBUFFER,Xe);const Ze=C.textures[Ne],lt=Ze.format,ut=Ze.type;C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ne);const ze=oa(Ze);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,yt),$.bufferData($.PIXEL_PACK_BUFFER,Ie.byteLength,$.STREAM_READ),$.readPixels(X,ce,ne,ee,Ce.convert(lt),Ce.convert(ut),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Jt=J!==null?oe.get(J).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,Jt);const Ot=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await fx($,Ot,4),$.bindBuffer($.PIXEL_PACK_BUFFER,yt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ie),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(yt),$.deleteSync(Ot),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ce=0){const ne=Math.pow(2,-ce),ee=Math.floor(C.image.width*ne),Ie=Math.floor(C.image.height*ne),Le=X!==null?X.x:0,Ne=X!==null?X.y:0;he.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,ce,0,0,Le,Ne,ee,Ie),w.unbindTexture()},this.copyTextureToTexture=function(C,X,ce=null,ne=null,ee=0,Ie=0){let Le,Ne,Xe,Ze,lt,ut,ze,yt,Jt;const Ot=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ce!==null)Le=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,lt=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const Wt=Math.pow(2,-ee);Le=Math.floor(Ot.width*Wt),Ne=Math.floor(Ot.height*Wt),C.isDataArrayTexture?Xe=Ot.depth:C.isData3DTexture?Xe=Math.floor(Ot.depth*Wt):Xe=1,Ze=0,lt=0,ut=0}ne!==null?(ze=ne.x,yt=ne.y,Jt=ne.z):(ze=0,yt=0,Jt=0);const Lt=Ce.convert(X.format),on=Ce.convert(X.type);let ke;X.isData3DTexture?(he.setTexture3D(X,0),ke=$.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),ke=$.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),ke=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);const en=w.getParameter($.UNPACK_ROW_LENGTH),Mt=w.getParameter($.UNPACK_IMAGE_HEIGHT),Mn=w.getParameter($.UNPACK_SKIP_PIXELS),pt=w.getParameter($.UNPACK_SKIP_ROWS),fi=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,Ot.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ot.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei($.UNPACK_SKIP_ROWS,lt),w.pixelStorei($.UNPACK_SKIP_IMAGES,ut);const Bi=C.isDataArrayTexture||C.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Wt=oe.get(C),di=oe.get(X),It=oe.get(Wt.__renderTarget),ei=oe.get(di.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,It.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let hi=0;hi<Xe;hi++)Bi&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,ee,ut+hi),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,oe.get(X).__webglTexture,Ie,Jt+hi)),$.blitFramebuffer(Ze,lt,Le,Ne,ze,yt,Le,Ne,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||oe.has(C)){const Wt=oe.get(C),di=oe.get(X);w.bindFramebuffer($.READ_FRAMEBUFFER,G),w.bindFramebuffer($.DRAW_FRAMEBUFFER,Z);for(let It=0;It<Xe;It++)Bi?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Wt.__webglTexture,ee,ut+It):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Wt.__webglTexture,ee),bt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,di.__webglTexture,Ie,Jt+It):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,di.__webglTexture,Ie),ee!==0?$.blitFramebuffer(Ze,lt,Le,Ne,ze,yt,Le,Ne,$.COLOR_BUFFER_BIT,$.NEAREST):bt?$.copyTexSubImage3D(ke,Ie,ze,yt,Jt+It,Ze,lt,Le,Ne):$.copyTexSubImage2D(ke,Ie,ze,yt,Ze,lt,Le,Ne);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else bt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(ke,Ie,ze,yt,Jt,Le,Ne,Xe,Lt,on,Ot.data):X.isCompressedArrayTexture?$.compressedTexSubImage3D(ke,Ie,ze,yt,Jt,Le,Ne,Xe,Lt,Ot.data):$.texSubImage3D(ke,Ie,ze,yt,Jt,Le,Ne,Xe,Lt,on,Ot):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ie,ze,yt,Le,Ne,Lt,on,Ot.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ie,ze,yt,Ot.width,Ot.height,Lt,Ot.data):$.texSubImage2D($.TEXTURE_2D,Ie,ze,yt,Le,Ne,Lt,on,Ot);w.pixelStorei($.UNPACK_ROW_LENGTH,en),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,Mt),w.pixelStorei($.UNPACK_SKIP_PIXELS,Mn),w.pixelStorei($.UNPACK_SKIP_ROWS,pt),w.pixelStorei($.UNPACK_SKIP_IMAGES,fi),Ie===0&&X.generateMipmaps&&$.generateMipmap(ke),w.unbindTexture()},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){fe=0,te=0,J=null,w.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Il=Array.from({length:256},(s,e)=>{const t=e*Math.PI*2/256;return[Math.sin(t)**3*1.12,(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t)+2)/16]});function K1(s){const e=Math.cos(s),t=Math.sin(s);let r=1;for(let o=0;o<Il.length;o++){const l=Il[o],u=Il[(o+1)%Il.length],f=u[0]-l[0],h=u[1]-l[1],p=e*h-t*f;if(Math.abs(p)<1e-8)continue;const _=(l[0]*h-l[1]*f)/p,v=(l[0]*t-l[1]*e)/p;if(_>0&&v>=0&&v<=1){r=_;break}}return r}const fg=Array.from({length:1024},(s,e)=>K1(e*Math.PI*2/1024)),Ul=fg.map((s,e)=>{let t=0,r=0;for(let o=-36;o<=36;o++){const l=Math.exp(-o*o/288);t+=fg[(e+o+1024)%1024]*l,r+=l}return t/r});function d0(s,e){if(s==="heart"){const r=(e/(Math.PI*2)+1)%1*Ul.length,o=Math.floor(r);return Ul[o]*(1-(r-o))+Ul[(o+1)%Ul.length]*(r-o)}const t=Math.cos(5*(e-Math.PI/2));return s==="star"?.59+.53*((t+1)/2)**2:.94+.18*t-.025*Math.cos(10*(e-Math.PI/2))}function ld(s,e,t,r,o,l=1){if(s==="block"){const u=Math.max(Math.abs(e),Math.abs(t),Math.abs(r)),f=Math.hypot(e,t,r);o.x=e*(.81/u+.19/f)*1.2,o.y=t*(.81/u+.19/f)*.68,o.z=r*(.81/u+.19/f)*.84}else if(s==="ball"){const u=1+.0025*Math.sin(e*9+t*4)*Math.sin(r*8);o.x=e*u,o.y=t*u,o.z=r*u}else{const u=d0(s,Math.atan2(t,e)),f=Math.hypot(e,t),h=f*f*(3-2*f),p=1+(u-1)*h;o.x=e*p,o.y=t*p,o.z=r*(s==="heart"?.55:s==="star"?.45:.48)}return o.x*=l,o.y*=l,o.z*=l,o}function j1(s,e,t,r,o){const l=Math.hypot(e,t,r)||1;e/=l,t/=l,r/=l;let u=0,f=r,h=-t;Math.hypot(f,h)<.1&&(u=-r,f=0,h=e);const p=Math.hypot(u,f,h);u/=p,f/=p,h/=p;const _=t*h-r*f,v=r*u-e*h,m=e*f-t*u,y=ld(s,e,t,r,{}),E={},R={},S=.001,x=(L,O,z,H)=>{const j=Math.hypot(L,O,z);ld(s,L/j,O/j,z/j,H)};x(e+u*S,t+f*S,r+h*S,E),x(e+_*S,t+v*S,r+m*S,R);const b=E.x-y.x,F=E.y-y.y,A=E.z-y.z,P=R.x-y.x,N=R.y-y.y,D=R.z-y.z;o.x=F*D-A*N,o.y=A*P-b*D,o.z=b*N-F*P;const M=Math.hypot(o.x,o.y,o.z)||1;return o.x/=M,o.y/=M,o.z/=M,o}function Z1(s,e,t,r,o){if(s!=="ball"&&s!=="block"){const u=d0(s,Math.atan2(t,e)),f=Math.hypot(e,t);let h=0,p=1;for(let m=0;m<24;m++){const y=(h+p)/2;y*(1+(u-1)*y*y*(3-2*y))<f?h=y:p=y}const _=(h+p)/2,v=f>1e-9?_/f:1;e*=v,t*=v,r/=s==="heart"?.55:s==="star"?.45:.48}const l=Math.hypot(e,t,r)||1;return o.x=e/l,o.y=t/l,o.z=r/l,o}function J1(){const s=document.createElement("canvas");s.width=1024,s.height=512;const e=s.getContext("2d");e.fillStyle="#b6d762",e.fillRect(0,0,1024,512);for(let r=0;r<26;r++){const o=(r*283+71)%1024,l=(r*149+38)%512,u=50+r%4*20,f=e.createRadialGradient(o,l,0,o,l,u);f.addColorStop(0,r%2?"#d2e38b77":"#75a83d77"),f.addColorStop(1,"#b6d76200"),e.fillStyle=f,e.fillRect(o-u,l-u,u*2,u*2)}for(let r=0;r<16;r++){const o=45+r*211%920,l=70+r*107%370;e.save(),e.translate(o,l),e.rotate(Math.sin(r*3)*.5),e.beginPath(),e.moveTo(0,-13),e.bezierCurveTo(-24,-28,-29,3,-16,17),e.bezierCurveTo(-7,26,-5,21,0,21),e.bezierCurveTo(6,21,8,27,18,17),e.bezierCurveTo(30,2,22,-28,0,-13),e.fillStyle="#70a443",e.fill(),e.lineWidth=6,e.strokeStyle="#9fc957",e.stroke(),e.save(),e.scale(.75,.75),e.fillStyle="#f1f3cf",e.fill(),e.restore(),e.fillStyle="#435b32";for(const u of[-1,1])e.beginPath(),e.ellipse(u*6,2,2.3,4,-u*.4,0,Math.PI*2),e.fill();e.fillStyle="#60923a",e.beginPath(),e.ellipse(9,-20,9,4,-.55,0,Math.PI*2),e.fill(),e.restore()}for(let r=0;r<100;r++){const o=(r*137+83)%1024,l=(r*79+44)%512,u=r%8===0?5:2;e.fillStyle=r%3===0?"#f9f4d3":"#e6edb4",e.beginPath();for(let f=0;f<8;f++){const h=f*Math.PI/4,p=f%2?u*.28:u;e.lineTo(o+Math.cos(h)*p,l+Math.sin(h)*p)}e.closePath(),e.fill()}const t=new Jg(s);return t.colorSpace=jn,t.wrapS=Ja,t}function dg(s,e,t=Math.random,r=1){let o=0,l=0,u=0,f=0,h=0,p=.005,_=0,v=0,m=1100,y=.7;const E=Math.exp(-1/(e*.027));let R=Math.exp(-1/(e*p)),S=0;for(let b=0;b<s.length;b++){b>=h&&(y=y*.72+(.35+t()*.9)*.28,o=(.36+t()*.6)*y,l=Math.min(1,l+.3+t()*.25),p=(.003+t()*.006)*r,R=Math.exp(-1/(e*p)),S=Math.exp(-1/(e*.007*r)),m=(900+t()*1800)/Math.sqrt(r),_=.07*o*Math.sqrt(r),v=t()*Math.PI*2,h=b+Math.max(1,Math.floor(e*(.008+t()*.014)*Math.sqrt(r)))),o*=R,l*=E,_*=S,v+=m*2*Math.PI/e;const F=t()*2-1;u=u*.975+F*.025,f=f*.61+F*.39,s[b]=(f*.9+F*.22)*o+(f*.24+u*.65)*l+Math.sin(v)*_}const x=Math.min(Math.floor(s.length/2),Math.floor(e*.008));for(let b=0;b<x;b++)s[b]*=b/x,s[s.length-1-b]*=b/x;return s.length&&(s[0]=0,s[s.length-1]=0),s}class Q1{constructor(){De(this,"context");De(this,"master");De(this,"rolling");De(this,"rollingGain");De(this,"rollingFilter");De(this,"rollingPan");De(this,"rollingLevel",0);De(this,"enabled",!0);De(this,"volume",.65);De(this,"voices",new Set)}unlock(){if(this.context??(this.context=new AudioContext),!this.master){this.master=this.context.createGain();const e=this.context.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=3.5,e.attack.value=.007,e.release.value=.13,this.master.connect(e),e.connect(this.context.destination)}if(this.master.gain.value=this.enabled?this.volume:0,!this.rolling){const e=this.context.createBuffer(1,Math.floor(this.context.sampleRate*6.73),this.context.sampleRate);dg(e.getChannelData(0),this.context.sampleRate),this.rolling=this.context.createBufferSource(),this.rolling.buffer=e,this.rolling.loop=!0,this.rollingFilter=this.context.createBiquadFilter(),this.rollingFilter.type="lowpass",this.rollingFilter.frequency.value=2800;const t=this.context.createBiquadFilter();t.type="highpass",t.frequency.value=280,this.rollingGain=this.context.createGain(),this.rollingGain.gain.value=0,this.rolling.connect(this.rollingFilter),this.rollingFilter.connect(t),t.connect(this.rollingGain),this.rollingPan=this.context.createStereoPanner(),this.rollingGain.connect(this.rollingPan),this.rollingPan.connect(this.master),this.rolling.start()}this.context.resume().catch(()=>{})}set(e,t){this.enabled=e,this.volume=t,this.master&&this.context&&this.master.gain.setTargetAtTime(e?t:0,this.context.currentTime,.02)}pressure(e,t,r,o,l=0){var h;const u=this.context;if(!u||!this.rollingGain||!this.rolling||!this.rollingFilter)return;(h=this.rollingPan)==null||h.pan.setTargetAtTime(Math.max(-.75,Math.min(.75,l)),u.currentTime,.045);const f=e<.08?0:Math.pow(e,.85)*(.4+.45*t);(Math.abs(f-this.rollingLevel)>.015||f===0&&this.rollingLevel!==0)&&(this.rollingLevel=f,this.rollingGain.gain.setTargetAtTime(f*.24,u.currentTime,f?.055:.04),this.rolling.playbackRate.setTargetAtTime((.88+e*.28)*Math.sqrt(r),u.currentTime,.08),this.rollingFilter.frequency.setTargetAtTime(1800+o*1400+e*350,u.currentTime,.06))}play(e,t,r,o,l){const u=this.context;if(!u||!this.master||!this.enabled||u.state!=="running"||this.voices.size>24)return;const f=e==="crack"||e==="crumble",h=e==="crack"?.5:e==="crumble"?.28:e==="squish"?.17:.065,p=u.createBuffer(1,Math.ceil(u.sampleRate*h),u.sampleRate),_=p.getChannelData(0);if(f){dg(_,u.sampleRate,Math.random,e==="crack"?1.45:.68);for(let S=0;S<_.length;S++){const x=S/u.sampleRate;_[S]*=Math.exp(-x*(e==="crack"?4.5:7))*1.8}}else{let S=0;for(let x=0;x<_.length;x++){const b=x/u.sampleRate,F=Math.random()*2-1;S=(S+F*.13)/1.05;const A=Math.exp(-b*(e==="squish"?24:36));_[x]=((e==="squish"?S*2:F*.5)+Math.sin(b*2*Math.PI*170*o)*.17)*A}}const v=u.createBufferSource();v.buffer=p,v.playbackRate.value=o*(.88+Math.random()*.24);const m=u.createBiquadFilter();m.type=e==="impact"?"bandpass":"lowpass",m.frequency.value=e==="squish"?700:e==="impact"?1300:e==="crack"?3200+l*1400:4400+l*1e3,m.Q.value=.45;const y=u.createBiquadFilter();y.type="highpass",y.frequency.value=e==="squish"?80:e==="crumble"?650:220,y.Q.value=.45;const E=u.createGain();E.gain.value=(e==="impact"?.07:e==="crack"?.105:e==="crumble"?.13:.24)*Math.max(.15,t);const R=u.createStereoPanner();R.pan.value=Math.max(-.85,Math.min(.85,r)),v.connect(m),m.connect(y),y.connect(E),E.connect(R),R.connect(this.master),this.voices.add(v),v.onended=()=>{this.voices.delete(v),v.disconnect(),m.disconnect(),y.disconnect(),E.disconnect(),R.disconnect()},v.start()}stop(e=!1){if(this.context&&this.rollingGain&&(this.rollingGain.gain.setTargetAtTime(0,this.context.currentTime,e?.035:.015),this.rollingLevel=0),!e){for(const t of this.voices)try{t.stop()}catch{}this.voices.clear()}}dispose(){var e,t;this.stop(),(e=this.rolling)==null||e.stop(),(t=this.context)==null||t.close()}}const ew=190,tw=10;function hg(s,e,t,r){return{phase:"pending",x:s,y:e,at:t,target:r}}function h0(s,e){return s.phase!=="pending"||e-s.at<ew||s.target==="empty"?s:{...s,phase:s.target==="fragment"?"fragment":"press"}}function nw(s,e,t,r){const o=h0(s,r);return o.phase!=="pending"?o:Math.hypot(e-s.x,t-s.y)>=tw?{...s,phase:"rotate"}:o}const Pr=(s,e)=>s[0]*e[0]+s[1]*e[1]+s[2]*e[2],ns=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]],ea=(s,e)=>s.map((t,r)=>t-e[r]),Vl=s=>{const e=Math.hypot(...s)||1;return s.map(t=>t/e)};function p0(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function cd(s,e,t=!0){const r=[];for(let o=0;o<s.length;o++){const l=(o+s.length-1)%s.length,u=s[l],f=s[o],h=e[l],p=e[o],_=t?h>=0:h<=0,v=t?p>=0:p<=0;if(_!==v){const m=h/(h-p);r.push(u.map((y,E)=>y+(f[E]-y)*m))}v&&r.push(f)}return r}function ud(s,e){for(let t=1;t<s.length-1;t++){const r=s[0],o=s[t],l=s[t+1];Math.hypot(...ns(ea(o,r),ea(l,r)))>1e-10&&e.push(...r,...o,...l)}}function Cr(s){let e=0;for(let t=0;t<s.length;t+=9){const r=Array.from(s.slice(t,t+3)),o=Array.from(s.slice(t+3,t+6)),l=Array.from(s.slice(t+6,t+9));e+=Math.hypot(...ns(ea(o,r),ea(l,r)))/2}return e}function iw(s=30,e=73){const t=p0(e);return Array.from({length:s},(r,o)=>{const l=1-(o+.5)*2/s,u=Math.sqrt(1-l*l),f=o*2.39996323+(t()-.5)*.5,h=Vl([Math.cos(f)*u+(t()-.5)*.22,l+(t()-.5)*.22,Math.sin(f)*u+(t()-.5)*.22]);return{x:h[0],y:h[1],z:h[2],bias:(t()-.5)*.055}})}function rw(s,e){return e.map((t,r)=>{const o=[],l=e.map((u,f)=>({j:f,n:[t.x-u.x,t.y-u.y,t.z-u.z],offset:(t.bias??0)-(u.bias??0)})).filter(u=>u.j!==r);for(let u=0;u<s.length;u+=9){let f=[0,1,2].map(h=>Array.from(s.slice(u+h*3,u+h*3+3)));for(const{n:h,offset:p}of l)if(f=cd(f,f.map(_=>Pr(_,h)+p)),f.length<3)break;ud(f,o)}return new Float32Array(o)})}function gf(s,e,t,r,o,l){const u=[],f=[];for(let h=0;h<s.length;h+=9){const p=[0,1,2].map(v=>Array.from(s.slice(h+v*3,h+v*3+3))),_=p.map(v=>Pr(v,e)-t+o*(Math.sin(Pr(v,r)*21+l)+.42*Math.sin(Pr(v,r)*47+l*1.9)));ud(cd(p,_,!0),u),ud(cd(p,_,!1),f)}return[new Float32Array(u),new Float32Array(f)]}function sw(s,e=null,t=73){const r=p0(t),o=[0,0,0],l=[0,0,0];for(let D=0;D<s.length;D+=9){const M=[0,1,2].map(L=>Array.from(s.slice(D+L*3,D+L*3+3)));M.forEach(L=>L.forEach((O,z)=>o[z]+=O)),ns(ea(M[1],M[0]),ea(M[2],M[0])).forEach((L,O)=>l[O]+=L)}o.forEach((D,M)=>o[M]=D*3/s.length);const u=Vl(l),f=Vl(ns(Math.abs(u[1])<.9?[0,1,0]:[1,0,0],u)),h=ns(u,f),p=Math.sqrt(Cr(s)),_=r()*Math.PI*2,v=f.map((D,M)=>D*Math.cos(_)+h[M]*Math.sin(_)),m=ns(u,v),y=e?[e.x,e.y,e.z]:o;let E=Pr(o,v)*.72+Pr(y,v)*.28+(r()-.5)*p*.19,R=gf(s,v,E,m,p*.032,r()*6.28);const S=Cr(s);if(R.some(D=>Cr(D)<S*.09)&&(E=Pr(o,v),R=gf(s,v,E,m,p*.02,r()*6.28)),R.some(D=>Cr(D)<S*.025))return[s];const x=Cr(R[0])>Cr(R[1])?0:1,b=_+1.2+r()*.7,F=f.map((D,M)=>D*Math.cos(b)+h[M]*Math.sin(b)),A=Vl(F),P=[0,0,0];for(let D=0;D<R[x].length;D+=3)for(let M=0;M<3;M++)P[M]+=R[x][D+M]*3/R[x].length;const N=gf(R[x],A,Pr(P,A)+(r()-.5)*p*.12,ns(u,A),p*.024,r()*6.28);return N.every(D=>Cr(D)>S*.06)&&R.splice(x,1,...N),R}function m0(s,e){return .2+e*.26+(1-s)*.23}function aw(s,e,t,r,o,l=12){return t<m0(r,o)?[]:s.filter(u=>u.normal.x*e.x+u.normal.y*e.y+u.normal.z*e.z>1-(.18+t*.62)).sort((u,f)=>(f.normal.x-u.normal.x)*e.x+(f.normal.y-u.normal.y)*e.y+(f.normal.z-u.normal.z)*e.z).slice(0,l)}function ow(s,e,t,r,o,l,u,f=null){const h=s-r.x,p=e-r.y,_=t-r.z,v=h*o.x+p*o.y+_*o.z,m=h-v*o.x,y=p-v*o.y,E=_-v*o.z,R=m*m+y*y+E*E,S=.65+l*.55,x=Math.max(0,Math.min(1,1+v/1.65)),b=Math.exp(-2.4*R/(S*S))*x*x,F=l*.62*b,A=l*.18*x*Math.exp(-R/(S*S)),P=f?Math.exp(-.9*R/(S*S))*x:0;return u.x=s-o.x*F+m*A+((f==null?void 0:f.x)??0)*P,u.y=e-o.y*F+y*A+((f==null?void 0:f.y)??0)*P,u.z=t-o.z*F+E*A+((f==null?void 0:f.z)??0)*P,u}function lw(s,e,t,r,o){let l=0,u=0,f=0,h=0;for(const p of r){ow(s,e,t,p.contact,p.normal,p.depth,o,p.pull);const _=o.x-s,v=o.y-e,m=o.z-t,y=_*_+v*v+m*m;l+=_*y,u+=v*y,f+=m*y,h+=y}return o.x=s+(h>1e-12?l/h:0),o.y=e+(h>1e-12?u/h:0),o.z=t+(h>1e-12?f/h:0),o}function cw(s,e,t,r,o=.44){const l=Math.hypot(s,e,t),u=l>1e-8?o*Math.tanh(l/o)/l:0;return r.x=s*u,r.y=e*u,r.z=t*u,r}function uw(s,e,t,r,o){const l=Math.max(1,Math.ceil(Math.min(r,.05)*120)),u=Math.min(r,.05)/l,f=o?17:6.5,h=o?1:1.08;for(let p=0;p<l;p++)for(const _ of["x","y","z"])e[_]+=(f*f*(t[_]-s[_])-2*h*f*e[_])*u,s[_]+=e[_]*u;return s}function fw(s,e,t=0,r=!0){var l,u,f;if(!r)return 0;let o=0;for(const h of e){const p=s.x-h.contact.x,_=s.y-h.contact.y,v=s.z-h.contact.z,m=p*h.normal.x+_*h.normal.y+v*h.normal.z,y=Math.max(0,p*p+_*_+v*v-m*m),E=.65+h.depth*.55,R=Math.max(0,Math.min(1,1+m/1.4)),S=Math.exp(-1.8*y/(E*E))*R,x=Math.hypot(((l=h.pull)==null?void 0:l.x)??0,((u=h.pull)==null?void 0:u.y)??0,((f=h.pull)==null?void 0:f.z)??0);o=Math.max(o,S*(.12*h.depth**1.4+.24*x))}return Math.min(.25,.016+t*.009+o)}class dw{constructor(e,t,r,o){De(this,"renderer");De(this,"scene",new bm);De(this,"camera",new li(33,1,.1,30));De(this,"ball",new $a);De(this,"cells",[]);De(this,"core");De(this,"coreRest");De(this,"audio",new Q1);De(this,"options");De(this,"spec");De(this,"callback");De(this,"ray",new jx);De(this,"pointer",new gt);De(this,"held",!1);De(this,"pressure",0);De(this,"direction",new q(0,0,1));De(this,"last",{x:0,y:0});De(this,"pointerId",null);De(this,"gesture",null);De(this,"contactCell",null);De(this,"fragmentConsumed",!1);De(this,"contact",new q(0,0,1));De(this,"deformed",new q);De(this,"normalA",new q);De(this,"normalB",new q);De(this,"tangentA",new q);De(this,"tangentB",new q);De(this,"baseNormal",new q);De(this,"lastGeometryState","");De(this,"shellSeed",73);De(this,"chipRotation",new cs);De(this,"appleTexture",null);De(this,"pull",new q);De(this,"pullVelocity",new q);De(this,"pullTarget",new q);De(this,"grabWorld",new q);De(this,"dragPoint",new q);De(this,"dragPlane",new Qi);De(this,"imprints",[]);De(this,"deformations",[]);De(this,"frame",0);De(this,"lastTime",0);De(this,"lastFracture",0);De(this,"lastReport",0);De(this,"crumbs",0);De(this,"rotation",0);De(this,"broken",0);De(this,"total",30);De(this,"disposed",!1);De(this,"hidden",!1);De(this,"squeeze",0);De(this,"residual",0);De(this,"dragTravel",0);De(this,"lastPeel",0);De(this,"resize");De(this,"env");De(this,"grain");De(this,"action","준비됐어요");De(this,"down",e=>{var r;if(!this.options.active||this.options.paused||this.hidden||this.pointerId!==null||e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault(),this.audio.unlock();const t=this.hit(e);this.contactCell=t?this.cells.find(o=>o.mesh===t.object)??null:null,this.host.dataset.hitPiece=String(((r=this.contactCell)==null?void 0:r.mesh.id)??""),this.gesture=hg(e.clientX,e.clientY,performance.now(),t?"ball":"empty"),this.fragmentConsumed=!1,this.held=!0,this.pressure=0,this.dragTravel=0,this.pointerId=e.pointerId,this.last={x:e.clientX,y:e.clientY},this.renderer.domElement.setPointerCapture(e.pointerId),this.renderer.domElement.focus({preventScroll:!0}),t&&(this.setContact(t.point,t),this.grabWorld.copy(t.point),this.dragPlane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(new q),t.point)),this.host.dataset.gesture="pending"});De(this,"move",e=>{if(e.pointerId!==this.pointerId||!this.held||this.options.paused||!this.gesture)return;const t=this.gesture.phase;this.gesture=nw(this.gesture,e.clientX,e.clientY,performance.now());const r=e.clientX-this.last.x,o=e.clientY-this.last.y;if(this.last={x:e.clientX,y:e.clientY},this.host.dataset.gesture=this.gesture.phase,this.gesture.phase==="rotate"){const l=t==="pending"?e.clientX-this.gesture.x:r,u=t==="pending"?e.clientY-this.gesture.y:o;this.ball.rotation.y+=l*.009,this.ball.rotation.x+=u*.007,this.pressure=0,this.action="손끝으로 돌려보기"}else if(this.gesture.phase==="press"){this.dragTravel+=Math.hypot(r,o);const l=this.hit(e),u=this.cells.find(f=>f.mesh===(l==null?void 0:l.object));u&&(this.contactCell=u),this.ray.ray.intersectPlane(this.dragPlane,this.dragPoint)&&(this.dragPoint.sub(this.grabWorld).applyQuaternion(this.ball.quaternion.clone().invert()).divide(this.ball.scale),cw(this.dragPoint.x,this.dragPoint.y,this.dragPoint.z,this.pullTarget),this.host.dataset.pullTarget=this.pullTarget.length().toFixed(4)),this.pressure=Math.min(1,this.pressure+Math.hypot(r,o)*.0025)}});De(this,"up",e=>{var t,r;e instanceof PointerEvent&&e.pointerId!==this.pointerId||((e==null?void 0:e.type)==="pointerup"&&!this.options.paused&&((t=this.gesture)==null?void 0:t.phase)==="pending"&&((r=this.contactCell)!=null&&r.cracked)&&!this.fragmentConsumed&&this.refine(this.contactCell),this.clearInput((e==null?void 0:e.type)==="pointerup"))});De(this,"keydown",e=>{!this.options.active||this.options.paused||this.pointerId!==null||(e.code==="Space"?(e.preventDefault(),this.audio.unlock(),this.held=!0,this.gesture={...hg(0,0,performance.now(),"ball"),phase:"press"},this.direction.set(0,.2,1).normalize(),this.contact.copy(this.shape(this.direction.clone())),e.repeat||(this.dragTravel=0)):e.code.startsWith("Arrow")&&(e.preventDefault(),this.ball.rotation.y+=e.code==="ArrowLeft"?-.2:e.code==="ArrowRight"?.2:0,this.ball.rotation.x+=e.code==="ArrowUp"?-.2:e.code==="ArrowDown"?.2:0))});De(this,"keyup",e=>{e.code==="Space"&&this.pointerId===null&&this.clearInput(!0)});De(this,"visibility",()=>{this.hidden=document.hidden,this.hidden&&this.clearInput()});De(this,"tick",e=>{var r,o,l;if(this.disposed)return;const t=Math.min(.033,(e-(this.lastTime||e))/1e3);if(this.lastTime=e,!this.options.paused&&!this.hidden){this.options.active||(this.ball.rotation.y+=t*.12),this.held&&this.gesture&&(this.gesture=h0(this.gesture,performance.now()),this.host.dataset.gesture=this.gesture.phase),this.held&&((r=this.gesture)==null?void 0:r.phase)==="press"&&(this.pressure=Math.min(1,this.pressure+t*.82),e-this.lastFracture>145&&this.pressure>=m0(this.options.cold,this.options.thickness)&&(this.fracture(),this.lastFracture=e));const u=this.held&&((o=this.gesture)==null?void 0:o.phase)==="press",f=u?this.pressure:0;this.squeeze+=(f-this.squeeze)*(u?.15:.025),uw(this.pull,this.pullVelocity,this.pullTarget,t,u);const h=this.imprints.filter(m=>this.contact.distanceTo(new q(m.contact.x,m.contact.y,m.contact.z))<.4),p=Math.max(this.squeeze,...h.map(m=>m.depth));this.deformations=this.imprints.filter(m=>!h.includes(m)),(p>.001||this.pull.lengthSq()>1e-6)&&this.deformations.push({contact:this.contact,normal:this.direction,depth:p,pull:this.pull}),this.host.dataset.pull=JSON.stringify(this.pull),this.host.dataset.stretch=this.pull.length().toFixed(4),this.host.dataset.imprints=String(this.imprints.length),this.host.dataset.retained=this.residual.toFixed(4);const _=this.cells.filter(m=>m.normal.dot(this.direction)>.35).length;this.audio.pressure(u?this.pressure:0,Math.min(1,_/28),this.spec.pitch,this.options.cold,this.pointer.x),u&&this.dragTravel>18&&e-this.lastPeel>260&&(this.grind(),this.lastPeel=e,this.dragTravel=0),this.host.dataset.squeeze=p.toFixed(3),this.host.dataset.rotation=this.ball.rotation.y.toFixed(4),this.host.dataset.detached="0",this.host.dataset.contact=JSON.stringify(this.contact),this.host.dataset.direction=JSON.stringify(this.direction);const v=this.cells.length+"|"+this.deformations.map(m=>{var y,E,R;return[m.depth,m.contact.x,m.contact.y,m.contact.z,m.normal.x,m.normal.y,m.normal.z,((y=m.pull)==null?void 0:y.x)??0,((E=m.pull)==null?void 0:E.y)??0,((R=m.pull)==null?void 0:R.z)??0].map(S=>S.toFixed(4)).join(",")}).join("|");if(v!==this.lastGeometryState||this.cells.some(m=>m.pulse>1e-4)){let m=0;this.cells.forEach(E=>{const R=E.mesh.geometry.getAttribute("position");E.pulse*=Math.exp(-t*8);const S=fw(E.origin,this.deformations,E.level,E.cracked),x=1-S;m=Math.max(m,S);const b=E.cracked?((E.level>0?.017:.008)+E.pulse)*E.jitter:0;this.chipRotation.setFromAxisAngle(E.hinge,b);const F=this.deform(E.origin.x,E.origin.y,E.origin.z,new q);for(let P=0;P<R.count;P++){this.deform(E.rest[P*3]+E.origin.x,E.rest[P*3+1]+E.origin.y,E.rest[P*3+2]+E.origin.z,this.deformed),this.deformed.sub(F).applyQuaternion(this.chipRotation).multiplyScalar(x).add(F);const N=E.cracked?.003+E.pulse*.03-E.level*.001:0;R.setXYZ(P,this.deformed.x+E.normal.x*N-E.origin.x,this.deformed.y+E.normal.y*N-E.origin.y,this.deformed.z+E.normal.z*N-E.origin.z)}R.needsUpdate=!0,E.mesh.geometry.computeVertexNormals();const A=E.mesh.geometry.getAttribute("normal");for(let P=0;P<E.faces.length/3*2;P++){if(P%6>=3)continue;const N=E.rest[P*3]+E.origin.x,D=E.rest[P*3+1]+E.origin.y,M=E.rest[P*3+2]+E.origin.z;this.baseNormal.set(E.restNormals[P*3],E.restNormals[P*3+1],E.restNormals[P*3+2]),this.tangentA.set(Math.abs(this.baseNormal.y)<.9?0:1,Math.abs(this.baseNormal.y)<.9?1:0,0).cross(this.baseNormal).normalize(),this.tangentB.crossVectors(this.baseNormal,this.tangentA).normalize(),this.deform(N,D,M,this.deformed),this.deform(N+this.tangentA.x*.002,D+this.tangentA.y*.002,M+this.tangentA.z*.002,this.normalA).sub(this.deformed),this.deform(N+this.tangentB.x*.002,D+this.tangentB.y*.002,M+this.tangentB.z*.002,this.normalB).sub(this.deformed),this.normalA.cross(this.normalB).normalize().applyQuaternion(this.chipRotation),A.setXYZ(P,this.normalA.x,this.normalA.y,this.normalA.z)}A.needsUpdate=!0,E.mesh.geometry.computeBoundingSphere()}),this.host.dataset.maxGap=m.toFixed(4);const y=this.core.geometry.getAttribute("position");for(let E=0;E<y.count;E++)this.deform(this.coreRest[E*3],this.coreRest[E*3+1],this.coreRest[E*3+2],this.deformed),y.setXYZ(E,this.deformed.x,this.deformed.y,this.deformed.z);y.needsUpdate=!0,this.core.geometry.computeVertexNormals(),this.core.geometry.computeBoundingSphere(),this.lastGeometryState=v}e-this.lastReport>100&&this.options.active&&(this.report(),this.lastReport=e),this.renderer.render(this.scene,this.camera),this.host.dataset.audio=((l=this.audio.context)==null?void 0:l.state)??"locked",this.host.dataset.drawCalls=String(this.renderer.info.render.calls)}this.frame=requestAnimationFrame(this.tick)});this.host=e,this.spec=t,this.options=r,this.callback=o,this.renderer=new $1({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.8)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rg,this.renderer.toneMapping=hd,this.renderer.toneMappingExposure=.92;const l=this.renderer.domElement;l.tabIndex=0,l.setAttribute("aria-label","왁뿌볼 3D 작업대. 꾹 눌러 부수기, 쓸어서 돌리기, 누른 채 당겨 늘리거나 문질러 잘게 부수기. 방향키로 회전, 스페이스로 누르기."),e.appendChild(l);const u=new sd(this.renderer),f=new bm;f.background=new ot(.16,.17,.19);for(const[S,x,b,F,A,P]of[[-3,4,4,2.2,3.4,4],[4,2,1,.65,3,2.5],[0,5,-3,3,1.5,2]]){const N=new xn(new Js(F,A),new Td({color:new ot(P,P,P),side:ci}));N.position.set(S,x,b),N.lookAt(0,1,0),f.add(N)}this.env=u.fromScene(f,.025),this.scene.environment=this.env.texture,this.scene.environmentIntensity=.85,f.traverse(S=>{S instanceof xn&&(S.geometry.dispose(),S.material.dispose())}),u.dispose(),this.camera.position.set(0,2.9,6.7),this.camera.lookAt(0,.86,0),this.scene.add(new Xx(16775147,12037065,.65));const h=new Bm(16774113,1.65);h.position.set(-3,6,4),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.left=-4,h.shadow.camera.right=4,h.shadow.camera.top=4,h.shadow.camera.bottom=-4,h.shadow.bias=-6e-4,this.scene.add(h);const p=new Bm(14280703,.8);p.position.set(3,3,-2),this.scene.add(p);const _=new xn(new Js(200,200),new Ox({opacity:.13}));_.rotation.x=-Math.PI/2,_.position.y=-.015,_.receiveShadow=!0,this.scene.add(_);const v=new xn(new Rd(2.7,2.7,.06,96),new bl({color:"#f9f5f0",roughness:.54,metalness:0,clearcoat:.15}));v.position.y=-.02,v.receiveShadow=!0,this.scene.add(v);const m=new xn(new Ld(2.66,.015,8,96),new t0({color:"#e4dcd5",roughness:.7}));m.rotation.x=Math.PI/2,m.position.y=.02,this.scene.add(m),this.scene.add(this.ball),this.ball.position.y=1.03;const y=document.createElement("canvas");y.width=y.height=256;const E=y.getContext("2d"),R=E.createImageData(256,256);for(let S=0;S<R.data.length;S+=4){const x=140+Math.random()*80;R.data[S]=R.data[S+1]=R.data[S+2]=x,R.data[S+3]=255}E.putImageData(R,0,0),this.grain=new Jg(y),this.grain.wrapS=this.grain.wrapT=Ja,this.grain.repeat.set(5,3),this.reset(t),this.resize=new ResizeObserver(()=>{const S=e.clientWidth,x=e.clientHeight;!S||!x||(this.renderer.setSize(S,x),this.camera.aspect=S/x,this.camera.position.z=S/x<.85?8.6:6.7,this.camera.updateProjectionMatrix())}),this.resize.observe(e),l.addEventListener("pointerdown",this.down),l.addEventListener("pointermove",this.move),l.addEventListener("pointerup",this.up),l.addEventListener("pointercancel",this.up),l.addEventListener("lostpointercapture",this.up),l.addEventListener("keydown",this.keydown),l.addEventListener("keyup",this.keyup),l.addEventListener("blur",this.up),document.addEventListener("visibilitychange",this.visibility),this.frame=requestAnimationFrame(this.tick)}shape(e,t=1){return ld(this.spec.shape,e.x,e.y,e.z,e,t)}colorAt(e){if(this.spec.id==="apple")return new ot("#ffffff");if(this.spec.shape==="flower"&&Math.hypot(e.x,e.y)<.32&&Math.abs(e.z)>.25)return new ot("#f5dea0");const t=e.x*1.65+e.y*1.9+e.z*.75+.56*Math.sin(e.y*5+e.z*3)+.32*Math.sin(e.x*9+e.y*4),r=(Math.sin(t*2.2)+1)*.5*(this.spec.colors.length-1),o=Math.floor(r);return new ot(this.spec.colors[o]).lerp(new ot(this.spec.colors[Math.min(o+1,this.spec.colors.length-1)]),r-o)}reset(e=this.spec){var _;this.clearInput(),this.audio.stop(),this.spec=e,this.ball.position.y=e.shape==="block"?.71:1.03,this.crumbs=0,this.broken=0,this.residual=0,this.squeeze=0,this.imprints=[],this.deformations=[],this.host.dataset.retained="0",this.host.dataset.imprints="0",this.host.dataset.squeeze="0",this.rotation=0,this.ball.rotation.set(.1,-.25,-.12),this.ball.scale.setScalar(1),this.clearGroup(this.ball),this.cells=[],this.lastGeometryState="",this.ball.scale.setScalar(e.shape==="heart"||e.shape==="star"||e.shape==="flower"?.9:1),(_=this.appleTexture)==null||_.dispose(),this.appleTexture=e.id==="apple"?J1():null;const t=1-(.028+this.options.thickness*.06),r=new Pd(1,64,40),o=r.getAttribute("position");let l=0;for(let v=0;v<o.count;v++){const m=this.shape(new q().fromBufferAttribute(o,v),t-.01);o.setXYZ(v,m.x,m.y,m.z)}if(r.computeVertexNormals(),e.shape!=="ball"&&e.shape!=="block"){for(let v=0;v<o.count;v++)l=Math.min(l,new q().fromBufferAttribute(o,v).multiplyScalar(1/(t-.01)).applyQuaternion(this.ball.quaternion).y);this.ball.position.y=-l*this.ball.scale.y+.035}this.coreRest=new Float32Array(o.array),this.core=new xn(r,new bl({color:e.core,roughness:.3,clearcoat:.48,clearcoatRoughness:.21,metalness:0,bumpMap:this.grain,bumpScale:.002})),this.core.castShadow=!0,this.ball.add(this.core);const u=new bd(1,e.shape==="ball"?12:e.shape==="block"?10:12),f=u.getAttribute("position");this.shellSeed+=7919;const h=iw(30,this.shellSeed);rw(new Float32Array(f.array),h).forEach((v,m)=>{if(!v.length)return;const y=new Float32Array(v.length);for(let E=0;E<v.length;E+=3){const R=this.shape(new q(v[E],v[E+1],v[E+2]).normalize());y.set([R.x,R.y,R.z],E)}this.cells.push(this.makeCell(y,m,0,!1))}),this.total=this.cells.length,u.dispose(),this.action="준비됐어요",this.report()}makeCell(e,t,r,o){const l=new q;for(let M=0;M<e.length;M+=3)l.add(new q(e[M],e[M+1],e[M+2]));l.multiplyScalar(3/e.length);const u=[],f=[],h=[],p=[],_=[],v=1-(.028+this.options.thickness*.06),m=new Map,y=(M,L,O)=>{u.push(M.x-l.x,M.y-l.y,M.z-l.z),f.push(L.r,L.g,L.b),h.push(O.x,O.y,O.z)},E=M=>`${M.x.toFixed(5)},${M.y.toFixed(5)},${M.z.toFixed(5)}`;for(let M=0;M<e.length;M+=9){const L=[0,1,2].map(H=>new q(e[M+H*3],e[M+H*3+1],e[M+H*3+2])),O=L[1].clone().sub(L[0]).cross(L[2].clone().sub(L[0])).normalize(),z=u.length/3;p.push(z,z+1,z+2),_.push(z+3,z+4,z+5),L.forEach(H=>{const j=Z1(this.spec.shape,H.x,H.y,H.z,new q),G=this.spec.shape==="block"?O:j1(this.spec.shape,j.x,j.y,j.z,new q);y(H,this.colorAt(H),G)}),[2,1,0].forEach(H=>y(L[H].clone().multiplyScalar(v),(this.spec.id==="apple"?new ot(this.spec.colors[0]):this.colorAt(L[H])).multiplyScalar(.82),O.clone().negate()));for(let H=0;H<3;H++){const j=L[H],G=L[(H+1)%3],Z=E(j),fe=E(G),te=Z<fe?Z+"|"+fe:fe+"|"+Z,J=m.get(te);J?J.count++:m.set(te,{a:j,b:G,count:1})}}m.forEach(({a:M,b:L,count:O})=>{if(O!==1)return;const z=M.clone().multiplyScalar(v),H=L.clone().multiplyScalar(v),j=L.clone().sub(M).cross(z.clone().sub(M)).normalize(),G=(this.spec.id==="apple"?new ot(this.spec.colors[0]):this.colorAt(M)).multiplyScalar(.9),Z=u.length/3;_.push(Z,Z+1,Z+2,Z+3,Z+4,Z+5),[M,z,L,L,z,H].forEach(fe=>y(fe,G,j))});const R=new Gn;R.setAttribute("position",new Ht(u,3)),R.setAttribute("color",new Ht(f,3)),R.setAttribute("normal",new Ht(h,3));const S=[];for(let M=0;M<u.length;M+=3){const L=new q(u[M]+l.x,u[M+1]+l.y,u[M+2]+l.z).normalize();S.push(.5+Math.atan2(L.z,L.x)/(2*Math.PI),.5-Math.asin(L.y)/Math.PI)}R.setAttribute("uv",new Ht(S,2)),R.setIndex([...p,..._]),R.addGroup(0,p.length,0),R.addGroup(p.length,_.length,1);const x=this.spec.id==="ice",b=new bl({vertexColors:!0,map:this.appleTexture,roughness:this.spec.roughness*.74,clearcoat:x?.28:.82,clearcoatRoughness:x?.29:.13,ior:1.46,bumpMap:this.grain,bumpScale:x?.004:45e-5,side:ci}),F=new bl({vertexColors:!0,roughness:.86,clearcoat:0,bumpMap:this.grain,bumpScale:.016,side:ci}),A=new xn(R,[b,F]);A.position.copy(l),A.castShadow=!0,A.receiveShadow=!0,this.ball.add(A);const P=l.clone().normalize(),N=Math.sin(t*73.17+r*31.71+l.x*19+l.y*11),D=new q(Math.cos(t*2.4),Math.sin(t*1.7),Math.sin(t*.9)).cross(P).normalize();return{mesh:A,normal:P,cracked:o,faces:e,level:r,root:t,area:Cr(e),pulse:o?.08:0,jitter:N,hinge:D,rest:new Float32Array(u),restNormals:new Float32Array(h),origin:l}}setContact(e,t){const r=t?this.cells.find(o=>o.mesh===t.object):null;if(this.spec.shape!=="ball"&&r&&(t!=null&&t.face)){const o=[t.face.a,t.face.b,t.face.c],l=r.mesh.geometry.getAttribute("position"),u=o.map(p=>new q().fromBufferAttribute(l,p)),f=r.mesh.worldToLocal(e.clone()),h=ui.getBarycoord(f,u[0],u[1],u[2],new q);if(h){this.contact.set(0,0,0),this.direction.set(0,0,0),o.forEach((p,_)=>{const v=h.getComponent(_);this.contact.addScaledVector(new q(r.rest[p*3]+r.origin.x,r.rest[p*3+1]+r.origin.y,r.rest[p*3+2]+r.origin.z),v),this.direction.addScaledVector(new q(r.restNormals[p*3],r.restNormals[p*3+1],r.restNormals[p*3+2]),v)}),this.direction.normalize();return}}if(this.direction.copy(this.ball.worldToLocal(e.clone())).normalize(),this.contact.copy(this.shape(this.direction.clone())),this.spec.shape==="block"){const o=this.contact,l=[Math.abs(o.x)/1.2,Math.abs(o.y)/.68,Math.abs(o.z)/.84],u=l.indexOf(Math.max(...l));this.direction.set(u===0?Math.sign(o.x):0,u===1?Math.sign(o.y):0,u===2?Math.sign(o.z):0)}}clearGroup(e){var t,r;for(;e.children.length;){const o=e.children[0];e.remove(o),(t=o.geometry)==null||t.dispose(),Array.isArray(o.material)?o.material.forEach(l=>l.dispose()):(r=o.material)==null||r.dispose()}}update(e){this.options=e,this.audio.set(e.sound,e.volume),(e.paused||!e.active)&&this.clearInput()}rememberPress(){var r;if(((r=this.gesture)==null?void 0:r.phase)!=="press"||this.squeeze<.08)return;const e=this.squeeze*.92,t=this.imprints.find(o=>new q(o.contact.x,o.contact.y,o.contact.z).distanceTo(this.contact)<.4);t?t.depth=Math.max(t.depth,e):(this.imprints.push({contact:this.contact.clone(),normal:this.direction.clone(),depth:e}),this.imprints.length>6&&this.imprints.shift()),this.residual=Math.max(...this.imprints.map(o=>o.depth))}deform(e,t,r,o){return lw(e,t,r,this.deformations,o)}clearInput(e=!1){this.rememberPress(),this.pullTarget.set(0,0,0),e||(this.pull.set(0,0,0),this.pullVelocity.set(0,0,0),this.host.dataset.stretch="0",this.host.dataset.pull=JSON.stringify(this.pull)),this.host.dataset.pullTarget="0",this.held=!1,this.pressure=0,this.gesture=null,this.contactCell=null,this.fragmentConsumed=!1,this.dragTravel=0,this.audio.stop(e),this.host.dataset.voices=String(this.audio.voices.size);const t=this.pointerId;this.pointerId=null,this.host.dataset.gesture="idle",this.host.dataset.pressure="0";const r=this.renderer.domElement;t!==null&&r.hasPointerCapture(t)&&r.releasePointerCapture(t)}hit(e){const t=this.renderer.domElement.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.scene.updateMatrixWorld(),this.ray.setFromCamera(this.pointer,this.camera),this.ray.intersectObjects([...this.cells.filter(r=>r.mesh.visible).map(r=>r.mesh),this.core],!1)[0]}fracture(){var t;if(this.fragmentConsumed)return;if((t=this.contactCell)!=null&&t.cracked){this.refine(this.contactCell),this.fragmentConsumed=!0;return}const e=aw(this.cells.filter(r=>!r.cracked),this.direction,this.pressure,this.options.cold,this.options.thickness,3);this.contactCell&&!this.contactCell.cracked&&!e.includes(this.contactCell)&&e.unshift(this.contactCell),e.slice(0,4).forEach(r=>{r.cracked=!0,r.pulse=.09,this.broken++}),e.length&&(this.fragmentConsumed=!0,this.action="쩌적… 큰 조각을 다시 눌러보세요",this.audio.play("crack",.72,this.pointer.x,this.spec.pitch*.78,this.options.cold))}refine(e){if(!this.cells.includes(e)||e.level>=4||e.area<.003||this.cells.length>=220)return!1;const t=sw(e.faces,this.contact,this.shellSeed+e.mesh.id*31+e.level*97);if(t.length<2||this.cells.length+t.length-1>220)return!1;const r=t.map(o=>this.makeCell(o,e.root,e.level+1,!0));return this.cells.splice(this.cells.indexOf(e),1,...r),this.ball.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.forEach(o=>o.dispose()),this.crumbs+=t.length-1,this.contactCell=r.reduce((o,l)=>o.origin.distanceTo(this.contact)<l.origin.distanceTo(this.contact)?o:l),this.action=e.level===0?"와자작… 큰 조각이 더 작게":"뿌드드득… 작은 조각까지",this.audio.play(e.level===0?"crack":"crumble",.62,this.pointer.x,this.spec.pitch*(.88+e.level*.12),this.options.cold),this.report(),!0}grind(){var e;(e=this.contactCell)!=null&&e.cracked&&this.refine(this.contactCell)}report(){this.host.dataset.kind=this.spec.id,this.host.dataset.shape=this.spec.shape,this.host.dataset.cells=String(this.cells.length),this.host.dataset.smallestPatch=String(Math.min(...this.cells.map(t=>t.faces.length))),this.host.dataset.pieces=JSON.stringify(this.cells.map(t=>({id:t.mesh.id,root:t.root,level:t.level,area:t.area}))),this.host.dataset.levels=JSON.stringify(this.cells.reduce((t,r)=>(t[r.level]=(t[r.level]??0)+1,t),{})),this.scene.updateMatrixWorld(!0);const e=this.ball.worldToLocal(this.camera.position.clone()).normalize();this.host.dataset.fragments=JSON.stringify(this.cells.filter(t=>t.cracked&&t.normal.dot(e)>.4).map(t=>{t.mesh.geometry.computeBoundingBox();const r=t.mesh.geometry.boundingBox.getCenter(new q).applyMatrix4(t.mesh.matrixWorld).project(this.camera);return{id:t.mesh.id,root:t.root,level:t.level,area:t.area,x:(r.x+1)/2,y:(1-r.y)/2}})),this.host.dataset.attached=String(this.cells.every(t=>t.mesh.parent===this.ball)),this.callback({broken:this.broken,total:this.total,pressure:this.pressure,crumbs:this.crumbs,action:this.action})}dispose(){var t;this.disposed=!0,cancelAnimationFrame(this.frame),this.resize.disconnect(),this.clearInput(),this.audio.dispose();const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.down),e.removeEventListener("pointermove",this.move),e.removeEventListener("pointerup",this.up),e.removeEventListener("pointercancel",this.up),e.removeEventListener("lostpointercapture",this.up),e.removeEventListener("keydown",this.keydown),e.removeEventListener("keyup",this.keyup),e.removeEventListener("blur",this.up),document.removeEventListener("visibilitychange",this.visibility),this.scene.traverse(r=>{r instanceof xn&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(o=>o.dispose()):r.material.dispose())}),(t=this.appleTexture)==null||t.dispose(),this.grain.dispose(),this.env.dispose(),this.renderer.dispose(),e.remove()}}const hw={broken:0,total:30,pressure:0,crumbs:0,action:"준비됐어요"};function pw({platform:s}){const[e,t]=vt.useState(()=>s==null?void 0:s.getSnapshot()),[r,o]=vt.useState("home"),[l,u]=vt.useState(0),[f,h]=vt.useState(.75),[p,_]=vt.useState(.45),[v,m]=vt.useState(!0),[y,E]=vt.useState(.65),[R,S]=vt.useState(!1),[x,b]=vt.useState(!1),[F,A]=vt.useState(!1),[P,N]=vt.useState(hw),[D,M]=vt.useState(!1),L=vt.useRef(null),O=vt.useRef(null),z=vt.useRef(!1),H={active:r==="game",cold:f,thickness:p,sound:v&&!(e!=null&&e.silent),volume:y,paused:R||F||!!(e!=null&&e.paused)},j=vt.useRef(H);j.current=H;const G=r==="promo",Z=ts[l],fe=Math.round(P.broken/Math.max(1,P.total)*100);vt.useEffect(()=>{if(!(G||!L.current)){try{O.current=new dw(L.current,ts[0],j.current,N)}catch{M(!0)}return()=>{var B;(B=O.current)==null||B.dispose(),O.current=null}}},[G]),vt.useEffect(()=>{var B;(B=O.current)==null||B.reset(ts[l])},[l,G]),vt.useEffect(()=>{var B;(B=O.current)==null||B.update(j.current)},[r,f,p,v,y,R,F,e]),vt.useEffect(()=>{if(!s)return;const B=Y=>{var I,re;(Y.paused||Y.silent)&&((I=O.current)==null||I.clearInput(),(re=O.current)==null||re.update({...j.current,paused:j.current.paused||Y.paused,sound:!1})),t(Y)};return B(s.getSnapshot()),s.subscribe(B)},[s]),vt.useEffect(()=>(s==null||s.setBackHandler(()=>F?(A(!1),!0):!1),()=>s==null?void 0:s.setBackHandler(null)),[s,F]),vt.useEffect(()=>{if(!F)return;const B=document.activeElement,Y=document.querySelector(".help-close");Y==null||Y.focus();const I=re=>{re.key==="Escape"&&A(!1),re.key==="Tab"&&(re.preventDefault(),Y==null||Y.focus())};return window.addEventListener("keydown",I,!0),()=>{window.removeEventListener("keydown",I,!0),B==null||B.focus()}},[F]);function te(){var B;(B=O.current)==null||B.reset(Z),z.current=!1,S(!1),o("game"),b(!1)}function J(){var B;(B=O.current)==null||B.reset(Z)}return r==="promo"?ae.jsx(bv,{appName:"wax-pop",onClose:()=>o("home")}):ae.jsxs("main",{className:`studio ${x?"focus-mode":""}`,"data-shell-screen":r,children:[ae.jsxs("header",{className:"topbar",children:[ae.jsxs("div",{className:"brand",children:[ae.jsx("span",{className:"brand-mark",children:ae.jsx(um,{size:24})}),ae.jsxs("span",{children:["WAX",ae.jsx("span",{className:"brand-light",children:" / STUDIO"}),ae.jsx("small",{children:"왁뿌 스튜디오"})]})]}),ae.jsxs("div",{className:"top-actions",children:[ae.jsxs("span",{className:"live-label",children:[ae.jsx("i",{})," 나만의 작은 ASMR 공간"]}),ae.jsx("button",{className:"icon-button","aria-label":v?"소리 끄기":"소리 켜기",onClick:()=>m(!v),children:v?ae.jsx(fm,{size:19}):ae.jsx(Ev,{size:19})}),r==="game"&&ae.jsx(Tv,{clearInput:()=>{var B;return(B=O.current)==null?void 0:B.clearInput()},pause:()=>{var Y;const B=z.current;return z.current=!0,S(!0),(Y=O.current)==null||Y.update({...j.current,paused:!0}),()=>{z.current=B,S(B)}},onReturnHome:()=>{var B;(B=O.current)==null||B.reset(Z),b(!1),S(!1),z.current=!1,o("home")}})]})]}),ae.jsxs("div",{className:"intro",children:[ae.jsxs("div",{children:[ae.jsxs("div",{className:"eyebrow",children:[ae.jsx("span",{})," A LITTLE CRUNCH. A LITTLE CALM."]}),ae.jsxs("h1",{children:["오늘의 스트레스,",ae.jsx("br",{className:"mobile-break"})," ",ae.jsx("em",{children:"바삭하게."})]}),ae.jsx("p",{children:"살짝 누르고, 와자작. 마음까지 말랑해지는 시간."})]}),ae.jsxs("button",{className:"guide-button",onClick:()=>{var B;(B=O.current)==null||B.clearInput(),A(!0)},children:["처음이라면 ",ae.jsx(Uu,{size:17})]})]}),ae.jsxs("div",{className:"workspace",children:[ae.jsxs("aside",{className:"collection",children:[ae.jsxs("div",{className:"panel-heading",children:[ae.jsx("span",{children:"01"}),ae.jsx("h2",{children:"오늘의 왁뿌볼"}),ae.jsxs("small",{children:[ts.length," kinds"]})]}),ae.jsx("p",{className:"panel-note",children:"끌리는 질감을 골라보세요."}),ae.jsx("div",{className:"ball-list",children:ts.map((B,Y)=>ae.jsxs("button",{className:`ball-card ${l===Y?"selected":""}`,"aria-pressed":l===Y,onClick:()=>u(Y),children:[ae.jsx("img",{className:"mini-ball",src:`./assets/wax/${B.id}.webp`,alt:"",width:"64",height:"64",decoding:"async"}),ae.jsxs("span",{className:"card-text",children:[ae.jsx("small",{children:B.tag}),ae.jsx("strong",{children:B.name}),ae.jsx("span",{children:B.note})]}),ae.jsx("span",{className:"selection-mark",children:l===Y?ae.jsx(mv,{size:16}):ae.jsx(gv,{size:16})})]},B.id))}),ae.jsxs("div",{className:"quiet-note",children:[ae.jsx(vv,{size:21}),ae.jsxs("div",{children:[ae.jsx("strong",{children:"이어폰과 함께, 더 가까이"}),ae.jsx("p",{children:"부서지는 소리가 손끝을 따라 움직여요."})]})]}),r==="home"&&ae.jsxs("div",{className:"start-actions",children:[ae.jsxs("button",{className:"start-button",onClick:te,children:["왁뿌 시작하기 ",ae.jsx(Uu,{size:20})]}),!1]})]}),ae.jsxs("section",{className:"play-panel","aria-label":"왁뿌볼 작업 공간",children:[ae.jsxs("div",{className:"stage-header",children:[ae.jsxs("span",{children:[ae.jsx("i",{})," ",r==="home"?"PREVIEW":"LIVE SESSION"]}),ae.jsx("button",{"aria-label":x?"전체 화면 나가기":"집중 모드",className:"icon-button",onClick:()=>b(!x),children:ae.jsx(xv,{size:17})})]}),ae.jsx("div",{className:"stage",ref:L,"data-testid":"wax-stage","data-broken":P.broken,"data-crumbs":P.crumbs,"data-paused":H.paused,"data-pressure":P.pressure.toFixed(2),children:D&&ae.jsxs("div",{className:"webgl-error",children:["3D 화면을 열 수 없어요.",ae.jsx("br",{}),"WebGL을 지원하는 브라우저에서 다시 열어주세요."]})}),ae.jsxs("div",{className:"specimen-label",children:[ae.jsxs("span",{children:["No. ",String(l+1).padStart(2,"0")," / WAX COLLECTION"]}),ae.jsx("h2",{children:Z.english})]}),ae.jsx("div",{className:"stage-hint",children:r==="home"?ae.jsxs(ae.Fragment,{children:[ae.jsx(Mv,{size:16})," 시작하고, 볼을 꾹 눌러보세요"]}):ae.jsxs(ae.Fragment,{children:[ae.jsx(_v,{size:16})," 꾹 누르면 와자작 · 쓸면 데굴데굴"]})}),r==="game"&&ae.jsxs("div",{className:"session-strip",children:[ae.jsx("span",{className:"touch-guide",children:"큰 조각을 다시 누르면 더 잘게 깨져요"}),ae.jsx("div",{className:"session-tools",children:ae.jsx("button",{"aria-label":"새 볼로 다시 시작",onClick:J,children:ae.jsx(Sv,{size:18})})})]}),r==="home"&&ae.jsxs("button",{className:"preview-start",onClick:te,children:["왁뿌 시작하기 ",ae.jsx(Uu,{size:17})]}),ae.jsxs("div",{className:"crunch-meter",children:[ae.jsx("span",{children:r==="home"?"천천히, 내 속도대로":P.action}),ae.jsx("div",{className:"meter-line",children:ae.jsx("i",{style:{width:`${r==="home"?0:fe}%`}})}),ae.jsx("span",{children:r==="home"?"NO RUSH":`${fe}% CRACKED`})]})]}),ae.jsxs("section",{className:"texture-controls",children:[ae.jsxs("div",{className:"panel-heading",children:[ae.jsx("span",{children:"02"}),ae.jsx("h2",{children:"나만의 바삭함"})]}),ae.jsxs("div",{className:"control-group",children:[ae.jsxs("label",{htmlFor:"cold",children:[ae.jsx(yv,{size:18})," 냉각도 ",ae.jsx("b",{children:f>.66?"차갑게":f>.33?"시원하게":"포근하게"})]}),ae.jsx("input",{id:"cold",type:"range",min:"0",max:"1",step:".01",value:f,onChange:B=>h(Number(B.target.value))}),ae.jsxs("div",{className:"range-labels",children:[ae.jsx("span",{children:"부드럽게"}),ae.jsx("span",{children:"파삭하게"})]})]}),ae.jsxs("div",{className:"control-group",children:[ae.jsxs("label",{htmlFor:"thickness",children:[ae.jsx(um,{size:18})," 코팅 두께 ",ae.jsx("b",{children:p>.66?"두껍게":p>.33?"보통":"얇게"})]}),ae.jsx("input",{id:"thickness",type:"range",min:"0",max:"1",step:".01",value:p,onChange:B=>_(Number(B.target.value)),onPointerUp:J,onKeyUp:B=>{(B.key.startsWith("Arrow")||B.key==="Home"||B.key==="End")&&J()}}),ae.jsxs("div",{className:"range-labels",children:[ae.jsx("span",{children:"가벼운 톡"}),ae.jsx("span",{children:"묵직한 와작"})]})]}),ae.jsxs("div",{className:"control-group",children:[ae.jsxs("label",{htmlFor:"volume",children:[ae.jsx(fm,{size:18})," ASMR 사운드 ",ae.jsx("b",{children:v?`${Math.round(y*100)}%`:"꺼짐"})]}),ae.jsx("input",{id:"volume",type:"range",min:"0",max:"1",step:".01",value:y,onChange:B=>E(Number(B.target.value))}),ae.jsxs("div",{className:"range-labels",children:[ae.jsx("span",{children:"작게"}),ae.jsx("span",{children:"선명하게"})]})]})]})]}),ae.jsxs("footer",{children:[ae.jsx("span",{children:"PRESS. CRACK. RELAX."}),ae.jsx("span",{children:"점수도, 시간 제한도 없이. 오직 나를 위한 감각."}),ae.jsx("span",{children:"WAX STUDIO © 2026"})]}),F&&ae.jsx("div",{className:"help-backdrop",children:ae.jsxs("div",{className:"help-dialog",role:"dialog","aria-modal":"true","aria-label":"왁뿌볼 사용법",children:[ae.jsx("button",{className:"help-close icon-button","aria-label":"사용법 닫기",onClick:()=>A(!1),children:ae.jsx(wv,{})}),ae.jsx("span",{className:"eyebrow",children:"YOUR LITTLE SENSORY RITUAL"}),ae.jsx("h2",{children:"세 번의 작은 행복."}),ae.jsxs("p",{children:[ae.jsx("b",{children:"01. 꾹 누르기"}),ae.jsx("br",{}),"볼을 누르고 기다리면 압력이 쌓여 왁스가 깨져요. 누른 채 문지르면 주변까지 바스락. 천천히 당기면 손끝 방향으로 조금 늘어나요."]}),ae.jsxs("p",{children:[ae.jsx("b",{children:"02. 구석구석 부수기"}),ae.jsx("br",{}),"볼을 바로 쓸어 돌리면 뒷면도 꺼낼 수 있어요. 잠깐 누른 뒤 문지르면 금이 간 왁스가 볼에 붙은 채 더 잘게 부서져요. 큰 조각을 골라 다시 누르면 중간 조각, 작은 조각으로 점점 잘게 깨져요."]}),ae.jsxs("p",{children:[ae.jsx("b",{children:"03. 말랑함 느끼기"}),ae.jsx("br",{}),"손이 닿은 부분이 안쪽으로 들어가고 주변이 말랑하게 퍼져요. 손을 떼어도 눌린 자국이 남아요. 새 볼 버튼으로 언제든 다시 시작해요."]}),ae.jsxs("small",{children:["한 손가락으로 꾹 누르기 · 쓸어 돌리기 · 붙은 조각 잘게 부수기",ae.jsx("br",{}),"냉각도는 바로 반영 · 두께를 바꾸면 새 볼로 시작"]})]})})]})}const mw="https://h5sdk.onestore.net/lib/v1.1.0/onestore-h5-sdk.min.js";function gw(s){let e={paused:!1,silent:!1,exited:!1};const t=new Set,r=f=>{e={...e,...f};for(const h of t)h(e)},o=()=>r({paused:!0}),l=(f={})=>{e.exited||r({paused:!1,...typeof f.ringerSilent=="boolean"?{silent:f.ringerSilent}:{}})},u=()=>r({paused:!0,exited:!0});return s.on("pause",o),s.on("resume",l),s.on("exit",u),{getSnapshot:()=>e,subscribe(f){return t.add(f),()=>t.delete(f)},async start(f,h){if(!s.isSupported())return;const p=await s.initializeAsync();if(p.err){if(p.err==="Platform Not Supported")return;throw new Error("ONE store initialization failed")}if(r({silent:!!p.ringerSilent}),h(p.safeArea),s.setLoadingProgress(0),await f(v=>s.setLoadingProgress(v)),e.exited)throw new Error("Game closed during loading");s.setLoadingProgress(100);const _=await s.startGameAsync();if(_!=null&&_.err||e.exited)throw new Error("ONE store start failed")},setBackHandler(f){s.onBackPressed(f)},dispose(){s.off("pause",o),s.off("resume",l),s.off("exit",u),s.onBackPressed(null),t.clear()}}}async function _w(){const s=document.getElementById("root");let e;{document.documentElement.classList.add("onestore-web"),s.className="platform-loading",s.textContent="말랑한 왁뿌볼을 준비하고 있어요…";try{const t=await import(mw);e=gw(t.createSDK()),await e.start(async r=>{await Promise.all([document.fonts.load('400 14px "DM Sans"'),document.fonts.load("800 14px Manrope")]),await document.fonts.ready,r(20);let o=0;await Promise.all(ts.map(l=>new Promise((u,f)=>{const h=new Image;h.onload=()=>{r(20+ ++o/ts.length*80),u()},h.onerror=()=>f(new Error("Thumbnail load failed")),h.src=`./assets/wax/${l.id}.webp`})))},r=>{for(const o of["top","bottom","left","right"]){const l=r==null?void 0:r[o];document.documentElement.style.setProperty(`--one-safe-${o}`,`${Number.isFinite(l)?Math.max(0,l):0}px`)}})}catch{e==null||e.dispose(),s.textContent="게임을 준비하지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.";const t=document.createElement("button");t.textContent="다시 시도",t.onclick=()=>location.reload(),s.append(t);return}}s.className="",rv.createRoot(s).render(ae.jsx(vt.StrictMode,{children:ae.jsx(pw,{platform:e})}))}_w();
