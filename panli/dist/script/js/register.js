$(function(){$("#form1").validate({onfocusout:function(e){$(e).valid()},rules:{username:{required:!0,minlength:2,maxlength:10,remote:{url:"http://10.31.156.76/server/Second/panli/php/reg.php",type:"post",data:{name:function(){return $("#username").val()}}}},password:{required:!0,minlength:6,maxlength:18},email:{required:!0,email:!0},checkbox:{required:!0}},messages:{username:{required:"用户名不能为空",minlength:"用户名不能小于2",maxlength:"用户名不能大于10",remote:"用户名已存在"},password:{required:"密码不能为空",minlength:"密码最少为6位数",maxlength:"密码不能超过18位数"},email:{required:"电子邮箱不能为空",email:"你输入的格式有误"},checkbox:{required:"请同意注册协议"}}})}),$.validator.setDefaults({success:function(e){e.text("格式正确").css("color","green").addClass("success")}});