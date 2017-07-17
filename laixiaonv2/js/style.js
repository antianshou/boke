//返回按钮
$(function(){
	$(".head_text1,.prev_img").click(function(){
		 history.go(-1);
	})
})
//弹框部分
$(function(){
	$(".cancel_btn,.ensure_btn").click(function(){
		$(".bounced").css("display","none");
	})
	$(".delete_img,.tel_btn,.attention2").click(function(){
		$(".bounced").css("display","block");
		index = $(this).index();
	})
})

//商品搜索
$(function(){
	$(".search_type").click(function(){
		$(".search_bounced").toggle();
	})
	$(".bounced_goods,.bounced_shop").click(function(){
		var str = $(this).text();
		$(".type_shop").text(str);
		$(".search_bounced").css("display","none");
	})
})

//倒计时
if( $('div').hasClass("time_num") || $('div').hasClass("time_num2")){
	$(function(){
		countDown("2017/10/8 10:00:00");
	});
}
function countDown(time,div){
	var end_time = new Date(time).getTime(),//月份是实际月份-1
	sys_second = (end_time-new Date().getTime())/1000;
	var timer = setInterval(function(){
		if (sys_second > 1) {
			sys_second -= 1;
			var day = Math.floor((sys_second / 3600) / 24);
			var hour = Math.floor((sys_second / 3600) % 24);
			var minute = Math.floor((sys_second / 60) % 60);
			var second = Math.floor(sys_second % 60);
			var day = day<10?"0"+day:day;
			var hour = hour<10?"0"+hour:hour;
			var minute = minute<10?"0"+minute:minute;
			var second = second<10?"0"+second:second;
			var arr = [hour,minute,second];
			for(var i = 0;i<3;i++){
				var num = 2*i;
				if($('div').hasClass("time_num")){
					$(".time_num").eq(num).text(String(arr[i]).substring(0,1));
					$(".time_num").eq(num+1).text(String(arr[i]).substring(1,2));
				}
				if($('div').hasClass("time_num2")){
					$(".time_num2").eq(num+2).text(String(arr[i]).substring(0,1));
					$(".time_num2").eq(num+3).text(String(arr[i]).substring(1,2));
					$(".time_num2").eq(0).text(String(day).substring(0,1));
					$(".time_num2").eq(1).text(String(day).substring(1,2));
//					console.log($(".time_num2").eq(0))
				}
			}
		} else { 
			clearInterval(timer);
		}
	}, 1000);
}

//供货商
//$(".distribution_order").click(function(){
//	$(this).css("display","none").siblings(".order_btn").css("display","block");
//})
//$(".order_close").click(function(){
//	$(".order_btn").css("display","none").siblings(".distribution_order").css("display","block");
//})

//轮播

if(document.getElementById('lunbotu')){
	var elem = document.getElementById('lunbotu');
	window.mySwipe = Swipe(elem, {
	     auto: 3000,        //每隔3000ms，自动轮播一次
	//        回调函数表示没做完一个轮播，就执行下面的内容
	     callback: function(index, element) {
	//             console.log(index);           //在控制台输出index的值
	//             让自己的li添加cur类，其他的兄弟li移除cur类，也就是一种排他
	         $(".yuandian li").eq(index).addClass("cur").siblings().removeClass("cur");
	     }
	});
	//    点击小圆点，图片会有一个slide的效果
//	$('.yuandian li').click(function(){
//	    mySwipe.slide($(this).index());
//	});
}


//选中状态

$(".manage_check").click(function(){
	if($(this).attr("src")=="../../img/uncheck.png"){
		$(this).attr("src","../../img/check.png");
	}else{
		$(this).attr("src","../../img/uncheck.png");
	}
})
$(".manage2_footer_img").click(function(){
	if($(".manage_check").attr("src")=="../../img/uncheck.png"){
		$(".manage_check").attr("src","../../img/check.png");
		$(this).attr("src","../../img/check.png");
	}else{
		$(".manage_check").attr("src","../../img/uncheck.png");
		$(this).attr("src","../../img/uncheck.png");
	}
})

//验证码倒计时
$(".send_code").click(function(){
	var num = 60;
	$(this).css("display","none")
	$(".send_code2").text("60s后重新发送").css("display","block");
	timer = setInterval(function(){
		num = --num;
		var str = num+"s后重新发送"
		$(".send_code2").text(str);
//		console.log(str);
		if(num < 0){
			$(".send_code").css("display","block");
			$(".send_code2").css("display","none");
			clearInterval(timer);
		}
	},1000)
})

//------------------------------接口------------------------
//登录
var sid;
$("#register").click(function(){
	var mobile = $(".tel_ipt").val();
	var psd = $(".psd_ipt").val();
	$.ajax({
	    type: 'POST',
	    url:'http://172.16.35.242:8080/distribution/api/user/login',
	    data: {
	   		mobile:mobile,
	    	password:psd
	    },
	    success:function(data){     
	      var str = data.msg;
	      sid = data.data;
	      localStorage.setItem("key", sid); 
	      if(str == "登录成功"){
	      	window.open("http://127.0.0.1:8020/laixiaonv2/index.html","_self")
	      } 
	    },
	    dataType:'json'
	});
})