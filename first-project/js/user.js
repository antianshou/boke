

$(function(){
	$(".pro_nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("nav_active").siblings().removeClass("nav_active");
		$(".all").eq(index).addClass("all_display").siblings(".all").removeClass("all_display");
	})
	
	$("input").focus(function(){
		$(this).parent().css("border-color","#1fbaf3")
	})
	$("input").blur(function(){
		$(this).parent().css("border-color","#cccccc")
	})
	$(".box_input2").click(function(){
		$(this).children(".box_seelect").toggle();
	})
	$(".box_input2 li").click(function(){
		var str = $(this).text();
		$(this).parent().siblings(".input_text").text(str)
	})
	$(".text_edit").click(function(){
		$(".main,.users").addClass("all");
		var index = $(this).index();
		$(".main1").eq(index).removeClass("all");
		$('body,html').scrollTop(0); 
	})
	$(".save_btn").click(function(){
		$(".main,.users").removeClass("all");
		var index = $(this).index();
		$(this).parent().parent().addClass("all");
	})
})


