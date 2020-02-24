"use strict";function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _global=createCommonjsModule(function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),_aFunction=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},_ctx=function(n,o,e){if(_aFunction(n),void 0===o)return n;switch(e){case 1:return function(e){return n.call(o,e)};case 2:return function(e,t){return n.call(o,e,t)};case 3:return function(e,t,r){return n.call(o,e,t,r)}}return function(){return n.apply(o,arguments)}},toString={}.toString,_cof=function(e){return toString.call(e).slice(8,-1)},_core=createCommonjsModule(function(e){var t=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)}),_core_1=_core.version,_shared=createCommonjsModule(function(e){var t="__core-js_shared__",r=_global[t]||(_global[t]={});(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:_core.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),id=0,px=Math.random(),_uid=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++id+px).toString(36))},_wks=createCommonjsModule(function(e){var t=_shared("wks"),r=_global.Symbol,n="function"==typeof r;(e.exports=function(e){return t[e]||(t[e]=n&&r[e]||(n?r:_uid)("Symbol."+e))}).store=t}),TAG=_wks("toStringTag"),ARG="Arguments"==_cof(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){}},_classof=function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tryGet(t=Object(e),TAG))?r:ARG?_cof(t):"Object"==(n=_cof(t))&&"function"==typeof t.callee?"Arguments":n},_isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_anObject=function(e){if(!_isObject(e))throw TypeError(e+" is not an object!");return e},_fails=function(e){try{return!!e()}catch(e){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document$1=_global.document,is=_isObject(document$1)&&_isObject(document$1.createElement),_domCreate=function(e){return is?document$1.createElement(e):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(e,t){if(!_isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!_isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!_isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(e,t,r){if(_anObject(e),t=_toPrimitive(t,!0),_anObject(r),_ie8DomDefine)try{return dP(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e},_objectDp={f:f},_propertyDesc=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},_hide=_descriptors?function(e,t,r){return _objectDp.f(e,t,_propertyDesc(1,r))}:function(e,t,r){return e[t]=r,e},hasOwnProperty={}.hasOwnProperty,_has=function(e,t){return hasOwnProperty.call(e,t)},_functionToString=_shared("native-function-to-string",Function.toString),_redefine=createCommonjsModule(function(e){var i=_uid("src"),t="toString",c=(""+_functionToString).split(t);_core.inspectSource=function(e){return _functionToString.call(e)},(e.exports=function(e,t,r,n){var o="function"==typeof r;o&&(_has(r,"name")||_hide(r,"name",t)),e[t]!==r&&(o&&(_has(r,i)||_hide(r,i,e[t]?""+e[t]:c.join(String(t)))),e===_global?e[t]=r:n?e[t]?e[t]=r:_hide(e,t,r):(delete e[t],_hide(e,t,r)))})(Function.prototype,t,function(){return"function"==typeof this&&this[i]||_functionToString.call(this)})}),PROTOTYPE="prototype",$export=function(e,t,r){var n,o,i,c,a=e&$export.F,s=e&$export.G,u=e&$export.S,l=e&$export.P,_=e&$export.B,f=s?_global:u?_global[t]||(_global[t]={}):(_global[t]||{})[PROTOTYPE],p=s?_core:_core[t]||(_core[t]={}),d=p[PROTOTYPE]||(p[PROTOTYPE]={});for(n in s&&(r=t),r)i=((o=!a&&f&&void 0!==f[n])?f:r)[n],c=_&&o?_ctx(i,_global):l&&"function"==typeof i?_ctx(Function.call,i):i,f&&_redefine(f,n,i,e&$export.U),p[n]!=i&&_hide(p,n,c),l&&d[n]!=i&&(d[n]=i)};_global.core=_core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var defer,channel,port,_export=$export,_anInstance=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e},_iterCall=function(t,e,r,n){try{return n?e(_anObject(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&_anObject(o.call(t)),e}},_iterators={},ITERATOR=_wks("iterator"),ArrayProto=Array.prototype,_isArrayIter=function(e){return void 0!==e&&(_iterators.Array===e||ArrayProto[ITERATOR]===e)},ceil=Math.ceil,floor=Math.floor,_toInteger=function(e){return isNaN(e=+e)?0:(0<e?floor:ceil)(e)},min=Math.min,_toLength=function(e){return 0<e?min(_toInteger(e),9007199254740991):0},ITERATOR$1=_wks("iterator"),core_getIteratorMethod=_core.getIteratorMethod=function(e){if(null!=e)return e[ITERATOR$1]||e["@@iterator"]||_iterators[_classof(e)]},_forOf=createCommonjsModule(function(e){var f={},p={},t=e.exports=function(e,t,r,n,o){var i,c,a,s,u=o?function(){return e}:core_getIteratorMethod(e),l=_ctx(r,n,t?2:1),_=0;if("function"!=typeof u)throw TypeError(e+" is not iterable!");if(_isArrayIter(u)){for(i=_toLength(e.length);_<i;_++)if((s=t?l(_anObject(c=e[_])[0],c[1]):l(e[_]))===f||s===p)return s}else for(a=u.call(e);!(c=a.next()).done;)if((s=_iterCall(a,l,c.value,t))===f||s===p)return s};t.BREAK=f,t.RETURN=p}),SPECIES=_wks("species"),_speciesConstructor=function(e,t){var r,n=_anObject(e).constructor;return void 0===n||null==(r=_anObject(n)[SPECIES])?t:_aFunction(r)},_invoke=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)},document$2=_global.document,_html=document$2&&document$2.documentElement,process=_global.process,setTask=_global.setImmediate,clearTask=_global.clearImmediate,MessageChannel=_global.MessageChannel,Dispatch=_global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var e=+this;if(queue.hasOwnProperty(e)){var t=queue[e];delete queue[e],t()}},listener=function(e){run.call(e.data)};setTask&&clearTask||(setTask=function(e){for(var t=[],r=1;r<arguments.length;)t.push(arguments[r++]);return queue[++counter]=function(){_invoke("function"==typeof e?e:Function(e),t)},defer(counter),counter},clearTask=function(e){delete queue[e]},"process"==_cof(process)?defer=function(e){process.nextTick(_ctx(run,e,1))}:Dispatch&&Dispatch.now?defer=function(e){Dispatch.now(_ctx(run,e,1))}:MessageChannel?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=listener,defer=_ctx(port.postMessage,port,1)):_global.addEventListener&&"function"==typeof postMessage&&!_global.importScripts?(defer=function(e){_global.postMessage(e+"","*")},_global.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in _domCreate("script")?function(e){_html.appendChild(_domCreate("script"))[ONREADYSTATECHANGE]=function(){_html.removeChild(this),run.call(e)}}:function(e){setTimeout(_ctx(run,e,1),0)});var _task={set:setTask,clear:clearTask},macrotask=_task.set,Observer=_global.MutationObserver||_global.WebKitMutationObserver,process$1=_global.process,Promise$1=_global.Promise,isNode="process"==_cof(process$1),_microtask=function(){function e(){var e,t;for(isNode&&(e=process$1.domain)&&e.exit();r;){t=r.fn,r=r.next;try{t()}catch(e){throw r?o():n=void 0,e}}n=void 0,e&&e.enter()}var r,n,o;if(isNode)o=function(){process$1.nextTick(e)};else if(!Observer||_global.navigator&&_global.navigator.standalone)if(Promise$1&&Promise$1.resolve){var t=Promise$1.resolve(void 0);o=function(){t.then(e)}}else o=function(){macrotask.call(_global,e)};else{var i=!0,c=document.createTextNode("");new Observer(e).observe(c,{characterData:!0}),o=function(){c.data=i=!i}}return function(e){var t={fn:e,next:void 0};n&&(n.next=t),r||(r=t,o()),n=t}};function PromiseCapability(e){var r,n;this.promise=new e(function(e,t){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=e,n=t}),this.resolve=_aFunction(r),this.reject=_aFunction(n)}var f$1=function(e){return new PromiseCapability(e)},_newPromiseCapability={f:f$1},_perform=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}},navigator=_global.navigator,_userAgent=navigator&&navigator.userAgent||"",_promiseResolve=function(e,t){if(_anObject(e),_isObject(t)&&t.constructor===e)return t;var r=_newPromiseCapability.f(e);return(0,r.resolve)(t),r.promise},_redefineAll=function(e,t,r){for(var n in t)_redefine(e,n,t[n],r);return e},def=_objectDp.f,TAG$1=_wks("toStringTag"),_setToStringTag=function(e,t,r){e&&!_has(e=r?e:e.prototype,TAG$1)&&def(e,TAG$1,{configurable:!0,value:t})},SPECIES$1=_wks("species"),_setSpecies=function(e){var t=_global[e];_descriptors&&t&&!t[SPECIES$1]&&_objectDp.f(t,SPECIES$1,{configurable:!0,get:function(){return this}})},ITERATOR$2=_wks("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR$2]();riter.return=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(e){}var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,_iterDetect=function(e,t){if(!t&&!SAFE_CLOSING)return!1;var r=!1;try{var n=[7],o=n[ITERATOR$2]();o.next=function(){return{done:r=!0}},n[ITERATOR$2]=function(){return o},e(n)}catch(e){}return r},task=_task.set,microtask=_microtask(),PROMISE="Promise",TypeError$1=_global.TypeError,process$2=_global.process,versions=process$2&&process$2.versions,v8=versions&&versions.v8||"",$Promise=_global[PROMISE],isNode$1="process"==_classof(process$2),empty=function(){},newPromiseCapability=newGenericPromiseCapability=_newPromiseCapability.f,USE_NATIVE=!!function(){try{var e=$Promise.resolve(1),t=(e.constructor={})[_wks("species")]=function(e){e(empty,empty)};return(isNode$1||"function"==typeof PromiseRejectionEvent)&&e.then(empty)instanceof t&&0!==v8.indexOf("6.6")&&-1===_userAgent.indexOf("Chrome/66")}catch(e){}}(),isThenable=function(e){var t;return!(!_isObject(e)||"function"!=typeof(t=e.then))&&t},notify=function(l,r){if(!l._n){l._n=!0;var n=l._c;microtask(function(){for(var s=l._v,u=1==l._s,e=0,t=function(e){var t,r,n,o=u?e.ok:e.fail,i=e.resolve,c=e.reject,a=e.domain;try{o?(u||(2==l._h&&onHandleUnhandled(l),l._h=1),!0===o?t=s:(a&&a.enter(),t=o(s),a&&(a.exit(),n=!0)),t===e.promise?c(TypeError$1("Promise-chain cycle")):(r=isThenable(t))?r.call(t,i,c):i(t)):c(s)}catch(e){a&&!n&&a.exit(),c(e)}};n.length>e;)t(n[e++]);l._c=[],l._n=!1,r&&!l._h&&onUnhandled(l)})}},onUnhandled=function(i){task.call(_global,function(){var e,t,r,n=i._v,o=isUnhandled(i);if(o&&(e=_perform(function(){isNode$1?process$2.emit("unhandledRejection",n,i):(t=_global.onunhandledrejection)?t({promise:i,reason:n}):(r=_global.console)&&r.error&&r.error("Unhandled promise rejection",n)}),i._h=isNode$1||isUnhandled(i)?2:1),i._a=void 0,o&&e.e)throw e.v})},isUnhandled=function(e){return 1!==e._h&&0===(e._a||e._c).length},onHandleUnhandled=function(t){task.call(_global,function(){var e;isNode$1?process$2.emit("rejectionHandled",t):(e=_global.onrejectionhandled)&&e({promise:t,reason:t._v})})},$reject=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),notify(t,!0))},$resolve=function(e){var r,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw TypeError$1("Promise can't be resolved itself");(r=isThenable(e))?microtask(function(){var t={_w:n,_d:!1};try{r.call(e,_ctx($resolve,t,1),_ctx($reject,t,1))}catch(e){$reject.call(t,e)}}):(n._v=e,n._s=1,notify(n,!1))}catch(e){$reject.call({_w:n,_d:!1},e)}}};USE_NATIVE||($Promise=function(e){_anInstance(this,$Promise,PROMISE,"_h"),_aFunction(e),Internal.call(this);try{e(_ctx($resolve,this,1),_ctx($reject,this,1))}catch(e){$reject.call(this,e)}},(Internal=function(){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=_redefineAll($Promise.prototype,{then:function(e,t){var r=newPromiseCapability(_speciesConstructor(this,$Promise));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=isNode$1?process$2.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&notify(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),OwnPromiseCapability=function(){var e=new Internal;this.promise=e,this.resolve=_ctx($resolve,e,1),this.reject=_ctx($reject,e,1)},_newPromiseCapability.f=newPromiseCapability=function(e){return e===$Promise||e===Wrapper?new OwnPromiseCapability(e):newGenericPromiseCapability(e)}),_export(_export.G+_export.W+_export.F*!USE_NATIVE,{Promise:$Promise}),_setToStringTag($Promise,PROMISE),_setSpecies(PROMISE),Wrapper=_core[PROMISE],_export(_export.S+_export.F*!USE_NATIVE,PROMISE,{reject:function(e){var t=newPromiseCapability(this);return(0,t.reject)(e),t.promise}}),_export(_export.S+_export.F*!USE_NATIVE,PROMISE,{resolve:function(e){return _promiseResolve(this,e)}}),_export(_export.S+_export.F*!(USE_NATIVE&&_iterDetect(function(e){$Promise.all(e).catch(empty)})),PROMISE,{all:function(e){var c=this,t=newPromiseCapability(c),a=t.resolve,s=t.reject,r=_perform(function(){var n=[],o=0,i=1;_forOf(e,!1,function(e){var t=o++,r=!1;n.push(void 0),i++,c.resolve(e).then(function(e){r||(r=!0,n[t]=e,--i||a(n))},s)}),--i||a(n)});return r.e&&s(r.v),t.promise},race:function(e){var t=this,r=newPromiseCapability(t),n=r.reject,o=_perform(function(){_forOf(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}});var test={};test[_wks("toStringTag")]="z",test+""!="[object z]"&&_redefine(Object.prototype,"toString",function(){return"[object "+_classof(this)+"]"},!0);var cache={};function loadScript(e){if(cache[e])return cache[e];var r=document.createElement("script");return r.type="text/javascript",r.async=!0,r.src=e,document.body.appendChild(r),cache[e]=new Promise(function(e,t){r.onload=function(){e()},r.onerror=function(){t()}}),cache[e]}module.exports=loadScript;