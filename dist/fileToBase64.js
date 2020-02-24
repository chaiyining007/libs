"use strict";var fileToBase64=function(e,o){var t=new FileReader;t.readAsDataURL(e.files[0]),t.onload=function(e){"function"==typeof o&&o(this.result,t)}};module.exports=fileToBase64;
