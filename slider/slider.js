$(document).ready(function(){

	var slideCount = $(".slide-image figure").length;
	var widthFigure = $(".slide-image figure").width();
	var slideWidth = slideCount*widthFigure;
	var counter = 0;

	for(var i = 0; i<slideCount; i++){
		$('.dots').append('<div class="cercle" id="image-'+i+'"></div>');
	}
	
	$('.dots').find('.cercle').first().addClass('active');

	$('.dots .cercle').click(pagination);
	$('.next-slide').click(next);
	$('.prev-slide').click(prev);
		
	var autoplay = setInterval(next,4000);
	/*$('.next-slide,.prev-slide').hover(function(){
		clearInterval(autoplay);
	});*/

	function next(){
		if(counter >= slideCount-1){
			counter = 0;
		}else
		{
			counter = counter + 1;
		}

			$('.dots .cercle').removeClass('active');
			$('.slide-image').animate({left : -widthFigure },2000,function(){
				$('.cercle:nth-child('+(counter+1)+')').addClass('active');
				$(this).css("left",0).find('figure').last().after($(this).find('figure').first());

			});
		
	}

	function prev(){
		if(counter <= 0){
			counter = 0;
		}else{
			counter = counter - 1;
		}
		
		$('.dots .cercle').removeClass('active');
		$('.slide-image').animate({left : -counter*widthFigure },2000,function(){
			$('.cercle:nth-child('+(counter+1)+')').addClass('active');
/*			$(this).css("left",0).find('figure').first().before($(this).find('figure').last());
*/		});
		
	}

	 function pagination(){
	 	var position = $(this).index();
	 	$('.cercle').removeClass("active");
	 	$(this).addClass('active');
	 	$('.slide-image').animate({left : -position*widthFigure},2000);
	 	
	 	counter = position;
	}

});