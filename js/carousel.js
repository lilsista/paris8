$(document).ready(function(){

	/*$('.afficher').hide();
	$('.click').click(function(){
		$('.afficher').toggle(1000);
	})*/

	var pos = 0;
	$(".prev").css("display","none");
	var nbImage = $('#slider-list img').length;
	var divWidth = $('.slider').width();
	var figure = $('#slider-list figure').width() + (parseInt($('#slider-list figure').css("margin-left")))*2 + (parseInt($('#slider-list figure').css("border-width")))*2;
	
	$('.next').click(function(e){
		pos = pos + 100;
		nbImage = nbImage - Math.round(divWidth/figure);
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			$(".prev").css("display","block");
			if(nbImage<=Math.round(divWidth/figure)){
				$(".next").css("display","none");

			}		
			
			console.log(pos+" "+divWidth +" "+ $("#slider-list").css('width') +" "+nbImage);
			
		});
	})

	$('.prev').click(function(e){
		pos = pos - 100;
		nbImage = nbImage + Math.round(divWidth/figure);
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			$(".next").css("display","block");
			if(pos <= 0){
				$(".prev").css("display","none");
			}
			
			console.log(pos +" "+ $("#slider-list img").length +" "+ $(this).find('li:last-child p').text());	});
	})

});