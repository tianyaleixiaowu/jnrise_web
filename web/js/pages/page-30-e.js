﻿function getRequestByName(e){var n=window.location.search,t="";if(-1!=n.indexOf("?"))for(var o=n.substr(1).split("&"),r=0;r<o.length;r++)-1!=o[r].indexOf(e+"=")&&(t=unescape(o[r].substring(e.length+1,o[r].length)));return t}function getShowTimes(e){var n=new Date;return Math.round((n.getTime()-e)/1e3)}function checkPhone(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)}function uuid(e,n){var t,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];if(n=n||o.length,e)for(t=0;t<e;t++)r[t]=o[0|Math.random()*n];else{var i;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",t=0;t<36;t++)r[t]||(i=0|16*Math.random(),r[t]=o[19==t?3&i|8:i])}return r.join("")}function get_uuid(){var e=(new Date).getTime().toString();return uuid(8,16)+e.substr(6,8)}function get_vid(){return(new Date).getTime().toString().substr(3,8)}$(function(){var e=getRequestByName("sign"),n=(document.getElementById("video"),""),t=getRequestByName("uid"),o=(new Date).getTime(),r=window.location.href,i=get_vid();""!=t&&null!=t||(t=get_uuid()),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/enter",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",userId:t,url:r,sign:e,flag:2},dataType:"json",success:function(e){console.log(e)},error:function(e){console.log(e)}});var s=window.setInterval(function(){var n=getShowTimes(o);n<=180?$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/stay",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",userId:t,url:r,sign:e,totalTime:n,otherInfo:"",version:i},dataType:"json",success:function(e){},error:function(e){console.log(e)}}):window.clearInterval(s)},1e3);$("html,body").animate({scrollTop:"0"},1);var a=0;a=/Android|iPhone|BlackBerry/i.test(navigator.userAgent)?1:0,$("#main-btn-call").click(function(){$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:3,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")},success:function(e){window.location.href="tel:01085800878"},error:function(e){console.log(e)}})}),$("#main-btn-talk").click(function(){$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:3,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")},success:function(e){window.location.href="page-talk.html?uid="+t},error:function(e){console.log(e)}})}),$("#main-btn-talk-bottom").click(function(n){(n=n||window.event).stopPropagation(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:3,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")},success:function(e){window.location.href="page-talk.html?uid="+t},error:function(e){console.log(e)}})}),$(".form-box").on("click","input",function(){$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:1,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}})}),$(".form-box").on("input","#phone",function(){var n=$(this).val();checkPhone(n)?($("#getcode").removeClass("disabled"),$(this).parents(".form-item").removeClass("error")):$("#getcode").addClass("disabled").show(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:2,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")+":"+n},success:function(e){},error:function(e){console.log(e)}})}),$("#main-btn-submit").click(function(){$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:a,clickType:3,company:"rise",url:r,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}});var n=$.trim($("#code").val()),o=$.trim($("#phone").val()),i=!0;""==o?(i=!1,$("#phone").parents(".form-item").addClass("error").find(".message").html("请正确输入")):checkPhone(o)?$("#phone").parents(".form-item").removeClass("error"):(i=!1,$("#phone").parents(".form-item").addClass("error").find(".message").html("请正确输入")),""==n?(i=!1,$("#code").parents(".form-item").addClass("error").find(".message").html("请正确输入")):checkPhone(o)?$("#code").parents(".form-item").removeClass("error"):(i=!1,$("#code").parents(".form-item").addClass("error").find(".message").html("请正确输入")),i&&$.ajax({type:"POST",url:"https://mm.jnrise.cn:88/loading/server/info",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",userId:t,phone:o,name:"",age:0,gender:0,school:"",sign:e},dataType:"json",success:function(e){console.log(e),$(".modal-message").show(),$(".form-box input").val(""),$("#getcode").addClass("disabled").show(),$("#getcode2").addClass("disabled").hide()},error:function(e){console.log(e)}})});var c,l=60;$("#getcode").click(function(){if(!$(this).hasClass("disabled")){clearInterval(c),$(this).hide(),$(".form-box .item-code").find("input").val("").end().find("#getcode2").addClass("disabled").show().end().show(),l=60,$("#getcode2").html(l+"s"),c=setInterval(function(){l--,$("#getcode2").html(l+"s"),0==l&&(clearInterval(c),$("#getcode2").removeClass("disabled").html("重新获取"))},1e3);var e=$.trim($("#phone").val());$.ajax({type:"GET",url:"https://mm.jnrise.cn/loading/server/sms",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{mobile:e},dataType:"json",success:function(e){n=0==e.code?e.message:""},error:function(e){console.log(e)}})}}),$("#getcode2").click(function(){if(!$(this).hasClass("disabled")){clearInterval(c),$("#getcode2").addClass("disabled"),l=60,$("#getcode2").html(l+"s"),c=setInterval(function(){$("#getcode2").html(l+"s"),0==--l&&(clearInterval(c),$("#getcode2").removeClass("disabled").html("重新获取"))},1e3);var e=$.trim($("#phone").val());$.ajax({type:"GET",url:"https://mm.jnrise.cn/loading/server/sms",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{mobile:e},dataType:"json",success:function(e){n=0==e.code?e.message:""},error:function(e){console.log(e)}})}}),$(".modal-message").click(function(e){(e=e||window.event).stopPropagation(),$(this).hide()}),$(".main").on("click",function(){var e=event||window.event,n=document.documentElement.scrollLeft||document.body.scrollLeft,o=document.documentElement.scrollTop||document.body.scrollTop,i=(e.pageX||e.clientX+n)-$(".main")[0].offsetLeft,s=e.pageY||e.clientY+o,a=$(".main").width(),c=$(".main").height(),l=Math.round(540*i/a),d=Math.round(540*s/a);$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/clickCount",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",url:r,userId:t,type:"click",coordinate:l+","+d,otherInfo:"x: "+i+",y: "+s+",w:"+a+",h:"+c},dataType:"json",success:function(e){},error:function(e){console.log(e)}})})});