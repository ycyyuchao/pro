!function(o){o.ajax({url:"http://10.31.156.76/server/Second/panli/php/indeximgdata.php",dataType:"json"}).done(function(n){var i=o(".banner ul"),e="";o.each(n.lunbodata,function(n,i){e+='<li><a href="#"><img src='+i.url+"></a></li>"}),o(e).appendTo(i)}),o.ajax({url:"http://10.31.156.76/server/Second/panli/php/indeximgdata.php",dataType:"json"}).done(function(n){var i=o(".content .main"),e="";o.each(n.indeximgdata,function(n,i){e+='<div><a  class="aBtn" target="_blank" href="details.html?sid='+i.sid+'"><img data-original='+i.url+"></a></div>"}),o(e).appendTo(i),o("img").lazyload({threshold:200})})}(jQuery),function(){var n=[];getCookie("cartnum")&&(n=getCookie("cartnum").split(","),$(".shopcart a em").html("("+n.length+")")),getCookie("UserName")?($(".header .hy").hide(),$(".header .back").show()):($(".header .hy").show(),$(".header .back").hide())}(jQuery),jQuery,$(".header .back a").on("click",function(){var n=getCookie("UserName");delCookie("UserName",n),$(".header .hy").show(),$(".header .back").hide()}),function(){var n=$(".section .banner"),i=($(".section .banner ul"),$(".section .banner ol li")),e=$(".section .banner .btnleft"),o=$(".section .banner .btnright"),t=null,a=0;function c(){i.eq(a).addClass("click").siblings().removeClass("click"),$(".section .banner ul li").eq(a).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})}i.on("click",function(){a=$(this).index(),c()}),o.on("click",function(){a++,c(),a>=i.length-1&&(a=-1)}),e.on("click",function(){a--,c(),-1==a&&(a=i.length-1)}),n.hover(function(){o.show(),e.show(),clearInterval(t)},function(){o.hide(),e.hide(),t=setInterval(function(){o.click()},2e3)}),t=setInterval(function(){o.click()},2e3)}(jQuery),jQuery,$(window).on("scroll",function(){400<$(window).scrollTop()?($(".fixedtoplogo").show(),$(".topnav").animate({top:0}).css({position:"fixed",top:0})):($(".fixedtoplogo").hide(),$(".topnav").css({position:"relative"}))}),jQuery,$(".notice .title h6").on("click",function(){$(this).addClass("active").siblings(".notice .title h6").removeClass("active"),$(".notice ul").eq($(this).index()).show().siblings(".notice ul").hide()}),jQuery,$(window).on("scroll",function(){1200<$(window).scrollTop()?($("#loutinav .third").show(),$("#loutinav .last").show(),$("#loutinav .dd").show()):($("#loutinav .third").hide(),$("#loutinav .last").hide(),$("#loutinav .dd").hide()),$.each($("#loutinav .louti li"),function(n,i){$(this).hover(function(){$(this).children("span").css({display:"none"}),$(this).children("a").css({display:"block"}),1==n&&$(this).children("div").css({display:"block"})},function(){$(this).children("span").css({display:"block"}),$(this).children("a").css({display:"none"}),1==n&&$(this).children("div").css({display:"none"})})})}),function(){var n=$("#gg");$(".close").on("click",function(){n.hide()});var i=$(".header .focuswx");i.hover(function(){i.children("div").show()},function(){i.children("div").hide()});var e=$(".header .display");e.hover(function(){e.children("ul").show()},function(){e.children("ul").hide()}),$("#loutinav .third").on("click",function(){$("body,html").stop().animate({scrollTop:0},500)}),setInterval(function(){$(".header .japan .new ").animate({top:-16},450,function(){$(".header .japan .new ").animate({top:-8},50,function(){$(".header .japan .new ").animate({top:-12},50,function(){$(".header .japan .new ").animate({top:-8},450)})})})},1e3),$(".content").on("mouseover","img",function(n){$(this).stop().animate({left:-2},50,function(){$(this).stop().animate({left:0})})})}(jQuery),jQuery;