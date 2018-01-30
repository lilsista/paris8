$(document).ready(function(){


	var pos = 0;
	/*$(".prev").css("display","none");*/
	
	var divWidth = $('.slider').width();
	var marginLeft = parseInt($('#slider-list figure').css("margin-left"));
	var border = parseInt($('#slider-list figure').css("border-width"))*2;
	var figure = $('#slider-list figure').width() + marginLeft + border;
	var nbImage = $('#slider-list img').length;
	
	$('.next').click(function(e){
		pos = pos + 100;
		nbImage = nbImage - Math.round(divWidth/figure);
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			if(nbImage <= Math.round(divWidth/figure)){
				$('next').off("click")
				/*$(".next").css("display","none");*/
			}
		});
	})

	$('.prev').click(function(e){
		$(".next").css('display','block');
		pos = pos - 100;
		nbImage = nbImage + Math.round(divWidth/figure);
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			if(pos <= 0){
				pos = 0;
			}
		});
	})

});