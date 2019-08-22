<?php  
	require "conn.php";
	$updateid=$_GET['updateid'];
	$result=mysql_query("select * from infomation where sid=$updateid");
	$data=mysql_fetch_array($result,MYSQL_ASSOC);
	echo json_encode($data);
?>