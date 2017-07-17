$(function(){
	//失焦聚焦边框颜色变换
	$(".input_name").focus(function(){
		$(this).parent().css("border-color","#1ba2dc");
	})
	$(".input_name,.textarea").blur(function(){
		$(this).parent().css("border-color","#cccccc");
	})
	$(".textarea").focus(function(){
		$(this).parent().css("border-color","#f55847");
	})
//	$(".textarea").blur(function(){
//		$(this).parent().css("border-color","#cccccc");
//	})
	$(".city_nav li").click(function(){
		$(this).addClass("city_active");
		$(this).siblings().removeClass("city_active");
		var index = $(this).index();
		$(".city_detail").eq(index).removeClass("nav_active");
		$(".city_detail").eq(index).siblings(".city_detail").addClass("nav_active");
	})
	$(".city").click(function(){
		$(".city_choose").toggle();
		$(".stage_choose").hide();
	})
	$(".stage").click(function(){
		$(".stage_choose").toggle();
	})
	$(".stage_choose li").click(function(){
		$(".stage_choose").hide();
		var str = $(this).text();
		$(".stage").text(str);
		console.log(str)
	})
	$(".city_detail li").click(function(){
		$(".city_choose").hide();
		var str = $(this).text();
		$(".city").text(str);
		$(".city").css({"background-color":"#f6f6f6","color":"#000"});
	})
})