<?php  
	require "conn.php";

	$lunbo=mysql_query("select * from banner");
	$lunboarr=array();
	for($i=0;$i<mysql_num_rows($lunbo);$i++){
		$lunboarr[$i]=mysql_fetch_array($lunbo,MYSQL_ASSOC);
	}

	$indeximg=mysql_query("select * from indeximg");
	$indeximgarr=array();
	for($i=0;$i<mysql_num_rows($indeximg);$i++){
		$indeximgarr[$i]=mysql_fetch_array($indeximg,MYSQL_ASSOC);
	}

	$details=mysql_query("select * from details");
	$detailsarr=array();
	for($i=0;$i<mysql_num_rows($details);$i++){
		$detailsarr[$i]=mysql_fetch_array($details,MYSQL_ASSOC);
	}

	
	//定义一个类。
	class indexdata{

	}
	$index=new indexdata();//实例化对象
	//给成员赋值。
	$index->lunbodata=$lunboarr;
	$index->indeximgdata=$indeximgarr;
	$index->detailsdata=$detailsarr;
	echo json_encode($index);//输出最终的数组
	
 ?>