$(document).ready(function(){

	liens = $('.affiche-liste');
	console.log(liens);

	liens.click(function(){
		$(this).next().toggle();

	});

})