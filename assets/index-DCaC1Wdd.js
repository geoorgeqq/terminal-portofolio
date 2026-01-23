(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))m(O);new MutationObserver(O=>{for(const q of O)if(q.type==="childList")for(const X of q.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&m(X)}).observe(document,{childList:!0,subtree:!0});function U(O){const q={};return O.integrity&&(q.integrity=O.integrity),O.referrerPolicy&&(q.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?q.credentials="include":O.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function m(O){if(O.ep)return;O.ep=!0;const q=U(O);fetch(O.href,q)}})();var dc={exports:{}},Da={};var br;function ad(){if(br)return Da;br=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function U(m,O,q){var X=null;if(q!==void 0&&(X=""+q),O.key!==void 0&&(X=""+O.key),"key"in O){q={};for(var j in O)j!=="key"&&(q[j]=O[j])}else q=O;return O=q.ref,{$$typeof:z,type:m,key:X,ref:O!==void 0?O:null,props:q}}return Da.Fragment=B,Da.jsx=U,Da.jsxs=U,Da}var Rr;function nd(){return Rr||(Rr=1,dc.exports=ad()),dc.exports}var ll=nd(),mc={exports:{}},P={};var zr;function id(){if(zr)return P;zr=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.iterator;function al(o){return o===null||typeof o!="object"?null:(o=Z&&o[Z]||o["@@iterator"],typeof o=="function"?o:null)}var hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,rl={};function Ll(o,_,h){this.props=o,this.context=_,this.refs=rl,this.updater=h||hl}Ll.prototype.isReactComponent={},Ll.prototype.setState=function(o,_){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,_,"setState")},Ll.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Dl(){}Dl.prototype=Ll.prototype;function yl(o,_,h){this.props=o,this.context=_,this.refs=rl,this.updater=h||hl}var kl=yl.prototype=new Dl;kl.constructor=yl,$(kl,Ll.prototype),kl.isPureReactComponent=!0;var at=Array.isArray;function Xl(){}var nl={H:null,A:null,T:null,S:null},Bl=Object.prototype.hasOwnProperty;function ct(o,_,h){var c=h.ref;return{$$typeof:z,type:o,key:_,ref:c!==void 0?c:null,props:h}}function vt(o,_){return ct(o.type,_,o.props)}function Pl(o){return typeof o=="object"&&o!==null&&o.$$typeof===z}function zl(o){var _={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(h){return _[h]})}var Ql=/\/+/g;function Zl(o,_){return typeof o=="object"&&o!==null&&o.key!=null?zl(""+o.key):_.toString(36)}function Vl(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Xl,Xl):(o.status="pending",o.then(function(_){o.status==="pending"&&(o.status="fulfilled",o.value=_)},function(_){o.status==="pending"&&(o.status="rejected",o.reason=_)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function b(o,_,h,c,d){var A=typeof o;(A==="undefined"||A==="boolean")&&(o=null);var M=!1;if(o===null)M=!0;else switch(A){case"bigint":case"string":case"number":M=!0;break;case"object":switch(o.$$typeof){case z:case B:M=!0;break;case V:return M=o._init,b(M(o._payload),_,h,c,d)}}if(M)return d=d(o),M=c===""?"."+Zl(o,0):c,at(d)?(h="",M!=null&&(h=M.replace(Ql,"$&/")+"/"),b(d,_,h,"",function(Y){return Y})):d!=null&&(Pl(d)&&(d=vt(d,h+(d.key==null||o&&o.key===d.key?"":(""+d.key).replace(Ql,"$&/")+"/")+M)),_.push(d)),1;M=0;var H=c===""?".":c+":";if(at(o))for(var C=0;C<o.length;C++)c=o[C],A=H+Zl(c,C),M+=b(c,_,h,A,d);else if(C=al(o),typeof C=="function")for(o=C.call(o),C=0;!(c=o.next()).done;)c=c.value,A=H+Zl(c,C++),M+=b(c,_,h,A,d);else if(A==="object"){if(typeof o.then=="function")return b(Vl(o),_,h,c,d);throw _=String(o),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return M}function G(o,_,h){if(o==null)return o;var c=[],d=0;return b(o,c,"","",function(A){return _.call(h,A,d++)}),c}function J(o){if(o._status===-1){var _=o._result;_=_(),_.then(function(h){(o._status===0||o._status===-1)&&(o._status=1,o._result=h)},function(h){(o._status===0||o._status===-1)&&(o._status=2,o._result=h)}),o._status===-1&&(o._status=0,o._result=_)}if(o._status===1)return o._result.default;throw o._result}var cl=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},dl={map:G,forEach:function(o,_,h){G(o,function(){_.apply(this,arguments)},h)},count:function(o){var _=0;return G(o,function(){_++}),_},toArray:function(o){return G(o,function(_){return _})||[]},only:function(o){if(!Pl(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return P.Activity=N,P.Children=dl,P.Component=Ll,P.Fragment=U,P.Profiler=O,P.PureComponent=yl,P.StrictMode=m,P.Suspense=D,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nl,P.__COMPILER_RUNTIME={__proto__:null,c:function(o){return nl.H.useMemoCache(o)}},P.cache=function(o){return function(){return o.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(o,_,h){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var c=$({},o.props),d=o.key;if(_!=null)for(A in _.key!==void 0&&(d=""+_.key),_)!Bl.call(_,A)||A==="key"||A==="__self"||A==="__source"||A==="ref"&&_.ref===void 0||(c[A]=_[A]);var A=arguments.length-2;if(A===1)c.children=h;else if(1<A){for(var M=Array(A),H=0;H<A;H++)M[H]=arguments[H+2];c.children=M}return ct(o.type,d,c)},P.createContext=function(o){return o={$$typeof:X,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:q,_context:o},o},P.createElement=function(o,_,h){var c,d={},A=null;if(_!=null)for(c in _.key!==void 0&&(A=""+_.key),_)Bl.call(_,c)&&c!=="key"&&c!=="__self"&&c!=="__source"&&(d[c]=_[c]);var M=arguments.length-2;if(M===1)d.children=h;else if(1<M){for(var H=Array(M),C=0;C<M;C++)H[C]=arguments[C+2];d.children=H}if(o&&o.defaultProps)for(c in M=o.defaultProps,M)d[c]===void 0&&(d[c]=M[c]);return ct(o,A,d)},P.createRef=function(){return{current:null}},P.forwardRef=function(o){return{$$typeof:j,render:o}},P.isValidElement=Pl,P.lazy=function(o){return{$$typeof:V,_payload:{_status:-1,_result:o},_init:J}},P.memo=function(o,_){return{$$typeof:E,type:o,compare:_===void 0?null:_}},P.startTransition=function(o){var _=nl.T,h={};nl.T=h;try{var c=o(),d=nl.S;d!==null&&d(h,c),typeof c=="object"&&c!==null&&typeof c.then=="function"&&c.then(Xl,cl)}catch(A){cl(A)}finally{_!==null&&h.types!==null&&(_.types=h.types),nl.T=_}},P.unstable_useCacheRefresh=function(){return nl.H.useCacheRefresh()},P.use=function(o){return nl.H.use(o)},P.useActionState=function(o,_,h){return nl.H.useActionState(o,_,h)},P.useCallback=function(o,_){return nl.H.useCallback(o,_)},P.useContext=function(o){return nl.H.useContext(o)},P.useDebugValue=function(){},P.useDeferredValue=function(o,_){return nl.H.useDeferredValue(o,_)},P.useEffect=function(o,_){return nl.H.useEffect(o,_)},P.useEffectEvent=function(o){return nl.H.useEffectEvent(o)},P.useId=function(){return nl.H.useId()},P.useImperativeHandle=function(o,_,h){return nl.H.useImperativeHandle(o,_,h)},P.useInsertionEffect=function(o,_){return nl.H.useInsertionEffect(o,_)},P.useLayoutEffect=function(o,_){return nl.H.useLayoutEffect(o,_)},P.useMemo=function(o,_){return nl.H.useMemo(o,_)},P.useOptimistic=function(o,_){return nl.H.useOptimistic(o,_)},P.useReducer=function(o,_,h){return nl.H.useReducer(o,_,h)},P.useRef=function(o){return nl.H.useRef(o)},P.useState=function(o){return nl.H.useState(o)},P.useSyncExternalStore=function(o,_,h){return nl.H.useSyncExternalStore(o,_,h)},P.useTransition=function(){return nl.H.useTransition()},P.version="19.2.3",P}var Lr;function Ac(){return Lr||(Lr=1,mc.exports=id()),mc.exports}var pt=Ac(),vc={exports:{}},Ua={},yc={exports:{}},gc={};var pr;function fd(){return pr||(pr=1,(function(z){function B(b,G){var J=b.length;b.push(G);l:for(;0<J;){var cl=J-1>>>1,dl=b[cl];if(0<O(dl,G))b[cl]=G,b[J]=dl,J=cl;else break l}}function U(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var G=b[0],J=b.pop();if(J!==G){b[0]=J;l:for(var cl=0,dl=b.length,o=dl>>>1;cl<o;){var _=2*(cl+1)-1,h=b[_],c=_+1,d=b[c];if(0>O(h,J))c<dl&&0>O(d,h)?(b[cl]=d,b[c]=J,cl=c):(b[cl]=h,b[_]=J,cl=_);else if(c<dl&&0>O(d,J))b[cl]=d,b[c]=J,cl=c;else break l}}return G}function O(b,G){var J=b.sortIndex-G.sortIndex;return J!==0?J:b.id-G.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;z.unstable_now=function(){return q.now()}}else{var X=Date,j=X.now();z.unstable_now=function(){return X.now()-j}}var D=[],E=[],V=1,N=null,Z=3,al=!1,hl=!1,$=!1,rl=!1,Ll=typeof setTimeout=="function"?setTimeout:null,Dl=typeof clearTimeout=="function"?clearTimeout:null,yl=typeof setImmediate<"u"?setImmediate:null;function kl(b){for(var G=U(E);G!==null;){if(G.callback===null)m(E);else if(G.startTime<=b)m(E),G.sortIndex=G.expirationTime,B(D,G);else break;G=U(E)}}function at(b){if($=!1,kl(b),!hl)if(U(D)!==null)hl=!0,Xl||(Xl=!0,zl());else{var G=U(E);G!==null&&Vl(at,G.startTime-b)}}var Xl=!1,nl=-1,Bl=5,ct=-1;function vt(){return rl?!0:!(z.unstable_now()-ct<Bl)}function Pl(){if(rl=!1,Xl){var b=z.unstable_now();ct=b;var G=!0;try{l:{hl=!1,$&&($=!1,Dl(nl),nl=-1),al=!0;var J=Z;try{t:{for(kl(b),N=U(D);N!==null&&!(N.expirationTime>b&&vt());){var cl=N.callback;if(typeof cl=="function"){N.callback=null,Z=N.priorityLevel;var dl=cl(N.expirationTime<=b);if(b=z.unstable_now(),typeof dl=="function"){N.callback=dl,kl(b),G=!0;break t}N===U(D)&&m(D),kl(b)}else m(D);N=U(D)}if(N!==null)G=!0;else{var o=U(E);o!==null&&Vl(at,o.startTime-b),G=!1}}break l}finally{N=null,Z=J,al=!1}G=void 0}}finally{G?zl():Xl=!1}}}var zl;if(typeof yl=="function")zl=function(){yl(Pl)};else if(typeof MessageChannel<"u"){var Ql=new MessageChannel,Zl=Ql.port2;Ql.port1.onmessage=Pl,zl=function(){Zl.postMessage(null)}}else zl=function(){Ll(Pl,0)};function Vl(b,G){nl=Ll(function(){b(z.unstable_now())},G)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(b){b.callback=null},z.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bl=0<b?Math.floor(1e3/b):5},z.unstable_getCurrentPriorityLevel=function(){return Z},z.unstable_next=function(b){switch(Z){case 1:case 2:case 3:var G=3;break;default:G=Z}var J=Z;Z=G;try{return b()}finally{Z=J}},z.unstable_requestPaint=function(){rl=!0},z.unstable_runWithPriority=function(b,G){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var J=Z;Z=b;try{return G()}finally{Z=J}},z.unstable_scheduleCallback=function(b,G,J){var cl=z.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?cl+J:cl):J=cl,b){case 1:var dl=-1;break;case 2:dl=250;break;case 5:dl=1073741823;break;case 4:dl=1e4;break;default:dl=5e3}return dl=J+dl,b={id:V++,callback:G,priorityLevel:b,startTime:J,expirationTime:dl,sortIndex:-1},J>cl?(b.sortIndex=J,B(E,b),U(D)===null&&b===U(E)&&($?(Dl(nl),nl=-1):$=!0,Vl(at,J-cl))):(b.sortIndex=dl,B(D,b),hl||al||(hl=!0,Xl||(Xl=!0,zl()))),b},z.unstable_shouldYield=vt,z.unstable_wrapCallback=function(b){var G=Z;return function(){var J=Z;Z=G;try{return b.apply(this,arguments)}finally{Z=J}}}})(gc)),gc}var Mr;function cd(){return Mr||(Mr=1,yc.exports=fd()),yc.exports}var Sc={exports:{}},ut={};var Or;function _d(){if(Or)return ut;Or=1;var z=Ac();function B(D){var E="https://react.dev/errors/"+D;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)E+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+D+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var m={d:{f:U,r:function(){throw Error(B(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},O=Symbol.for("react.portal");function q(D,E,V){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:N==null?null:""+N,children:D,containerInfo:E,implementation:V}}var X=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(D,E){if(D==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ut.createPortal=function(D,E){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(B(299));return q(D,E,null,V)},ut.flushSync=function(D){var E=X.T,V=m.p;try{if(X.T=null,m.p=2,D)return D()}finally{X.T=E,m.p=V,m.d.f()}},ut.preconnect=function(D,E){typeof D=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,m.d.C(D,E))},ut.prefetchDNS=function(D){typeof D=="string"&&m.d.D(D)},ut.preinit=function(D,E){if(typeof D=="string"&&E&&typeof E.as=="string"){var V=E.as,N=j(V,E.crossOrigin),Z=typeof E.integrity=="string"?E.integrity:void 0,al=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;V==="style"?m.d.S(D,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:N,integrity:Z,fetchPriority:al}):V==="script"&&m.d.X(D,{crossOrigin:N,integrity:Z,fetchPriority:al,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},ut.preinitModule=function(D,E){if(typeof D=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var V=j(E.as,E.crossOrigin);m.d.M(D,{crossOrigin:V,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&m.d.M(D)},ut.preload=function(D,E){if(typeof D=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var V=E.as,N=j(V,E.crossOrigin);m.d.L(D,V,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},ut.preloadModule=function(D,E){if(typeof D=="string")if(E){var V=j(E.as,E.crossOrigin);m.d.m(D,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:V,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else m.d.m(D)},ut.requestFormReset=function(D){m.d.r(D)},ut.unstable_batchedUpdates=function(D,E){return D(E)},ut.useFormState=function(D,E,V){return X.H.useFormState(D,E,V)},ut.useFormStatus=function(){return X.H.useHostTransitionStatus()},ut.version="19.2.3",ut}var Nr;function sd(){if(Nr)return Sc.exports;Nr=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),Sc.exports=_d(),Sc.exports}var Cr;function od(){if(Cr)return Ua;Cr=1;var z=cd(),B=Ac(),U=sd();function m(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function q(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function X(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function j(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function D(l){if(q(l)!==l)throw Error(m(188))}function E(l){var t=l.alternate;if(!t){if(t=q(l),t===null)throw Error(m(188));return t!==l?null:l}for(var e=l,u=t;;){var a=e.return;if(a===null)break;var n=a.alternate;if(n===null){if(u=a.return,u!==null){e=u;continue}break}if(a.child===n.child){for(n=a.child;n;){if(n===e)return D(a),l;if(n===u)return D(a),t;n=n.sibling}throw Error(m(188))}if(e.return!==u.return)e=a,u=n;else{for(var i=!1,f=a.child;f;){if(f===e){i=!0,e=a,u=n;break}if(f===u){i=!0,u=a,e=n;break}f=f.sibling}if(!i){for(f=n.child;f;){if(f===e){i=!0,e=n,u=a;break}if(f===u){i=!0,u=n,e=a;break}f=f.sibling}if(!i)throw Error(m(189))}}if(e.alternate!==u)throw Error(m(190))}if(e.tag!==3)throw Error(m(188));return e.stateNode.current===e?l:t}function V(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=V(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,Z=Symbol.for("react.element"),al=Symbol.for("react.transitional.element"),hl=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Dl=Symbol.for("react.consumer"),yl=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),vt=Symbol.for("react.memo_cache_sentinel"),Pl=Symbol.iterator;function zl(l){return l===null||typeof l!="object"?null:(l=Pl&&l[Pl]||l["@@iterator"],typeof l=="function"?l:null)}var Ql=Symbol.for("react.client.reference");function Zl(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ql?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case $:return"Fragment";case Ll:return"Profiler";case rl:return"StrictMode";case at:return"Suspense";case Xl:return"SuspenseList";case ct:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case hl:return"Portal";case yl:return l.displayName||"Context";case Dl:return(l._context.displayName||"Context")+".Consumer";case kl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case nl:return t=l.displayName||null,t!==null?t:Zl(l.type)||"Memo";case Bl:t=l._payload,l=l._init;try{return Zl(l(t))}catch{}}return null}var Vl=Array.isArray,b=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},cl=[],dl=-1;function o(l){return{current:l}}function _(l){0>dl||(l.current=cl[dl],cl[dl]=null,dl--)}function h(l,t){dl++,cl[dl]=l.current,l.current=t}var c=o(null),d=o(null),A=o(null),M=o(null);function H(l,t){switch(h(A,t),h(d,l),h(c,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Jo(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Jo(t),l=wo(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}_(c),h(c,l)}function C(){_(c),_(d),_(A)}function Y(l){l.memoizedState!==null&&h(M,l);var t=c.current,e=wo(t,l.type);t!==e&&(h(d,l),h(c,e))}function K(l){d.current===l&&(_(c),_(d)),M.current===l&&(_(M),Ma._currentValue=J)}var F,k;function W(l){if(F===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||"",k=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+l+k}var ul=!1;function nt(l,t){if(!l||ul)return"";ul=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(T){var S=T}Reflect.construct(l,[],p)}else{try{p.call()}catch(T){S=T}l.call(p.prototype)}}else{try{throw Error()}catch(T){S=T}(p=l())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(T){if(T&&S&&typeof T.stack=="string")return[T.stack,S.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=u.DetermineComponentFrameRoot(),i=n[0],f=n[1];if(i&&f){var s=i.split(`
`),g=f.split(`
`);for(a=u=0;u<s.length&&!s[u].includes("DetermineComponentFrameRoot");)u++;for(;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;if(u===s.length||a===g.length)for(u=s.length-1,a=g.length-1;1<=u&&0<=a&&s[u]!==g[a];)a--;for(;1<=u&&0<=a;u--,a--)if(s[u]!==g[a]){if(u!==1||a!==1)do if(u--,a--,0>a||s[u]!==g[a]){var R=`
`+s[u].replace(" at new "," at ");return l.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",l.displayName)),R}while(1<=u&&0<=a);break}}}finally{ul=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?W(e):""}function lt(l,t){switch(l.tag){case 26:case 27:case 5:return W(l.type);case 16:return W("Lazy");case 13:return l.child!==t&&t!==null?W("Suspense Fallback"):W("Suspense");case 19:return W("SuspenseList");case 0:case 15:return nt(l.type,!1);case 11:return nt(l.type.render,!1);case 1:return nt(l.type,!0);case 31:return W("Activity");default:return""}}function se(l){try{var t="",e=null;do t+=lt(l,e),e=l,l=l.return;while(l);return t}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var it=Object.prototype.hasOwnProperty,jt=z.unstable_scheduleCallback,tt=z.unstable_cancelCallback,et=z.unstable_shouldYield,li=z.unstable_requestPaint,yt=z.unstable_now,jr=z.unstable_getCurrentPriorityLevel,bc=z.unstable_ImmediatePriority,Rc=z.unstable_UserBlockingPriority,Ha=z.unstable_NormalPriority,Yr=z.unstable_LowPriority,zc=z.unstable_IdlePriority,xr=z.log,Xr=z.unstable_setDisableYieldValue,xu=null,gt=null;function oe(l){if(typeof xr=="function"&&Xr(l),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(xu,l)}catch{}}var St=Math.clz32?Math.clz32:Vr,Qr=Math.log,Zr=Math.LN2;function Vr(l){return l>>>=0,l===0?32:31-(Qr(l)/Zr|0)|0}var Ba=256,Ga=262144,qa=4194304;function Ge(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function ja(l,t,e){var u=l.pendingLanes;if(u===0)return 0;var a=0,n=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var f=u&134217727;return f!==0?(u=f&~n,u!==0?a=Ge(u):(i&=f,i!==0?a=Ge(i):e||(e=f&~l,e!==0&&(a=Ge(e))))):(f=u&~n,f!==0?a=Ge(f):i!==0?a=Ge(i):e||(e=u&~l,e!==0&&(a=Ge(e)))),a===0?0:t!==0&&t!==a&&(t&n)===0&&(n=a&-a,e=t&-t,n>=e||n===32&&(e&4194048)!==0)?t:a}function Xu(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Kr(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lc(){var l=qa;return qa<<=1,(qa&62914560)===0&&(qa=4194304),l}function ti(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Qu(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Jr(l,t,e,u,a,n){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var f=l.entanglements,s=l.expirationTimes,g=l.hiddenUpdates;for(e=i&~e;0<e;){var R=31-St(e),p=1<<R;f[R]=0,s[R]=-1;var S=g[R];if(S!==null)for(g[R]=null,R=0;R<S.length;R++){var T=S[R];T!==null&&(T.lane&=-536870913)}e&=~p}u!==0&&pc(l,u,0),n!==0&&a===0&&l.tag!==0&&(l.suspendedLanes|=n&~(i&~t))}function pc(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var u=31-St(t);l.entangledLanes|=t,l.entanglements[u]=l.entanglements[u]|1073741824|e&261930}function Mc(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var u=31-St(e),a=1<<u;a&t|l[u]&t&&(l[u]|=t),e&=~a}}function Oc(l,t){var e=t&-t;return e=(e&42)!==0?1:ei(e),(e&(l.suspendedLanes|t))!==0?0:e}function ei(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function ui(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Nc(){var l=G.p;return l!==0?l:(l=window.event,l===void 0?32:vr(l.type))}function Cc(l,t){var e=G.p;try{return G.p=l,t()}finally{G.p=e}}var re=Math.random().toString(36).slice(2),wl="__reactFiber$"+re,_t="__reactProps$"+re,tu="__reactContainer$"+re,ai="__reactEvents$"+re,wr="__reactListeners$"+re,Ir="__reactHandles$"+re,Dc="__reactResources$"+re,Zu="__reactMarker$"+re;function ni(l){delete l[wl],delete l[_t],delete l[ai],delete l[wr],delete l[Ir]}function eu(l){var t=l[wl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[tu]||e[wl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=lr(l);l!==null;){if(e=l[wl])return e;l=lr(l)}return t}l=e,e=l.parentNode}return null}function uu(l){if(l=l[wl]||l[tu]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Vu(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(m(33))}function au(l){var t=l[Dc];return t||(t=l[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Kl(l){l[Zu]=!0}var Uc=new Set,Hc={};function qe(l,t){nu(l,t),nu(l+"Capture",t)}function nu(l,t){for(Hc[l]=t,l=0;l<t.length;l++)Uc.add(t[l])}var Wr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},Gc={};function $r(l){return it.call(Gc,l)?!0:it.call(Bc,l)?!1:Wr.test(l)?Gc[l]=!0:(Bc[l]=!0,!1)}function Ya(l,t,e){if($r(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var u=t.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function xa(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Jt(l,t,e,u){if(u===null)l.removeAttribute(e);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+u)}}function Mt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function qc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fr(l,t,e){var u=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var a=u.get,n=u.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(l,t,{enumerable:u.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ii(l){if(!l._valueTracker){var t=qc(l)?"checked":"value";l._valueTracker=Fr(l,t,""+l[t])}}function jc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),u="";return l&&(u=qc(l)?l.checked?"true":"false":l.value),l=u,l!==e?(t.setValue(l),!0):!1}function Xa(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var kr=/[\n"\\]/g;function Ot(l){return l.replace(kr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fi(l,t,e,u,a,n,i,f){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+Mt(t)):l.value!==""+Mt(t)&&(l.value=""+Mt(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ci(l,i,Mt(t)):e!=null?ci(l,i,Mt(e)):u!=null&&l.removeAttribute("value"),a==null&&n!=null&&(l.defaultChecked=!!n),a!=null&&(l.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?l.name=""+Mt(f):l.removeAttribute("name")}function Yc(l,t,e,u,a,n,i,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(l.type=n),t!=null||e!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){ii(l);return}e=e!=null?""+Mt(e):"",t=t!=null?""+Mt(t):e,f||t===l.value||(l.value=t),l.defaultValue=t}u=u??a,u=typeof u!="function"&&typeof u!="symbol"&&!!u,l.checked=f?l.checked:!!u,l.defaultChecked=!!u,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ii(l)}function ci(l,t,e){t==="number"&&Xa(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function iu(l,t,e,u){if(l=l.options,t){t={};for(var a=0;a<e.length;a++)t["$"+e[a]]=!0;for(e=0;e<l.length;e++)a=t.hasOwnProperty("$"+l[e].value),l[e].selected!==a&&(l[e].selected=a),a&&u&&(l[e].defaultSelected=!0)}else{for(e=""+Mt(e),t=null,a=0;a<l.length;a++){if(l[a].value===e){l[a].selected=!0,u&&(l[a].defaultSelected=!0);return}t!==null||l[a].disabled||(t=l[a])}t!==null&&(t.selected=!0)}}function xc(l,t,e){if(t!=null&&(t=""+Mt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+Mt(e):""}function Xc(l,t,e,u){if(t==null){if(u!=null){if(e!=null)throw Error(m(92));if(Vl(u)){if(1<u.length)throw Error(m(93));u=u[0]}e=u}e==null&&(e=""),t=e}e=Mt(t),l.defaultValue=e,u=l.textContent,u===e&&u!==""&&u!==null&&(l.value=u),ii(l)}function fu(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var Pr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qc(l,t,e){var u=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?u?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":u?l.setProperty(t,e):typeof e!="number"||e===0||Pr.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Zc(l,t,e){if(t!=null&&typeof t!="object")throw Error(m(62));if(l=l.style,e!=null){for(var u in e)!e.hasOwnProperty(u)||t!=null&&t.hasOwnProperty(u)||(u.indexOf("--")===0?l.setProperty(u,""):u==="float"?l.cssFloat="":l[u]="");for(var a in t)u=t[a],t.hasOwnProperty(a)&&e[a]!==u&&Qc(l,a,u)}else for(var n in t)t.hasOwnProperty(n)&&Qc(l,n,t[n])}function _i(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),th=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qa(l){return th.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function wt(){}var si=null;function oi(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var cu=null,_u=null;function Vc(l){var t=uu(l);if(t&&(l=t.stateNode)){var e=l[_t]||null;l:switch(l=t.stateNode,t.type){case"input":if(fi(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var u=e[t];if(u!==l&&u.form===l.form){var a=u[_t]||null;if(!a)throw Error(m(90));fi(u,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<e.length;t++)u=e[t],u.form===l.form&&jc(u)}break l;case"textarea":xc(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&iu(l,!!e.multiple,t,!1)}}}var ri=!1;function Kc(l,t,e){if(ri)return l(t,e);ri=!0;try{var u=l(t);return u}finally{if(ri=!1,(cu!==null||_u!==null)&&(Nn(),cu&&(t=cu,l=_u,_u=cu=null,Vc(t),l)))for(t=0;t<l.length;t++)Vc(l[t])}}function Ku(l,t){var e=l.stateNode;if(e===null)return null;var u=e[_t]||null;if(u===null)return null;e=u[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(l=l.type,u=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!u;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(m(231,t,typeof e));return e}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hi=!1;if(It)try{var Ju={};Object.defineProperty(Ju,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Ju,Ju),window.removeEventListener("test",Ju,Ju)}catch{hi=!1}var he=null,di=null,Za=null;function Jc(){if(Za)return Za;var l,t=di,e=t.length,u,a="value"in he?he.value:he.textContent,n=a.length;for(l=0;l<e&&t[l]===a[l];l++);var i=e-l;for(u=1;u<=i&&t[e-u]===a[n-u];u++);return Za=a.slice(l,1<u?1-u:void 0)}function Va(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Ka(){return!0}function wc(){return!1}function st(l){function t(e,u,a,n,i){this._reactName=e,this._targetInst=a,this.type=u,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var f in l)l.hasOwnProperty(f)&&(e=l[f],this[f]=e?e(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ka:wc,this.isPropagationStopped=wc,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=st(je),wu=N({},je,{view:0,detail:0}),eh=st(wu),mi,vi,Iu,wa=N({},wu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Iu&&(Iu&&l.type==="mousemove"?(mi=l.screenX-Iu.screenX,vi=l.screenY-Iu.screenY):vi=mi=0,Iu=l),mi)},movementY:function(l){return"movementY"in l?l.movementY:vi}}),Ic=st(wa),uh=N({},wa,{dataTransfer:0}),ah=st(uh),nh=N({},wu,{relatedTarget:0}),yi=st(nh),ih=N({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=st(ih),ch=N({},je,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),_h=st(ch),sh=N({},je,{data:0}),Wc=st(sh),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=hh[l])?!!t[l]:!1}function gi(){return dh}var mh=N({},wu,{key:function(l){if(l.key){var t=oh[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Va(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?rh[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(l){return l.type==="keypress"?Va(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Va(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),vh=st(mh),yh=N({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=st(yh),gh=N({},wu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),Sh=st(gh),Th=N({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=st(Th),Ah=N({},wa,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=st(Ah),Rh=N({},je,{newState:0,oldState:0}),zh=st(Rh),Lh=[9,13,27,32],Si=It&&"CompositionEvent"in window,Wu=null;It&&"documentMode"in document&&(Wu=document.documentMode);var ph=It&&"TextEvent"in window&&!Wu,Fc=It&&(!Si||Wu&&8<Wu&&11>=Wu),kc=" ",Pc=!1;function l_(l,t){switch(l){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var su=!1;function Mh(l,t){switch(l){case"compositionend":return t_(t);case"keypress":return t.which!==32?null:(Pc=!0,kc);case"textInput":return l=t.data,l===kc&&Pc?null:l;default:return null}}function Oh(l,t){if(su)return l==="compositionend"||!Si&&l_(l,t)?(l=Jc(),Za=di=he=null,su=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e_(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Nh[l.type]:t==="textarea"}function u_(l,t,e,u){cu?_u?_u.push(u):_u=[u]:cu=u,t=qn(t,"onChange"),0<t.length&&(e=new Ja("onChange","change",null,e,u),l.push({event:e,listeners:t}))}var $u=null,Fu=null;function Ch(l){xo(l,0)}function Ia(l){var t=Vu(l);if(jc(t))return l}function a_(l,t){if(l==="change")return t}var n_=!1;if(It){var Ti;if(It){var Ei="oninput"in document;if(!Ei){var i_=document.createElement("div");i_.setAttribute("oninput","return;"),Ei=typeof i_.oninput=="function"}Ti=Ei}else Ti=!1;n_=Ti&&(!document.documentMode||9<document.documentMode)}function f_(){$u&&($u.detachEvent("onpropertychange",c_),Fu=$u=null)}function c_(l){if(l.propertyName==="value"&&Ia(Fu)){var t=[];u_(t,Fu,l,oi(l)),Kc(Ch,t)}}function Dh(l,t,e){l==="focusin"?(f_(),$u=t,Fu=e,$u.attachEvent("onpropertychange",c_)):l==="focusout"&&f_()}function Uh(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Ia(Fu)}function Hh(l,t){if(l==="click")return Ia(t)}function Bh(l,t){if(l==="input"||l==="change")return Ia(t)}function Gh(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Gh;function ku(l,t){if(Tt(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),u=Object.keys(t);if(e.length!==u.length)return!1;for(u=0;u<e.length;u++){var a=e[u];if(!it.call(t,a)||!Tt(l[a],t[a]))return!1}return!0}function __(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function s_(l,t){var e=__(l);l=0;for(var u;e;){if(e.nodeType===3){if(u=l+e.textContent.length,l<=t&&u>=t)return{node:e,offset:t-l};l=u}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=__(e)}}function o_(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?o_(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function r_(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=Xa(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=Xa(l.document)}return t}function Ai(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var qh=It&&"documentMode"in document&&11>=document.documentMode,ou=null,bi=null,Pu=null,Ri=!1;function h_(l,t,e){var u=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ri||ou==null||ou!==Xa(u)||(u=ou,"selectionStart"in u&&Ai(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pu&&ku(Pu,u)||(Pu=u,u=qn(bi,"onSelect"),0<u.length&&(t=new Ja("onSelect","select",null,t,e),l.push({event:t,listeners:u}),t.target=ou)))}function Ye(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var ru={animationend:Ye("Animation","AnimationEnd"),animationiteration:Ye("Animation","AnimationIteration"),animationstart:Ye("Animation","AnimationStart"),transitionrun:Ye("Transition","TransitionRun"),transitionstart:Ye("Transition","TransitionStart"),transitioncancel:Ye("Transition","TransitionCancel"),transitionend:Ye("Transition","TransitionEnd")},zi={},d_={};It&&(d_=document.createElement("div").style,"AnimationEvent"in window||(delete ru.animationend.animation,delete ru.animationiteration.animation,delete ru.animationstart.animation),"TransitionEvent"in window||delete ru.transitionend.transition);function xe(l){if(zi[l])return zi[l];if(!ru[l])return l;var t=ru[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in d_)return zi[l]=t[e];return l}var m_=xe("animationend"),v_=xe("animationiteration"),y_=xe("animationstart"),jh=xe("transitionrun"),Yh=xe("transitionstart"),xh=xe("transitioncancel"),g_=xe("transitionend"),S_=new Map,Li="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Li.push("scrollEnd");function Yt(l,t){S_.set(l,t),qe(t,[l])}var Wa=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},Nt=[],hu=0,pi=0;function $a(){for(var l=hu,t=pi=hu=0;t<l;){var e=Nt[t];Nt[t++]=null;var u=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var n=Nt[t];if(Nt[t++]=null,u!==null&&a!==null){var i=u.pending;i===null?a.next=a:(a.next=i.next,i.next=a),u.pending=a}n!==0&&T_(e,a,n)}}function Fa(l,t,e,u){Nt[hu++]=l,Nt[hu++]=t,Nt[hu++]=e,Nt[hu++]=u,pi|=u,l.lanes|=u,l=l.alternate,l!==null&&(l.lanes|=u)}function Mi(l,t,e,u){return Fa(l,t,e,u),ka(l)}function Xe(l,t){return Fa(l,null,null,t),ka(l)}function T_(l,t,e){l.lanes|=e;var u=l.alternate;u!==null&&(u.lanes|=e);for(var a=!1,n=l.return;n!==null;)n.childLanes|=e,u=n.alternate,u!==null&&(u.childLanes|=e),n.tag===22&&(l=n.stateNode,l===null||l._visibility&1||(a=!0)),l=n,n=n.return;return l.tag===3?(n=l.stateNode,a&&t!==null&&(a=31-St(e),l=n.hiddenUpdates,u=l[a],u===null?l[a]=[t]:u.push(t),t.lane=e|536870912),n):null}function ka(l){if(50<Ea)throw Ea=0,jf=null,Error(m(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var du={};function Xh(l,t,e,u){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(l,t,e,u){return new Xh(l,t,e,u)}function Oi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Wt(l,t){var e=l.alternate;return e===null?(e=Et(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function E_(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Pa(l,t,e,u,a,n){var i=0;if(u=l,typeof l=="function")Oi(l)&&(i=1);else if(typeof l=="string")i=J0(l,e,c.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case ct:return l=Et(31,e,t,a),l.elementType=ct,l.lanes=n,l;case $:return Qe(e.children,a,n,t);case rl:i=8,a|=24;break;case Ll:return l=Et(12,e,t,a|2),l.elementType=Ll,l.lanes=n,l;case at:return l=Et(13,e,t,a),l.elementType=at,l.lanes=n,l;case Xl:return l=Et(19,e,t,a),l.elementType=Xl,l.lanes=n,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case yl:i=10;break l;case Dl:i=9;break l;case kl:i=11;break l;case nl:i=14;break l;case Bl:i=16,u=null;break l}i=29,e=Error(m(130,l===null?"null":typeof l,"")),u=null}return t=Et(i,e,t,a),t.elementType=l,t.type=u,t.lanes=n,t}function Qe(l,t,e,u){return l=Et(7,l,u,t),l.lanes=e,l}function Ni(l,t,e){return l=Et(6,l,null,t),l.lanes=e,l}function A_(l){var t=Et(18,null,null,0);return t.stateNode=l,t}function Ci(l,t,e){return t=Et(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var b_=new WeakMap;function Ct(l,t){if(typeof l=="object"&&l!==null){var e=b_.get(l);return e!==void 0?e:(t={value:l,source:t,stack:se(t)},b_.set(l,t),t)}return{value:l,source:t,stack:se(t)}}var mu=[],vu=0,ln=null,la=0,Dt=[],Ut=0,de=null,Qt=1,Zt="";function $t(l,t){mu[vu++]=la,mu[vu++]=ln,ln=l,la=t}function R_(l,t,e){Dt[Ut++]=Qt,Dt[Ut++]=Zt,Dt[Ut++]=de,de=l;var u=Qt;l=Zt;var a=32-St(u)-1;u&=~(1<<a),e+=1;var n=32-St(t)+a;if(30<n){var i=a-a%5;n=(u&(1<<i)-1).toString(32),u>>=i,a-=i,Qt=1<<32-St(t)+a|e<<a|u,Zt=n+l}else Qt=1<<n|e<<a|u,Zt=l}function Di(l){l.return!==null&&($t(l,1),R_(l,1,0))}function Ui(l){for(;l===ln;)ln=mu[--vu],mu[vu]=null,la=mu[--vu],mu[vu]=null;for(;l===de;)de=Dt[--Ut],Dt[Ut]=null,Zt=Dt[--Ut],Dt[Ut]=null,Qt=Dt[--Ut],Dt[Ut]=null}function z_(l,t){Dt[Ut++]=Qt,Dt[Ut++]=Zt,Dt[Ut++]=de,Qt=t.id,Zt=t.overflow,de=l}var Il=null,pl=null,ol=!1,me=null,Ht=!1,Hi=Error(m(519));function ve(l){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ta(Ct(t,l)),Hi}function L_(l){var t=l.stateNode,e=l.type,u=l.memoizedProps;switch(t[wl]=l,t[_t]=u,e){case"dialog":fl("cancel",t),fl("close",t);break;case"iframe":case"object":case"embed":fl("load",t);break;case"video":case"audio":for(e=0;e<ba.length;e++)fl(ba[e],t);break;case"source":fl("error",t);break;case"img":case"image":case"link":fl("error",t),fl("load",t);break;case"details":fl("toggle",t);break;case"input":fl("invalid",t),Yc(t,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":fl("invalid",t);break;case"textarea":fl("invalid",t),Xc(t,u.value,u.defaultValue,u.children)}e=u.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||u.suppressHydrationWarning===!0||Vo(t.textContent,e)?(u.popover!=null&&(fl("beforetoggle",t),fl("toggle",t)),u.onScroll!=null&&fl("scroll",t),u.onScrollEnd!=null&&fl("scrollend",t),u.onClick!=null&&(t.onclick=wt),t=!0):t=!1,t||ve(l,!0)}function p_(l){for(Il=l.return;Il;)switch(Il.tag){case 5:case 31:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:Il=Il.return}}function yu(l){if(l!==Il)return!1;if(!ol)return p_(l),ol=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Pf(l.type,l.memoizedProps)),e=!e),e&&pl&&ve(l),p_(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));pl=Po(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(317));pl=Po(l)}else t===27?(t=pl,Ne(l.type)?(l=ac,ac=null,pl=l):pl=t):pl=Il?Gt(l.stateNode.nextSibling):null;return!0}function Ze(){pl=Il=null,ol=!1}function Bi(){var l=me;return l!==null&&(dt===null?dt=l:dt.push.apply(dt,l),me=null),l}function ta(l){me===null?me=[l]:me.push(l)}var Gi=o(null),Ve=null,Ft=null;function ye(l,t,e){h(Gi,t._currentValue),t._currentValue=e}function kt(l){l._currentValue=Gi.current,_(Gi)}function qi(l,t,e){for(;l!==null;){var u=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,u!==null&&(u.childLanes|=t)):u!==null&&(u.childLanes&t)!==t&&(u.childLanes|=t),l===e)break;l=l.return}}function ji(l,t,e,u){var a=l.child;for(a!==null&&(a.return=l);a!==null;){var n=a.dependencies;if(n!==null){var i=a.child;n=n.firstContext;l:for(;n!==null;){var f=n;n=a;for(var s=0;s<t.length;s++)if(f.context===t[s]){n.lanes|=e,f=n.alternate,f!==null&&(f.lanes|=e),qi(n.return,e,l),u||(i=null);break l}n=f.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(m(341));i.lanes|=e,n=i.alternate,n!==null&&(n.lanes|=e),qi(i,e,l),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===l){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function gu(l,t,e,u){l=null;for(var a=t,n=!1;a!==null;){if(!n){if((a.flags&524288)!==0)n=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var f=a.type;Tt(a.pendingProps.value,i.value)||(l!==null?l.push(f):l=[f])}}else if(a===M.current){if(i=a.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(l!==null?l.push(Ma):l=[Ma])}a=a.return}l!==null&&ji(t,l,e,u),t.flags|=262144}function tn(l){for(l=l.firstContext;l!==null;){if(!Tt(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ke(l){Ve=l,Ft=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Wl(l){return M_(Ve,l)}function en(l,t){return Ve===null&&Ke(l),M_(l,t)}function M_(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Ft===null){if(l===null)throw Error(m(308));Ft=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Ft=Ft.next=t;return e}var Qh=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,u){l.push(u)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},Zh=z.unstable_scheduleCallback,Vh=z.unstable_NormalPriority,Gl={$$typeof:yl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yi(){return{controller:new Qh,data:new Map,refCount:0}}function ea(l){l.refCount--,l.refCount===0&&Zh(Vh,function(){l.controller.abort()})}var ua=null,xi=0,Su=0,Tu=null;function Kh(l,t){if(ua===null){var e=ua=[];xi=0,Su=Vf(),Tu={status:"pending",value:void 0,then:function(u){e.push(u)}}}return xi++,t.then(O_,O_),t}function O_(){if(--xi===0&&ua!==null){Tu!==null&&(Tu.status="fulfilled");var l=ua;ua=null,Su=0,Tu=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Jh(l,t){var e=[],u={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return l.then(function(){u.status="fulfilled",u.value=t;for(var a=0;a<e.length;a++)(0,e[a])(t)},function(a){for(u.status="rejected",u.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),u}var N_=b.S;b.S=function(l,t){ho=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kh(l,t),N_!==null&&N_(l,t)};var Je=o(null);function Xi(){var l=Je.current;return l!==null?l:Rl.pooledCache}function un(l,t){t===null?h(Je,Je.current):h(Je,t.pool)}function C_(){var l=Xi();return l===null?null:{parent:Gl._currentValue,pool:l}}var Eu=Error(m(460)),Qi=Error(m(474)),an=Error(m(542)),nn={then:function(){}};function D_(l){return l=l.status,l==="fulfilled"||l==="rejected"}function U_(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(wt,wt),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,B_(l),l;default:if(typeof t.status=="string")t.then(wt,wt);else{if(l=Rl,l!==null&&100<l.shellSuspendCounter)throw Error(m(482));l=t,l.status="pending",l.then(function(u){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=u}},function(u){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=u}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,B_(l),l}throw Ie=t,Eu}}function we(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ie=e,Eu):e}}var Ie=null;function H_(){if(Ie===null)throw Error(m(459));var l=Ie;return Ie=null,l}function B_(l){if(l===Eu||l===an)throw Error(m(483))}var Au=null,aa=0;function fn(l){var t=aa;return aa+=1,Au===null&&(Au=[]),U_(Au,l,t)}function na(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function cn(l,t){throw t.$$typeof===Z?Error(m(525)):(l=Object.prototype.toString.call(t),Error(m(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function G_(l){function t(v,r){if(l){var y=v.deletions;y===null?(v.deletions=[r],v.flags|=16):y.push(r)}}function e(v,r){if(!l)return null;for(;r!==null;)t(v,r),r=r.sibling;return null}function u(v){for(var r=new Map;v!==null;)v.key!==null?r.set(v.key,v):r.set(v.index,v),v=v.sibling;return r}function a(v,r){return v=Wt(v,r),v.index=0,v.sibling=null,v}function n(v,r,y){return v.index=y,l?(y=v.alternate,y!==null?(y=y.index,y<r?(v.flags|=67108866,r):y):(v.flags|=67108866,r)):(v.flags|=1048576,r)}function i(v){return l&&v.alternate===null&&(v.flags|=67108866),v}function f(v,r,y,L){return r===null||r.tag!==6?(r=Ni(y,v.mode,L),r.return=v,r):(r=a(r,y),r.return=v,r)}function s(v,r,y,L){var w=y.type;return w===$?R(v,r,y.props.children,L,y.key):r!==null&&(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bl&&we(w)===r.type)?(r=a(r,y.props),na(r,y),r.return=v,r):(r=Pa(y.type,y.key,y.props,null,v.mode,L),na(r,y),r.return=v,r)}function g(v,r,y,L){return r===null||r.tag!==4||r.stateNode.containerInfo!==y.containerInfo||r.stateNode.implementation!==y.implementation?(r=Ci(y,v.mode,L),r.return=v,r):(r=a(r,y.children||[]),r.return=v,r)}function R(v,r,y,L,w){return r===null||r.tag!==7?(r=Qe(y,v.mode,L,w),r.return=v,r):(r=a(r,y),r.return=v,r)}function p(v,r,y){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ni(""+r,v.mode,y),r.return=v,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case al:return y=Pa(r.type,r.key,r.props,null,v.mode,y),na(y,r),y.return=v,y;case hl:return r=Ci(r,v.mode,y),r.return=v,r;case Bl:return r=we(r),p(v,r,y)}if(Vl(r)||zl(r))return r=Qe(r,v.mode,y,null),r.return=v,r;if(typeof r.then=="function")return p(v,fn(r),y);if(r.$$typeof===yl)return p(v,en(v,r),y);cn(v,r)}return null}function S(v,r,y,L){var w=r!==null?r.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return w!==null?null:f(v,r,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return y.key===w?s(v,r,y,L):null;case hl:return y.key===w?g(v,r,y,L):null;case Bl:return y=we(y),S(v,r,y,L)}if(Vl(y)||zl(y))return w!==null?null:R(v,r,y,L,null);if(typeof y.then=="function")return S(v,r,fn(y),L);if(y.$$typeof===yl)return S(v,r,en(v,y),L);cn(v,y)}return null}function T(v,r,y,L,w){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return v=v.get(y)||null,f(r,v,""+L,w);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case al:return v=v.get(L.key===null?y:L.key)||null,s(r,v,L,w);case hl:return v=v.get(L.key===null?y:L.key)||null,g(r,v,L,w);case Bl:return L=we(L),T(v,r,y,L,w)}if(Vl(L)||zl(L))return v=v.get(y)||null,R(r,v,L,w,null);if(typeof L.then=="function")return T(v,r,y,fn(L),w);if(L.$$typeof===yl)return T(v,r,y,en(r,L),w);cn(r,L)}return null}function x(v,r,y,L){for(var w=null,ml=null,Q=r,el=r=0,sl=null;Q!==null&&el<y.length;el++){Q.index>el?(sl=Q,Q=null):sl=Q.sibling;var vl=S(v,Q,y[el],L);if(vl===null){Q===null&&(Q=sl);break}l&&Q&&vl.alternate===null&&t(v,Q),r=n(vl,r,el),ml===null?w=vl:ml.sibling=vl,ml=vl,Q=sl}if(el===y.length)return e(v,Q),ol&&$t(v,el),w;if(Q===null){for(;el<y.length;el++)Q=p(v,y[el],L),Q!==null&&(r=n(Q,r,el),ml===null?w=Q:ml.sibling=Q,ml=Q);return ol&&$t(v,el),w}for(Q=u(Q);el<y.length;el++)sl=T(Q,v,el,y[el],L),sl!==null&&(l&&sl.alternate!==null&&Q.delete(sl.key===null?el:sl.key),r=n(sl,r,el),ml===null?w=sl:ml.sibling=sl,ml=sl);return l&&Q.forEach(function(Be){return t(v,Be)}),ol&&$t(v,el),w}function I(v,r,y,L){if(y==null)throw Error(m(151));for(var w=null,ml=null,Q=r,el=r=0,sl=null,vl=y.next();Q!==null&&!vl.done;el++,vl=y.next()){Q.index>el?(sl=Q,Q=null):sl=Q.sibling;var Be=S(v,Q,vl.value,L);if(Be===null){Q===null&&(Q=sl);break}l&&Q&&Be.alternate===null&&t(v,Q),r=n(Be,r,el),ml===null?w=Be:ml.sibling=Be,ml=Be,Q=sl}if(vl.done)return e(v,Q),ol&&$t(v,el),w;if(Q===null){for(;!vl.done;el++,vl=y.next())vl=p(v,vl.value,L),vl!==null&&(r=n(vl,r,el),ml===null?w=vl:ml.sibling=vl,ml=vl);return ol&&$t(v,el),w}for(Q=u(Q);!vl.done;el++,vl=y.next())vl=T(Q,v,el,vl.value,L),vl!==null&&(l&&vl.alternate!==null&&Q.delete(vl.key===null?el:vl.key),r=n(vl,r,el),ml===null?w=vl:ml.sibling=vl,ml=vl);return l&&Q.forEach(function(ud){return t(v,ud)}),ol&&$t(v,el),w}function bl(v,r,y,L){if(typeof y=="object"&&y!==null&&y.type===$&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case al:l:{for(var w=y.key;r!==null;){if(r.key===w){if(w=y.type,w===$){if(r.tag===7){e(v,r.sibling),L=a(r,y.props.children),L.return=v,v=L;break l}}else if(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bl&&we(w)===r.type){e(v,r.sibling),L=a(r,y.props),na(L,y),L.return=v,v=L;break l}e(v,r);break}else t(v,r);r=r.sibling}y.type===$?(L=Qe(y.props.children,v.mode,L,y.key),L.return=v,v=L):(L=Pa(y.type,y.key,y.props,null,v.mode,L),na(L,y),L.return=v,v=L)}return i(v);case hl:l:{for(w=y.key;r!==null;){if(r.key===w)if(r.tag===4&&r.stateNode.containerInfo===y.containerInfo&&r.stateNode.implementation===y.implementation){e(v,r.sibling),L=a(r,y.children||[]),L.return=v,v=L;break l}else{e(v,r);break}else t(v,r);r=r.sibling}L=Ci(y,v.mode,L),L.return=v,v=L}return i(v);case Bl:return y=we(y),bl(v,r,y,L)}if(Vl(y))return x(v,r,y,L);if(zl(y)){if(w=zl(y),typeof w!="function")throw Error(m(150));return y=w.call(y),I(v,r,y,L)}if(typeof y.then=="function")return bl(v,r,fn(y),L);if(y.$$typeof===yl)return bl(v,r,en(v,y),L);cn(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,r!==null&&r.tag===6?(e(v,r.sibling),L=a(r,y),L.return=v,v=L):(e(v,r),L=Ni(y,v.mode,L),L.return=v,v=L),i(v)):e(v,r)}return function(v,r,y,L){try{aa=0;var w=bl(v,r,y,L);return Au=null,w}catch(Q){if(Q===Eu||Q===an)throw Q;var ml=Et(29,Q,null,v.mode);return ml.lanes=L,ml.return=v,ml}}}var We=G_(!0),q_=G_(!1),ge=!1;function Zi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function Se(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Te(l,t,e){var u=l.updateQueue;if(u===null)return null;if(u=u.shared,(gl&2)!==0){var a=u.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),u.pending=t,t=ka(l),T_(l,null,e),t}return Fa(l,u,t,e),ka(l)}function ia(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var u=t.lanes;u&=l.pendingLanes,e|=u,t.lanes=e,Mc(l,e)}}function Ki(l,t){var e=l.updateQueue,u=l.alternate;if(u!==null&&(u=u.updateQueue,e===u)){var a=null,n=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};n===null?a=n=i:n=n.next=i,e=e.next}while(e!==null);n===null?a=n=t:n=n.next=t}else a=n=t;e={baseState:u.baseState,firstBaseUpdate:a,lastBaseUpdate:n,shared:u.shared,callbacks:u.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Ji=!1;function fa(){if(Ji){var l=Tu;if(l!==null)throw l}}function ca(l,t,e,u){Ji=!1;var a=l.updateQueue;ge=!1;var n=a.firstBaseUpdate,i=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var s=f,g=s.next;s.next=null,i===null?n=g:i.next=g,i=s;var R=l.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==i&&(f===null?R.firstBaseUpdate=g:f.next=g,R.lastBaseUpdate=s))}if(n!==null){var p=a.baseState;i=0,R=g=s=null,f=n;do{var S=f.lane&-536870913,T=S!==f.lane;if(T?(_l&S)===S:(u&S)===S){S!==0&&S===Su&&(Ji=!0),R!==null&&(R=R.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});l:{var x=l,I=f;S=t;var bl=e;switch(I.tag){case 1:if(x=I.payload,typeof x=="function"){p=x.call(bl,p,S);break l}p=x;break l;case 3:x.flags=x.flags&-65537|128;case 0:if(x=I.payload,S=typeof x=="function"?x.call(bl,p,S):x,S==null)break l;p=N({},p,S);break l;case 2:ge=!0}}S=f.callback,S!==null&&(l.flags|=64,T&&(l.flags|=8192),T=a.callbacks,T===null?a.callbacks=[S]:T.push(S))}else T={lane:S,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(g=R=T,s=p):R=R.next=T,i|=S;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;T=f,f=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);R===null&&(s=p),a.baseState=s,a.firstBaseUpdate=g,a.lastBaseUpdate=R,n===null&&(a.shared.lanes=0),ze|=i,l.lanes=i,l.memoizedState=p}}function j_(l,t){if(typeof l!="function")throw Error(m(191,l));l.call(t)}function Y_(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)j_(e[l],t)}var bu=o(null),_n=o(0);function x_(l,t){l=fe,h(_n,l),h(bu,t),fe=l|t.baseLanes}function wi(){h(_n,fe),h(bu,bu.current)}function Ii(){fe=_n.current,_(bu),_(_n)}var At=o(null),Bt=null;function Ee(l){var t=l.alternate;h(Ul,Ul.current&1),h(At,l),Bt===null&&(t===null||bu.current!==null||t.memoizedState!==null)&&(Bt=l)}function Wi(l){h(Ul,Ul.current),h(At,l),Bt===null&&(Bt=l)}function X_(l){l.tag===22?(h(Ul,Ul.current),h(At,l),Bt===null&&(Bt=l)):Ae()}function Ae(){h(Ul,Ul.current),h(At,At.current)}function bt(l){_(At),Bt===l&&(Bt=null),_(Ul)}var Ul=o(0);function sn(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||ec(e)||uc(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,tl=null,El=null,ql=null,on=!1,Ru=!1,$e=!1,rn=0,_a=0,zu=null,wh=0;function Nl(){throw Error(m(321))}function $i(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!Tt(l[e],t[e]))return!1;return!0}function Fi(l,t,e,u,a,n){return Pt=n,tl=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=l===null||l.memoizedState===null?Rs:hf,$e=!1,n=e(u,a),$e=!1,Ru&&(n=Z_(t,e,u,a)),Q_(l),n}function Q_(l){b.H=ra;var t=El!==null&&El.next!==null;if(Pt=0,ql=El=tl=null,on=!1,_a=0,zu=null,t)throw Error(m(300));l===null||jl||(l=l.dependencies,l!==null&&tn(l)&&(jl=!0))}function Z_(l,t,e,u){tl=l;var a=0;do{if(Ru&&(zu=null),_a=0,Ru=!1,25<=a)throw Error(m(301));if(a+=1,ql=El=null,l.updateQueue!=null){var n=l.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}b.H=zs,n=t(e,u)}while(Ru);return n}function Ih(){var l=b.H,t=l.useState()[0];return t=typeof t.then=="function"?sa(t):t,l=l.useState()[0],(El!==null?El.memoizedState:null)!==l&&(tl.flags|=1024),t}function ki(){var l=rn!==0;return rn=0,l}function Pi(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function lf(l){if(on){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}on=!1}Pt=0,ql=El=tl=null,Ru=!1,_a=rn=0,zu=null}function ft(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ql===null?tl.memoizedState=ql=l:ql=ql.next=l,ql}function Hl(){if(El===null){var l=tl.alternate;l=l!==null?l.memoizedState:null}else l=El.next;var t=ql===null?tl.memoizedState:ql.next;if(t!==null)ql=t,El=l;else{if(l===null)throw tl.alternate===null?Error(m(467)):Error(m(310));El=l,l={memoizedState:El.memoizedState,baseState:El.baseState,baseQueue:El.baseQueue,queue:El.queue,next:null},ql===null?tl.memoizedState=ql=l:ql=ql.next=l}return ql}function hn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sa(l){var t=_a;return _a+=1,zu===null&&(zu=[]),l=U_(zu,l,t),t=tl,(ql===null?t.memoizedState:ql.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?Rs:hf),l}function dn(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return sa(l);if(l.$$typeof===yl)return Wl(l)}throw Error(m(438,String(l)))}function tf(l){var t=null,e=tl.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var u=tl.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(t={data:u.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=hn(),tl.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),u=0;u<l;u++)e[u]=vt;return t.index++,e}function le(l,t){return typeof t=="function"?t(l):t}function mn(l){var t=Hl();return ef(t,El,l)}function ef(l,t,e){var u=l.queue;if(u===null)throw Error(m(311));u.lastRenderedReducer=e;var a=l.baseQueue,n=u.pending;if(n!==null){if(a!==null){var i=a.next;a.next=n.next,n.next=i}t.baseQueue=a=n,u.pending=null}if(n=l.baseState,a===null)l.memoizedState=n;else{t=a.next;var f=i=null,s=null,g=t,R=!1;do{var p=g.lane&-536870913;if(p!==g.lane?(_l&p)===p:(Pt&p)===p){var S=g.revertLane;if(S===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),p===Su&&(R=!0);else if((Pt&S)===S){g=g.next,S===Su&&(R=!0);continue}else p={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(f=s=p,i=n):s=s.next=p,tl.lanes|=S,ze|=S;p=g.action,$e&&e(n,p),n=g.hasEagerState?g.eagerState:e(n,p)}else S={lane:p,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},s===null?(f=s=S,i=n):s=s.next=S,tl.lanes|=p,ze|=p;g=g.next}while(g!==null&&g!==t);if(s===null?i=n:s.next=f,!Tt(n,l.memoizedState)&&(jl=!0,R&&(e=Tu,e!==null)))throw e;l.memoizedState=n,l.baseState=i,l.baseQueue=s,u.lastRenderedState=n}return a===null&&(u.lanes=0),[l.memoizedState,u.dispatch]}function uf(l){var t=Hl(),e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=l;var u=e.dispatch,a=e.pending,n=t.memoizedState;if(a!==null){e.pending=null;var i=a=a.next;do n=l(n,i.action),i=i.next;while(i!==a);Tt(n,t.memoizedState)||(jl=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),e.lastRenderedState=n}return[n,u]}function V_(l,t,e){var u=tl,a=Hl(),n=ol;if(n){if(e===void 0)throw Error(m(407));e=e()}else e=t();var i=!Tt((El||a).memoizedState,e);if(i&&(a.memoizedState=e,jl=!0),a=a.queue,ff(w_.bind(null,u,a,l),[l]),a.getSnapshot!==t||i||ql!==null&&ql.memoizedState.tag&1){if(u.flags|=2048,Lu(9,{destroy:void 0},J_.bind(null,u,a,e,t),null),Rl===null)throw Error(m(349));n||(Pt&127)!==0||K_(u,t,e)}return e}function K_(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=tl.updateQueue,t===null?(t=hn(),tl.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function J_(l,t,e,u){t.value=e,t.getSnapshot=u,I_(t)&&W_(l)}function w_(l,t,e){return e(function(){I_(t)&&W_(l)})}function I_(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!Tt(l,e)}catch{return!0}}function W_(l){var t=Xe(l,2);t!==null&&mt(t,l,2)}function af(l){var t=ft();if(typeof l=="function"){var e=l;if(l=e(),$e){oe(!0);try{e()}finally{oe(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:l},t}function $_(l,t,e,u){return l.baseState=e,ef(l,El,typeof u=="function"?u:le)}function Wh(l,t,e,u,a){if(gn(l))throw Error(m(485));if(l=t.action,l!==null){var n={payload:a,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};b.T!==null?e(!0):n.isTransition=!1,u(n),e=t.pending,e===null?(n.next=t.pending=n,F_(t,n)):(n.next=e.next,t.pending=e.next=n)}}function F_(l,t){var e=t.action,u=t.payload,a=l.state;if(t.isTransition){var n=b.T,i={};b.T=i;try{var f=e(a,u),s=b.S;s!==null&&s(i,f),k_(l,t,f)}catch(g){nf(l,t,g)}finally{n!==null&&i.types!==null&&(n.types=i.types),b.T=n}}else try{n=e(a,u),k_(l,t,n)}catch(g){nf(l,t,g)}}function k_(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(u){P_(l,t,u)},function(u){return nf(l,t,u)}):P_(l,t,e)}function P_(l,t,e){t.status="fulfilled",t.value=e,ls(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,F_(l,e)))}function nf(l,t,e){var u=l.pending;if(l.pending=null,u!==null){u=u.next;do t.status="rejected",t.reason=e,ls(t),t=t.next;while(t!==u)}l.action=null}function ls(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function ts(l,t){return t}function es(l,t){if(ol){var e=Rl.formState;if(e!==null){l:{var u=tl;if(ol){if(pl){t:{for(var a=pl,n=Ht;a.nodeType!==8;){if(!n){a=null;break t}if(a=Gt(a.nextSibling),a===null){a=null;break t}}n=a.data,a=n==="F!"||n==="F"?a:null}if(a){pl=Gt(a.nextSibling),u=a.data==="F!";break l}}ve(u)}u=!1}u&&(t=e[0])}}return e=ft(),e.memoizedState=e.baseState=t,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=u,e=Es.bind(null,tl,u),u.dispatch=e,u=af(!1),n=rf.bind(null,tl,!1,u.queue),u=ft(),a={state:t,dispatch:null,action:l,pending:null},u.queue=a,e=Wh.bind(null,tl,a,n,e),a.dispatch=e,u.memoizedState=l,[t,e,!1]}function us(l){var t=Hl();return as(t,El,l)}function as(l,t,e){if(t=ef(l,t,ts)[0],l=mn(le)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var u=sa(t)}catch(i){throw i===Eu?an:i}else u=t;t=Hl();var a=t.queue,n=a.dispatch;return e!==t.memoizedState&&(tl.flags|=2048,Lu(9,{destroy:void 0},$h.bind(null,a,e),null)),[u,n,l]}function $h(l,t){l.action=t}function ns(l){var t=Hl(),e=El;if(e!==null)return as(t,e,l);Hl(),t=t.memoizedState,e=Hl();var u=e.queue.dispatch;return e.memoizedState=l,[t,u,!1]}function Lu(l,t,e,u){return l={tag:l,create:e,deps:u,inst:t,next:null},t=tl.updateQueue,t===null&&(t=hn(),tl.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(u=e.next,e.next=l,l.next=u,t.lastEffect=l),l}function is(){return Hl().memoizedState}function vn(l,t,e,u){var a=ft();tl.flags|=l,a.memoizedState=Lu(1|t,{destroy:void 0},e,u===void 0?null:u)}function yn(l,t,e,u){var a=Hl();u=u===void 0?null:u;var n=a.memoizedState.inst;El!==null&&u!==null&&$i(u,El.memoizedState.deps)?a.memoizedState=Lu(t,n,e,u):(tl.flags|=l,a.memoizedState=Lu(1|t,n,e,u))}function fs(l,t){vn(8390656,8,l,t)}function ff(l,t){yn(2048,8,l,t)}function Fh(l){tl.flags|=4;var t=tl.updateQueue;if(t===null)t=hn(),tl.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function cs(l){var t=Hl().memoizedState;return Fh({ref:t,nextImpl:l}),function(){if((gl&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function _s(l,t){return yn(4,2,l,t)}function ss(l,t){return yn(4,4,l,t)}function os(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function rs(l,t,e){e=e!=null?e.concat([l]):null,yn(4,4,os.bind(null,t,l),e)}function cf(){}function hs(l,t){var e=Hl();t=t===void 0?null:t;var u=e.memoizedState;return t!==null&&$i(t,u[1])?u[0]:(e.memoizedState=[l,t],l)}function ds(l,t){var e=Hl();t=t===void 0?null:t;var u=e.memoizedState;if(t!==null&&$i(t,u[1]))return u[0];if(u=l(),$e){oe(!0);try{l()}finally{oe(!1)}}return e.memoizedState=[u,t],u}function _f(l,t,e){return e===void 0||(Pt&1073741824)!==0&&(_l&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=vo(),tl.lanes|=l,ze|=l,e)}function ms(l,t,e,u){return Tt(e,t)?e:bu.current!==null?(l=_f(l,e,u),Tt(l,t)||(jl=!0),l):(Pt&42)===0||(Pt&1073741824)!==0&&(_l&261930)===0?(jl=!0,l.memoizedState=e):(l=vo(),tl.lanes|=l,ze|=l,t)}function vs(l,t,e,u,a){var n=G.p;G.p=n!==0&&8>n?n:8;var i=b.T,f={};b.T=f,rf(l,!1,t,e);try{var s=a(),g=b.S;if(g!==null&&g(f,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var R=Jh(s,u);oa(l,t,R,Lt(l))}else oa(l,t,u,Lt(l))}catch(p){oa(l,t,{then:function(){},status:"rejected",reason:p},Lt())}finally{G.p=n,i!==null&&f.types!==null&&(i.types=f.types),b.T=i}}function kh(){}function sf(l,t,e,u){if(l.tag!==5)throw Error(m(476));var a=ys(l).queue;vs(l,a,t,J,e===null?kh:function(){return gs(l),e(u)})}function ys(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:J},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:le,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function gs(l){var t=ys(l);t.next===null&&(t=l.alternate.memoizedState),oa(l,t.next.queue,{},Lt())}function of(){return Wl(Ma)}function Ss(){return Hl().memoizedState}function Ts(){return Hl().memoizedState}function Ph(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=Lt();l=Se(e);var u=Te(t,l,e);u!==null&&(mt(u,t,e),ia(u,t,e)),t={cache:Yi()},l.payload=t;return}t=t.return}}function l0(l,t,e){var u=Lt();e={lane:u,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},gn(l)?As(t,e):(e=Mi(l,t,e,u),e!==null&&(mt(e,l,u),bs(e,t,u)))}function Es(l,t,e){var u=Lt();oa(l,t,e,u)}function oa(l,t,e,u){var a={lane:u,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(gn(l))As(t,a);else{var n=l.alternate;if(l.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,f=n(i,e);if(a.hasEagerState=!0,a.eagerState=f,Tt(f,i))return Fa(l,t,a,0),Rl===null&&$a(),!1}catch{}if(e=Mi(l,t,a,u),e!==null)return mt(e,l,u),bs(e,t,u),!0}return!1}function rf(l,t,e,u){if(u={lane:2,revertLane:Vf(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},gn(l)){if(t)throw Error(m(479))}else t=Mi(l,e,u,2),t!==null&&mt(t,l,2)}function gn(l){var t=l.alternate;return l===tl||t!==null&&t===tl}function As(l,t){Ru=on=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function bs(l,t,e){if((e&4194048)!==0){var u=t.lanes;u&=l.pendingLanes,e|=u,t.lanes=e,Mc(l,e)}}var ra={readContext:Wl,use:dn,useCallback:Nl,useContext:Nl,useEffect:Nl,useImperativeHandle:Nl,useLayoutEffect:Nl,useInsertionEffect:Nl,useMemo:Nl,useReducer:Nl,useRef:Nl,useState:Nl,useDebugValue:Nl,useDeferredValue:Nl,useTransition:Nl,useSyncExternalStore:Nl,useId:Nl,useHostTransitionStatus:Nl,useFormState:Nl,useActionState:Nl,useOptimistic:Nl,useMemoCache:Nl,useCacheRefresh:Nl};ra.useEffectEvent=Nl;var Rs={readContext:Wl,use:dn,useCallback:function(l,t){return ft().memoizedState=[l,t===void 0?null:t],l},useContext:Wl,useEffect:fs,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,vn(4194308,4,os.bind(null,t,l),e)},useLayoutEffect:function(l,t){return vn(4194308,4,l,t)},useInsertionEffect:function(l,t){vn(4,2,l,t)},useMemo:function(l,t){var e=ft();t=t===void 0?null:t;var u=l();if($e){oe(!0);try{l()}finally{oe(!1)}}return e.memoizedState=[u,t],u},useReducer:function(l,t,e){var u=ft();if(e!==void 0){var a=e(t);if($e){oe(!0);try{e(t)}finally{oe(!1)}}}else a=t;return u.memoizedState=u.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:a},u.queue=l,l=l.dispatch=l0.bind(null,tl,l),[u.memoizedState,l]},useRef:function(l){var t=ft();return l={current:l},t.memoizedState=l},useState:function(l){l=af(l);var t=l.queue,e=Es.bind(null,tl,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:cf,useDeferredValue:function(l,t){var e=ft();return _f(e,l,t)},useTransition:function(){var l=af(!1);return l=vs.bind(null,tl,l.queue,!0,!1),ft().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var u=tl,a=ft();if(ol){if(e===void 0)throw Error(m(407));e=e()}else{if(e=t(),Rl===null)throw Error(m(349));(_l&127)!==0||K_(u,t,e)}a.memoizedState=e;var n={value:e,getSnapshot:t};return a.queue=n,fs(w_.bind(null,u,n,l),[l]),u.flags|=2048,Lu(9,{destroy:void 0},J_.bind(null,u,n,e,t),null),e},useId:function(){var l=ft(),t=Rl.identifierPrefix;if(ol){var e=Zt,u=Qt;e=(u&~(1<<32-St(u)-1)).toString(32)+e,t="_"+t+"R_"+e,e=rn++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=wh++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:of,useFormState:es,useActionState:es,useOptimistic:function(l){var t=ft();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=rf.bind(null,tl,!0,e),e.dispatch=t,[l,t]},useMemoCache:tf,useCacheRefresh:function(){return ft().memoizedState=Ph.bind(null,tl)},useEffectEvent:function(l){var t=ft(),e={impl:l};return t.memoizedState=e,function(){if((gl&2)!==0)throw Error(m(440));return e.impl.apply(void 0,arguments)}}},hf={readContext:Wl,use:dn,useCallback:hs,useContext:Wl,useEffect:ff,useImperativeHandle:rs,useInsertionEffect:_s,useLayoutEffect:ss,useMemo:ds,useReducer:mn,useRef:is,useState:function(){return mn(le)},useDebugValue:cf,useDeferredValue:function(l,t){var e=Hl();return ms(e,El.memoizedState,l,t)},useTransition:function(){var l=mn(le)[0],t=Hl().memoizedState;return[typeof l=="boolean"?l:sa(l),t]},useSyncExternalStore:V_,useId:Ss,useHostTransitionStatus:of,useFormState:us,useActionState:us,useOptimistic:function(l,t){var e=Hl();return $_(e,El,l,t)},useMemoCache:tf,useCacheRefresh:Ts};hf.useEffectEvent=cs;var zs={readContext:Wl,use:dn,useCallback:hs,useContext:Wl,useEffect:ff,useImperativeHandle:rs,useInsertionEffect:_s,useLayoutEffect:ss,useMemo:ds,useReducer:uf,useRef:is,useState:function(){return uf(le)},useDebugValue:cf,useDeferredValue:function(l,t){var e=Hl();return El===null?_f(e,l,t):ms(e,El.memoizedState,l,t)},useTransition:function(){var l=uf(le)[0],t=Hl().memoizedState;return[typeof l=="boolean"?l:sa(l),t]},useSyncExternalStore:V_,useId:Ss,useHostTransitionStatus:of,useFormState:ns,useActionState:ns,useOptimistic:function(l,t){var e=Hl();return El!==null?$_(e,El,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:tf,useCacheRefresh:Ts};zs.useEffectEvent=cs;function df(l,t,e,u){t=l.memoizedState,e=e(u,t),e=e==null?t:N({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var mf={enqueueSetState:function(l,t,e){l=l._reactInternals;var u=Lt(),a=Se(u);a.payload=t,e!=null&&(a.callback=e),t=Te(l,a,u),t!==null&&(mt(t,l,u),ia(t,l,u))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var u=Lt(),a=Se(u);a.tag=1,a.payload=t,e!=null&&(a.callback=e),t=Te(l,a,u),t!==null&&(mt(t,l,u),ia(t,l,u))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=Lt(),u=Se(e);u.tag=2,t!=null&&(u.callback=t),t=Te(l,u,e),t!==null&&(mt(t,l,e),ia(t,l,e))}};function Ls(l,t,e,u,a,n,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(u,n,i):t.prototype&&t.prototype.isPureReactComponent?!ku(e,u)||!ku(a,n):!0}function ps(l,t,e,u){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,u),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,u),t.state!==l&&mf.enqueueReplaceState(t,t.state,null)}function Fe(l,t){var e=t;if("ref"in t){e={};for(var u in t)u!=="ref"&&(e[u]=t[u])}if(l=l.defaultProps){e===t&&(e=N({},e));for(var a in l)e[a]===void 0&&(e[a]=l[a])}return e}function Ms(l){Wa(l)}function Os(l){console.error(l)}function Ns(l){Wa(l)}function Sn(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(u){setTimeout(function(){throw u})}}function Cs(l,t,e){try{var u=l.onCaughtError;u(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function vf(l,t,e){return e=Se(e),e.tag=3,e.payload={element:null},e.callback=function(){Sn(l,t)},e}function Ds(l){return l=Se(l),l.tag=3,l}function Us(l,t,e,u){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var n=u.value;l.payload=function(){return a(n)},l.callback=function(){Cs(t,e,u)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Cs(t,e,u),typeof a!="function"&&(Le===null?Le=new Set([this]):Le.add(this));var f=u.stack;this.componentDidCatch(u.value,{componentStack:f!==null?f:""})})}function t0(l,t,e,u,a){if(e.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(t=e.alternate,t!==null&&gu(t,e,a,!0),e=At.current,e!==null){switch(e.tag){case 31:case 13:return Bt===null?Cn():e.alternate===null&&Cl===0&&(Cl=3),e.flags&=-257,e.flags|=65536,e.lanes=a,u===nn?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([u]):t.add(u),Xf(l,u,a)),!1;case 22:return e.flags|=65536,u===nn?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([u])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([u]):e.add(u)),Xf(l,u,a)),!1}throw Error(m(435,e.tag))}return Xf(l,u,a),Cn(),!1}if(ol)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,u!==Hi&&(l=Error(m(422),{cause:u}),ta(Ct(l,e)))):(u!==Hi&&(t=Error(m(423),{cause:u}),ta(Ct(t,e))),l=l.current.alternate,l.flags|=65536,a&=-a,l.lanes|=a,u=Ct(u,e),a=vf(l.stateNode,u,a),Ki(l,a),Cl!==4&&(Cl=2)),!1;var n=Error(m(520),{cause:u});if(n=Ct(n,e),Ta===null?Ta=[n]:Ta.push(n),Cl!==4&&(Cl=2),t===null)return!0;u=Ct(u,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=a&-a,e.lanes|=l,l=vf(e.stateNode,u,l),Ki(e,l),!1;case 1:if(t=e.type,n=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Le===null||!Le.has(n))))return e.flags|=65536,a&=-a,e.lanes|=a,a=Ds(a),Us(a,l,e,u),Ki(e,a),!1}e=e.return}while(e!==null);return!1}var yf=Error(m(461)),jl=!1;function $l(l,t,e,u){t.child=l===null?q_(t,null,e,u):We(t,l.child,e,u)}function Hs(l,t,e,u,a){e=e.render;var n=t.ref;if("ref"in u){var i={};for(var f in u)f!=="ref"&&(i[f]=u[f])}else i=u;return Ke(t),u=Fi(l,t,e,i,n,a),f=ki(),l!==null&&!jl?(Pi(l,t,a),te(l,t,a)):(ol&&f&&Di(t),t.flags|=1,$l(l,t,u,a),t.child)}function Bs(l,t,e,u,a){if(l===null){var n=e.type;return typeof n=="function"&&!Oi(n)&&n.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=n,Gs(l,t,n,u,a)):(l=Pa(e.type,null,u,t,t.mode,a),l.ref=t.ref,l.return=t,t.child=l)}if(n=l.child,!zf(l,a)){var i=n.memoizedProps;if(e=e.compare,e=e!==null?e:ku,e(i,u)&&l.ref===t.ref)return te(l,t,a)}return t.flags|=1,l=Wt(n,u),l.ref=t.ref,l.return=t,t.child=l}function Gs(l,t,e,u,a){if(l!==null){var n=l.memoizedProps;if(ku(n,u)&&l.ref===t.ref)if(jl=!1,t.pendingProps=u=n,zf(l,a))(l.flags&131072)!==0&&(jl=!0);else return t.lanes=l.lanes,te(l,t,a)}return gf(l,t,e,u,a)}function qs(l,t,e,u){var a=u.children,n=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|e:e,l!==null){for(u=t.child=l.child,a=0;u!==null;)a=a|u.lanes|u.childLanes,u=u.sibling;u=a&~n}else u=0,t.child=null;return js(l,t,n,e,u)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&un(t,n!==null?n.cachePool:null),n!==null?x_(t,n):wi(),X_(t);else return u=t.lanes=536870912,js(l,t,n!==null?n.baseLanes|e:e,e,u)}else n!==null?(un(t,n.cachePool),x_(t,n),Ae(),t.memoizedState=null):(l!==null&&un(t,null),wi(),Ae());return $l(l,t,a,e),t.child}function ha(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function js(l,t,e,u,a){var n=Xi();return n=n===null?null:{parent:Gl._currentValue,pool:n},t.memoizedState={baseLanes:e,cachePool:n},l!==null&&un(t,null),wi(),X_(t),l!==null&&gu(l,t,u,!0),t.childLanes=a,null}function Tn(l,t){return t=An({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Ys(l,t,e){return We(t,l.child,null,e),l=Tn(t,t.pendingProps),l.flags|=2,bt(t),t.memoizedState=null,l}function e0(l,t,e){var u=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ol){if(u.mode==="hidden")return l=Tn(t,u),t.lanes=536870912,ha(null,l);if(Wi(t),(l=pl)?(l=ko(l,Ht),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:de!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},e=A_(l),e.return=t,t.child=e,Il=t,pl=null)):l=null,l===null)throw ve(t);return t.lanes=536870912,null}return Tn(t,u)}var n=l.memoizedState;if(n!==null){var i=n.dehydrated;if(Wi(t),a)if(t.flags&256)t.flags&=-257,t=Ys(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(m(558));else if(jl||gu(l,t,e,!1),a=(e&l.childLanes)!==0,jl||a){if(u=Rl,u!==null&&(i=Oc(u,e),i!==0&&i!==n.retryLane))throw n.retryLane=i,Xe(l,i),mt(u,l,i),yf;Cn(),t=Ys(l,t,e)}else l=n.treeContext,pl=Gt(i.nextSibling),Il=t,ol=!0,me=null,Ht=!1,l!==null&&z_(t,l),t=Tn(t,u),t.flags|=4096;return t}return l=Wt(l.child,{mode:u.mode,children:u.children}),l.ref=t.ref,t.child=l,l.return=t,l}function En(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(m(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function gf(l,t,e,u,a){return Ke(t),e=Fi(l,t,e,u,void 0,a),u=ki(),l!==null&&!jl?(Pi(l,t,a),te(l,t,a)):(ol&&u&&Di(t),t.flags|=1,$l(l,t,e,a),t.child)}function xs(l,t,e,u,a,n){return Ke(t),t.updateQueue=null,e=Z_(t,u,e,a),Q_(l),u=ki(),l!==null&&!jl?(Pi(l,t,n),te(l,t,n)):(ol&&u&&Di(t),t.flags|=1,$l(l,t,e,n),t.child)}function Xs(l,t,e,u,a){if(Ke(t),t.stateNode===null){var n=du,i=e.contextType;typeof i=="object"&&i!==null&&(n=Wl(i)),n=new e(u,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=mf,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=u,n.state=t.memoizedState,n.refs={},Zi(t),i=e.contextType,n.context=typeof i=="object"&&i!==null?Wl(i):du,n.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(df(t,e,i,u),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&mf.enqueueReplaceState(n,n.state,null),ca(t,u,n,a),fa(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),u=!0}else if(l===null){n=t.stateNode;var f=t.memoizedProps,s=Fe(e,f);n.props=s;var g=n.context,R=e.contextType;i=du,typeof R=="object"&&R!==null&&(i=Wl(R));var p=e.getDerivedStateFromProps;R=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,R||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||g!==i)&&ps(t,n,u,i),ge=!1;var S=t.memoizedState;n.state=S,ca(t,u,n,a),fa(),g=t.memoizedState,f||S!==g||ge?(typeof p=="function"&&(df(t,e,p,u),g=t.memoizedState),(s=ge||Ls(t,e,s,u,S,g,i))?(R||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=u,t.memoizedState=g),n.props=u,n.state=g,n.context=i,u=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),u=!1)}else{n=t.stateNode,Vi(l,t),i=t.memoizedProps,R=Fe(e,i),n.props=R,p=t.pendingProps,S=n.context,g=e.contextType,s=du,typeof g=="object"&&g!==null&&(s=Wl(g)),f=e.getDerivedStateFromProps,(g=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==p||S!==s)&&ps(t,n,u,s),ge=!1,S=t.memoizedState,n.state=S,ca(t,u,n,a),fa();var T=t.memoizedState;i!==p||S!==T||ge||l!==null&&l.dependencies!==null&&tn(l.dependencies)?(typeof f=="function"&&(df(t,e,f,u),T=t.memoizedState),(R=ge||Ls(t,e,R,u,S,T,s)||l!==null&&l.dependencies!==null&&tn(l.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(u,T,s),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(u,T,s)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&S===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&S===l.memoizedState||(t.flags|=1024),t.memoizedProps=u,t.memoizedState=T),n.props=u,n.state=T,n.context=s,u=R):(typeof n.componentDidUpdate!="function"||i===l.memoizedProps&&S===l.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&S===l.memoizedState||(t.flags|=1024),u=!1)}return n=u,En(l,t),u=(t.flags&128)!==0,n||u?(n=t.stateNode,e=u&&typeof e.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,l!==null&&u?(t.child=We(t,l.child,null,a),t.child=We(t,null,e,a)):$l(l,t,e,a),t.memoizedState=n.state,l=t.child):l=te(l,t,a),l}function Qs(l,t,e,u){return Ze(),t.flags|=256,$l(l,t,e,u),t.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(l){return{baseLanes:l,cachePool:C_()}}function Ef(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=zt),l}function Zs(l,t,e){var u=t.pendingProps,a=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=l!==null&&l.memoizedState===null?!1:(Ul.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(ol){if(a?Ee(t):Ae(),(l=pl)?(l=ko(l,Ht),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:de!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},e=A_(l),e.return=t,t.child=e,Il=t,pl=null)):l=null,l===null)throw ve(t);return uc(l)?t.lanes=32:t.lanes=536870912,null}var f=u.children;return u=u.fallback,a?(Ae(),a=t.mode,f=An({mode:"hidden",children:f},a),u=Qe(u,a,e,null),f.return=t,u.return=t,f.sibling=u,t.child=f,u=t.child,u.memoizedState=Tf(e),u.childLanes=Ef(l,i,e),t.memoizedState=Sf,ha(null,u)):(Ee(t),Af(t,f))}var s=l.memoizedState;if(s!==null&&(f=s.dehydrated,f!==null)){if(n)t.flags&256?(Ee(t),t.flags&=-257,t=bf(l,t,e)):t.memoizedState!==null?(Ae(),t.child=l.child,t.flags|=128,t=null):(Ae(),f=u.fallback,a=t.mode,u=An({mode:"visible",children:u.children},a),f=Qe(f,a,e,null),f.flags|=2,u.return=t,f.return=t,u.sibling=f,t.child=u,We(t,l.child,null,e),u=t.child,u.memoizedState=Tf(e),u.childLanes=Ef(l,i,e),t.memoizedState=Sf,t=ha(null,u));else if(Ee(t),uc(f)){if(i=f.nextSibling&&f.nextSibling.dataset,i)var g=i.dgst;i=g,u=Error(m(419)),u.stack="",u.digest=i,ta({value:u,source:null,stack:null}),t=bf(l,t,e)}else if(jl||gu(l,t,e,!1),i=(e&l.childLanes)!==0,jl||i){if(i=Rl,i!==null&&(u=Oc(i,e),u!==0&&u!==s.retryLane))throw s.retryLane=u,Xe(l,u),mt(i,l,u),yf;ec(f)||Cn(),t=bf(l,t,e)}else ec(f)?(t.flags|=192,t.child=l.child,t=null):(l=s.treeContext,pl=Gt(f.nextSibling),Il=t,ol=!0,me=null,Ht=!1,l!==null&&z_(t,l),t=Af(t,u.children),t.flags|=4096);return t}return a?(Ae(),f=u.fallback,a=t.mode,s=l.child,g=s.sibling,u=Wt(s,{mode:"hidden",children:u.children}),u.subtreeFlags=s.subtreeFlags&65011712,g!==null?f=Wt(g,f):(f=Qe(f,a,e,null),f.flags|=2),f.return=t,u.return=t,u.sibling=f,t.child=u,ha(null,u),u=t.child,f=l.child.memoizedState,f===null?f=Tf(e):(a=f.cachePool,a!==null?(s=Gl._currentValue,a=a.parent!==s?{parent:s,pool:s}:a):a=C_(),f={baseLanes:f.baseLanes|e,cachePool:a}),u.memoizedState=f,u.childLanes=Ef(l,i,e),t.memoizedState=Sf,ha(l.child,u)):(Ee(t),e=l.child,l=e.sibling,e=Wt(e,{mode:"visible",children:u.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function Af(l,t){return t=An({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function An(l,t){return l=Et(22,l,null,t),l.lanes=0,l}function bf(l,t,e){return We(t,l.child,null,e),l=Af(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Vs(l,t,e){l.lanes|=t;var u=l.alternate;u!==null&&(u.lanes|=t),qi(l.return,t,e)}function Rf(l,t,e,u,a,n){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:u,tail:e,tailMode:a,treeForkCount:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=u,i.tail=e,i.tailMode=a,i.treeForkCount=n)}function Ks(l,t,e){var u=t.pendingProps,a=u.revealOrder,n=u.tail;u=u.children;var i=Ul.current,f=(i&2)!==0;if(f?(i=i&1|2,t.flags|=128):i&=1,h(Ul,i),$l(l,t,u,e),u=ol?la:0,!f&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Vs(l,e,t);else if(l.tag===19)Vs(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(a){case"forwards":for(e=t.child,a=null;e!==null;)l=e.alternate,l!==null&&sn(l)===null&&(a=e),e=e.sibling;e=a,e===null?(a=t.child,t.child=null):(a=e.sibling,e.sibling=null),Rf(t,!1,a,e,n,u);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=t.child,t.child=null;a!==null;){if(l=a.alternate,l!==null&&sn(l)===null){t.child=a;break}l=a.sibling,a.sibling=e,e=a,a=l}Rf(t,!0,e,null,n,u);break;case"together":Rf(t,!1,null,null,void 0,u);break;default:t.memoizedState=null}return t.child}function te(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),ze|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(gu(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(m(153));if(t.child!==null){for(l=t.child,e=Wt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Wt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function zf(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&tn(l)))}function u0(l,t,e){switch(t.tag){case 3:H(t,t.stateNode.containerInfo),ye(t,Gl,l.memoizedState.cache),Ze();break;case 27:case 5:Y(t);break;case 4:H(t,t.stateNode.containerInfo);break;case 10:ye(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wi(t),null;break;case 13:var u=t.memoizedState;if(u!==null)return u.dehydrated!==null?(Ee(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Zs(l,t,e):(Ee(t),l=te(l,t,e),l!==null?l.sibling:null);Ee(t);break;case 19:var a=(l.flags&128)!==0;if(u=(e&t.childLanes)!==0,u||(gu(l,t,e,!1),u=(e&t.childLanes)!==0),a){if(u)return Ks(l,t,e);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),h(Ul,Ul.current),u)break;return null;case 22:return t.lanes=0,qs(l,t,e,t.pendingProps);case 24:ye(t,Gl,l.memoizedState.cache)}return te(l,t,e)}function Js(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)jl=!0;else{if(!zf(l,e)&&(t.flags&128)===0)return jl=!1,u0(l,t,e);jl=(l.flags&131072)!==0}else jl=!1,ol&&(t.flags&1048576)!==0&&R_(t,la,t.index);switch(t.lanes=0,t.tag){case 16:l:{var u=t.pendingProps;if(l=we(t.elementType),t.type=l,typeof l=="function")Oi(l)?(u=Fe(l,u),t.tag=1,t=Xs(null,t,l,u,e)):(t.tag=0,t=gf(null,t,l,u,e));else{if(l!=null){var a=l.$$typeof;if(a===kl){t.tag=11,t=Hs(null,t,l,u,e);break l}else if(a===nl){t.tag=14,t=Bs(null,t,l,u,e);break l}}throw t=Zl(l)||l,Error(m(306,t,""))}}return t;case 0:return gf(l,t,t.type,t.pendingProps,e);case 1:return u=t.type,a=Fe(u,t.pendingProps),Xs(l,t,u,a,e);case 3:l:{if(H(t,t.stateNode.containerInfo),l===null)throw Error(m(387));u=t.pendingProps;var n=t.memoizedState;a=n.element,Vi(l,t),ca(t,u,null,e);var i=t.memoizedState;if(u=i.cache,ye(t,Gl,u),u!==n.cache&&ji(t,[Gl],e,!0),fa(),u=i.element,n.isDehydrated)if(n={element:u,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Qs(l,t,u,e);break l}else if(u!==a){a=Ct(Error(m(424)),t),ta(a),t=Qs(l,t,u,e);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,pl=Gt(l.firstChild),Il=t,ol=!0,me=null,Ht=!0,e=q_(t,null,u,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ze(),u===a){t=te(l,t,e);break l}$l(l,t,u,e)}t=t.child}return t;case 26:return En(l,t),l===null?(e=ar(t.type,null,t.pendingProps,null))?t.memoizedState=e:ol||(e=t.type,l=t.pendingProps,u=jn(A.current).createElement(e),u[wl]=t,u[_t]=l,Fl(u,e,l),Kl(u),t.stateNode=u):t.memoizedState=ar(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Y(t),l===null&&ol&&(u=t.stateNode=tr(t.type,t.pendingProps,A.current),Il=t,Ht=!0,a=pl,Ne(t.type)?(ac=a,pl=Gt(u.firstChild)):pl=a),$l(l,t,t.pendingProps.children,e),En(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ol&&((a=u=pl)&&(u=U0(u,t.type,t.pendingProps,Ht),u!==null?(t.stateNode=u,Il=t,pl=Gt(u.firstChild),Ht=!1,a=!0):a=!1),a||ve(t)),Y(t),a=t.type,n=t.pendingProps,i=l!==null?l.memoizedProps:null,u=n.children,Pf(a,n)?u=null:i!==null&&Pf(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=Fi(l,t,Ih,null,null,e),Ma._currentValue=a),En(l,t),$l(l,t,u,e),t.child;case 6:return l===null&&ol&&((l=e=pl)&&(e=H0(e,t.pendingProps,Ht),e!==null?(t.stateNode=e,Il=t,pl=null,l=!0):l=!1),l||ve(t)),null;case 13:return Zs(l,t,e);case 4:return H(t,t.stateNode.containerInfo),u=t.pendingProps,l===null?t.child=We(t,null,u,e):$l(l,t,u,e),t.child;case 11:return Hs(l,t,t.type,t.pendingProps,e);case 7:return $l(l,t,t.pendingProps,e),t.child;case 8:return $l(l,t,t.pendingProps.children,e),t.child;case 12:return $l(l,t,t.pendingProps.children,e),t.child;case 10:return u=t.pendingProps,ye(t,t.type,u.value),$l(l,t,u.children,e),t.child;case 9:return a=t.type._context,u=t.pendingProps.children,Ke(t),a=Wl(a),u=u(a),t.flags|=1,$l(l,t,u,e),t.child;case 14:return Bs(l,t,t.type,t.pendingProps,e);case 15:return Gs(l,t,t.type,t.pendingProps,e);case 19:return Ks(l,t,e);case 31:return e0(l,t,e);case 22:return qs(l,t,e,t.pendingProps);case 24:return Ke(t),u=Wl(Gl),l===null?(a=Xi(),a===null&&(a=Rl,n=Yi(),a.pooledCache=n,n.refCount++,n!==null&&(a.pooledCacheLanes|=e),a=n),t.memoizedState={parent:u,cache:a},Zi(t),ye(t,Gl,a)):((l.lanes&e)!==0&&(Vi(l,t),ca(t,null,null,e),fa()),a=l.memoizedState,n=t.memoizedState,a.parent!==u?(a={parent:u,cache:u},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ye(t,Gl,u)):(u=n.cache,ye(t,Gl,u),u!==a.cache&&ji(t,[Gl],e,!0))),$l(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function ee(l){l.flags|=4}function Lf(l,t,e,u,a){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(a&335544128)===a)if(l.stateNode.complete)l.flags|=8192;else if(To())l.flags|=8192;else throw Ie=nn,Qi}else l.flags&=-16777217}function ws(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!_r(t))if(To())l.flags|=8192;else throw Ie=nn,Qi}function bn(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?Lc():536870912,l.lanes|=t,Nu|=t)}function da(l,t){if(!ol)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var u=null;e!==null;)e.alternate!==null&&(u=e),e=e.sibling;u===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:u.sibling=null}}function Ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,u=0;if(t)for(var a=l.child;a!==null;)e|=a.lanes|a.childLanes,u|=a.subtreeFlags&65011712,u|=a.flags&65011712,a.return=l,a=a.sibling;else for(a=l.child;a!==null;)e|=a.lanes|a.childLanes,u|=a.subtreeFlags,u|=a.flags,a.return=l,a=a.sibling;return l.subtreeFlags|=u,l.childLanes=e,t}function a0(l,t,e){var u=t.pendingProps;switch(Ui(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ml(t),null;case 1:return Ml(t),null;case 3:return e=t.stateNode,u=null,l!==null&&(u=l.memoizedState.cache),t.memoizedState.cache!==u&&(t.flags|=2048),kt(Gl),C(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(yu(t)?ee(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bi())),Ml(t),null;case 26:var a=t.type,n=t.memoizedState;return l===null?(ee(t),n!==null?(Ml(t),ws(t,n)):(Ml(t),Lf(t,a,null,u,e))):n?n!==l.memoizedState?(ee(t),Ml(t),ws(t,n)):(Ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==u&&ee(t),Ml(t),Lf(t,a,l,u,e)),null;case 27:if(K(t),e=A.current,a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==u&&ee(t);else{if(!u){if(t.stateNode===null)throw Error(m(166));return Ml(t),null}l=c.current,yu(t)?L_(t):(l=tr(a,u,e),t.stateNode=l,ee(t))}return Ml(t),null;case 5:if(K(t),a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==u&&ee(t);else{if(!u){if(t.stateNode===null)throw Error(m(166));return Ml(t),null}if(n=c.current,yu(t))L_(t);else{var i=jn(A.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?i.createElement("select",{is:u.is}):i.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?i.createElement(a,{is:u.is}):i.createElement(a)}}n[wl]=t,n[_t]=u;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=n;l:switch(Fl(n,a,u),a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break l;case"img":u=!0;break l;default:u=!1}u&&ee(t)}}return Ml(t),Lf(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==u&&ee(t);else{if(typeof u!="string"&&t.stateNode===null)throw Error(m(166));if(l=A.current,yu(t)){if(l=t.stateNode,e=t.memoizedProps,u=null,a=Il,a!==null)switch(a.tag){case 27:case 5:u=a.memoizedProps}l[wl]=t,l=!!(l.nodeValue===e||u!==null&&u.suppressHydrationWarning===!0||Vo(l.nodeValue,e)),l||ve(t,!0)}else l=jn(l).createTextNode(u),l[wl]=t,t.stateNode=l}return Ml(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(u=yu(t),e!==null){if(l===null){if(!u)throw Error(m(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(m(557));l[wl]=t}else Ze(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ml(t),l=!1}else e=Bi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return Ml(t),null;case 13:if(u=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(a=yu(t),u!==null&&u.dehydrated!==null){if(l===null){if(!a)throw Error(m(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(m(317));a[wl]=t}else Ze(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ml(t),a=!1}else a=Bi(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=u!==null,l=l!==null&&l.memoizedState!==null,e&&(u=t.child,a=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(a=u.alternate.memoizedState.cachePool.pool),n=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(n=u.memoizedState.cachePool.pool),n!==a&&(u.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),bn(t,t.updateQueue),Ml(t),null);case 4:return C(),l===null&&If(t.stateNode.containerInfo),Ml(t),null;case 10:return kt(t.type),Ml(t),null;case 19:if(_(Ul),u=t.memoizedState,u===null)return Ml(t),null;if(a=(t.flags&128)!==0,n=u.rendering,n===null)if(a)da(u,!1);else{if(Cl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(n=sn(l),n!==null){for(t.flags|=128,da(u,!1),l=n.updateQueue,t.updateQueue=l,bn(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)E_(e,l),e=e.sibling;return h(Ul,Ul.current&1|2),ol&&$t(t,u.treeForkCount),t.child}l=l.sibling}u.tail!==null&&yt()>Mn&&(t.flags|=128,a=!0,da(u,!1),t.lanes=4194304)}else{if(!a)if(l=sn(n),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,bn(t,l),da(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!ol)return Ml(t),null}else 2*yt()-u.renderingStartTime>Mn&&e!==536870912&&(t.flags|=128,a=!0,da(u,!1),t.lanes=4194304);u.isBackwards?(n.sibling=t.child,t.child=n):(l=u.last,l!==null?l.sibling=n:t.child=n,u.last=n)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=yt(),l.sibling=null,e=Ul.current,h(Ul,a?e&1|2:e&1),ol&&$t(t,u.treeForkCount),l):(Ml(t),null);case 22:case 23:return bt(t),Ii(),u=t.memoizedState!==null,l!==null?l.memoizedState!==null!==u&&(t.flags|=8192):u&&(t.flags|=8192),u?(e&536870912)!==0&&(t.flags&128)===0&&(Ml(t),t.subtreeFlags&6&&(t.flags|=8192)):Ml(t),e=t.updateQueue,e!==null&&bn(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),u=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(u=t.memoizedState.cachePool.pool),u!==e&&(t.flags|=2048),l!==null&&_(Je),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),kt(Gl),Ml(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function n0(l,t){switch(Ui(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return kt(Gl),C(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return K(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(m(340));Ze()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(bt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Ze()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return _(Ul),null;case 4:return C(),null;case 10:return kt(t.type),null;case 22:case 23:return bt(t),Ii(),l!==null&&_(Je),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return kt(Gl),null;case 25:return null;default:return null}}function Is(l,t){switch(Ui(t),t.tag){case 3:kt(Gl),C();break;case 26:case 27:case 5:K(t);break;case 4:C();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:_(Ul);break;case 10:kt(t.type);break;case 22:case 23:bt(t),Ii(),l!==null&&_(Je);break;case 24:kt(Gl)}}function ma(l,t){try{var e=t.updateQueue,u=e!==null?e.lastEffect:null;if(u!==null){var a=u.next;e=a;do{if((e.tag&l)===l){u=void 0;var n=e.create,i=e.inst;u=n(),i.destroy=u}e=e.next}while(e!==a)}}catch(f){Tl(t,t.return,f)}}function be(l,t,e){try{var u=t.updateQueue,a=u!==null?u.lastEffect:null;if(a!==null){var n=a.next;u=n;do{if((u.tag&l)===l){var i=u.inst,f=i.destroy;if(f!==void 0){i.destroy=void 0,a=t;var s=e,g=f;try{g()}catch(R){Tl(a,s,R)}}}u=u.next}while(u!==n)}}catch(R){Tl(t,t.return,R)}}function Ws(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Y_(t,e)}catch(u){Tl(l,l.return,u)}}}function $s(l,t,e){e.props=Fe(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(u){Tl(l,t,u)}}function va(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var u=l.stateNode;break;case 30:u=l.stateNode;break;default:u=l.stateNode}typeof e=="function"?l.refCleanup=e(u):e.current=u}}catch(a){Tl(l,t,a)}}function Vt(l,t){var e=l.ref,u=l.refCleanup;if(e!==null)if(typeof u=="function")try{u()}catch(a){Tl(l,t,a)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){Tl(l,t,a)}else e.current=null}function Fs(l){var t=l.type,e=l.memoizedProps,u=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&u.focus();break l;case"img":e.src?u.src=e.src:e.srcSet&&(u.srcset=e.srcSet)}}catch(a){Tl(l,l.return,a)}}function pf(l,t,e){try{var u=l.stateNode;p0(u,l.type,e,t),u[_t]=t}catch(a){Tl(l,l.return,a)}}function ks(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&Ne(l.type)||l.tag===4}function Mf(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||ks(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&Ne(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Of(l,t,e){var u=l.tag;if(u===5||u===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=wt));else if(u!==4&&(u===27&&Ne(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Of(l,t,e),l=l.sibling;l!==null;)Of(l,t,e),l=l.sibling}function Rn(l,t,e){var u=l.tag;if(u===5||u===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(u!==4&&(u===27&&Ne(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(Rn(l,t,e),l=l.sibling;l!==null;)Rn(l,t,e),l=l.sibling}function Ps(l){var t=l.stateNode,e=l.memoizedProps;try{for(var u=l.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Fl(t,u,e),t[wl]=l,t[_t]=e}catch(n){Tl(l,l.return,n)}}var ue=!1,Yl=!1,Nf=!1,lo=typeof WeakSet=="function"?WeakSet:Set,Jl=null;function i0(l,t){if(l=l.containerInfo,Ff=Kn,l=r_(l),Ai(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var u=e.getSelection&&e.getSelection();if(u&&u.rangeCount!==0){e=u.anchorNode;var a=u.anchorOffset,n=u.focusNode;u=u.focusOffset;try{e.nodeType,n.nodeType}catch{e=null;break l}var i=0,f=-1,s=-1,g=0,R=0,p=l,S=null;t:for(;;){for(var T;p!==e||a!==0&&p.nodeType!==3||(f=i+a),p!==n||u!==0&&p.nodeType!==3||(s=i+u),p.nodeType===3&&(i+=p.nodeValue.length),(T=p.firstChild)!==null;)S=p,p=T;for(;;){if(p===l)break t;if(S===e&&++g===a&&(f=i),S===n&&++R===u&&(s=i),(T=p.nextSibling)!==null)break;p=S,S=p.parentNode}p=T}e=f===-1||s===-1?null:{start:f,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(kf={focusedElem:l,selectionRange:e},Kn=!1,Jl=t;Jl!==null;)if(t=Jl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Jl=l;else for(;Jl!==null;){switch(t=Jl,n=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)a=l[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){l=void 0,e=t,a=n.memoizedProps,n=n.memoizedState,u=e.stateNode;try{var x=Fe(e.type,a);l=u.getSnapshotBeforeUpdate(x,n),u.__reactInternalSnapshotBeforeUpdate=l}catch(I){Tl(e,e.return,I)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)tc(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":tc(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(m(163))}if(l=t.sibling,l!==null){l.return=t.return,Jl=l;break}Jl=t.return}}function to(l,t,e){var u=e.flags;switch(e.tag){case 0:case 11:case 15:ne(l,e),u&4&&ma(5,e);break;case 1:if(ne(l,e),u&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){Tl(e,e.return,i)}else{var a=Fe(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(a,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){Tl(e,e.return,i)}}u&64&&Ws(e),u&512&&va(e,e.return);break;case 3:if(ne(l,e),u&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Y_(l,t)}catch(i){Tl(e,e.return,i)}}break;case 27:t===null&&u&4&&Ps(e);case 26:case 5:ne(l,e),t===null&&u&4&&Fs(e),u&512&&va(e,e.return);break;case 12:ne(l,e);break;case 31:ne(l,e),u&4&&ao(l,e);break;case 13:ne(l,e),u&4&&no(l,e),u&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=m0.bind(null,e),B0(l,e))));break;case 22:if(u=e.memoizedState!==null||ue,!u){t=t!==null&&t.memoizedState!==null||Yl,a=ue;var n=Yl;ue=u,(Yl=t)&&!n?ie(l,e,(e.subtreeFlags&8772)!==0):ne(l,e),ue=a,Yl=n}break;case 30:break;default:ne(l,e)}}function eo(l){var t=l.alternate;t!==null&&(l.alternate=null,eo(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ni(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var Ol=null,ot=!1;function ae(l,t,e){for(e=e.child;e!==null;)uo(l,t,e),e=e.sibling}function uo(l,t,e){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(xu,e)}catch{}switch(e.tag){case 26:Yl||Vt(e,t),ae(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Yl||Vt(e,t);var u=Ol,a=ot;Ne(e.type)&&(Ol=e.stateNode,ot=!1),ae(l,t,e),za(e.stateNode),Ol=u,ot=a;break;case 5:Yl||Vt(e,t);case 6:if(u=Ol,a=ot,Ol=null,ae(l,t,e),Ol=u,ot=a,Ol!==null)if(ot)try{(Ol.nodeType===9?Ol.body:Ol.nodeName==="HTML"?Ol.ownerDocument.body:Ol).removeChild(e.stateNode)}catch(n){Tl(e,t,n)}else try{Ol.removeChild(e.stateNode)}catch(n){Tl(e,t,n)}break;case 18:Ol!==null&&(ot?(l=Ol,$o(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),ju(l)):$o(Ol,e.stateNode));break;case 4:u=Ol,a=ot,Ol=e.stateNode.containerInfo,ot=!0,ae(l,t,e),Ol=u,ot=a;break;case 0:case 11:case 14:case 15:be(2,e,t),Yl||be(4,e,t),ae(l,t,e);break;case 1:Yl||(Vt(e,t),u=e.stateNode,typeof u.componentWillUnmount=="function"&&$s(e,t,u)),ae(l,t,e);break;case 21:ae(l,t,e);break;case 22:Yl=(u=Yl)||e.memoizedState!==null,ae(l,t,e),Yl=u;break;default:ae(l,t,e)}}function ao(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{ju(l)}catch(e){Tl(t,t.return,e)}}}function no(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{ju(l)}catch(e){Tl(t,t.return,e)}}function f0(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new lo),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new lo),t;default:throw Error(m(435,l.tag))}}function zn(l,t){var e=f0(l);t.forEach(function(u){if(!e.has(u)){e.add(u);var a=v0.bind(null,l,u);u.then(a,a)}})}function rt(l,t){var e=t.deletions;if(e!==null)for(var u=0;u<e.length;u++){var a=e[u],n=l,i=t,f=i;l:for(;f!==null;){switch(f.tag){case 27:if(Ne(f.type)){Ol=f.stateNode,ot=!1;break l}break;case 5:Ol=f.stateNode,ot=!1;break l;case 3:case 4:Ol=f.stateNode.containerInfo,ot=!0;break l}f=f.return}if(Ol===null)throw Error(m(160));uo(n,i,a),Ol=null,ot=!1,n=a.alternate,n!==null&&(n.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)io(t,l),t=t.sibling}var xt=null;function io(l,t){var e=l.alternate,u=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:rt(t,l),ht(l),u&4&&(be(3,l,l.return),ma(3,l),be(5,l,l.return));break;case 1:rt(t,l),ht(l),u&512&&(Yl||e===null||Vt(e,e.return)),u&64&&ue&&(l=l.updateQueue,l!==null&&(u=l.callbacks,u!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?u:e.concat(u))));break;case 26:var a=xt;if(rt(t,l),ht(l),u&512&&(Yl||e===null||Vt(e,e.return)),u&4){var n=e!==null?e.memoizedState:null;if(u=l.memoizedState,e===null)if(u===null)if(l.stateNode===null){l:{u=l.type,e=l.memoizedProps,a=a.ownerDocument||a;t:switch(u){case"title":n=a.getElementsByTagName("title")[0],(!n||n[Zu]||n[wl]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=a.createElement(u),a.head.insertBefore(n,a.querySelector("head > title"))),Fl(n,u,e),n[wl]=l,Kl(n),u=n;break l;case"link":var i=fr("link","href",a).get(u+(e.href||""));if(i){for(var f=0;f<i.length;f++)if(n=i[f],n.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&n.getAttribute("rel")===(e.rel==null?null:e.rel)&&n.getAttribute("title")===(e.title==null?null:e.title)&&n.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(f,1);break t}}n=a.createElement(u),Fl(n,u,e),a.head.appendChild(n);break;case"meta":if(i=fr("meta","content",a).get(u+(e.content||""))){for(f=0;f<i.length;f++)if(n=i[f],n.getAttribute("content")===(e.content==null?null:""+e.content)&&n.getAttribute("name")===(e.name==null?null:e.name)&&n.getAttribute("property")===(e.property==null?null:e.property)&&n.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&n.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(f,1);break t}}n=a.createElement(u),Fl(n,u,e),a.head.appendChild(n);break;default:throw Error(m(468,u))}n[wl]=l,Kl(n),u=n}l.stateNode=u}else cr(a,l.type,l.stateNode);else l.stateNode=ir(a,u,l.memoizedProps);else n!==u?(n===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):n.count--,u===null?cr(a,l.type,l.stateNode):ir(a,u,l.memoizedProps)):u===null&&l.stateNode!==null&&pf(l,l.memoizedProps,e.memoizedProps)}break;case 27:rt(t,l),ht(l),u&512&&(Yl||e===null||Vt(e,e.return)),e!==null&&u&4&&pf(l,l.memoizedProps,e.memoizedProps);break;case 5:if(rt(t,l),ht(l),u&512&&(Yl||e===null||Vt(e,e.return)),l.flags&32){a=l.stateNode;try{fu(a,"")}catch(x){Tl(l,l.return,x)}}u&4&&l.stateNode!=null&&(a=l.memoizedProps,pf(l,a,e!==null?e.memoizedProps:a)),u&1024&&(Nf=!0);break;case 6:if(rt(t,l),ht(l),u&4){if(l.stateNode===null)throw Error(m(162));u=l.memoizedProps,e=l.stateNode;try{e.nodeValue=u}catch(x){Tl(l,l.return,x)}}break;case 3:if(Xn=null,a=xt,xt=Yn(t.containerInfo),rt(t,l),xt=a,ht(l),u&4&&e!==null&&e.memoizedState.isDehydrated)try{ju(t.containerInfo)}catch(x){Tl(l,l.return,x)}Nf&&(Nf=!1,fo(l));break;case 4:u=xt,xt=Yn(l.stateNode.containerInfo),rt(t,l),ht(l),xt=u;break;case 12:rt(t,l),ht(l);break;case 31:rt(t,l),ht(l),u&4&&(u=l.updateQueue,u!==null&&(l.updateQueue=null,zn(l,u)));break;case 13:rt(t,l),ht(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(pn=yt()),u&4&&(u=l.updateQueue,u!==null&&(l.updateQueue=null,zn(l,u)));break;case 22:a=l.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,g=ue,R=Yl;if(ue=g||a,Yl=R||s,rt(t,l),Yl=R,ue=g,ht(l),u&8192)l:for(t=l.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(e===null||s||ue||Yl||ke(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){s=e=t;try{if(n=s.stateNode,a)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{f=s.stateNode;var p=s.memoizedProps.style,S=p!=null&&p.hasOwnProperty("display")?p.display:null;f.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(x){Tl(s,s.return,x)}}}else if(t.tag===6){if(e===null){s=t;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(x){Tl(s,s.return,x)}}}else if(t.tag===18){if(e===null){s=t;try{var T=s.stateNode;a?Fo(T,!0):Fo(s.stateNode,!1)}catch(x){Tl(s,s.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}u&4&&(u=l.updateQueue,u!==null&&(e=u.retryQueue,e!==null&&(u.retryQueue=null,zn(l,e))));break;case 19:rt(t,l),ht(l),u&4&&(u=l.updateQueue,u!==null&&(l.updateQueue=null,zn(l,u)));break;case 30:break;case 21:break;default:rt(t,l),ht(l)}}function ht(l){var t=l.flags;if(t&2){try{for(var e,u=l.return;u!==null;){if(ks(u)){e=u;break}u=u.return}if(e==null)throw Error(m(160));switch(e.tag){case 27:var a=e.stateNode,n=Mf(l);Rn(l,n,a);break;case 5:var i=e.stateNode;e.flags&32&&(fu(i,""),e.flags&=-33);var f=Mf(l);Rn(l,f,i);break;case 3:case 4:var s=e.stateNode.containerInfo,g=Mf(l);Of(l,g,s);break;default:throw Error(m(161))}}catch(R){Tl(l,l.return,R)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function fo(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;fo(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function ne(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)to(l,t.alternate,t),t=t.sibling}function ke(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:be(4,t,t.return),ke(t);break;case 1:Vt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&$s(t,t.return,e),ke(t);break;case 27:za(t.stateNode);case 26:case 5:Vt(t,t.return),ke(t);break;case 22:t.memoizedState===null&&ke(t);break;case 30:ke(t);break;default:ke(t)}l=l.sibling}}function ie(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var u=t.alternate,a=l,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:ie(a,n,e),ma(4,n);break;case 1:if(ie(a,n,e),u=n,a=u.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(g){Tl(u,u.return,g)}if(u=n,a=u.updateQueue,a!==null){var f=u.stateNode;try{var s=a.shared.hiddenCallbacks;if(s!==null)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)j_(s[a],f)}catch(g){Tl(u,u.return,g)}}e&&i&64&&Ws(n),va(n,n.return);break;case 27:Ps(n);case 26:case 5:ie(a,n,e),e&&u===null&&i&4&&Fs(n),va(n,n.return);break;case 12:ie(a,n,e);break;case 31:ie(a,n,e),e&&i&4&&ao(a,n);break;case 13:ie(a,n,e),e&&i&4&&no(a,n);break;case 22:n.memoizedState===null&&ie(a,n,e),va(n,n.return);break;case 30:break;default:ie(a,n,e)}t=t.sibling}}function Cf(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&ea(e))}function Df(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&ea(l))}function Xt(l,t,e,u){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)co(l,t,e,u),t=t.sibling}function co(l,t,e,u){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(l,t,e,u),a&2048&&ma(9,t);break;case 1:Xt(l,t,e,u);break;case 3:Xt(l,t,e,u),a&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&ea(l)));break;case 12:if(a&2048){Xt(l,t,e,u),l=t.stateNode;try{var n=t.memoizedProps,i=n.id,f=n.onPostCommit;typeof f=="function"&&f(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(s){Tl(t,t.return,s)}}else Xt(l,t,e,u);break;case 31:Xt(l,t,e,u);break;case 13:Xt(l,t,e,u);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?Xt(l,t,e,u):ya(l,t):n._visibility&2?Xt(l,t,e,u):(n._visibility|=2,pu(l,t,e,u,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Cf(i,t);break;case 24:Xt(l,t,e,u),a&2048&&Df(t.alternate,t);break;default:Xt(l,t,e,u)}}function pu(l,t,e,u,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=l,i=t,f=e,s=u,g=i.flags;switch(i.tag){case 0:case 11:case 15:pu(n,i,f,s,a),ma(8,i);break;case 23:break;case 22:var R=i.stateNode;i.memoizedState!==null?R._visibility&2?pu(n,i,f,s,a):ya(n,i):(R._visibility|=2,pu(n,i,f,s,a)),a&&g&2048&&Cf(i.alternate,i);break;case 24:pu(n,i,f,s,a),a&&g&2048&&Df(i.alternate,i);break;default:pu(n,i,f,s,a)}t=t.sibling}}function ya(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,u=t,a=u.flags;switch(u.tag){case 22:ya(e,u),a&2048&&Cf(u.alternate,u);break;case 24:ya(e,u),a&2048&&Df(u.alternate,u);break;default:ya(e,u)}t=t.sibling}}var ga=8192;function Mu(l,t,e){if(l.subtreeFlags&ga)for(l=l.child;l!==null;)_o(l,t,e),l=l.sibling}function _o(l,t,e){switch(l.tag){case 26:Mu(l,t,e),l.flags&ga&&l.memoizedState!==null&&w0(e,xt,l.memoizedState,l.memoizedProps);break;case 5:Mu(l,t,e);break;case 3:case 4:var u=xt;xt=Yn(l.stateNode.containerInfo),Mu(l,t,e),xt=u;break;case 22:l.memoizedState===null&&(u=l.alternate,u!==null&&u.memoizedState!==null?(u=ga,ga=16777216,Mu(l,t,e),ga=u):Mu(l,t,e));break;default:Mu(l,t,e)}}function so(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function Sa(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var u=t[e];Jl=u,ro(u,l)}so(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)oo(l),l=l.sibling}function oo(l){switch(l.tag){case 0:case 11:case 15:Sa(l),l.flags&2048&&be(9,l,l.return);break;case 3:Sa(l);break;case 12:Sa(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,Ln(l)):Sa(l);break;default:Sa(l)}}function Ln(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var u=t[e];Jl=u,ro(u,l)}so(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:be(8,t,t.return),Ln(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Ln(t));break;default:Ln(t)}l=l.sibling}}function ro(l,t){for(;Jl!==null;){var e=Jl;switch(e.tag){case 0:case 11:case 15:be(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var u=e.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ea(e.memoizedState.cache)}if(u=e.child,u!==null)u.return=e,Jl=u;else l:for(e=l;Jl!==null;){u=Jl;var a=u.sibling,n=u.return;if(eo(u),u===e){Jl=null;break l}if(a!==null){a.return=n,Jl=a;break l}Jl=n}}}var c0={getCacheForType:function(l){var t=Wl(Gl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Wl(Gl).controller.signal}},_0=typeof WeakMap=="function"?WeakMap:Map,gl=0,Rl=null,il=null,_l=0,Sl=0,Rt=null,Re=!1,Ou=!1,Uf=!1,fe=0,Cl=0,ze=0,Pe=0,Hf=0,zt=0,Nu=0,Ta=null,dt=null,Bf=!1,pn=0,ho=0,Mn=1/0,On=null,Le=null,xl=0,pe=null,Cu=null,ce=0,Gf=0,qf=null,mo=null,Ea=0,jf=null;function Lt(){return(gl&2)!==0&&_l!==0?_l&-_l:b.T!==null?Vf():Nc()}function vo(){if(zt===0)if((_l&536870912)===0||ol){var l=Ga;Ga<<=1,(Ga&3932160)===0&&(Ga=262144),zt=l}else zt=536870912;return l=At.current,l!==null&&(l.flags|=32),zt}function mt(l,t,e){(l===Rl&&(Sl===2||Sl===9)||l.cancelPendingCommit!==null)&&(Du(l,0),Me(l,_l,zt,!1)),Qu(l,e),((gl&2)===0||l!==Rl)&&(l===Rl&&((gl&2)===0&&(Pe|=e),Cl===4&&Me(l,_l,zt,!1)),Kt(l))}function yo(l,t,e){if((gl&6)!==0)throw Error(m(327));var u=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Xu(l,t),a=u?r0(l,t):xf(l,t,!0),n=u;do{if(a===0){Ou&&!u&&Me(l,t,0,!1);break}else{if(e=l.current.alternate,n&&!s0(e)){a=xf(l,t,!1),n=!1;continue}if(a===2){if(n=t,l.errorRecoveryDisabledLanes&n)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var f=l;a=Ta;var s=f.current.memoizedState.isDehydrated;if(s&&(Du(f,i).flags|=256),i=xf(f,i,!1),i!==2){if(Uf&&!s){f.errorRecoveryDisabledLanes|=n,Pe|=n,a=4;break l}n=dt,dt=a,n!==null&&(dt===null?dt=n:dt.push.apply(dt,n))}a=i}if(n=!1,a!==2)continue}}if(a===1){Du(l,0),Me(l,t,0,!0);break}l:{switch(u=l,n=a,n){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:Me(u,t,zt,!Re);break l;case 2:dt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(a=pn+300-yt(),10<a)){if(Me(u,t,zt,!Re),ja(u,0,!0)!==0)break l;ce=t,u.timeoutHandle=Io(go.bind(null,u,e,dt,On,Bf,t,zt,Pe,Nu,Re,n,"Throttled",-0,0),a);break l}go(u,e,dt,On,Bf,t,zt,Pe,Nu,Re,n,null,-0,0)}}break}while(!0);Kt(l)}function go(l,t,e,u,a,n,i,f,s,g,R,p,S,T){if(l.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wt},_o(t,n,p);var x=(n&62914560)===n?pn-yt():(n&4194048)===n?ho-yt():0;if(x=I0(p,x),x!==null){ce=n,l.cancelPendingCommit=x(Lo.bind(null,l,t,n,e,u,a,i,f,s,R,p,null,S,T)),Me(l,n,i,!g);return}}Lo(l,t,n,e,u,a,i,f,s)}function s0(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var u=0;u<e.length;u++){var a=e[u],n=a.getSnapshot;a=a.value;try{if(!Tt(n(),a))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Me(l,t,e,u){t&=~Hf,t&=~Pe,l.suspendedLanes|=t,l.pingedLanes&=~t,u&&(l.warmLanes|=t),u=l.expirationTimes;for(var a=t;0<a;){var n=31-St(a),i=1<<n;u[n]=-1,a&=~i}e!==0&&pc(l,e,t)}function Nn(){return(gl&6)===0?(Aa(0),!1):!0}function Yf(){if(il!==null){if(Sl===0)var l=il.return;else l=il,Ft=Ve=null,lf(l),Au=null,aa=0,l=il;for(;l!==null;)Is(l.alternate,l),l=l.return;il=null}}function Du(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,N0(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),ce=0,Yf(),Rl=l,il=e=Wt(l.current,null),_l=t,Sl=0,Rt=null,Re=!1,Ou=Xu(l,t),Uf=!1,Nu=zt=Hf=Pe=ze=Cl=0,dt=Ta=null,Bf=!1,(t&8)!==0&&(t|=t&32);var u=l.entangledLanes;if(u!==0)for(l=l.entanglements,u&=t;0<u;){var a=31-St(u),n=1<<a;t|=l[a],u&=~n}return fe=t,$a(),e}function So(l,t){tl=null,b.H=ra,t===Eu||t===an?(t=H_(),Sl=3):t===Qi?(t=H_(),Sl=4):Sl=t===yf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,il===null&&(Cl=1,Sn(l,Ct(t,l.current)))}function To(){var l=At.current;return l===null?!0:(_l&4194048)===_l?Bt===null:(_l&62914560)===_l||(_l&536870912)!==0?l===Bt:!1}function Eo(){var l=b.H;return b.H=ra,l===null?ra:l}function Ao(){var l=b.A;return b.A=c0,l}function Cn(){Cl=4,Re||(_l&4194048)!==_l&&At.current!==null||(Ou=!0),(ze&134217727)===0&&(Pe&134217727)===0||Rl===null||Me(Rl,_l,zt,!1)}function xf(l,t,e){var u=gl;gl|=2;var a=Eo(),n=Ao();(Rl!==l||_l!==t)&&(On=null,Du(l,t)),t=!1;var i=Cl;l:do try{if(Sl!==0&&il!==null){var f=il,s=Rt;switch(Sl){case 8:Yf(),i=6;break l;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var g=Sl;if(Sl=0,Rt=null,Uu(l,f,s,g),e&&Ou){i=0;break l}break;default:g=Sl,Sl=0,Rt=null,Uu(l,f,s,g)}}o0(),i=Cl;break}catch(R){So(l,R)}while(!0);return t&&l.shellSuspendCounter++,Ft=Ve=null,gl=u,b.H=a,b.A=n,il===null&&(Rl=null,_l=0,$a()),i}function o0(){for(;il!==null;)bo(il)}function r0(l,t){var e=gl;gl|=2;var u=Eo(),a=Ao();Rl!==l||_l!==t?(On=null,Mn=yt()+500,Du(l,t)):Ou=Xu(l,t);l:do try{if(Sl!==0&&il!==null){t=il;var n=Rt;t:switch(Sl){case 1:Sl=0,Rt=null,Uu(l,t,n,1);break;case 2:case 9:if(D_(n)){Sl=0,Rt=null,Ro(t);break}t=function(){Sl!==2&&Sl!==9||Rl!==l||(Sl=7),Kt(l)},n.then(t,t);break l;case 3:Sl=7;break l;case 4:Sl=5;break l;case 7:D_(n)?(Sl=0,Rt=null,Ro(t)):(Sl=0,Rt=null,Uu(l,t,n,7));break;case 5:var i=null;switch(il.tag){case 26:i=il.memoizedState;case 5:case 27:var f=il;if(i?_r(i):f.stateNode.complete){Sl=0,Rt=null;var s=f.sibling;if(s!==null)il=s;else{var g=f.return;g!==null?(il=g,Dn(g)):il=null}break t}}Sl=0,Rt=null,Uu(l,t,n,5);break;case 6:Sl=0,Rt=null,Uu(l,t,n,6);break;case 8:Yf(),Cl=6;break l;default:throw Error(m(462))}}h0();break}catch(R){So(l,R)}while(!0);return Ft=Ve=null,b.H=u,b.A=a,gl=e,il!==null?0:(Rl=null,_l=0,$a(),Cl)}function h0(){for(;il!==null&&!et();)bo(il)}function bo(l){var t=Js(l.alternate,l,fe);l.memoizedProps=l.pendingProps,t===null?Dn(l):il=t}function Ro(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=xs(e,t,t.pendingProps,t.type,void 0,_l);break;case 11:t=xs(e,t,t.pendingProps,t.type.render,t.ref,_l);break;case 5:lf(t);default:Is(e,t),t=il=E_(t,fe),t=Js(e,t,fe)}l.memoizedProps=l.pendingProps,t===null?Dn(l):il=t}function Uu(l,t,e,u){Ft=Ve=null,lf(t),Au=null,aa=0;var a=t.return;try{if(t0(l,a,t,e,_l)){Cl=1,Sn(l,Ct(e,l.current)),il=null;return}}catch(n){if(a!==null)throw il=a,n;Cl=1,Sn(l,Ct(e,l.current)),il=null;return}t.flags&32768?(ol||u===1?l=!0:Ou||(_l&536870912)!==0?l=!1:(Re=l=!0,(u===2||u===9||u===3||u===6)&&(u=At.current,u!==null&&u.tag===13&&(u.flags|=16384))),zo(t,l)):Dn(t)}function Dn(l){var t=l;do{if((t.flags&32768)!==0){zo(t,Re);return}l=t.return;var e=a0(t.alternate,t,fe);if(e!==null){il=e;return}if(t=t.sibling,t!==null){il=t;return}il=t=l}while(t!==null);Cl===0&&(Cl=5)}function zo(l,t){do{var e=n0(l.alternate,l);if(e!==null){e.flags&=32767,il=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){il=l;return}il=l=e}while(l!==null);Cl=6,il=null}function Lo(l,t,e,u,a,n,i,f,s){l.cancelPendingCommit=null;do Un();while(xl!==0);if((gl&6)!==0)throw Error(m(327));if(t!==null){if(t===l.current)throw Error(m(177));if(n=t.lanes|t.childLanes,n|=pi,Jr(l,e,n,i,f,s),l===Rl&&(il=Rl=null,_l=0),Cu=t,pe=l,ce=e,Gf=n,qf=a,mo=u,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,y0(Ha,function(){return Co(),null})):(l.callbackNode=null,l.callbackPriority=0),u=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||u){u=b.T,b.T=null,a=G.p,G.p=2,i=gl,gl|=4;try{i0(l,t,e)}finally{gl=i,G.p=a,b.T=u}}xl=1,po(),Mo(),Oo()}}function po(){if(xl===1){xl=0;var l=pe,t=Cu,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var u=G.p;G.p=2;var a=gl;gl|=4;try{io(t,l);var n=kf,i=r_(l.containerInfo),f=n.focusedElem,s=n.selectionRange;if(i!==f&&f&&f.ownerDocument&&o_(f.ownerDocument.documentElement,f)){if(s!==null&&Ai(f)){var g=s.start,R=s.end;if(R===void 0&&(R=g),"selectionStart"in f)f.selectionStart=g,f.selectionEnd=Math.min(R,f.value.length);else{var p=f.ownerDocument||document,S=p&&p.defaultView||window;if(S.getSelection){var T=S.getSelection(),x=f.textContent.length,I=Math.min(s.start,x),bl=s.end===void 0?I:Math.min(s.end,x);!T.extend&&I>bl&&(i=bl,bl=I,I=i);var v=s_(f,I),r=s_(f,bl);if(v&&r&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==r.node||T.focusOffset!==r.offset)){var y=p.createRange();y.setStart(v.node,v.offset),T.removeAllRanges(),I>bl?(T.addRange(y),T.extend(r.node,r.offset)):(y.setEnd(r.node,r.offset),T.addRange(y))}}}}for(p=[],T=f;T=T.parentNode;)T.nodeType===1&&p.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<p.length;f++){var L=p[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Kn=!!Ff,kf=Ff=null}finally{gl=a,G.p=u,b.T=e}}l.current=t,xl=2}}function Mo(){if(xl===2){xl=0;var l=pe,t=Cu,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var u=G.p;G.p=2;var a=gl;gl|=4;try{to(l,t.alternate,t)}finally{gl=a,G.p=u,b.T=e}}xl=3}}function Oo(){if(xl===4||xl===3){xl=0,li();var l=pe,t=Cu,e=ce,u=mo;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xl=5:(xl=0,Cu=pe=null,No(l,l.pendingLanes));var a=l.pendingLanes;if(a===0&&(Le=null),ui(e),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}if(u!==null){t=b.T,a=G.p,G.p=2,b.T=null;try{for(var n=l.onRecoverableError,i=0;i<u.length;i++){var f=u[i];n(f.value,{componentStack:f.stack})}}finally{b.T=t,G.p=a}}(ce&3)!==0&&Un(),Kt(l),a=l.pendingLanes,(e&261930)!==0&&(a&42)!==0?l===jf?Ea++:(Ea=0,jf=l):Ea=0,Aa(0)}}function No(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,ea(t)))}function Un(){return po(),Mo(),Oo(),Co()}function Co(){if(xl!==5)return!1;var l=pe,t=Gf;Gf=0;var e=ui(ce),u=b.T,a=G.p;try{G.p=32>e?32:e,b.T=null,e=qf,qf=null;var n=pe,i=ce;if(xl=0,Cu=pe=null,ce=0,(gl&6)!==0)throw Error(m(331));var f=gl;if(gl|=4,oo(n.current),co(n,n.current,i,e),gl=f,Aa(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(xu,n)}catch{}return!0}finally{G.p=a,b.T=u,No(l,t)}}function Do(l,t,e){t=Ct(e,t),t=vf(l.stateNode,t,2),l=Te(l,t,2),l!==null&&(Qu(l,2),Kt(l))}function Tl(l,t,e){if(l.tag===3)Do(l,l,e);else for(;t!==null;){if(t.tag===3){Do(t,l,e);break}else if(t.tag===1){var u=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Le===null||!Le.has(u))){l=Ct(e,l),e=Ds(2),u=Te(t,e,2),u!==null&&(Us(e,u,t,l),Qu(u,2),Kt(u));break}}t=t.return}}function Xf(l,t,e){var u=l.pingCache;if(u===null){u=l.pingCache=new _0;var a=new Set;u.set(t,a)}else a=u.get(t),a===void 0&&(a=new Set,u.set(t,a));a.has(e)||(Uf=!0,a.add(e),l=d0.bind(null,l,t,e),t.then(l,l))}function d0(l,t,e){var u=l.pingCache;u!==null&&u.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,Rl===l&&(_l&e)===e&&(Cl===4||Cl===3&&(_l&62914560)===_l&&300>yt()-pn?(gl&2)===0&&Du(l,0):Hf|=e,Nu===_l&&(Nu=0)),Kt(l)}function Uo(l,t){t===0&&(t=Lc()),l=Xe(l,t),l!==null&&(Qu(l,t),Kt(l))}function m0(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Uo(l,e)}function v0(l,t){var e=0;switch(l.tag){case 31:case 13:var u=l.stateNode,a=l.memoizedState;a!==null&&(e=a.retryLane);break;case 19:u=l.stateNode;break;case 22:u=l.stateNode._retryCache;break;default:throw Error(m(314))}u!==null&&u.delete(t),Uo(l,e)}function y0(l,t){return jt(l,t)}var Hn=null,Hu=null,Qf=!1,Bn=!1,Zf=!1,Oe=0;function Kt(l){l!==Hu&&l.next===null&&(Hu===null?Hn=Hu=l:Hu=Hu.next=l),Bn=!0,Qf||(Qf=!0,S0())}function Aa(l,t){if(!Zf&&Bn){Zf=!0;do for(var e=!1,u=Hn;u!==null;){if(l!==0){var a=u.pendingLanes;if(a===0)var n=0;else{var i=u.suspendedLanes,f=u.pingedLanes;n=(1<<31-St(42|l)+1)-1,n&=a&~(i&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(e=!0,qo(u,n))}else n=_l,n=ja(u,u===Rl?n:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(n&3)===0||Xu(u,n)||(e=!0,qo(u,n));u=u.next}while(e);Zf=!1}}function g0(){Ho()}function Ho(){Bn=Qf=!1;var l=0;Oe!==0&&O0()&&(l=Oe);for(var t=yt(),e=null,u=Hn;u!==null;){var a=u.next,n=Bo(u,t);n===0?(u.next=null,e===null?Hn=a:e.next=a,a===null&&(Hu=e)):(e=u,(l!==0||(n&3)!==0)&&(Bn=!0)),u=a}xl!==0&&xl!==5||Aa(l),Oe!==0&&(Oe=0)}function Bo(l,t){for(var e=l.suspendedLanes,u=l.pingedLanes,a=l.expirationTimes,n=l.pendingLanes&-62914561;0<n;){var i=31-St(n),f=1<<i,s=a[i];s===-1?((f&e)===0||(f&u)!==0)&&(a[i]=Kr(f,t)):s<=t&&(l.expiredLanes|=f),n&=~f}if(t=Rl,e=_l,e=ja(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),u=l.callbackNode,e===0||l===t&&(Sl===2||Sl===9)||l.cancelPendingCommit!==null)return u!==null&&u!==null&&tt(u),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Xu(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(u!==null&&tt(u),ui(e)){case 2:case 8:e=Rc;break;case 32:e=Ha;break;case 268435456:e=zc;break;default:e=Ha}return u=Go.bind(null,l),e=jt(e,u),l.callbackPriority=t,l.callbackNode=e,t}return u!==null&&u!==null&&tt(u),l.callbackPriority=2,l.callbackNode=null,2}function Go(l,t){if(xl!==0&&xl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Un()&&l.callbackNode!==e)return null;var u=_l;return u=ja(l,l===Rl?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),u===0?null:(yo(l,u,t),Bo(l,yt()),l.callbackNode!=null&&l.callbackNode===e?Go.bind(null,l):null)}function qo(l,t){if(Un())return null;yo(l,t,!0)}function S0(){C0(function(){(gl&6)!==0?jt(bc,g0):Ho()})}function Vf(){if(Oe===0){var l=Su;l===0&&(l=Ba,Ba<<=1,(Ba&261888)===0&&(Ba=256)),Oe=l}return Oe}function jo(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Qa(""+l)}function Yo(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function T0(l,t,e,u,a){if(t==="submit"&&e&&e.stateNode===a){var n=jo((a[_t]||null).action),i=u.submitter;i&&(t=(t=i[_t]||null)?jo(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var f=new Ja("action","action",null,u,a);l.push({event:f,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Oe!==0){var s=i?Yo(a,i):new FormData(a);sf(e,{pending:!0,data:s,method:a.method,action:n},null,s)}}else typeof n=="function"&&(f.preventDefault(),s=i?Yo(a,i):new FormData(a),sf(e,{pending:!0,data:s,method:a.method,action:n},n,s))},currentTarget:a}]})}}for(var Kf=0;Kf<Li.length;Kf++){var Jf=Li[Kf],E0=Jf.toLowerCase(),A0=Jf[0].toUpperCase()+Jf.slice(1);Yt(E0,"on"+A0)}Yt(m_,"onAnimationEnd"),Yt(v_,"onAnimationIteration"),Yt(y_,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(jh,"onTransitionRun"),Yt(Yh,"onTransitionStart"),Yt(xh,"onTransitionCancel"),Yt(g_,"onTransitionEnd"),nu("onMouseEnter",["mouseout","mouseover"]),nu("onMouseLeave",["mouseout","mouseover"]),nu("onPointerEnter",["pointerout","pointerover"]),nu("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function xo(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var u=l[e],a=u.event;u=u.listeners;l:{var n=void 0;if(t)for(var i=u.length-1;0<=i;i--){var f=u[i],s=f.instance,g=f.currentTarget;if(f=f.listener,s!==n&&a.isPropagationStopped())break l;n=f,a.currentTarget=g;try{n(a)}catch(R){Wa(R)}a.currentTarget=null,n=s}else for(i=0;i<u.length;i++){if(f=u[i],s=f.instance,g=f.currentTarget,f=f.listener,s!==n&&a.isPropagationStopped())break l;n=f,a.currentTarget=g;try{n(a)}catch(R){Wa(R)}a.currentTarget=null,n=s}}}}function fl(l,t){var e=t[ai];e===void 0&&(e=t[ai]=new Set);var u=l+"__bubble";e.has(u)||(Xo(t,l,2,!1),e.add(u))}function wf(l,t,e){var u=0;t&&(u|=4),Xo(e,l,u,t)}var Gn="_reactListening"+Math.random().toString(36).slice(2);function If(l){if(!l[Gn]){l[Gn]=!0,Uc.forEach(function(e){e!=="selectionchange"&&(b0.has(e)||wf(e,!1,l),wf(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Gn]||(t[Gn]=!0,wf("selectionchange",!1,t))}}function Xo(l,t,e,u){switch(vr(t)){case 2:var a=F0;break;case 8:a=k0;break;default:a=_c}e=a.bind(null,t,e,l),a=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),u?a!==void 0?l.addEventListener(t,e,{capture:!0,passive:a}):l.addEventListener(t,e,!0):a!==void 0?l.addEventListener(t,e,{passive:a}):l.addEventListener(t,e,!1)}function Wf(l,t,e,u,a){var n=u;if((t&1)===0&&(t&2)===0&&u!==null)l:for(;;){if(u===null)return;var i=u.tag;if(i===3||i===4){var f=u.stateNode.containerInfo;if(f===a)break;if(i===4)for(i=u.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;f!==null;){if(i=eu(f),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){u=n=i;continue l}f=f.parentNode}}u=u.return}Kc(function(){var g=n,R=oi(e),p=[];l:{var S=S_.get(l);if(S!==void 0){var T=Ja,x=l;switch(l){case"keypress":if(Va(e)===0)break l;case"keydown":case"keyup":T=vh;break;case"focusin":x="focus",T=yi;break;case"focusout":x="blur",T=yi;break;case"beforeblur":case"afterblur":T=yi;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Sh;break;case m_:case v_:case y_:T=fh;break;case g_:T=Eh;break;case"scroll":case"scrollend":T=eh;break;case"wheel":T=bh;break;case"copy":case"cut":case"paste":T=_h;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=$c;break;case"toggle":case"beforetoggle":T=zh}var I=(t&4)!==0,bl=!I&&(l==="scroll"||l==="scrollend"),v=I?S!==null?S+"Capture":null:S;I=[];for(var r=g,y;r!==null;){var L=r;if(y=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||y===null||v===null||(L=Ku(r,v),L!=null&&I.push(Ra(r,L,y))),bl)break;r=r.return}0<I.length&&(S=new T(S,x,null,e,R),p.push({event:S,listeners:I}))}}if((t&7)===0){l:{if(S=l==="mouseover"||l==="pointerover",T=l==="mouseout"||l==="pointerout",S&&e!==si&&(x=e.relatedTarget||e.fromElement)&&(eu(x)||x[tu]))break l;if((T||S)&&(S=R.window===R?R:(S=R.ownerDocument)?S.defaultView||S.parentWindow:window,T?(x=e.relatedTarget||e.toElement,T=g,x=x?eu(x):null,x!==null&&(bl=q(x),I=x.tag,x!==bl||I!==5&&I!==27&&I!==6)&&(x=null)):(T=null,x=g),T!==x)){if(I=Ic,L="onMouseLeave",v="onMouseEnter",r="mouse",(l==="pointerout"||l==="pointerover")&&(I=$c,L="onPointerLeave",v="onPointerEnter",r="pointer"),bl=T==null?S:Vu(T),y=x==null?S:Vu(x),S=new I(L,r+"leave",T,e,R),S.target=bl,S.relatedTarget=y,L=null,eu(R)===g&&(I=new I(v,r+"enter",x,e,R),I.target=y,I.relatedTarget=bl,L=I),bl=L,T&&x)t:{for(I=R0,v=T,r=x,y=0,L=v;L;L=I(L))y++;L=0;for(var w=r;w;w=I(w))L++;for(;0<y-L;)v=I(v),y--;for(;0<L-y;)r=I(r),L--;for(;y--;){if(v===r||r!==null&&v===r.alternate){I=v;break t}v=I(v),r=I(r)}I=null}else I=null;T!==null&&Qo(p,S,T,I,!1),x!==null&&bl!==null&&Qo(p,bl,x,I,!0)}}l:{if(S=g?Vu(g):window,T=S.nodeName&&S.nodeName.toLowerCase(),T==="select"||T==="input"&&S.type==="file")var ml=a_;else if(e_(S))if(n_)ml=Bh;else{ml=Uh;var Q=Dh}else T=S.nodeName,!T||T.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?g&&_i(g.elementType)&&(ml=a_):ml=Hh;if(ml&&(ml=ml(l,g))){u_(p,ml,e,R);break l}Q&&Q(l,S,g),l==="focusout"&&g&&S.type==="number"&&g.memoizedProps.value!=null&&ci(S,"number",S.value)}switch(Q=g?Vu(g):window,l){case"focusin":(e_(Q)||Q.contentEditable==="true")&&(ou=Q,bi=g,Pu=null);break;case"focusout":Pu=bi=ou=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,h_(p,e,R);break;case"selectionchange":if(qh)break;case"keydown":case"keyup":h_(p,e,R)}var el;if(Si)l:{switch(l){case"compositionstart":var sl="onCompositionStart";break l;case"compositionend":sl="onCompositionEnd";break l;case"compositionupdate":sl="onCompositionUpdate";break l}sl=void 0}else su?l_(l,e)&&(sl="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(sl="onCompositionStart");sl&&(Fc&&e.locale!=="ko"&&(su||sl!=="onCompositionStart"?sl==="onCompositionEnd"&&su&&(el=Jc()):(he=R,di="value"in he?he.value:he.textContent,su=!0)),Q=qn(g,sl),0<Q.length&&(sl=new Wc(sl,l,null,e,R),p.push({event:sl,listeners:Q}),el?sl.data=el:(el=t_(e),el!==null&&(sl.data=el)))),(el=ph?Mh(l,e):Oh(l,e))&&(sl=qn(g,"onBeforeInput"),0<sl.length&&(Q=new Wc("onBeforeInput","beforeinput",null,e,R),p.push({event:Q,listeners:sl}),Q.data=el)),T0(p,l,g,e,R)}xo(p,t)})}function Ra(l,t,e){return{instance:l,listener:t,currentTarget:e}}function qn(l,t){for(var e=t+"Capture",u=[];l!==null;){var a=l,n=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||n===null||(a=Ku(l,e),a!=null&&u.unshift(Ra(l,a,n)),a=Ku(l,t),a!=null&&u.push(Ra(l,a,n))),l.tag===3)return u;l=l.return}return[]}function R0(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Qo(l,t,e,u,a){for(var n=t._reactName,i=[];e!==null&&e!==u;){var f=e,s=f.alternate,g=f.stateNode;if(f=f.tag,s!==null&&s===u)break;f!==5&&f!==26&&f!==27||g===null||(s=g,a?(g=Ku(e,n),g!=null&&i.unshift(Ra(e,g,s))):a||(g=Ku(e,n),g!=null&&i.push(Ra(e,g,s)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var z0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function Zo(l){return(typeof l=="string"?l:""+l).replace(z0,`
`).replace(L0,"")}function Vo(l,t){return t=Zo(t),Zo(l)===t}function Al(l,t,e,u,a,n){switch(e){case"children":typeof u=="string"?t==="body"||t==="textarea"&&u===""||fu(l,u):(typeof u=="number"||typeof u=="bigint")&&t!=="body"&&fu(l,""+u);break;case"className":xa(l,"class",u);break;case"tabIndex":xa(l,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":xa(l,e,u);break;case"style":Zc(l,u,n);break;case"data":if(t!=="object"){xa(l,"data",u);break}case"src":case"href":if(u===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){l.removeAttribute(e);break}u=Qa(""+u),l.setAttribute(e,u);break;case"action":case"formAction":if(typeof u=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(e==="formAction"?(t!=="input"&&Al(l,t,"name",a.name,a,null),Al(l,t,"formEncType",a.formEncType,a,null),Al(l,t,"formMethod",a.formMethod,a,null),Al(l,t,"formTarget",a.formTarget,a,null)):(Al(l,t,"encType",a.encType,a,null),Al(l,t,"method",a.method,a,null),Al(l,t,"target",a.target,a,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){l.removeAttribute(e);break}u=Qa(""+u),l.setAttribute(e,u);break;case"onClick":u!=null&&(l.onclick=wt);break;case"onScroll":u!=null&&fl("scroll",l);break;case"onScrollEnd":u!=null&&fl("scrollend",l);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(m(61));if(e=u.__html,e!=null){if(a.children!=null)throw Error(m(60));l.innerHTML=e}}break;case"multiple":l.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":l.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){l.removeAttribute("xlink:href");break}e=Qa(""+u),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?l.setAttribute(e,""+u):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":u===!0?l.setAttribute(e,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?l.setAttribute(e,u):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?l.setAttribute(e,u):l.removeAttribute(e);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?l.removeAttribute(e):l.setAttribute(e,u);break;case"popover":fl("beforetoggle",l),fl("toggle",l),Ya(l,"popover",u);break;case"xlinkActuate":Jt(l,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Jt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Jt(l,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Jt(l,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Jt(l,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Jt(l,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Jt(l,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Jt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Jt(l,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ya(l,"is",u);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=lh.get(e)||e,Ya(l,e,u))}}function $f(l,t,e,u,a,n){switch(e){case"style":Zc(l,u,n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(m(61));if(e=u.__html,e!=null){if(a.children!=null)throw Error(m(60));l.innerHTML=e}}break;case"children":typeof u=="string"?fu(l,u):(typeof u=="number"||typeof u=="bigint")&&fu(l,""+u);break;case"onScroll":u!=null&&fl("scroll",l);break;case"onScrollEnd":u!=null&&fl("scrollend",l);break;case"onClick":u!=null&&(l.onclick=wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hc.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),t=e.slice(2,a?e.length-7:void 0),n=l[_t]||null,n=n!=null?n[e]:null,typeof n=="function"&&l.removeEventListener(t,n,a),typeof u=="function")){typeof n!="function"&&n!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,u,a);break l}e in l?l[e]=u:u===!0?l.setAttribute(e,""):Ya(l,e,u)}}}function Fl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fl("error",l),fl("load",l);var u=!1,a=!1,n;for(n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i!=null)switch(n){case"src":u=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Al(l,t,n,i,e,null)}}a&&Al(l,t,"srcSet",e.srcSet,e,null),u&&Al(l,t,"src",e.src,e,null);return;case"input":fl("invalid",l);var f=n=i=a=null,s=null,g=null;for(u in e)if(e.hasOwnProperty(u)){var R=e[u];if(R!=null)switch(u){case"name":a=R;break;case"type":i=R;break;case"checked":s=R;break;case"defaultChecked":g=R;break;case"value":n=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(m(137,t));break;default:Al(l,t,u,R,e,null)}}Yc(l,n,f,s,g,i,a,!1);return;case"select":fl("invalid",l),u=i=n=null;for(a in e)if(e.hasOwnProperty(a)&&(f=e[a],f!=null))switch(a){case"value":n=f;break;case"defaultValue":i=f;break;case"multiple":u=f;default:Al(l,t,a,f,e,null)}t=n,e=i,l.multiple=!!u,t!=null?iu(l,!!u,t,!1):e!=null&&iu(l,!!u,e,!0);return;case"textarea":fl("invalid",l),n=a=u=null;for(i in e)if(e.hasOwnProperty(i)&&(f=e[i],f!=null))switch(i){case"value":u=f;break;case"defaultValue":a=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(91));break;default:Al(l,t,i,f,e,null)}Xc(l,u,a,n);return;case"option":for(s in e)e.hasOwnProperty(s)&&(u=e[s],u!=null)&&(s==="selected"?l.selected=u&&typeof u!="function"&&typeof u!="symbol":Al(l,t,s,u,e,null));return;case"dialog":fl("beforetoggle",l),fl("toggle",l),fl("cancel",l),fl("close",l);break;case"iframe":case"object":fl("load",l);break;case"video":case"audio":for(u=0;u<ba.length;u++)fl(ba[u],l);break;case"image":fl("error",l),fl("load",l);break;case"details":fl("toggle",l);break;case"embed":case"source":case"link":fl("error",l),fl("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in e)if(e.hasOwnProperty(g)&&(u=e[g],u!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Al(l,t,g,u,e,null)}return;default:if(_i(t)){for(R in e)e.hasOwnProperty(R)&&(u=e[R],u!==void 0&&$f(l,t,R,u,e,void 0));return}}for(f in e)e.hasOwnProperty(f)&&(u=e[f],u!=null&&Al(l,t,f,u,e,null))}function p0(l,t,e,u){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,n=null,i=null,f=null,s=null,g=null,R=null;for(T in e){var p=e[T];if(e.hasOwnProperty(T)&&p!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":s=p;default:u.hasOwnProperty(T)||Al(l,t,T,null,u,p)}}for(var S in u){var T=u[S];if(p=e[S],u.hasOwnProperty(S)&&(T!=null||p!=null))switch(S){case"type":n=T;break;case"name":a=T;break;case"checked":g=T;break;case"defaultChecked":R=T;break;case"value":i=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(m(137,t));break;default:T!==p&&Al(l,t,S,T,u,p)}}fi(l,i,f,s,g,R,n,a);return;case"select":T=i=f=S=null;for(n in e)if(s=e[n],e.hasOwnProperty(n)&&s!=null)switch(n){case"value":break;case"multiple":T=s;default:u.hasOwnProperty(n)||Al(l,t,n,null,u,s)}for(a in u)if(n=u[a],s=e[a],u.hasOwnProperty(a)&&(n!=null||s!=null))switch(a){case"value":S=n;break;case"defaultValue":f=n;break;case"multiple":i=n;default:n!==s&&Al(l,t,a,n,u,s)}t=f,e=i,u=T,S!=null?iu(l,!!e,S,!1):!!u!=!!e&&(t!=null?iu(l,!!e,t,!0):iu(l,!!e,e?[]:"",!1));return;case"textarea":T=S=null;for(f in e)if(a=e[f],e.hasOwnProperty(f)&&a!=null&&!u.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Al(l,t,f,null,u,a)}for(i in u)if(a=u[i],n=e[i],u.hasOwnProperty(i)&&(a!=null||n!=null))switch(i){case"value":S=a;break;case"defaultValue":T=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(m(91));break;default:a!==n&&Al(l,t,i,a,u,n)}xc(l,S,T);return;case"option":for(var x in e)S=e[x],e.hasOwnProperty(x)&&S!=null&&!u.hasOwnProperty(x)&&(x==="selected"?l.selected=!1:Al(l,t,x,null,u,S));for(s in u)S=u[s],T=e[s],u.hasOwnProperty(s)&&S!==T&&(S!=null||T!=null)&&(s==="selected"?l.selected=S&&typeof S!="function"&&typeof S!="symbol":Al(l,t,s,S,u,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in e)S=e[I],e.hasOwnProperty(I)&&S!=null&&!u.hasOwnProperty(I)&&Al(l,t,I,null,u,S);for(g in u)if(S=u[g],T=e[g],u.hasOwnProperty(g)&&S!==T&&(S!=null||T!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(m(137,t));break;default:Al(l,t,g,S,u,T)}return;default:if(_i(t)){for(var bl in e)S=e[bl],e.hasOwnProperty(bl)&&S!==void 0&&!u.hasOwnProperty(bl)&&$f(l,t,bl,void 0,u,S);for(R in u)S=u[R],T=e[R],!u.hasOwnProperty(R)||S===T||S===void 0&&T===void 0||$f(l,t,R,S,u,T);return}}for(var v in e)S=e[v],e.hasOwnProperty(v)&&S!=null&&!u.hasOwnProperty(v)&&Al(l,t,v,null,u,S);for(p in u)S=u[p],T=e[p],!u.hasOwnProperty(p)||S===T||S==null&&T==null||Al(l,t,p,S,u,T)}function Ko(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M0(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),u=0;u<e.length;u++){var a=e[u],n=a.transferSize,i=a.initiatorType,f=a.duration;if(n&&f&&Ko(i)){for(i=0,f=a.responseEnd,u+=1;u<e.length;u++){var s=e[u],g=s.startTime;if(g>f)break;var R=s.transferSize,p=s.initiatorType;R&&Ko(p)&&(s=s.responseEnd,i+=R*(s<f?1:(f-g)/(s-g)))}if(--u,t+=8*(n+i)/(a.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Ff=null,kf=null;function jn(l){return l.nodeType===9?l:l.ownerDocument}function Jo(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wo(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Pf(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lc=null;function O0(){var l=window.event;return l&&l.type==="popstate"?l===lc?!1:(lc=l,!0):(lc=null,!1)}var Io=typeof setTimeout=="function"?setTimeout:void 0,N0=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(l){return Wo.resolve(null).then(l).catch(D0)}:Io;function D0(l){setTimeout(function(){throw l})}function Ne(l){return l==="head"}function $o(l,t){var e=t,u=0;do{var a=e.nextSibling;if(l.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(u===0){l.removeChild(a),ju(t);return}u--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")u++;else if(e==="html")za(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,za(e);for(var n=e.firstChild;n;){var i=n.nextSibling,f=n.nodeName;n[Zu]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&n.rel.toLowerCase()==="stylesheet"||e.removeChild(n),n=i}}else e==="body"&&za(l.ownerDocument.body);e=a}while(e);ju(t)}function Fo(l,t){var e=l;l=0;do{var u=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),u&&u.nodeType===8)if(e=u.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=u}while(e)}function tc(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":tc(e),ni(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function U0(l,t,e,u){for(;l.nodeType===1;){var a=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!u&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(u){if(!l[Zu])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(n=l.getAttribute("rel"),n==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(n!==a.rel||l.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||l.getAttribute("title")!==(a.title==null?null:a.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(n=l.getAttribute("src"),(n!==(a.src==null?null:a.src)||l.getAttribute("type")!==(a.type==null?null:a.type)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&n&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var n=a.name==null?null:""+a.name;if(a.type==="hidden"&&l.getAttribute("name")===n)return l}else return l;if(l=Gt(l.nextSibling),l===null)break}return null}function H0(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=Gt(l.nextSibling),l===null))return null;return l}function ko(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=Gt(l.nextSibling),l===null))return null;return l}function ec(l){return l.data==="$?"||l.data==="$~"}function uc(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function B0(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var u=function(){t(),e.removeEventListener("DOMContentLoaded",u)};e.addEventListener("DOMContentLoaded",u),l._reactRetry=u}}function Gt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var ac=null;function Po(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return Gt(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function lr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function tr(l,t,e){switch(t=jn(e),l){case"html":if(l=t.documentElement,!l)throw Error(m(452));return l;case"head":if(l=t.head,!l)throw Error(m(453));return l;case"body":if(l=t.body,!l)throw Error(m(454));return l;default:throw Error(m(451))}}function za(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ni(l)}var qt=new Map,er=new Set;function Yn(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var _e=G.d;G.d={f:G0,r:q0,D:j0,C:Y0,L:x0,m:X0,X:Z0,S:Q0,M:V0};function G0(){var l=_e.f(),t=Nn();return l||t}function q0(l){var t=uu(l);t!==null&&t.tag===5&&t.type==="form"?gs(t):_e.r(l)}var Bu=typeof document>"u"?null:document;function ur(l,t,e){var u=Bu;if(u&&typeof t=="string"&&t){var a=Ot(t);a='link[rel="'+l+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),er.has(a)||(er.add(a),l={rel:l,crossOrigin:e,href:t},u.querySelector(a)===null&&(t=u.createElement("link"),Fl(t,"link",l),Kl(t),u.head.appendChild(t)))}}function j0(l){_e.D(l),ur("dns-prefetch",l,null)}function Y0(l,t){_e.C(l,t),ur("preconnect",l,t)}function x0(l,t,e){_e.L(l,t,e);var u=Bu;if(u&&l&&t){var a='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Ot(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Ot(e.imageSizes)+'"]')):a+='[href="'+Ot(l)+'"]';var n=a;switch(t){case"style":n=Gu(l);break;case"script":n=qu(l)}qt.has(n)||(l=N({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),qt.set(n,l),u.querySelector(a)!==null||t==="style"&&u.querySelector(La(n))||t==="script"&&u.querySelector(pa(n))||(t=u.createElement("link"),Fl(t,"link",l),Kl(t),u.head.appendChild(t)))}}function X0(l,t){_e.m(l,t);var e=Bu;if(e&&l){var u=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ot(u)+'"][href="'+Ot(l)+'"]',n=a;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=qu(l)}if(!qt.has(n)&&(l=N({rel:"modulepreload",href:l},t),qt.set(n,l),e.querySelector(a)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(pa(n)))return}u=e.createElement("link"),Fl(u,"link",l),Kl(u),e.head.appendChild(u)}}}function Q0(l,t,e){_e.S(l,t,e);var u=Bu;if(u&&l){var a=au(u).hoistableStyles,n=Gu(l);t=t||"default";var i=a.get(n);if(!i){var f={loading:0,preload:null};if(i=u.querySelector(La(n)))f.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},e),(e=qt.get(n))&&nc(l,e);var s=i=u.createElement("link");Kl(s),Fl(s,"link",l),s._p=new Promise(function(g,R){s.onload=g,s.onerror=R}),s.addEventListener("load",function(){f.loading|=1}),s.addEventListener("error",function(){f.loading|=2}),f.loading|=4,xn(i,t,u)}i={type:"stylesheet",instance:i,count:1,state:f},a.set(n,i)}}}function Z0(l,t){_e.X(l,t);var e=Bu;if(e&&l){var u=au(e).hoistableScripts,a=qu(l),n=u.get(a);n||(n=e.querySelector(pa(a)),n||(l=N({src:l,async:!0},t),(t=qt.get(a))&&ic(l,t),n=e.createElement("script"),Kl(n),Fl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},u.set(a,n))}}function V0(l,t){_e.M(l,t);var e=Bu;if(e&&l){var u=au(e).hoistableScripts,a=qu(l),n=u.get(a);n||(n=e.querySelector(pa(a)),n||(l=N({src:l,async:!0,type:"module"},t),(t=qt.get(a))&&ic(l,t),n=e.createElement("script"),Kl(n),Fl(n,"link",l),e.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},u.set(a,n))}}function ar(l,t,e,u){var a=(a=A.current)?Yn(a):null;if(!a)throw Error(m(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Gu(e.href),e=au(a).hoistableStyles,u=e.get(t),u||(u={type:"style",instance:null,count:0,state:null},e.set(t,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Gu(e.href);var n=au(a).hoistableStyles,i=n.get(l);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(l,i),(n=a.querySelector(La(l)))&&!n._p&&(i.instance=n,i.state.loading=5),qt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},qt.set(l,e),n||K0(a,l,e,i.state))),t&&u===null)throw Error(m(528,""));return i}if(t&&u!==null)throw Error(m(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qu(e),e=au(a).hoistableScripts,u=e.get(t),u||(u={type:"script",instance:null,count:0,state:null},e.set(t,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,l))}}function Gu(l){return'href="'+Ot(l)+'"'}function La(l){return'link[rel="stylesheet"]['+l+"]"}function nr(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function K0(l,t,e,u){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?u.loading=1:(t=l.createElement("link"),u.preload=t,t.addEventListener("load",function(){return u.loading|=1}),t.addEventListener("error",function(){return u.loading|=2}),Fl(t,"link",e),Kl(t),l.head.appendChild(t))}function qu(l){return'[src="'+Ot(l)+'"]'}function pa(l){return"script[async]"+l}function ir(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var u=l.querySelector('style[data-href~="'+Ot(e.href)+'"]');if(u)return t.instance=u,Kl(u),u;var a=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return u=(l.ownerDocument||l).createElement("style"),Kl(u),Fl(u,"style",a),xn(u,e.precedence,l),t.instance=u;case"stylesheet":a=Gu(e.href);var n=l.querySelector(La(a));if(n)return t.state.loading|=4,t.instance=n,Kl(n),n;u=nr(e),(a=qt.get(a))&&nc(u,a),n=(l.ownerDocument||l).createElement("link"),Kl(n);var i=n;return i._p=new Promise(function(f,s){i.onload=f,i.onerror=s}),Fl(n,"link",u),t.state.loading|=4,xn(n,e.precedence,l),t.instance=n;case"script":return n=qu(e.src),(a=l.querySelector(pa(n)))?(t.instance=a,Kl(a),a):(u=e,(a=qt.get(n))&&(u=N({},e),ic(u,a)),l=l.ownerDocument||l,a=l.createElement("script"),Kl(a),Fl(a,"link",u),l.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(u=t.instance,t.state.loading|=4,xn(u,e.precedence,l));return t.instance}function xn(l,t,e){for(var u=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=u.length?u[u.length-1]:null,n=a,i=0;i<u.length;i++){var f=u[i];if(f.dataset.precedence===t)n=f;else if(n!==a)break}n?n.parentNode.insertBefore(l,n.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function nc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function ic(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Xn=null;function fr(l,t,e){if(Xn===null){var u=new Map,a=Xn=new Map;a.set(e,u)}else a=Xn,u=a.get(e),u||(u=new Map,a.set(e,u));if(u.has(l))return u;for(u.set(l,null),e=e.getElementsByTagName(l),a=0;a<e.length;a++){var n=e[a];if(!(n[Zu]||n[wl]||l==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=l+i;var f=u.get(i);f?f.push(n):u.set(i,[n])}}return u}function cr(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function J0(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _r(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function w0(l,t,e,u){if(e.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Gu(u.href),n=t.querySelector(La(a));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Qn.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=n,Kl(n);return}n=t.ownerDocument||t,u=nr(u),(a=qt.get(a))&&nc(u,a),n=n.createElement("link"),Kl(n);var i=n;i._p=new Promise(function(f,s){i.onload=f,i.onerror=s}),Fl(n,"link",u),e.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Qn.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var fc=0;function I0(l,t){return l.stylesheets&&l.count===0&&Vn(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var u=setTimeout(function(){if(l.stylesheets&&Vn(l,l.stylesheets),l.unsuspend){var n=l.unsuspend;l.unsuspend=null,n()}},6e4+t);0<l.imgBytes&&fc===0&&(fc=62500*M0());var a=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Vn(l,l.stylesheets),l.unsuspend)){var n=l.unsuspend;l.unsuspend=null,n()}},(l.imgBytes>fc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(u),clearTimeout(a)}}:null}function Qn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vn(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Zn=null;function Vn(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Zn=new Map,t.forEach(W0,l),Zn=null,Qn.call(l))}function W0(l,t){if(!(t.state.loading&4)){var e=Zn.get(l);if(e)var u=e.get(null);else{e=new Map,Zn.set(l,e);for(var a=l.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<a.length;n++){var i=a[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),u=i)}u&&e.set(null,u)}a=t.instance,i=a.getAttribute("data-precedence"),n=e.get(i)||u,n===u&&e.set(null,a),e.set(i,a),this.count++,u=Qn.bind(this),a.addEventListener("load",u),a.addEventListener("error",u),n?n.parentNode.insertBefore(a,n.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(a,l.firstChild)),t.state.loading|=4}}var Ma={$$typeof:yl,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function $0(l,t,e,u,a,n,i,f,s){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.hiddenUpdates=ti(null),this.identifierPrefix=u,this.onUncaughtError=a,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function sr(l,t,e,u,a,n,i,f,s,g,R,p){return l=new $0(l,t,e,i,s,g,R,p,f),t=1,n===!0&&(t|=24),n=Et(3,null,null,t),l.current=n,n.stateNode=l,t=Yi(),t.refCount++,l.pooledCache=t,t.refCount++,n.memoizedState={element:u,isDehydrated:e,cache:t},Zi(n),l}function or(l){return l?(l=du,l):du}function rr(l,t,e,u,a,n){a=or(a),u.context===null?u.context=a:u.pendingContext=a,u=Se(t),u.payload={element:e},n=n===void 0?null:n,n!==null&&(u.callback=n),e=Te(l,u,t),e!==null&&(mt(e,l,t),ia(e,l,t))}function hr(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function cc(l,t){hr(l,t),(l=l.alternate)&&hr(l,t)}function dr(l){if(l.tag===13||l.tag===31){var t=Xe(l,67108864);t!==null&&mt(t,l,67108864),cc(l,67108864)}}function mr(l){if(l.tag===13||l.tag===31){var t=Lt();t=ei(t);var e=Xe(l,t);e!==null&&mt(e,l,t),cc(l,t)}}var Kn=!0;function F0(l,t,e,u){var a=b.T;b.T=null;var n=G.p;try{G.p=2,_c(l,t,e,u)}finally{G.p=n,b.T=a}}function k0(l,t,e,u){var a=b.T;b.T=null;var n=G.p;try{G.p=8,_c(l,t,e,u)}finally{G.p=n,b.T=a}}function _c(l,t,e,u){if(Kn){var a=sc(u);if(a===null)Wf(l,t,u,Jn,e),yr(l,u);else if(ld(a,l,t,e,u))u.stopPropagation();else if(yr(l,u),t&4&&-1<P0.indexOf(l)){for(;a!==null;){var n=uu(a);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=Ge(n.pendingLanes);if(i!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;i;){var s=1<<31-St(i);f.entanglements[1]|=s,i&=~s}Kt(n),(gl&6)===0&&(Mn=yt()+500,Aa(0))}}break;case 31:case 13:f=Xe(n,2),f!==null&&mt(f,n,2),Nn(),cc(n,2)}if(n=sc(u),n===null&&Wf(l,t,u,Jn,e),n===a)break;a=n}a!==null&&u.stopPropagation()}else Wf(l,t,u,null,e)}}function sc(l){return l=oi(l),oc(l)}var Jn=null;function oc(l){if(Jn=null,l=eu(l),l!==null){var t=q(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=X(t),l!==null)return l;l=null}else if(e===31){if(l=j(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Jn=l,null}function vr(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jr()){case bc:return 2;case Rc:return 8;case Ha:case Yr:return 32;case zc:return 268435456;default:return 32}default:return 32}}var rc=!1,Ce=null,De=null,Ue=null,Oa=new Map,Na=new Map,He=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yr(l,t){switch(l){case"focusin":case"focusout":Ce=null;break;case"dragenter":case"dragleave":De=null;break;case"mouseover":case"mouseout":Ue=null;break;case"pointerover":case"pointerout":Oa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(t.pointerId)}}function Ca(l,t,e,u,a,n){return l===null||l.nativeEvent!==n?(l={blockedOn:t,domEventName:e,eventSystemFlags:u,nativeEvent:n,targetContainers:[a]},t!==null&&(t=uu(t),t!==null&&dr(t)),l):(l.eventSystemFlags|=u,t=l.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),l)}function ld(l,t,e,u,a){switch(t){case"focusin":return Ce=Ca(Ce,l,t,e,u,a),!0;case"dragenter":return De=Ca(De,l,t,e,u,a),!0;case"mouseover":return Ue=Ca(Ue,l,t,e,u,a),!0;case"pointerover":var n=a.pointerId;return Oa.set(n,Ca(Oa.get(n)||null,l,t,e,u,a)),!0;case"gotpointercapture":return n=a.pointerId,Na.set(n,Ca(Na.get(n)||null,l,t,e,u,a)),!0}return!1}function gr(l){var t=eu(l.target);if(t!==null){var e=q(t);if(e!==null){if(t=e.tag,t===13){if(t=X(e),t!==null){l.blockedOn=t,Cc(l.priority,function(){mr(e)});return}}else if(t===31){if(t=j(e),t!==null){l.blockedOn=t,Cc(l.priority,function(){mr(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function wn(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=sc(l.nativeEvent);if(e===null){e=l.nativeEvent;var u=new e.constructor(e.type,e);si=u,e.target.dispatchEvent(u),si=null}else return t=uu(e),t!==null&&dr(t),l.blockedOn=e,!1;t.shift()}return!0}function Sr(l,t,e){wn(l)&&e.delete(t)}function td(){rc=!1,Ce!==null&&wn(Ce)&&(Ce=null),De!==null&&wn(De)&&(De=null),Ue!==null&&wn(Ue)&&(Ue=null),Oa.forEach(Sr),Na.forEach(Sr)}function In(l,t){l.blockedOn===t&&(l.blockedOn=null,rc||(rc=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,td)))}var Wn=null;function Tr(l){Wn!==l&&(Wn=l,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Wn===l&&(Wn=null);for(var t=0;t<l.length;t+=3){var e=l[t],u=l[t+1],a=l[t+2];if(typeof u!="function"){if(oc(u||e)===null)continue;break}var n=uu(e);n!==null&&(l.splice(t,3),t-=3,sf(n,{pending:!0,data:a,method:e.method,action:u},u,a))}}))}function ju(l){function t(s){return In(s,l)}Ce!==null&&In(Ce,l),De!==null&&In(De,l),Ue!==null&&In(Ue,l),Oa.forEach(t),Na.forEach(t);for(var e=0;e<He.length;e++){var u=He[e];u.blockedOn===l&&(u.blockedOn=null)}for(;0<He.length&&(e=He[0],e.blockedOn===null);)gr(e),e.blockedOn===null&&He.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(u=0;u<e.length;u+=3){var a=e[u],n=e[u+1],i=a[_t]||null;if(typeof n=="function")i||Tr(e);else if(i){var f=null;if(n&&n.hasAttribute("formAction")){if(a=n,i=n[_t]||null)f=i.formAction;else if(oc(a)!==null)continue}else f=i.action;typeof f=="function"?e[u+1]=f:(e.splice(u,3),u-=3),Tr(e)}}}function Er(){function l(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),u||setTimeout(e,20)}function e(){if(!u&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,a=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){u=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function hc(l){this._internalRoot=l}$n.prototype.render=hc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(m(409));var e=t.current,u=Lt();rr(e,u,l,t,null,null)},$n.prototype.unmount=hc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;rr(l.current,2,null,l,null,null),Nn(),t[tu]=null}};function $n(l){this._internalRoot=l}$n.prototype.unstable_scheduleHydration=function(l){if(l){var t=Nc();l={blockedOn:null,target:l,priority:t};for(var e=0;e<He.length&&t!==0&&t<He[e].priority;e++);He.splice(e,0,l),e===0&&gr(l)}};var Ar=B.version;if(Ar!=="19.2.3")throw Error(m(527,Ar,"19.2.3"));G.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(m(188)):(l=Object.keys(l).join(","),Error(m(268,l)));return l=E(t),l=l!==null?V(l):null,l=l===null?null:l.stateNode,l};var ed={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fn.isDisabled&&Fn.supportsFiber)try{xu=Fn.inject(ed),gt=Fn}catch{}}return Ua.createRoot=function(l,t){if(!O(l))throw Error(m(299));var e=!1,u="",a=Ms,n=Os,i=Ns;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sr(l,1,!1,null,null,e,u,null,a,n,i,Er),l[tu]=t.current,If(l),new hc(t)},Ua.hydrateRoot=function(l,t,e){if(!O(l))throw Error(m(299));var u=!1,a="",n=Ms,i=Os,f=Ns,s=null;return e!=null&&(e.unstable_strictMode===!0&&(u=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.formState!==void 0&&(s=e.formState)),t=sr(l,1,!0,t,e??null,u,a,s,n,i,f,Er),t.context=or(null),e=t.current,u=Lt(),u=ei(u),a=Se(u),a.callback=null,Te(e,a,u),e=u,t.current.lanes=e,Qu(t,e),Kt(t),l[tu]=t.current,If(l),new $n(t)},Ua.version="19.2.3",Ua}var Dr;function rd(){if(Dr)return vc.exports;Dr=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),vc.exports=od(),vc.exports}var hd=rd();function kn({onEnter:z,inputRef:B,inputs:U}){const m=["ls","theme","theme list","theme dark","theme dracula","theme light","theme cyber","help","clear","about"],[O,q]=pt.useState(""),[X,j]=pt.useState(U.length),D=O?m.find(N=>N.startsWith(O)):"",E=D?D.slice(O.length):"";function V(N){if(N.ctrlKey&&N.key==="a"){N.preventDefault();return}N.ctrlKey&&N.key==="u"&&q(""),N.key==="Tab"&&(N.preventDefault(),D&&q(D));let Z=X;N.key==="ArrowUp"&&(N.preventDefault(),j(al=>(Z=al>0?al-1:U.length-1,q(U[Z]??""),Z))),N.key==="ArrowDown"&&(N.preventDefault(),j(al=>(Z=al<U.length-1?al+1:0,q(U[Z]??""),Z)))}return ll.jsxs("div",{className:"input-line",children:[ll.jsxs("span",{children:["guest@geoorgeq.computer",ll.jsx("span",{style:{color:"var(--success)",marginRight:"var(--p-3)"},children:":~$"})]}),ll.jsx("input",{ref:B,type:"text",value:O,className:"terminal-input",onChange:N=>q(N.target.value),onKeyDown:N=>{N.key==="Enter"&&O!=""?(z(O),q("")):V(N)},spellCheck:!1,style:{width:`${Math.max(O.length,1)}ch`}}),ll.jsx("span",{className:"typed",style:{width:`${O.length}ch`},children:O}),ll.jsx("span",{className:"preview",children:E}),ll.jsx("span",{className:"cursor","aria-hidden":"true"})]})}const dd={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class md{constructor(){this.comment="",this.numChars=0,this.options={}}}const Tc=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Regular","ANSI Shadow","ANSI-Compact","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Four Tops","Fraktur","Fun Face","Fun Faces","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"];function vd(z){return/[.*+?^${}()|[\]\\]/.test(z)?"\\"+z:z}const Ur=(()=>{const{FULL_WIDTH:z=0,FITTING:B,SMUSHING:U,CONTROLLED_SMUSHING:m}=dd,O={},q={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function X(_,h,c){const d=vd(_.trim().slice(-1))||"@",A=h===c-1?new RegExp(d+d+"?\\s*$"):new RegExp(d+"\\s*$");return _.replace(A,"")}function j(_=-1,h=null){let c={},d,A=[[16384,"vLayout",U],[8192,"vLayout",B],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",U],[64,"hLayout",B],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];d=h!==null?h:_;for(const[M,H,C]of A)d>=M?(d-=M,c[H]===void 0&&(c[H]=C)):H!=="vLayout"&&H!=="hLayout"&&(c[H]=!1);return typeof c.hLayout>"u"?_===0?c.hLayout=B:_===-1?c.hLayout=z:c.hRule1||c.hRule2||c.hRule3||c.hRule4||c.hRule5||c.hRule6?c.hLayout=m:c.hLayout=U:c.hLayout===U&&(c.hRule1||c.hRule2||c.hRule3||c.hRule4||c.hRule5||c.hRule6)&&(c.hLayout=m),typeof c.vLayout>"u"?c.vRule1||c.vRule2||c.vRule3||c.vRule4||c.vRule5?c.vLayout=m:c.vLayout=z:c.vLayout===U&&(c.vRule1||c.vRule2||c.vRule3||c.vRule4||c.vRule5)&&(c.vLayout=m),c}function D(_,h,c=""){return _===h&&_!==c?_:!1}function E(_,h){let c="|/\\[]{}()<>";if(_==="_"){if(c.indexOf(h)!==-1)return h}else if(h==="_"&&c.indexOf(_)!==-1)return _;return!1}function V(_,h){let c="| /\\ [] {} () <>",d=c.indexOf(_),A=c.indexOf(h);if(d!==-1&&A!==-1&&d!==A&&Math.abs(d-A)!==1){const M=Math.max(d,A),H=M+1;return c.substring(M,H)}return!1}function N(_,h){let c="[] {} ()",d=c.indexOf(_),A=c.indexOf(h);return d!==-1&&A!==-1&&Math.abs(d-A)<=1?"|":!1}function Z(_,h){return{"/\\":"|","\\/":"Y","><":"X"}[_+h]||!1}function al(_,h,c=""){return _===c&&h===c?c:!1}function hl(_,h){return _===h?_:!1}function $(_,h){return E(_,h)}function rl(_,h){return V(_,h)}function Ll(_,h){return _==="-"&&h==="_"||_==="_"&&h==="-"?"=":!1}function Dl(_,h){return _==="|"&&h==="|"?"|":!1}function yl(_,h,c){return h===" "||h===""||h===c&&_!==" "?_:h}function kl(_,h,c){if(c.fittingRules&&c.fittingRules.vLayout===z)return"invalid";let d,A=Math.min(_.length,h.length),M,H,C=!1,Y;if(A===0)return"invalid";for(d=0;d<A;d++)if(M=_.substring(d,d+1),H=h.substring(d,d+1),M!==" "&&H!==" "){if(c.fittingRules&&c.fittingRules.vLayout===B)return"invalid";if(c.fittingRules&&c.fittingRules.vLayout===U)return"end";if(Dl(M,H)){C=C||!1;continue}if(Y=!1,Y=c.fittingRules&&c.fittingRules.vRule1?hl(M,H):Y,Y=!Y&&c.fittingRules&&c.fittingRules.vRule2?$(M,H):Y,Y=!Y&&c.fittingRules&&c.fittingRules.vRule3?rl(M,H):Y,Y=!Y&&c.fittingRules&&c.fittingRules.vRule4?Ll(M,H):Y,C=!0,!Y)return"invalid"}return C?"end":"valid"}function at(_,h,c){let d=_.length,A=_.length,M,H,C,Y=1,K,F,k;for(;Y<=d;){for(M=_.slice(Math.max(0,A-Y),A),H=h.slice(0,Math.min(d,Y)),C=H.length,k="",K=0;K<C;K++)if(F=kl(M[K],H[K],c),F==="end")k=F;else if(F==="invalid"){k=F;break}else k===""&&(k="valid");if(k==="invalid"){Y--;break}if(k==="end")break;k==="valid"&&Y++}return Math.min(d,Y)}function Xl(_,h,c){let d,A=Math.min(_.length,h.length),M,H,C="",Y;const K=c.fittingRules||{};for(d=0;d<A;d++)M=_.substring(d,d+1),H=h.substring(d,d+1),M!==" "&&H!==" "?K.vLayout===B||K.vLayout===U?C+=yl(M,H):(Y=!1,Y=K.vRule5?Dl(M,H):Y,Y=!Y&&K.vRule1?hl(M,H):Y,Y=!Y&&K.vRule2?$(M,H):Y,Y=!Y&&K.vRule3?rl(M,H):Y,Y=!Y&&K.vRule4?Ll(M,H):Y,C+=Y):C+=yl(M,H);return C}function nl(_,h,c,d){let A=_.length,M=h.length,H=_.slice(0,Math.max(0,A-c)),C=_.slice(Math.max(0,A-c),A),Y=h.slice(0,Math.min(c,M)),K,F,k,W=[],ul;for(F=C.length,K=0;K<F;K++)K>=M?k=C[K]:k=Xl(C[K],Y[K],d),W.push(k);return ul=h.slice(Math.min(c,M),M),[...H,...W,...ul]}function Bl(_,h){const c=" ".repeat(h);return _.map(d=>d+c)}function ct(_,h,c){let d=_[0].length,A=h[0].length,M;return d>A?h=Bl(h,d-A):A>d&&(_=Bl(_,A-d)),M=at(_,h,c),nl(_,h,M,c)}function vt(_,h,c){const d=c.fittingRules||{};if(d.hLayout===z)return 0;let A,M=_.length,H=h.length,C=M,Y=1,K=!1,F,k,W,ul;if(M===0)return 0;l:for(;Y<=C;){const nt=M-Y;for(F=_.substring(nt,nt+Y),k=h.substring(0,Math.min(Y,H)),A=0;A<Math.min(Y,H);A++)if(W=F.substring(A,A+1),ul=k.substring(A,A+1),W!==" "&&ul!==" "){if(d.hLayout===B){Y=Y-1;break l}else if(d.hLayout===U){(W===c.hardBlank||ul===c.hardBlank)&&(Y=Y-1);break l}else if(K=!0,!(d.hRule1&&D(W,ul,c.hardBlank)||d.hRule2&&E(W,ul)||d.hRule3&&V(W,ul)||d.hRule4&&N(W,ul)||d.hRule5&&Z(W,ul)||d.hRule6&&al(W,ul,c.hardBlank))){Y=Y-1;break l}}if(K)break;Y++}return Math.min(C,Y)}function Pl(_,h,c,d){let A,M,H=[],C,Y,K,F,k,W,ul,nt;const lt=d.fittingRules||{};if(typeof d.height!="number")throw new Error("height is not defined.");for(A=0;A<d.height;A++){ul=_[A],nt=h[A],k=ul.length,W=nt.length,C=k-c,Y=ul.slice(0,Math.max(0,C)),K="";const se=Math.max(0,k-c);let it=ul.substring(se,se+c),jt=nt.substring(0,Math.min(c,W));for(M=0;M<c;M++){let tt=M<k?it.substring(M,M+1):" ",et=M<W?jt.substring(M,M+1):" ";if(tt!==" "&&et!==" ")if(lt.hLayout===B||lt.hLayout===U)K+=yl(tt,et,d.hardBlank);else{const li=lt.hRule1&&D(tt,et,d.hardBlank)||lt.hRule2&&E(tt,et)||lt.hRule3&&V(tt,et)||lt.hRule4&&N(tt,et)||lt.hRule5&&Z(tt,et)||lt.hRule6&&al(tt,et,d.hardBlank)||yl(tt,et,d.hardBlank);K+=li}else K+=yl(tt,et,d.hardBlank)}c>=W?F="":F=nt.substring(c,c+Math.max(0,W-c)),H[A]=Y+K+F}return H}function zl(_){return new Array(_).fill("")}const Ql=function(_){return Math.max(..._.map(h=>h.length))};function Zl(_,h,c){return _.reduce(function(d,A){return Pl(d,A.fig,A.overlap||0,c)},zl(h))}function Vl(_,h,c){for(let d=_.length-1;d>0;d--){const A=Zl(_.slice(0,d),h,c);if(Ql(A)<=c.width)return{outputFigText:A,chars:_.slice(d)}}return{outputFigText:zl(h),chars:_}}function b(_,h,c){let d,A,M=0,H,C,Y,K=c.height,F=[],k,W={chars:[],overlap:M},ul=[],nt,lt,se,it,jt;if(typeof K!="number")throw new Error("height is not defined.");C=zl(K);const tt=c.fittingRules||{};for(c.printDirection===1&&(_=_.split("").reverse().join("")),Y=_.length,d=0;d<Y;d++)if(nt=_.substring(d,d+1),lt=nt.match(/\s/),A=h[nt.charCodeAt(0)],it=null,A){if(tt.hLayout!==z){for(M=1e4,H=0;H<K;H++)M=Math.min(M,vt(C[H],A[H],c));M=M===1e4?0:M}if(c.width>0&&(c.whitespaceBreak?(se=Zl(W.chars.concat([{fig:A,overlap:M}]),K,c),it=Zl(ul.concat([{fig:se,overlap:W.overlap}]),K,c),k=Ql(it)):(it=Pl(C,A,M,c),k=Ql(it)),k>=c.width&&d>0&&(c.whitespaceBreak?(C=Zl(ul.slice(0,-1),K,c),ul.length>1&&(F.push(C),C=zl(K)),ul=[]):(F.push(C),C=zl(K)))),c.width>0&&c.whitespaceBreak&&((!lt||d===Y-1)&&W.chars.push({fig:A,overlap:M}),lt||d===Y-1)){for(jt=null;it=Zl(W.chars,K,c),k=Ql(it),k>=c.width;)jt=Vl(W.chars,K,c),W={chars:jt.chars},F.push(jt.outputFigText);k>0&&(jt?ul.push({fig:it,overlap:1}):ul.push({fig:it,overlap:W.overlap})),lt&&(ul.push({fig:A,overlap:M}),C=zl(K)),d===Y-1&&(C=Zl(ul,K,c)),W={chars:[],overlap:M};continue}C=Pl(C,A,M,c)}return Ql(C)>0&&F.push(C),c.showHardBlanks||F.forEach(function(et){for(Y=et.length,H=0;H<Y;H++)et[H]=et[H].replace(new RegExp("\\"+c.hardBlank,"g")," ")}),_===""&&F.length===0&&F.push(new Array(K).fill("")),F}const G=function(_,h){let c;const d=h.fittingRules||{};if(_==="default")c={hLayout:d.hLayout,hRule1:d.hRule1,hRule2:d.hRule2,hRule3:d.hRule3,hRule4:d.hRule4,hRule5:d.hRule5,hRule6:d.hRule6};else if(_==="full")c={hLayout:z,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(_==="fitted")c={hLayout:B,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(_==="controlled smushing")c={hLayout:m,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(_==="universal smushing")c={hLayout:U,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return c},J=function(_,h){let c={};const d=h.fittingRules||{};if(_==="default")c={vLayout:d.vLayout,vRule1:d.vRule1,vRule2:d.vRule2,vRule3:d.vRule3,vRule4:d.vRule4,vRule5:d.vRule5};else if(_==="full")c={vLayout:z,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(_==="fitted")c={vLayout:B,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(_==="controlled smushing")c={vLayout:m,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(_==="universal smushing")c={vLayout:U,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return c},cl=function(_,h,c){c=c.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let d=c.split(`
`),A=[],M,H,C;for(H=d.length,M=0;M<H;M++)A=A.concat(b(d[M],O[_],h));for(H=A.length,C=A[0],M=1;M<H;M++)C=ct(C,A[M],h);return C?C.join(`
`):""};function dl(_,h){let c;if(typeof structuredClone<"u"?c=structuredClone(_):c=JSON.parse(JSON.stringify(_)),c.showHardBlanks=h.showHardBlanks||!1,c.width=h.width||-1,c.whitespaceBreak=h.whitespaceBreak||!1,h.horizontalLayout){const d=G(h.horizontalLayout,_);d&&Object.assign(c.fittingRules,d)}if(h.verticalLayout){const d=J(h.verticalLayout,_);d&&Object.assign(c.fittingRules,d)}return c.printDirection=h.printDirection!==null&&h.printDirection!==void 0?h.printDirection:_.printDirection,c}const o=async function(_,h,c){return o.text(_,h,c)};return o.text=async function(_,h,c){_=_+"";let d,A;typeof h=="function"?(A=h,d={font:q.font}):typeof h=="string"?(d={font:h},A=c):h?(d=h,A=c):(d={font:q.font},A=c);const M=d.font||q.font;try{const H=await o.loadFont(M),C=H?cl(M,dl(H,d),_):"";return A&&A(null,C),C}catch(H){const C=H instanceof Error?H:new Error(String(H));if(A)return A(C),"";throw C}},o.textSync=function(_,h){_=_+"",typeof h=="string"?h={font:h}:h=h||{};const c=h.font||q.font;let d=dl(o.loadFontSync(c),h);return cl(c,d,_)},o.metadata=async function(_,h){_=_+"";try{const c=await o.loadFont(_);if(!c)throw new Error("Error loading font.");const d=O[_]||{},A=[c,d.comment||""];return h&&h(null,c,d.comment),A}catch(c){const d=c instanceof Error?c:new Error(String(c));if(h)return h(d),null;throw d}},o.defaults=function(_){return _&&typeof _=="object"&&Object.assign(q,_),typeof structuredClone<"u"?structuredClone(q):JSON.parse(JSON.stringify(q))},o.parseFont=function(_,h,c=!0){if(O[_]&&!c)return O[_].options;h=h.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const d=new md,A=h.split(`
`),M=A.shift();if(!M)throw new Error("Invalid font file: missing header");const H=M.split(" "),C={hardBlank:H[0].substring(5,6),height:parseInt(H[1],10),baseline:parseInt(H[2],10),maxLength:parseInt(H[3],10),oldLayout:parseInt(H[4],10),numCommentLines:parseInt(H[5],10),printDirection:H[6]?parseInt(H[6],10):0,fullLayout:H[7]?parseInt(H[7],10):null,codeTagCount:H[8]?parseInt(H[8],10):null};if((C.hardBlank||"").length!==1||[C.height,C.baseline,C.maxLength,C.oldLayout,C.numCommentLines].some(F=>F==null||isNaN(F)))throw new Error("FIGlet header contains invalid values.");if(C.height==null||C.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");C.fittingRules=j(C.oldLayout,C.fullLayout),d.options=C;const K=[];for(let F=32;F<=126;F++)K.push(F);if(K.push(196,214,220,228,246,252,223),A.length<C.numCommentLines+C.height*K.length)throw new Error(`FIGlet file is missing data. Line length: ${A.length}. Comment lines: ${C.numCommentLines}. Height: ${C.height}. Num chars: ${K.length}.`);for(d.comment=A.splice(0,C.numCommentLines).join(`
`),d.numChars=0;A.length>0&&d.numChars<K.length;){const F=K[d.numChars];d[F]=A.splice(0,C.height);for(let k=0;k<C.height;k++)typeof d[F][k]>"u"?d[F][k]="":d[F][k]=X(d[F][k],k,C.height);d.numChars++}for(;A.length>0;){const F=A.shift();if(!F||F.trim()==="")break;let k=F.split(" ")[0],W;if(/^-?0[xX][0-9a-fA-F]+$/.test(k))W=parseInt(k,16);else if(/^-?0[0-7]+$/.test(k))W=parseInt(k,8);else if(/^-?[0-9]+$/.test(k))W=parseInt(k,10);else throw new Error(`Error parsing data. Invalid data: ${k}`);if(W===-1||W<-2147483648||W>2147483647){const ul=W===-1?"The char code -1 is not permitted.":`The char code cannot be ${W<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${ul}`)}d[W]=A.splice(0,C.height);for(let ul=0;ul<C.height;ul++)typeof d[W][ul]>"u"?d[W][ul]="":d[W][ul]=X(d[W][ul],ul,C.height);d.numChars++}return O[_]=d,C},o.loadedFonts=()=>Object.keys(O),o.clearLoadedFonts=()=>{Object.keys(O).forEach(_=>{delete O[_]})},o.loadFont=async function(_,h){if(O[_]){const c=O[_].options;return h&&h(null,c),Promise.resolve(c)}try{if(!q.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const c=await fetch(`${q.fontPath}/${_}.flf`);if(!c.ok)throw new Error(`Network response was not ok: ${c.status}`);const d=await c.text(),A=o.parseFont(_,d);return h&&h(null,A),A}catch(c){const d=c instanceof Error?c:new Error(String(c));if(h)return h(d),null;throw d}},o.loadFontSync=function(_){if(O[_])return O[_].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},o.preloadFonts=async function(_,h){try{for(const c of _){const d=await fetch(`${q.fontPath}/${c}.flf`);if(!d.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${c}, status code: ${d.statusText}`);const A=await d.text();o.parseFont(c,A)}h&&h()}catch(c){const d=c instanceof Error?c:new Error(String(c));if(h){h(d);return}throw c}},o.fonts=function(_){return new Promise(function(h,c){h(Tc),_&&_(null,Tc)})},o.fontsSync=function(){return Tc},o.figFonts=O,o})();var yd=Object.defineProperty,gd=Object.getOwnPropertyNames,Hr=(z,B)=>(B=Symbol[z])?B:Symbol.for("Symbol."+z),Sd=(z,B)=>function(){return z&&(B=(0,z[gd(z)[0]])(z=0)),B},Td=(z,B)=>{for(var U in B)yd(z,U,{get:B[U],enumerable:!0})},lu=(z,B,U)=>new Promise((m,O)=>{var q=D=>{try{j(U.next(D))}catch(E){O(E)}},X=D=>{try{j(U.throw(D))}catch(E){O(E)}},j=D=>D.done?m(D.value):Promise.resolve(D.value).then(q,X);j((U=U.apply(z,B)).next())}),Ed=(z,B,U)=>(B=z[Hr("asyncIterator")])?B.call(z):(z=z[Hr("iterator")](),B={},U=(m,O)=>(O=z[m])&&(B[m]=q=>new Promise((X,j,D)=>(q=O.call(z,q),D=q.done,Promise.resolve(q.value).then(E=>X({value:E,done:D}),j)))),U("next"),U("return"),B),Ad={};Td(Ad,{default:()=>Gr});var Gr,bd=Sd({"src/fonts/Slant.js"(){Gr=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`}});function Pn(z,B){return z.replace(/.(?=.)/g,`$&${" ".repeat(B)}`)}function Ec(z,B,U){return z.substring(0,B)+U+z.substring(B+U.length)}function qr(z){return z[Math.floor(Math.random()*z.length)]}function Yu(z,B){return z.split("").map(U=>/\s/.test(U)?U:qr(B)).join("")}function Rd({asciiText:z,animationDirection:B,animationCharacters:U,animationCharacterSpacing:m}){return z.reduce((O,q,X)=>{if(X===0)return O;const j=O?.[O.length-1]?[...O[O.length-1]]:void 0;if(!j)return O;const D=/\S/.test(j[X-1]),E=j.length-X,V=/\S/.test(j[E]);let N=[...j];if(D&&(B==="up"||B==="vertical")&&(j?.[X]&&(j[X]=Yu(j[X],Pn(U,m))),j?.[X-1]&&(j[X-1]=" ".repeat(q.length)),N[X]&&(N[X]=Yu(N[X],U))),V&&(B==="down"||B==="vertical")&&(j?.[E]&&(j[E]=Yu(j[E],Pn(U,m))),j?.[E+1]&&(j[E+1]=" ".repeat(q.length)),N?.[E]&&(N[E]=Yu(N[E],U))),(D||V)&&O.push(N,j),X===z.length-1&&B==="up"){const Z=[...j];Z[Z.length-1]=" ".repeat(Z[Z.length-1].length),O.push(Z)}if(X===z.length-1&&B==="down"){const Z=[...j];Z[N.length-X]=" ".repeat(Z[N.length-X].length),O.push(Z);const al=[...Z];if(!/\S/.test(al[0]))return O;al[0]=Yu(al[0],Pn(U,m)),O.push(al);const $=[...al];if(!/\S/.test($[0]))return O;$[0]=Yu($[0],Pn(U,m)),O.push($);const rl=[...$];if(!/\S/.test(rl[0]))return O;rl[0]=" ".repeat(rl[0].length),O.push(rl)}return z.length-1,O},[[...z]])}var zd=1;function Ld({asciiText:z,animationDirection:B,animationCharacters:U}){const m=[[...structuredClone(z)]],O=z[0].length/(B==="left"||B==="right"?1:2);for(let q=0;q<O;q++){if(q===0){m.push(z);continue}const X=m[q].map((j,D,E)=>{const V=j.search(/\S/),N=j.search(/\S(?!.*\S)/);if(V===-1||N===-1)return j;const Z=D>zd?-1:1;if((B==="left"||B==="horizontal")&&(j=Ec(j,V," ")),(B==="right"||B==="horizontal")&&(j=Ec(j,N," ")),N-V<=2)return j;if(B==="left"||B==="horizontal"){const al=qr(U);E[D+Z]=Ec(E[D+Z],V+1,al)}return j});m.push(X)}return m}function pd(z){return lu(this,arguments,function*({asciiText:B,animationDirection:U,animationCharacters:m,animationCharacterSpacing:O,fadeInOnly:q=!1,fadeOutOnly:X=!1}){try{if(U==="down"||U==="up"||U==="vertical"){const V=Rd({asciiText:B,animationDirection:U,animationCharacters:m,animationCharacterSpacing:O});if(X)return V;const N=structuredClone(V).reverse();return q?N:N.concat(V)}const j=Ld({asciiText:B,animationDirection:U,animationCharacters:m,animationCharacterSpacing:O});if(q)return structuredClone(j).reverse();const D=structuredClone(j).reverse();return X?j:D.concat(j)}catch(j){throw j+" @createFrames"}})}var Br="Slant";function Md(z,B){return lu(this,null,function*(){Ur.parseFont(Br,B);const U=D=>lu(this,null,function*(){return yield new Promise((E,V)=>{Ur.text(D,{font:Br},(N,Z)=>{N&&V("Failed to load font"),Z?E(Z.split(`
`)):V("No ASCII text generated")})})}),m=[];try{for(var O=Ed(Array.isArray(z)?z:[z]),q,X,j;q=!(X=yield O.next()).done;q=!1){const D=X.value,E=yield U(D);m.push(E)}}catch(D){j=[D]}finally{try{q&&(X=O.return)&&(yield X.call(O))}finally{if(j)throw j[0]}}return m})}var Od="/*+#";function Nd({animationCharacters:z=Od,animationCharacterSpacing:B=1,animationDelay:U=500,animationDirection:m="horizontal",animationInterval:O=1e3,animationIteration:q=1,animationLoop:X=!0,animationSpeed:j=20,fadeInOnly:D=!1,fadeOutOnly:E=!1,font:V,isAnimated:N=!0,isPaused:Z=!1,text:al=["React","ASCII","Text"]}){const hl=pt.useRef(),$=pt.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),rl=Dl=>lu(this,null,function*(){const{animations:yl,isPaused:kl,isTimeout:at,previousTimeStamp:Xl}=$.current;if(!hl.current||!yl?.length||kl||at)return;if(Dl-Xl>j){const{animationIndex:Bl,animationIterationCount:ct,animations:vt,frameId:Pl,frameIndex:zl}=$.current,Ql=vt?.[Bl];if(!Ql||at)return;const Zl=zl===0,Vl=zl===Ql.length-1,b=Bl===vt.length-1;if(hl.current.textContent=Ql[zl].join(`
`),!X&&ct===q&&b&&Vl){cancelAnimationFrame(Pl);return}$.current.previousTimeStamp=Dl;const G=zl===Math.floor(Ql.length/2),J=D||E,cl=dl=>lu(this,null,function*(){yield new Promise(o=>{$.current.isTimeout=!0,setTimeout(o,dl)}),$.current.isTimeout=!1});J&&Vl&&U&&(yield cl(U)),J&&Zl&&O&&(yield cl(O)),!J&&G&&U&&(yield cl(U)),!J&&Vl&&O&&(yield cl(O)),Vl?($.current.frameIndex=0,$.current.animationIndex++,$.current.animationIterationCount++):$.current.frameIndex++,X&&$.current.animationIndex===vt.length&&($.current.animationIndex=0)}$.current.frameId=requestAnimationFrame(rl)});pt.useEffect(()=>{Z?($.current.isPaused=!0,cancelAnimationFrame($.current.frameId)):($.current.isPaused=!1,$.current.frameId=requestAnimationFrame(rl))},[Z,$]);const Ll=pt.useCallback(()=>lu(this,null,function*(){try{const Dl=yield Md(al,V);!N&&hl.current?hl.current.textContent=Dl[0].join(`
`):Dl.length===(Array.isArray(al)?al:[al]).length&&($.current.animations=yield Promise.all([...Dl.map(yl=>lu(this,null,function*(){return yield pd({asciiText:yl,animationDirection:m,animationCharacters:z,animationCharacterSpacing:B,fadeInOnly:D,fadeOutOnly:E})}))]),requestAnimationFrame(rl))}catch(Dl){console.error({error:Dl})}}),[]);return pt.useEffect(()=>{Ll()},[al,Ll]),hl}var Cd=`flf2a$ 9 8 12 63 18 0 24511 0
Font   : Fire Font-s
Author : MJP
Date   : 2003/11/6 11:11:05
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
Based on Small.flf by Glenn Chappell 4/93 -- based on Standard

---

Font modified May 26, 2012 by patorjk
- Added the 0xCA0 character.
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
   ____ #
  |   / #
  |  /  #
  | /   #
  |/    #
 (      #
 )\\     #
((_)    #
        ##
          #
  (   (   #
  )\\  )\\  #
 ((_)((_) #
          #
          #
          #
          #
          ##
          #
   _ _    #
 _| | |_  #
|_  .  _| #
|_     _| #
  |_|_|   #
          #
          #
          ##
     #
     #
 ||_ #
(_-< #
/ _/ #
 ||  #
     #
     #
     ##
        #
        #
        #
 _  __  #
(_)/ /  #
  / /_  #
 /_/(_) #
        #
        ##
          #
          #
      (   #
  __  )\\  #
 / _|((_) #
 > _|_ _| #
 \\_____|  #
          #
          ##
      #
  (   #
  )\\  #
 ((_) #
      #
      #
      #
      #
      ##
     #
     #
     #
  __ #
 / / #
| |  #
| |  #
 \\_\\ #
     ##
     #
     #
     #
__   #
\\ \\  #
 | | #
 | | #
/_/  #
     ##
 _/\\_ #
 >  < #
  \\/  #
      #
      #
      #
      #
      #
      ##
        #
        #
        #
   _    #
 _| |_  #
|_   _| #
  |_|   #
        #
        ##
     #
     #
     #
     #
     #
  )  #
 /(  #
(_)) #
     ##
      #
      #
      #
 ___  #
|___| #
      #
      #
      #
      ##
    #
    #
    #
    #
    #
    #
 _  #
(_) #
    ##
      #
      #
      #
   __ #
  / / #
 / /  #
/_/   #
      #
      ##
        #
     )  #
  ( /(  #
  )\\()) #
 ((_)\\  #
 /  (_) #
| () |  #
 \\__/   #
        ##
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
 / (_) #
 | |   #
 |_|   #
       ##
       #
    )  #
 ( /(  #
 )(_)) #
((_)   #
|_  )  #
 / /   #
/___|  #
       ##
        #
     )  #
  ( /(  #
  )\\()) #
 ((_)\\  #
|__ (_) #
 |_ \\   #
|___/   #
        ##
        #
     )  #
  ( /(  #
  )\\()) #
 ((_)\\  #
| | (_) #
|_  _|  #
  |_|   #
        ##
         #
 (  (    #
 )\\))(   #
((_)()\\  #
 (()((_) #
  | __|  #
  |__ \\  #
  |___/  #
         ##
       #
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_) /  #
 / _ \\ #
 \\___/ #
       ##
        #
     )  #
  ( /(  #
  )\\()) #
 ((_)\\  #
|__  /  #
  / /   #
 /_/    #
        ##
        #
 (      #
 )\\ (   #
((_))\\  #
  _((_) #
 ( _ )  #
 / _ \\  #
 \\___/  #
        ##
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
/ _(_) #
\\_, /  #
 /_/   #
       ##
    #
    #
    #
    #
 _  #
(_) #
 _  #
(_) #
    ##
      #
      #
      #
      #
   _  #
  (_) #
  (   #
  )\\  #
 ((_) ##
     #
     #
     #
     #
  __ #
 / / #
< <  #
 \\_\\ #
     ##
      #
      #
      #
      #
      #
 ___  #
|___| #
|___| #
      ##
     #
     #
     #
     #
__   #
\\ \\  #
 > > #
/_/  #
     ##
      #
      #
 (    #
 )\\   #
((_)  #
|__ \\ #
  /_/ #
 (_)  #
      ##
         #
         #
   (     #
   )\\    #
  ((_)   #
 /__ _\\  #
// _\` |\\ #
\\\\__,_|/ #
 \\____/  ##
          #
   (      #
   )\\     #
((((_)(   #
 )\\ _ )\\  #
 (_)_\\(_) #
  / _ \\   #
 /_/ \\_\\  #
          ##
       #
   (   #
 ( )\\  #
 )((_) #
((_)_  #
 | _ ) #
 | _ \\ #
 |___/ #
       ##
        #
   (    #
   )\\   #
 (((_)  #
 )\\___  #
((/ __| #
 | (__  #
  \\___| #
        ##
 (      #
 )\\ )   #
(()/(   #
 /(_))  #
(_))_   #
 |   \\  #
 | |) | #
 |___/  #
        ##
      #
      #
 (    #
 )\\   #
((_)  #
| __| #
| _|  #
|___| #
      ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))_| #
| |_   #
| __|  #
|_|    #
       ##
         #
 (       #
 )\\ )    #
(()/(    #
 /(_))_  #
(_)) __| #
  | (_ | #
   \\___| #
         ##
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
 _((_) #
| || | #
| __ | #
|_||_| #
       ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))   #
|_ _|  #
 | |   #
|___|  #
       ##
       #
       #
   (   #
   )\\  #
  ((_) #
 _ | | #
| || | #
 \\__/  #
       ##
     )  #
  ( /(  #
  )\\()) #
|((_)\\  #
|_ ((_) #
| |/ /  #
  ' <   #
 _|\\_\\  #
        ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))   #
| |    #
| |__  #
|____| #
       ##
   *     #
 (  \`    #
 )\\))(   #
((_)()\\  #
(_()((_) #
|  \\/  | #
| |\\/| | #
|_|  |_| #
         ##
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
 _((_) #
| \\| | #
| .\` | #
|_|\\_| #
       ##
    )   #
 ( /(   #
 )\\())  #
((_)\\   #
  ((_)  #
 / _ \\  #
| (_) | #
 \\___/  #
        ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))   #
| _ \\  #
|  _/  #
|_|    #
       ##
        #
   (    #
 ( )\\   #
 )((_)  #
((_)_   #
 / _ \\  #
| (_) | #
 \\__\\_\\ #
        ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))   #
| _ \\  #
|   /  #
|_|_\\  #
       ##
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_))   #
/ __|  #
\\__ \\  #
|___/  #
       ##
         #
  *   )  #
\` )  /(  #
 ( )(_)) #
(_(_())  #
|_   _|  #
  | |    #
  |_|    #
         ##
        #
        #
    (   #
    )\\  #
 _ ((_) #
| | | | #
| |_| | #
 \\___/  #
        ##
         #
         #
 (   (   #
 )\\  )\\  #
((_)((_) #
\\ \\ / /  #
 \\ V /   #
  \\_/    #
         ##
          #
 (  (     #
 )\\))(   '#
((_)()\\ ) #
_(())\\_)()#
\\ \\((_)/ /#
 \\ \\/\\/ / #
  \\_/\\_/  #
          ##
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
__((_) #
\\ \\/ / #
 >  <  #
/_/\\_\\ #
       ##
     )  #
  ( /(  #
  )\\()) #
 ((_)\\  #
__ ((_) #
\\ \\ / / #
 \\ V /  #
  |_|   #
        ##
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
 _((_) #
|_  /  #
 / /   #
/___|  #
       ##
     #
     #
     #
     #
 __  #
| _| #
| |  #
| |  #
|__| ##
      #
      #
      #
      #
__    #
\\ \\   #
 \\ \\  #
  \\_\\ #
      ##
     #
     #
     #
     #
 __  #
|_ | #
 | | #
 | | #
|__| ##
      #
  /\\  #
 |/\\| #
      #
      #
      #
      #
      #
      ##
        #
        #
        #
        #
        #
        #
        #
 _____  #
|_____| ##
\`#
 #
 #
 #
 #
 #
 #
 #
 ##
       #
       #
    )  #
 ( /(  #
 )(_)) #
((_)_  #
/ _\` | #
\\__,_| #
       ##
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
| |(_) #
| '_ \\ #
|_.__/ #
       ##
      #
      #
      #
  (   #
  )\\  #
 ((_) #
/ _|  #
\\__|  #
      ##
        #
  (     #
  )\\ )  #
 (()/(  #
  ((_)) #
  _| |  #
/ _\` |  #
\\__,_|  #
        ##
       #
       #
   (   #
  ))\\  #
 /((_) #
(_))   #
/ -_)  #
\\___|  #
       ##
       #
 (     #
 )\\ )  #
(()/(  #
 /(_)) #
(_) _| #
 |  _| #
 |_|   #
       ##
        #
        #
 (  (   #
 )\\))(  #
((_))\\  #
 (()(_) #
/ _\` |  #
\\__, |  #
|___/   ##
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
| |(_) #
| ' \\  #
|_||_| #
       ##
     #
     #
 (   #
 )\\  #
((_) #
 (_) #
 | | #
 |_| #
     ##
      #
      #
  (   #
  )\\  #
 ((_) #
   !  #
  | | #
 _/ | #
|__/  ##
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
| |(_) #
| / /  #
|_\\_\\  #
       ##
     #
 (   #
 )\\  #
((_) #
 _   #
| |  #
| |  #
|_|  #
     ##
         #
         #
    )    #
   (     #
   )\\  ' #
 _((_))  #
| '  \\() #
|_|_|_|  #
         ##
        #
        #
        #
  (     #
  )\\ )  #
 _(_/(  #
| ' \\)) #
|_||_|  #
        ##
      #
      #
      #
  (   #
  )\\  #
 ((_) #
/ _ \\ #
\\___/ #
      ##
        #
        #
        #
 \`  )   #
 /(/(   #
((_)_\\  #
| '_ \\) #
| .__/  #
|_|     ##
       #
       #
   (   #
 ( )\\  #
 )(( ) #
((_)_) #
/ _\` | #
\\__, | #
   |_| ##
      #
      #
 (    #
 )(   #
(()\\  #
 ((_) #
| '_| #
|_|   #
      ##
     #
     #
     #
 (   #
 )\\  #
((_) #
(_-< #
/__/ #
     ##
       #
    )  #
 ( /(  #
 )\\()) #
(_))/  #
| |_   #
|  _|  #
 \\__|  #
       ##
       #
       #
   (   #
  ))\\  #
 /((_) #
(_))(  #
| || | #
 \\_,_| #
       ##
        #
        #
   )    #
  /((   #
 (_))\\  #
 _)((_) #
 \\ V /  #
  \\_/   #
        ##
         #
         #
 (  (    #
 )\\))(   #
((_)()\\  #
_(()((_) #
\\ V  V / #
 \\_/\\_/  #
         ##
       #
       #
    )  #
 ( /(  #
 )\\()) #
((_)\\  #
\\ \\ /  #
/_\\_\\  #
       ##
       #
       #
 (     #
 )\\ )  #
(()/(  #
 )(_)) #
| || | #
 \\_, | #
 |__/  ##
     #
     #
     #
 (   #
 )\\  #
((_) #
|_ / #
/__| #
     ##
      #
      #
      #
      #
   __ #
  / / #
_| |  #
 | |  #
  \\_\\ ##
    #
    #
    #
    #
 _  #
| | #
| | #
| | #
|_| ##
      #
      #
      #
      #
__    #
\\ \\   #
 | |_ #
 | |  #
/_/   ##
      #
 /\\/| #
|/\\/  #
      #
      #
      #
      #
      #
      ##
  )     #
 /( (   #
(_)))\\  #
(_)_(_) #
  /_\\   #
 / _ \\  #
/_/ \\_\\ #
        #
        ##
    (   #
  ) )\\  #
 /(((_) #
(_)_(_) #
 / _ \\  #
| (_) | #
 \\___/  #
        #
        ##
  )     #
 /( (   #
(_)))\\  #
(_)_(_) #
| | | | #
| |_| | #
 \\___/  #
        #
        ##
       #
       #
   (   #
 _ )\\  #
(_((_) #
/ _\` | #
\\__,_| #
       #
       ##
        #
        #
  )     #
 /(  _  #
(_))(_) #
 / _ \\  #
 \\___/  #
        #
        ##
        #
        #
    (   #
 _  )\\  #
(_)((_) #
| |_| | #
 \\___/  #
        #
        ##
       #
   (   #
 ( )\\  #
 )((_) #
(/__ \\ #
| |< < #
| ||_/ #
|_|    #
       ##
0xCA0  KANNADA LETTER TTHA
    )   #
 ( /(   #
 )\\())  #
((_)\\__)#
 /____/ #
 / _ \\  #
| (_) | #
$\\___/$ #
        ##`;bd();function Dd(){const z=pt.useRef(null),[B,U]=pt.useState("dark"),m=["dark","light","cyber","dracula"],O=[],q=pt.useRef(0),X=Nd({font:Cd,isAnimated:!1,text:"geoorgeq"}),[j,D]=pt.useState([ll.jsx("pre",{style:{marginTop:"-35px"},ref:X},"ascii-header"),ll.jsx(kn,{onEnter:E,inputRef:z,inputs:O},`input-line-${q.current}`)]);function E(V){O.push(V);const N=[],Z=V.toLowerCase().split(" "),al=Z[0],hl=Z[1];switch(al){case"ls":N.push(ll.jsx("div",{children:"List of projects"},"ls-output"));break;case"help":N.push(ll.jsxs("div",{className:"output-block",children:[ll.jsx("div",{children:"Use the following commands"}),ll.jsx("div",{children:"ls - to list all the personal projects"}),ll.jsx("div",{children:"about - learn something about me"}),ll.jsx("div",{children:"theme - change the theme of the terminal"}),ll.jsx("div",{children:"theme list - list of available themes"})]},"help-output"));break;case"about":N.push(ll.jsxs("div",{className:"output-block about",children:[ll.jsx("div",{children:"I am an eager and motivated beginner programmer with a strong"}),ll.jsx("div",{children:"passion for learning and a commitment to honing my coding skills."}),ll.jsx("div",{children:"My goal is to build a solid foundation in software development and"}),ll.jsx("div",{children:"continuously improve my abilities through hands-on experience and"}),ll.jsx("div",{children:"collaboration with others in the programming community."})]},"about-output"));break;case"clear":{const rl=++q.current;D([ll.jsx(kn,{onEnter:E,inputRef:z,inputs:O},`input-line-${rl}`)]);return}case"theme":{if(hl==="list"){N.push(ll.jsx("div",{className:"output-block",children:"List of themes:"},"theme-list-header"));for(let rl=0;rl<m.length;rl++)N.push(ll.jsx("div",{className:"output-block capitalized-text",children:m[rl]},`theme-${rl}`))}else if(m.indexOf(hl)===-1&&hl!==void 0&&hl!=="")N.push(ll.jsxs("div",{children:["Theme not found. Use"," ",ll.jsx("span",{style:{color:"var(--accent)"},children:"theme list "}),"to see available themes."]},"theme-not-found"));else if(hl)U(hl),N.push(ll.jsxs("div",{children:["Theme switched to ",ll.jsx("span",{className:"capitalized-text",children:hl})]},"theme-switched"));else{let rl="";U(Ll=>{const yl=(m.indexOf(Ll)+1)%m.length;return rl=m[yl],m[yl]}),N.push(ll.jsxs("div",{children:["Theme switched to ",ll.jsx("span",{className:"capitalized-text",children:rl})]},"theme-switched-auto"))}break}default:N.push(ll.jsxs("div",{children:["Command not found. Type"," ",ll.jsx("span",{style:{color:"var(--accent)"},children:"help"})," to find all available commands."]},"command-not-found"))}const $=q.current+=2;D(rl=>[...rl.map(Ll=>Ll.type===kn?ll.jsxs("div",{className:"input-line",children:[ll.jsxs("span",{children:["guest@geoorgeq.computer",ll.jsx("span",{style:{color:"var(--success)"},children:":~$"})]}),ll.jsx("div",{style:{marginLeft:"var(--p-3)"},children:V})]},Ll.key):Ll),ll.jsx("div",{children:N},`output-${$}`),ll.jsx(kn,{onEnter:E,inputRef:z,inputs:O},`input-line-${$+1}`)])}return pt.useEffect(()=>{z.current?.focus()},[j]),ll.jsx("div",{className:`app theme-${B}`,children:ll.jsx("div",{className:"terminal",onClick:()=>z.current?.focus(),children:j})})}hd.createRoot(document.getElementById("root")).render(ll.jsx(pt.StrictMode,{children:ll.jsx(Dd,{})}));
