!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}({11:function(e,t,o){"use strict";o.r(t),o.d(t,"local_storage",function(){return l}),o.d(t,"remove_local_storage_item",function(){return u}),o.d(t,"clear_local_storage",function(){return c});const n=!!window.localStorage;let r,a=window.location.hostname||"localUserData";if(!n)try{(r=document.createElement("input")).type="hidden",r.style.display="none",r.addBehavior("#default#userData"),document.body.appendChild(r),r.expires=new Date($.date().addDays(365)).toUTCString(),r.load(a)}catch(e){r=null,console.log("userData初始化失败！")}const l=(e,t)=>{var o;if(n){if(void 0==t)return(o=localStorage.getItem(encodeURIComponent(e)))?decodeURIComponent(o):null;localStorage.setItem(encodeURIComponent(e),encodeURIComponent(t))}else if(r){if(void 0==t)return(o=r.getAttribute(e))?decodeURIComponent(o):null;r.setAttribute(e,t),r.save(a)}},u=e=>{n?localStorage.removeItem(encodeURIComponent(e)):r&&(r.removeAttribute(encodeURIComponent(e)),r.save(a))},c=()=>{n?localStorage.clear():r.remove()}}});