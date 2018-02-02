$(document).ready(function(){

	// on récupére le nombre de position
	var position = $('.position').length;
	var elem = $('.position');

	var palier = [];

	for (var i = 0; i < elem.length; i++) {
		palier.push(elem[i].offsetTop);
	};

	console.log(palier);

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var petit = palier[0];
		for (var i = 0; i < palier.length; i++) {
			if(scroll > palier[i]){
				$('.contient-navigation ul').css({background : "#000"})
				petit = palier[i];
				if(palier[i] > petit){
					$('.contient-navigation ul').css({background : "red"})
				}
			}
		};
	})



})