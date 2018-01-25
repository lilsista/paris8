$(document).ready(function(){

	/*$('.afficher').hide();
	$('.click').click(function(){
		$('.afficher').toggle(1000);
	})*/

	var pos = 0;
	$('.prev').click(function(e){
		pos = pos + 20;
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			console.log(pos +" "+ $("#slider-liste img").length);
		});
	})

	$('.next').click(function(e){
		pos = pos - 20;
		e.preventDefault();
		$("#slider-list").animate({left : "-"+pos+"%"}, 2000  ,function(){
			console.log(pos);
		});
	})

});