<?php
	require "conn.php";//引入数据库连接的文件
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from user where username='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 'false';//有重复
	}else{
		echo 'true';//没有重复
	}
	
	if(isset($_POST['submit']) && $_POST['submit']=="立即注册"){
		$user=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		$query="insert user(sid,username,password,email,regdate) values(null,'$user','$pass','$email',now())";
		mysql_query($query);
		header('location:http://10.31.156.76/server/Second/panli/dist/login.html');
	}
?>