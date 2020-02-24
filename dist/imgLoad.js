"use strict";var imgLoad=function(o,t){var n=new Image;n.src=o,n.complete?"function"==typeof t&&t.call(n):n.onload=function(){"function"==typeof t&&t.call(this)}};module.exports=imgLoad;
