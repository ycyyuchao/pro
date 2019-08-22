!function(){
	var submit=document.querySelector('#btn');
	var submit1=document.querySelector('#btn1');


	var title=document.querySelector('#title');
	var question=document.querySelector('#question');
	var solve=document.querySelector('#solve');

	var title1=document.querySelector('#title1');
	var question1=document.querySelector('#question1');
	var solve1=document.querySelector('#solve1');


	var tbody=document.querySelector('tbody');




	//1.点击提交问题按钮，将数据提交到数据库里面。
	submit.onclick=function(){
		ajax({
			url:'php/insert.php',
			data:{
				w_title:title.value,
				w_question:question.value,
				w_solve:solve.value
			},
			success:function(){
				location.reload();
			}
		})
	};


	//将数据渲染出来
	ajax({
		url:'php/data.php',
		success:function(d){
			var arr=JSON.parse(d);
			var tablehtml='';
			for(var i=0;i<arr.length;i++){
				tablehtml+='<tr index="'+arr[i].sid+'">';
				for(var j in arr[i]){
					tablehtml+='<td class="scale">'+arr[i][j]+'</td>';
				}
				tablehtml+='<td><button class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span>删除</button> <input type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myModal1" value="修改"/></td>';
				tablehtml+='</tr>';
			}
			tbody.innerHTML=tablehtml;
		}
	});


	//点击删除按钮，数据删除--事件委托
	var currentid=null;
	tbody.onclick=function(ev){
		var ev=ev||window.event;
		var ele=ev.target||ev.srcElement;
		if(ele.nodeName=='BUTTON'){
			if(confirm('你确定要删除吗？')){
				ajax({
					url:'php/del.php',
					data:{
						id:ele.parentNode.parentNode.getAttribute('index')
					}
				})
				ele.parentNode.parentNode.parentNode.removeChild(ele.parentNode.parentNode)
			}
		}else if(ele.nodeName=='INPUT'){
			ajax({
				url:'php/update.php',
				data:{
					updateid:ele.parentNode.parentNode.getAttribute('index')
				},
				success:function(d){
					var obj=JSON.parse(d);
					console.log(obj);
					title1.value=obj.title;
					question1.value=obj.question;
					solve1.value=obj.solve;
					currentid=obj.sid;
				}
			})
		}
	}

	//点击确认修改按钮，重新提交数据，后端进行update更新
	submit1.onclick=function(){
		ajax({
			url:'php/update1.php',
			data:{
				w_title1:title1.value,
				w_question1:question1.value,
				w_solve1:solve1.value,
				w_sid1:currentid,
				//w_time1:new Date().toLocaleString(),

			},
			success:function(){
				location.reload();
			}
		})
	};
}();