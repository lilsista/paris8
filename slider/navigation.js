$(document).ready(function(){

	//largeur et hauteur 
	var hauteurFenetre = $(window).height();
	var hauteurDocument = $(document).height();
	var largeurFenetre = $(document).width();
	var hauteurContaint = $('.contain').height();

	var largeurGalerie = $('#conteneur-block').width();
	var hauteurGalerie = $('#conteneur-block').height();

	var largeurSlider = $('#slideShow').width();
	var hauteurSlider = $('#slideShow').height();
	var bordureSlider = parseInt($('#slideShow').css("border-width"));


	var largeurAnime = $('#contient-animation').width();
	var hauteurAnime = $('#contient-animation').height();
	var bordureAnime = parseInt($('#contient-animation').css('border-width'));

	var hauteurMenu = $('.contient-navigation').height();

	//position des block

	var galerieX = $('#conteneur-block').offset().left;
	var galerieY = $('#conteneur-block').offset().top;

	var sliderX = $("#slideShow").offset().left;
	var sliderY = $('#slideShow').offset().top - bordureSlider;

	var animationX = $('#contient-animation').offset().left;
	var animationY = $('#contient-animation').offset().top - bordureAnime;

	var menuX = $('.contient-navigation').offset().left;
	var menuY = $('.contient-navigation').offset().top;

	var galeriRight  = galerieX+largeurGalerie;
	var sliderRight = sliderX+largeurSlider;
	var animationRight = animationX+largeurAnime;

	$('.contient-navigation').css({top : galerieY});
	
	//alert(galerieY);

	//console.log(scrollTop);

	$(window).scroll(function() {	
       var y = $(window).scrollTop();
       var position = y + hauteurFenetre
       //alert(position);
     	if(y >0 && y<sliderY){
     		$('.contient-navigation').css({left : 10});
     	}else{
     		if( y > galerieY && y < sliderY+hauteurSlider){
     			$('.contient-navigation').css({left : sliderRight + 10});
     		}else{
     			$('.contient-navigation').css({ left : 10});
     				
     		}
     	}
      
    })






})