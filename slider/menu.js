$(document).ready(function(){

$('.contain-figure').click(function(){
	$(this).find('figcaption').toggleClass('rester');
	$(this).siblings().find('figcaption').removeClass('rester');
})


})