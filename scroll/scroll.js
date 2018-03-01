$(document).ready(function(){

	
	var position = $('.position').length;
	var ul = $('.contient-navigation ul');
	var navigation = $(".contient-navigation");
	var widthNavigation = navigation.width();
	var elemPaire = $(' .section:nth-child(even) .position');
	var elemImpaire = $('.section:nth-child(odd) .position');
	var widthMain = $('.main').width();
	
	

	var palierPaire = [];
	var palierImpaire =[];

	for (var i = 0; i < elemPaire.length; i++) {
		palierPaire.push(elemPaire[i].offsetTop);
		
	};

	for (var i = 0; i < elemImpaire.length; i++) {
		palierImpaire.push(elemImpaire[i].offsetTop);
	};

	console.log(palierPaire);
	console.log(palierImpaire);

	console.log("bottom navigation :"+(navigation[0].offsetTop+navigation.height()) );

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var debut = palierImpaire[0];
		navigation.css({top : scroll});

		if(scroll <100){
			navigation.css({right : 0, top : 110+"px"});
		}
		
		/*if( scroll >100 && scroll < debut){
			ul.css({background : "#0a3168"});
			navigation.css({right : 0, top : 110+"px"});
		}*/

			console.log("scroll :"+scroll);
			console.log("bottom navigation :"+(navigation[0].offsetTop+navigation.height()) );

		for (var i = 0; i < palierImpaire.length; i++) {

			if(scroll > palierImpaire[i]){
				ul.css({background : "#000"});
				navigation.css({right : +(widthMain-widthNavigation)+"px", top : ($(elemImpaire[i]).height()+palierImpaire[i])+"px"});
			}	
			if(scroll > palierPaire[i]){
				ul.css({background : "#0a3168"});
				navigation.css({right : 0 ,top : ($(elemPaire[i]).height()+palierPaire[i])+"px"});
				
			}
				
		}

		var bottom =navigation[0].offsetTop+navigation.height();

		for (var i = 0; i < palierImpaire.length; i++) {
			if(bottom > palierPaire[i]){
				ul.css({background : "#000"});
				navigation.css({right : +(widthMain-widthNavigation)+"px", top : ($(elemImpaire[i]).height()+palierImpaire[i])+"px"});
			}
		};
		
	});


	$(".lienposition").click(function(e){
		var num = $(this).attr('data-position');
		var href = $(this).attr('href',"#position"+num);

		console.log(num);
	});

/*
	$('.retourne').hover(function(){
		$(this).find('.orange').css({
			"-webkit-transform" : "rotateY(-180deg)",
			"-webkit-transition": "all .5s linear",
			"transform-origin": "50% 50%",
          	"transform-style": "preserve-3d",
		});
		//$(this).find('.dos').toggle();
	
		});
	});*/


	$('.retourne').on("mouseenter",function(){
		$(this).find('.orange').css({
			"-webkit-transform" : "rotateY(-180deg)",
			"-webkit-transition": "all .5s linear",
			"transform-origin": "50% 50%",
          	"transform-style": "preserve-3d",
		});
	}).on("mouseleave",function(){
		$(this).find('.orange').css({
			"-webkit-transform" : "rotateY(0deg)",
			"-webkit-transition": "all .5s linear",
			"transform-origin": "50% 50%",
          	"transform-style": "preserve-3d",
		});
	})


	$('.info').on('mouseenter',function(){
		$(this).find('.orange').find('.dos').show('slow');
		
	}).on('mouseleave',function(){
		$(this).find('.orange').find('.dos').hide('slow');
	});
	

});