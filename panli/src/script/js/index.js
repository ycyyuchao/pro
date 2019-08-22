;!function() {
	//banner数据
	$.ajax({
		url: 'http://10.31.156.76/server/Second/panli/php/indeximgdata.php',
		dataType: 'json'
	}).done(function(data) {
		var $bannerul = $('.banner ul');
		var $bannerstr = '';
		$.each(data.lunbodata, function(index, value) {
			$bannerstr += '<li><a href="#"><img src=' + value.url + '></a></li>'
		});
		$($bannerstr).appendTo($bannerul);
	});
	//商品数据
	$.ajax({
		url: 'http://10.31.156.76/server/Second/panli/php/indeximgdata.php',
		dataType: 'json'
	}).done(function(data) {
		var $main = $('.content .main');
		var $str = '';
		$.each(data.indeximgdata, function(index, value) {
			$str += '<div><a  class="aBtn" target="_blank" href="details.html?sid=' + value.sid + '"><img src=' + value.url + '></a></div>'
		});

		$($str).appendTo($main);
	})
}(jQuery);
! function() {
	var numarr = []
	if (getCookie('cartnum')) {
		numarr = getCookie('cartnum').split(',');
		$('.shopcart a em').html('(' + numarr.length + ')');
	}
	//console.log(numarr.length)
	if (getCookie('UserName')) {
		$('.header .hy').hide();
		$('.header .back').show();
	} else {
		$('.header .hy').show();
		$('.header .back').hide();
	}
}(jQuery);
! function() {
	$('.header .back a').on('click', function() {
		var $name = getCookie('UserName');
		delCookie('UserName', $name);
		$('.header .hy').show();
		$('.header .back').hide();
	})
}(jQuery);
! function() {
	//轮播效果
	var $banner = $('.section .banner');
	var $ul = $('.section .banner ul');
	var $btns = $('.section .banner ol li');
	var $btnleft = $('.section .banner .btnleft');
	var $btnright = $('.section .banner .btnright');
	var $timer = null;
	var $currentindex = 0;

	$btns.on('click', function() {
		$currentindex = $(this).index();
		tabswitch();
	})
	$btnright.on('click', function() {
		$currentindex++;
		tabswitch();
		if ($currentindex >= $btns.length - 1) {
			$currentindex = -1;
		}
	})
	$btnleft.on('click', function() {
		$currentindex--;
		tabswitch();
		if ($currentindex == -1) {
			$currentindex = $btns.length - 1;
		}

	});
	$banner.hover(function() {
		$btnright.show();
		$btnleft.show();
		clearInterval($timer);
	}, function() {
		$btnright.hide();
		$btnleft.hide();
		$timer = setInterval(function() {
			$btnright.click();
		}, 2000);
	});
	$timer = setInterval(function() {
		$btnright.click();
	}, 2000);

	function tabswitch() {
		$btns.eq($currentindex).addClass('click').siblings().removeClass('click');
		$(".section .banner ul li").eq($currentindex).stop().animate({
			opacity: 1
		}).siblings().stop().animate({
			opacity: 0
		});
	}
}(jQuery);
! function() {
	//顶部悬浮
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 400) {
			$('.fixedtoplogo').show();
			$('.topnav').animate({
				top: 0
			}).css({
				"position": "fixed",
				"top": 0
			})
		} else {
			$('.fixedtoplogo').hide();
			$('.topnav').css({
				"position": "relative"
			});
		}
	});
}(jQuery);
! function() {
	//tab切换
	$('.notice .title h6').on("click", function() {
		$(this).addClass('active').siblings('.notice .title h6').removeClass('active');
		$('.notice ul').eq($(this).index()).show().siblings('.notice ul').hide();
	})
}(jQuery);
! function() {
	//楼梯
	$(window).on('scroll', function() {
		var $scrolltop = $(window).scrollTop();
		if ($scrolltop > 1200) {
			$('#loutinav .third').show();
			$('#loutinav .last').show();
			$('#loutinav .dd').show();
		} else {
			$('#loutinav .third').hide();
			$('#loutinav .last').hide();
			$('#loutinav .dd').hide();
		}
		$.each($('#loutinav .louti li'), function(index, value) {
			$(this).hover(function() {
				$(this).children('span').css({
					'display': 'none'
				});
				$(this).children('a').css({
					'display': 'block'
				});
				if (index == 1) {
					$(this).children('div').css({
						'display': 'block'
					})
				}
			}, function() {
				$(this).children('span').css({
					'display': 'block'
				});
				$(this).children('a').css({
					'display': 'none'
				});
				if (index == 1) {
					$(this).children('div').css({
						'display': 'none'
					})
				}
			});

		});
	});
}(jQuery);
! function() {
	//广告弹出效果
	var $gg = $("#gg");
	var $close = $(".close");
	$close.on('click', function() {
		$gg.hide();
	});
	//顶部微信滑过效果
	var $focuswx = $(".header .focuswx");
	$focuswx.hover(function() {
		$focuswx.children('div').show();
	}, function() {
		$focuswx.children('div').hide();
	});
	//顶部帮助中心滑过
	var $diaplay = $(".header .display");
	$diaplay.hover(function() {
		$diaplay.children('ul').show();
	}, function() {
		$diaplay.children('ul').hide();
	});
	//回到顶部
	$('#loutinav .third').on('click', function() {
		var $speed = 500; //滑动的速度
		$('body,html').stop().animate({
			scrollTop: 0
		}, $speed)
	});
	//淘日本图标动态效果
	setInterval(function() {
		$('.header .japan .new ').animate({
			top: -16
		}, 450, function() {
			$('.header .japan .new ').animate({
				top: -8
			}, 50, function() {
				$('.header .japan .new ').animate({
					top: -12
				}, 50, function() {
					$('.header .japan .new ').animate({
						top: -8
					}, 450);
				});
			});
		})
	}, 1000);
	//滑过图片
	$(".content").on("mouseover", "img", function(ev) {
		$(this).stop().animate({
			left: -2
		}, 50, function() {
			$(this).stop().animate({
				left: 0
			});
		});
	})
}(jQuery);