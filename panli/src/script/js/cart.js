;!function(){
//1.获取cookie，根据cookie的值，创建购物车商品列表
//商品列表的结构提前写好，隐藏在结构中
//对隐藏的结构进行不同赋值。
if(getCookie('UserName')){
        $('.top .verclome').hide();
        $('.top .back').show();
    }else{
        $('.top .verclome').show();
        $('.top .back').hide();
    }
    $('.top .back a').on('click',function(){
        var $name=getCookie('UserName');
        delCookie('UserName',$name);
        $('.top .verclome').show();
        $('.top .back').hide();
    })

if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(','); //存放sid数组
    var n = getCookie('cartnum').split(','); //存放num数组
    $.each(s, function(index, value) {
        createcart(value, n[index]);
    });
}

var sidarr = [];
var numarr = [];
function cookieToArray(){
    if(getCookie('cartsid')){
        sidarr=getCookie('cartsid').split(',');
    } 
    if(getCookie('cartnum')){
        numarr=getCookie('cartnum').split(',');
    }
}

//2.拼接商品列表
function createcart(sid, num) { //sid：图片的编号  num:商品的数量
    $.ajax({
        url: 'http://10.31.156.76/server/Second/panli/php/indeximgdata.php',
        dataType: 'json'
    }).done(function(data) {
        $.each(data.detailsdata, function(index, value) {
            if (sid == value.sid) { //图片的sid和数据里面的sid匹配
               var $clone = $('tr:hidden').clone(true); //对隐藏的模块进行克隆
                //console.log($clone);
                //都是赋值
                $clone.find('.secondtd').find('img').attr('src', data.detailsdata[index].url.split(',')[0]);
                $clone.find('.secondtd').find('img').attr('sid', data.detailsdata[index].sid);
                $clone.find('.secondtd').find('p').find('a').html(data.detailsdata[index].title);
                $clone.find('.thirdtd b').html(data.detailsdata[index].price);
                $clone.find('.jiajian').find('input').val(num);
                //计算价格,每个商品的价格
                var $dj1 = value.price*num; //获取单价
                $clone.find('.fortd').html($dj1 .toFixed(2)); //num：数量
                $clone.css('display', 'block'); //克隆的模块是隐藏，显示出来。
                $('table').append($clone); //追加
                /*var $dj1 = value.price*num;
                var str='';
                str+='<tr class="firsttr clear">'
                +'<td><input name="products"  type="checkbox" value="0"checked="checked"></td>'
                +'<td class="secondtd"><a href="#" class="img"><img src='+value.url.split(",")[0]+' sid='+value.sid+' ></a><p><a href="#">'+value.title+'</a></p></td>'
                +'<td class="thirdtd">￥<b>'+value.price+'</b></td><td class="jiajian"><a class="jian"title="减"></a><input type="text" value='+num+'><a class="jia" title="加"></a></td>'
                +'<td class="fortd" rowspan="2" style="width:80px">'+$dj1+'</td>'
                +'<td class="fivetd" rowspan="2" style="width:70px">￥0</td>'
                +'<td class="sixtd" rowspan="2"><a>删除</a></div></td></tr>';
                $('table').append(str);*/
                kong();//购物车是否为空
                totalprice();//总价和总数
            }
        });
    });
}


//商品列表(cookie)不存在，购物车为空
function kong() {
    if (getCookie('cartsid')) {
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}
kong();






//每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的选中数量
    //console.log($('tr:visible'))
    $('tr:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.fortd').html());
            countnum += parseInt($(this).find('.secondtr.thirdtd').find('input').val());   
        }
    });
    //赋值
    $('#totalProPrice').html('￥' + total.toFixed(2));
    $('#totalProPrice1').html('￥' + total.toFixed(2));
    $('#totalProPrice2').html('￥' + total.toFixed(2)) 
}

//修改数量的操作
//改变商品数量++
$('.jiajian .jia').on('click', function() {
    var $count = $(this).parents('.firsttr').find('.jiajian input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.firsttr').find('.jiajian input').val($count);
    $(this).parents('.firsttr').find('.fortd').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.jiajian .jian').on('click', function() {
    var $count = $(this).parents('.firsttr').find('.jiajian input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.firsttr').find('.jiajian input').val($count);
    $(this).parents('.firsttr').find('.fortd').html(singlegoodsprice($(this)));//改变后的价格
    console.log(singlegoodsprice($(this)))
    totalprice();
    //setcookie($(this));
});


//直接输入改变数量
$('.jiajian input').on('input', function() {
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
    $(this).parents('.firsttr').find('.fortd').html(singlegoodsprice($(this)));//改变后的价格
    console.log(singlegoodsprice($(this)))
    totalprice();
    //setcookie($(this));
});



//计算数量改变后单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.firsttr').find('.thirdtd b').html());
    var $cnum = parseInt(row.parents('.firsttr').find('.jiajian input').val());
    var dzj = ($dj * $cnum).toFixed(2);

    return dzj;
}

//9.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.firsttr').find('.secondtd img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.firsttr').find('.jiajian input').val();
    addCookie('cartnum', numarr.toString(), 7);
    console.log(sidarr);
    console.log($index);
    console.log(sidarr.indexOf($index));
    console.log(obj.parents('.firsttr').find('.jiajian input').val());
    console.log(numarr);
}


//全选
$('.allsel').on('change', function() {
    $('tr:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.allsel').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});

var $inputchecked = $('tr:visible').find('input:checkbox');//获取委托元素
$('table').on('change', $inputchecked, function() {
    var $inputs = $('tr:visible').find('input:checkbox'); //放内部
    if ($('tr:visible').find('input:checked').length == $inputs.size()) {
        $('.allsel').prop('checked', true);
    } else {
        $('.allsel').prop('checked', false);
    }
    totalprice();
});


//10.删除
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var $index=$.inArray(sid, sidarr);
    console.log($index);
    sidarr.splice($index, 1);//删除数组对应的值
    numarr.splice($index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}
//删除单个商品的函数(委托)
$('table').on('click', '.sixtd a', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
     $(this).first().parents('tr').remove();
   }
    delgoodslist($(this).first().parents('tr').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除全部商品的函数
$('.all .del a').on('click', function() {
    $('tr:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});



}(jQuery);