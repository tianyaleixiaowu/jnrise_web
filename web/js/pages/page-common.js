function getRequestByName(e){var n=window.location.search,t="";if(-1!=n.indexOf("?"))for(var s=n.substr(1).split("&"),r=0;r<s.length;r++)-1!=s[r].indexOf(e+"=")&&(t=unescape(s[r].substring(e.length+1,s[r].length)));return t}var request=getRequestByName("sign");$.ajax({type:"POST",async:!1,url:"https://mm.jnrise.cn:88/loading/server/enter",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{sign:request,flag:1},dataType:"json",success:function(e){console.log(e)},error:function(e){console.log(e)}});