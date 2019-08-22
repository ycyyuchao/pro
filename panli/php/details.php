<?php 
	require 'conn.php';
	$id=$_GET['sid'];

	$result=mysql_query("select * from details where sid='$id'");

	echo json_encode(mysql_fetch_array($result,MYSQL_ASSOC));
 ?>