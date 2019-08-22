<?php  
	require "conn.php";

	$title=$_GET['w_title'];
	$question=$_GET['w_question'];
	$solve=$_GET['w_solve'];

	mysql_query("insert infomation values(null,'$title','$question','$solve',NOW())");

	echo "添加成功";
?>