"use strict";var turnTime=function(e){var r={};return r.d=parseInt(e/1e3/60/60/24),r.h=parseInt(e%864e5/1e3/60/60),r.m=parseInt(e%36e5/1e3/60),r.s=parseInt(e%6e4/1e3),r.millisecond=parseInt(e%1e3),r};module.exports=turnTime;
