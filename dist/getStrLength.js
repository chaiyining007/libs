"use strict";var getStrLength=function(t){if("string"!=typeof t)return 0;for(var r=0,e=t.length,n=-1;e--;)r+=0<=(n=t.charCodeAt(e))&&n<=128?1:2;return r};module.exports=getStrLength;
