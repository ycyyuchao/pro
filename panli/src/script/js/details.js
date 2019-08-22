;!function($){
	$sid=location.search.split('=')[1];
	$.ajax({
		type:'get',
		url:'http://10.31.156.76/server/Second/panli/php/details.php',
		dataType:'json',
		data:{
			sid:$sid
		}
	}).done(function(data){
		var $content=$('.detailscontent #list ul');
		var $str='';
		$(".detailscontent h3").text(data.title);
		$(".detailscontent .smallpic img").attr({
			src:data.url.split(',')[0],
			sid:data.sid});
		$(".detailscontent .bigscale img").attr({src:data.url.split(',')[0]});
		$(".detailsinfo .price").text(data.price);
		$(".d2 a").text(data.sellname);
		$str+='<li class="first"><img src='+data.url.split(',')[0]+'></li><li><img src='+data.url.split(',')[1]+'></li><li><img src='+data.url.split(',')[2]+' ></li><li><img src='+data.url.split(',')[3]+'></li><li class="last"><img src='+data.url.split(',')[4]+'></li>'
		$($str).appendTo($content);
		var $strtype='';

		$.each(data.colortype.split(','),function(index,value){
			$strtype+="<li><em></em>"+value+"</li>";
		})
		$($strtype).appendTo($(".d3 ul"))
			
		
	});
}(jQuery);

!function(){
	var numarr=[]
	if (getCookie('cartnum')) {
        numarr = getCookie('cartnum').split(','); 
        $('.cart a span').html('('+ numarr.length+')');
    }
    if(getCookie('UserName')){
    	$('#header .hy').hide();
    	$('#header .back').show();
    }else{
    	$('#header .hy').show();
    	$('#header .back').hide();
    }
}(jQuery);
!function(){
	$('#header .back a').on('click',function(){
		var $name=getCookie('UserName');
		delCookie('UserName',$name);
		$('#header .hy').show();
    	$('#header .back').hide();
	})
}(jQuery);


!function(){
	//底部时间效果
	function p(s) {
   		return s < 10 ? '0' + s: s;
	};
	var myDate = new Date();
	var $year=myDate.getFullYear();
	var $month=myDate.getMonth()+1;
	var $date=myDate.getDate(); 

	var $h=myDate.getHours();       //获取当前小时数(0-23)
	var $m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var $s=myDate.getSeconds();  

	//var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
	$('.footer_top .beijingtime').text($year+'-'+p($month)+"-"+p($date));
	$('.footer_top #BeijingTime .s1').text(p($h));
	$('.footer_top #BeijingTime .s2').text(p($m));
	$('.footer_top #BeijingTime .s3').text(p($s));
	

}(jQuery);


!function(){
	//放大镜 

	var $detailsimg=$('.detailsimg');
	var $spic=$('.detailsimg .smallpic');
	var $sf=$('.detailsimg .smallscale');
	var $bf=$('.detailsimg .bigscale');
	var $ul=$('.detailsimg #list ul');
	var $bigpic=null;
	var $bili=0;
	var $l=0;
	var $t=0;
	$spic.hover(function(){
		$bf.show();
		$sf.show();
		$bigpic=$('.detailsimg .bigpic');
		$sf.width($spic.innerWidth()*$bf.innerWidth()/$bigpic.innerWidth());
		$sf.height($spic.innerHeight()*$bf.innerHeight()/$bigpic.innerHeight());
		$bili=$bigpic.innerWidth()/$spic.innerWidth();
		
	},function(){
		$bf.hide();
		$sf.hide();
	});
	$spic.mousemove(function(ev){
  		 $l=ev.clientX-$spic.offset().left-$sf.width()/2;
		 $t=ev.pageY-$spic.offset().top-$sf.height()/2;
			if($l<0){
				$l=0;
			}else if($l>=$spic.innerWidth()-$sf.innerWidth()){
				$l=$spic.innerWidth()-$sf.innerWidth()-2;
			}
			if($t<0){
				$t=0;
			}else if($t>=$spic.innerHeight()-$sf.innerHeight()){
				$t=$spic.innerHeight()-$sf.innerHeight()-2;
			}
  		$sf.css({
  			"left":$l,
  			"top":$t
  		});
  		$bigpic.css({
  			"left":-$l*$bili,
  			"top":-$t*$bili
  		})

	})
	$ul.on('click',"li",function(){
  		var $src=$(this).children('img').attr("src");
  		$spic.children('img').attr("src",$src);
  		$bigpic.attr("src",$src);
  	})
}(jQuery)

!function(){
	//顶部滑过小效果
	$('.middle .rightlogo').hover(function(){
		$(this).find('em').show();
	},function(){
		$(this).find('em').hide();
	});
	$('.navtop .center ul .last').hover(function(){
		$(this).find('div').show();
	},function(){
		$(this).find('div').hide();
	})
}(jQuery);

!function(){
	//购物车

	//点击加减数量增加减少
	$('.buynum .jia').on('click',function(){
		var $num=$('.buynum input').val();
		$num++;
		if($num===99){
			$num=99;
			return false;
		}
		$('.buynum input').val($num);

	})
	$('.buynum .jian').on('click',function(){
		var $num=$('.buynum input').val();
		$num--;
		if($num==0){
			$num=0;
			return false;
		}
		$('.buynum input').val($num);
	})
	$('.buynum input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
});

	var sidarr = []; //将取得cookie的编号存放到此数组
    var numarr = []; //将取得cookie的数量存放到此数组
    //获取cookie,值变成数组
    function getcookievalue() {
        if (getCookie('cartsid') && getCookie('cartnum')) {
            sidarr = getCookie('cartsid').split(','); 
            numarr = getCookie('cartnum').split(','); 
        }
    }
    //3.判断是否是第一次添加
    $('.d7 .btn').on('click', function() {
    	 location.reload();
        /*var $sid = $(this).parents('.detailsinfo').prev('.detailsimg').find('.scaleimg').attr('sid');
        console.log($sid);*/
        var $sid=location.search.split('=')[1];
        getcookievalue();
        if ($.inArray($sid, sidarr) != -1) { //存在
			if (getCookie('cartnum') == '') {
				var num = parseInt($('.buynum input').val());
				numarr[$.inArray(sid, sidarr)] = num;
				addCookie('cartnum', numarr.toString(), 10); //修改后的结果
				sidarr[$.inArray(sid, sidarr)] = sid; //将当前id添加到对应的位置。
				addCookie('cartsid', sidarr.toString(), 10); //将整个数组添加到cookie
			} else {
				//走这里代码已经存在cookie,数量累加，取出cookie的数量+当前的输入的数量
				var num = parseInt(numarr[$.inArray($sid, sidarr)]) + parseInt($('.buynum input').val()); //当前的值和cookie里面的值(和sid对应的值)进行累加
				numarr[$.inArray($sid, sidarr)] = num; //将新的数量，覆盖原先的值。
				addCookie('cartnum', numarr, 10);
			}
        } else { //不存在
            sidarr.push($sid); //将sid追加到数组
            addCookie('cartsid', sidarr, 10); //存cookie
            numarr.push($('.buynum input').val()); //将表单的值追加到数组
            addCookie('cartnum', numarr, 10); //存cookie
        }

    });
}(jQuery)