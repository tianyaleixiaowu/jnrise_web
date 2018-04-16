$(function(){
    //获取Url参数集合
    var request=getRequest();
    //console.log(request["channel"]);
    //console.log(request["original"]);
    //console.log(request["type1"]);
    //console.log(request["type2"]);

    //保存页面初始化信息 http://mm.jnrise.cn/loading/server/enter
    $.ajax({
        type:'POST',
        url: 'http://mm.jnrise.cn/loading/server/enter',
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        data:{
            'channel':request["channel"],
            'original':request["original"],
            'type1':request["type1"],
            'type2':request["type2"]
        },
        dataType: 'json',
        success: function(data){
            //console.log(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    });

    //提交联系电话 http://mm.jnrise.cn/loading/server/mobile
    $("#phone").blur(function(){
        var phone= $.trim($(this).val());
        if(phone!=null&&phone!=""&&checkPhone(phone)){
            $.ajax({
                type:'POST',
                url: 'http://mm.jnrise.cn/loading/server/mobile',
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                data:{
                    'phone':phone,
                    'channel':request["channel"],
                    'original':request["original"],
                    'type1':request["type1"],
                    'type2':request["type2"]
                },
                dataType: 'json',
                success: function(data){
                    //console.log(data);
                },
                error: function(xhr){
                    console.log(xhr);
                }
            });
        }
    });

    //提交全部用户信息 http://mm.jnrise.cn/loading/server/info
    $("#submit").click(function(){
        var phone= $.trim($("#phone").val()),
            name=$.trim($("#name").val()),
            age=$.trim($("#age").val()),
            gender=$.trim($("#gender").val()),
            school=$.trim($("#school").val());
        var validate=true;

        //联系电话
        if(phone==""){
            validate=false;
            $("#phone").parent(".form-item").addClass("error").find(".message").html("为了方便我们联系您，请您填写您的联系电话");
        }else if(!checkPhone(phone)){
            validate=false;
            $("#phone").parent(".form-item").addClass("error").find(".message").html("请输入有效的11位电话号码");
        }else{
            $("#phone").parent(".form-item").removeClass("error");
        }
        //姓名
        if(name==""){
            validate=false;
            $("#name").parent(".form-item").addClass("error");
        }else{
            $("#name").parent(".form-item").removeClass("error");
        }
        //年龄
        if(age==""){
            validate=false;
            $("#age").parent(".form-item").addClass("error").find(".message").html("请填写宝贝的年龄");
        }else if(parseInt(age)<3||parseInt(age)>18){
            validate=false;
            $("#age").parent(".form-item").addClass("error").find(".message").html("宝贝的年龄应在3-18岁之间");
        }else{
            $("#age").parent(".form-item").removeClass("error");
        }

        if(validate){
            //舜飞接口
            _CWiQ.push(['_trackClick', 1]);

            $.ajax({
                type:'POST',
                url: 'http://mm.jnrise.cn/loading/server/info',
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                data:{
                    'phone':phone,
                    'name':name,
                    'age':age,
                    'gender':gender,
                    'school':school,
                    'channel':request["channel"],
                    'original':request["original"],
                    'type1':request["type1"],
                    'type2':request["type2"]
                },
                dataType: 'json',
                success: function(data){
                    $(".modal").show();
                    $(".main .form-text").val("");
                    //console.log(data);
                },
                error: function(xhr){
                    console.log(xhr);
                }
            });
        }
    });
    //关闭modal
    $(".modal").click(function(){
        $(this).hide();
    });
});

function getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            if(!(strs[i].split("=")[1].indexOf( "%" )<0)){
                theRequest[strs[i].split("=")[0]]=unescape(decodeURI(strs[i].split("=")[1]));
            }else{
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
    }
    return theRequest;
}
function checkPhone(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
