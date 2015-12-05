    $("#as ul li").hover(function(){
            var index=$(this).index();
			$(this).addClass("first").siblings().removeClass("first");		
			$("#box div.img ul li").eq(index).css({"display":"block","opacity":"0"}).animate({"opacity":1},500).siblings().css("display","none");
		});
   