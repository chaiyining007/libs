!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){"use strict";s.r(e),s.d(e,"Create",function(){return h});const n=Symbol("init"),r=Symbol("cursor"),o=Symbol("jsonObj"),i=Symbol("next"),u=Symbol("readNode"),l=Symbol("readTag"),a=Symbol("readText"),c=t=>t.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),f=(t,e)=>{for(let s in e)t[s]?(t[s]instanceof Array||(t[s]=[t[s]]),t[s].push(e[s])):t[s]=e[s]};const h=function(t=""){return new class{constructor(t){this.xmlstr=t,this[r]=-1,this[o]={}}get jsonObj(){return this[n](),this[o]}[n](){this[r]=-1,this[o]={},this[r]=this.xmlstr.indexOf("?>"),this.xmlstr.indexOf("<!DOCTYPE")>-1&&(this[r]=this.xmlstr.indexOf("]>")+2),this[i](),Object.assign(this[o],this[u]())}[i](){const t=this.xmlstr.indexOf("<",this[r]);this[r]=0===this.xmlstr.indexOf("<![CDATA[",t)?this[r]:t+1}[l](t){const e=t.split(/\s+/)[0],s={},n=/([^\s]+)=(['"])([^"']+?)(\2)|([^\s]+)=([^\s"']+)/g;let r=null;for(;null!==(r=n.exec(t));)r[1]?s["@"+r[1]]=c(r[3]):r[5]&&(s["@"+r[5]]=c(r[6]));return{nodeName:e,nodeAttr:s}}[a](t){let e,s="",n=this[r],o=this.xmlstr.indexOf("</"+t+">",n),i=-1;if(o<0)return s;for(;(i=this.xmlstr.indexOf("<![CDATA[",n))>-1&&i<o;)s+=c(this.xmlstr.substring(n,i)),e=this.xmlstr.indexOf("]]>",i),s+=this.xmlstr.substring(i+9,e),n=e+3,o=this.xmlstr.indexOf("</"+t+">",n);return s+=c(this.xmlstr.substring(n,o)),this[r]=o+t.length+3,s}[u](){const t={},e=/^[\s\n]*<(?!\/|!\[CDATA\[)/,s=this.xmlstr.indexOf(">",this[r]),{nodeAttr:n,nodeName:o}=this[l](this.xmlstr.substring(this[r],s));Object.assign(t,n);let c={[o]:t};this[r]=s+1,e.test(this.xmlstr.substring(this[r],this[r]+1024))&&(this[i](),Object.assign(t,this[u]()));let h=this[a](o);return h&&!/^\s+$/.test(h)&&(t.text=h),e.test(this.xmlstr.substring(this[r],this[r]+1024))&&(this[i](),f(c,this[u]())),c}}(t)}},,,function(t,e,s){"use strict";s.r(e);var n=s(0);function r(t){const e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}e.default=function(t){if("undefined"==typeof XMLHttpRequest)return;const e=new XMLHttpRequest,s=t.action||"//cyn-test.oss-cn-hangzhou.aliyuncs.com";"number"==typeof t.timeout&&(e.timeout=t.timeout),e.upload&&(e.upload.onprogress=function(e){e.total>0&&(e.percent=e.loaded/e.total*100),t.onProgress(e)});const o=new FormData;t.data&&Object.keys(t.data).map(e=>{o.append(e,t.data[e])}),o.append("success_action_status",201),o.append(t.filename||"file",t.file),e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=300){let o;try{o=n.Create(r(e))}catch(t){}finally{t.onError(function(t,e){const s=`fail to post ${t} ${e.status}`,n=new Error(s);return n.status=e.status,n.method="post",n.url=t,n}(s,e),o)}}else try{let s=n.Create(r(e)).jsonObj,o={};o.Bucket=s.PostResponse.Bucket.text,o.ETag=s.PostResponse.ETag.text,o.Key=s.PostResponse.Key.text,o.Location=s.PostResponse.Location.text,t.onSuccess(o)}catch(s){t.onSuccess(r(e))}},e.open("post",s,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);const i=t.headers||{};for(let t in i)i.hasOwnProperty(t)&&null!==i[t]&&e.setRequestHeader(t,i[t]);return e.send(o),e}}]);