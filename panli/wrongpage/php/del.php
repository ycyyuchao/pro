<?php  
	require "conn.php";

	$id=$_GET['id'];
	mysql_query("delete from infomation where sid=$id");
?>