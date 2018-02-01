$(document).ready(function(){

	$('#anime').click(function(){
		setInterval(function(){
			$('#DroiteGauche').animate({marginLeft: '450px'});
			$('#DroiteGauche').animate({marginTop: '150px'});
			$('#DroiteGauche').animate({marginLeft: '0px'});
			$('#DroiteGauche').animate({marginTop: '0px'});
		},1000)
		
	})
	



})