<?php  
	require "conn.php";

	$title1=$_GET['w_title1'];
	$question1=$_GET['w_question1'];
	$solve1=$_GET['w_solve1'];
	$id1=$_GET['w_sid1'];
	$time1=$_GET['w_time1'];
	mysql_query("update infomation set title='$title1',question='$question1',solve='$solve1' ,time=now() where sid=$id1 ");

?>