function getRequestByName(e){var o=window.location.search,n="";if(-1!=o.indexOf("?"))for(var t=o.substr(1).split("&"),i=0;i<t.length;i++)-1!=t[i].indexOf(e+"=")&&(n=unescape(t[i].substring(e.length+1,t[i].length)));return n}function getShowTimes(e){var o=new Date;return Math.round((o.getTime()-e)/1e3)}function getWindowHeight(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight}function checkPhone(e){return!!/^1(3|4|5|7|8)\d{9}$/.test(e)}function get_uuid(){var e=(new Date).getTime().toString();return uuid(8,16)+e.substr(6,8)}function uuid(e,o){var n,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(o=o||t.length,e)for(n=0;n<e;n++)i[n]=t[0|Math.random()*o];else{var a;for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",n=0;n<36;n++)i[n]||(a=0|16*Math.random(),i[n]=t[19==n?3&a|8:a])}return i.join("")}$(function(){var e=getRequestByName("sign"),o=document.getElementById("video"),n="",t=get_uuid(),i=(new Date).getTime(),a=window.location.href;$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/enter",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",userId:t,sign:e,flag:2},dataType:"json",success:function(e){console.log(e)},error:function(e){console.log(e)}});var s=window.setInterval(function(){var o=getShowTimes(i);o<=180?$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/stay",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",url:a,sign:e,userId:t,totalTime:o,otherInfo:""},dataType:"json",success:function(e){},error:function(e){console.log(e)}}):window.clearInterval(s)},1e3);$("html,body").animate({scrollTop:"0"},1),$(".main .main-float").fadeOut(1),$("#about-school").swipeslider({prevNextButtons:!1,autoPlayTimeout:1100,sliderHeight:"0"});var r=0;r=/Android|iPhone|BlackBerry/i.test(navigator.userAgent)?1:0,$(".main-video").click(function(){o.paused?(o.play(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:3,company:"rise",url:a,userId:t,otherInfo:"main-video"},success:function(e){},error:function(e){console.log(e)}})):o.pause()}),o.addEventListener("play",function(){$(".main-video .video-modal").removeClass("stop"),$(".main-video .video-controls").removeClass("play").removeClass("pause").removeClass("replay")},!1),o.addEventListener("pause",function(){$(".main-video .video-modal").addClass("stop"),$(".main-video .video-controls").addClass("pause")},!1),o.addEventListener("ended",function(){$(".main-video .video-modal").addClass("stop"),$(".main-video .video-controls").addClass("replay")},!1),window.onscroll=function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=450?$(".main .main-float").fadeIn(400):$(".main .main-float").fadeOut(400)},$(".main-float .btn-edit").click(function(o){(o=o||window.event).stopPropagation(),$(".main-modal .form-box input").val(""),$(".main-modal .item-message").hide(),$(".main-modal .item-code").hide(),$("#getcode").addClass("disabled").show(),$(".main-modal").show(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:3,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}})}),$(".main-float .btn-top").click(function(o){(o=o||window.event).stopPropagation(),$("html,body").animate({scrollTop:"0"},400),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:3,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}})}),$("#main-btn").click(function(){$(".main-modal .form-box input").val(""),$(".main-modal .item-message").hide(),$(".main-modal .item-code").hide(),$("#getcode").addClass("disabled").show(),$(".main-modal").show(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:3,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}})}),$(".main-modal").click(function(e){(e=e||window.event).stopPropagation()}),$(".main-modal .main-modal-content").click(function(e){(e=e||window.event).stopPropagation()}),$(".main-modal .main-modal-close").click(function(o){(o=o||window.event).stopPropagation(),$(".main-modal").hide(),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:4,company:"rise",url:a,userId:t,otherInfo:"modal-hide"},success:function(e){},error:function(e){console.log(e)}})}),$(".form-box").on("click","input",function(){$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:1,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")},success:function(e){},error:function(e){console.log(e)}})}),$(".form-box").on("input","#phone",function(){var o=$(this).val();checkPhone(o)?($("#getcode").removeClass("disabled"),$(this).parents(".form-item").removeClass("error")):($("#getcode").addClass("disabled").show(),$(".main-modal .item-code").hide(),$(".main-modal .item-message").hide()),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:2,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")+":"+o},success:function(e){},error:function(e){console.log(e)}})}),$(".form-box").on("input","#code",function(){var o=$.trim($(this).val()),i=$.trim($("#phone").val());o==n?$.ajax({type:"POST",url:"https://mm.jnrise.cn:88/loading/server/info",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",userId:t,phone:i,name:"",age:0,gender:0,school:"",sign:e},dataType:"json",success:function(e){console.log(e),$(".main-modal .item-code").hide(),$(".form-box .item-message").show(),$(this).parents(".form-item").removeClass("error"),setTimeout(function(){$(".main-modal").hide()},1e3)},error:function(e){console.log(e)}}):o.length>=4&&$(this).parents(".form-item").addClass("error").find(".message").html("验证码错误"),$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/click",data:{sign:e,uuid:t,deviceType:r,clickType:2,company:"rise",url:a,userId:t,otherInfo:$(this).attr("id")+":"+o},success:function(e){},error:function(e){console.log(e)}})});var c,d=60;$("#getcode").click(function(){if(!$(this).hasClass("disabled")){clearInterval(c),$(this).hide(),$(".form-box .form-font").hide(),$(".form-box .item-code").find("input").val("").end().find("#getcode2").addClass("disabled").show().end().show(),d=60,$("#getcode2").html(d+"s"),c=setInterval(function(){d--,$("#getcode2").html(d+"s"),0==d&&(clearInterval(c),$("#getcode2").removeClass("disabled").html("重新获取"))},1e3);var e=$.trim($("#phone").val());$.ajax({type:"GET",url:"https://mm.jnrise.cn/loading/server/sms",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{mobile:e},dataType:"json",success:function(e){n=0==e.code?e.message:""},error:function(e){console.log(e)}})}}),$("#getcode2").click(function(){if(!$(this).hasClass("disabled")){clearInterval(c),$("#getcode2").addClass("disabled"),d=60,$("#getcode2").html(d+"s"),c=setInterval(function(){$("#getcode2").html(d+"s"),0==--d&&(clearInterval(c),$("#getcode2").removeClass("disabled").html("重新获取"))},1e3);var e=$.trim($("#phone").val());$.ajax({type:"GET",url:"https://mm.jnrise.cn/loading/server/sms",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{mobile:e},dataType:"json",success:function(e){n=0==e.code?e.message:""},error:function(e){console.log(e)}})}}),$(".main").on("click",function(){var e=event||window.event,o=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop,i=(e.pageX||e.clientX+o)-$(".main")[0].offsetLeft,s=e.pageY||e.clientY+n,r=$(".main").width(),c=$(".main").height(),d=Math.round(540*i/r),l=Math.round(540*s/r);$.ajax({type:"POST",url:"https://mm.jnrise.cn/loading/server/clickCount",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",url:a,userId:t,type:"click",coordinate:d+","+l,otherInfo:"x: "+i+",y: "+s+",w:"+r+",h:"+c},dataType:"json",success:function(e){},error:function(e){console.log(e)}})}),$(".main").on("touchstart",function(){var e=event.targetTouches[0],o=Math.round(e.pageX),n=Math.round(e.pageY),i=$(".main").width(),s=$(".main").height(),r=Math.round(540*o/i),c=Math.round(540*n/i);$.ajax({type:"POST",url:"https://mm.jnrise.cn:88/loading/server/clickCount",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{company:"rise",url:a,userId:t,type:"touch",coordinate:r+","+c,otherInfo:"x: "+o+",y: "+n+",w:"+i+",h:"+s},dataType:"json",success:function(e){},error:function(e){console.log(e)}})})});