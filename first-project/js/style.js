//投资人
$(function(){
	$(".li_click").click(function(){
		$(this).siblings().toggle();
	})
})

//投资人推荐
$(".data_recommended,.release").click(function(){
	$(".popup_box").css("display","block");
})
$(".popup_btn").click(function(){
	$(".popup_box").css("display","none");
})
$(".popup_choose").click(function(){
	$(this).addClass("popup_active");
	$(this).siblings().removeClass("popup_active");
})


//投资人排序列表点击
$(".sort span").click(function(){
	$(this).addClass("sort_active");
	$(this).siblings("span").removeClass("sort_active");
})

//项目详细列表点击切换
$(function(){
	$(".detail_nav li").click(function(){
		$(this).addClass("nav_active");
		$(this).siblings().removeClass("nav_active");
		var index = $(this).index();
		$(".detail_box").eq(index).siblings(".detail_box").addClass("box_active");
		$(".detail_box").eq(index).removeClass("box_active");
	})
})

//申请查看
$(".apply").click(function(){
	$(".popup_box").css("display","block");
})
$(".popup_btn").click(function(){
	$(".popup_box").css("display","none");
})


//单选点击
$(".radio").click(function(){
	var ele = $(this).children().children(".label_img");
	 $(this).children().children(".label_img").addClass("radio_active");
	 $(this).siblings().children().children(".label_img").removeClass("radio_active")
})
$(".checkbox").click(function(){
	if( $(this).children().children().hasClass("checkbox1_active")){
		 $(this).children().children(".label_img1").removeClass("checkbox1_active");
	}else{
		$(this).children().children(".label_img1").addClass("checkbox1_active")
	}
	
	 console.log( $(this).children().children().hasClass("checkbox1_active"))
})

//回到顶部
$(function () {
    $(window).on('scroll',function () {
        var $scroll=$(this).scrollTop();
        if ($scroll>=400){
            $('.top').show();
        }else {
            $('.top').hide();
        }
    });
    $('.top').on('click',function () {
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:0
        })
    }) ;
});

//个人切换
$(function(){
	$(".pro_nav li").click(function(){
		var index = $(this).index();
		$(this).addClass("nav_active").siblings().removeClass("nav_active");
		$(".all").eq(index).addClass("all_display").siblings(".all").removeClass("all_display");
	})
})

// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
addressMap(120.137586,30.279106,"学院路28号德力西大厦3号楼201室");
function addressMap(x,y,str){
	var point = new BMap.Point(x,y);
	map.centerAndZoom(point,12);
	// 创建地址解析器实例
	var myGeo = new BMap.Geocoder();
	myGeo.getPoint(str, function(point){
		if (point) {
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point));
		}else{
			alert("您选择地址没有解析到结果!");
		} 
	}, str);
}

/*腾讯地图*/
//addressMap(120.137586,30.279106);
//function addressMap(x,y){
//		 var center = new qq.maps.LatLng(x,y);
//	    var map = new qq.maps.Map(document.getElementById('allmap'),{
//	        center: center,
//	        zoom: 13
//	    });  
//	    //创建marker
//	    var marker = new qq.maps.Marker({
//	        position: center,
//	        map: map
//	    });
//	}
	
