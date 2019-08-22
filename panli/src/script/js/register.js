$(function() {
	$('#form1').validate({
		onfocusout: function(element) { $(element).valid(); },
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 10,
				remote: {
					url: "http://10.31.156.76/server/Second/panli/php/reg.php", //后台处理程序
					type: "post", //数据发送方式
					data: { //要传递的数据
						name: function() {
							return $("#username").val();
						}
					}
				}
			},
			password: {
				required: true,
				minlength: 6,
				maxlength:18
			},
			email: {
				required: true,
				email: true
			},
			checkbox:{
				required:true,
			}
		},
		messages: {
			username: {
				required: '用户名不能为空',
				minlength: '用户名不能小于2',
				maxlength: '用户名不能大于10',
				remote: '用户名已存在'
			},
			password: {
				required: '密码不能为空',
				minlength:'密码最少为6位数',
				maxlength:'密码不能超过18位数'
			},
			email: {
				required: '电子邮箱不能为空',
				email: '你输入的格式有误'
			},
			checkbox:{
				required:'请同意注册协议'
			}
		},
		/*showErrors: function(errorMap, errorList) {
            this.defaultShowErrors();
            for(var i = 0; i < errorList.length; i++) {
        		$(errorList[i].element).one("focus", function() {
                     $("label.error[for='" + (this.id ? this.id : this.name) + "']").remove();
                });
            }
        }*/

	});
});

$.validator.setDefaults({
	//添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)
	success: function(label) {
		label.text('格式正确').css('color', 'green').addClass('success');
	}
});
