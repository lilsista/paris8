$(document).ready(function(){

	
	var navigation  = $('#navig');
	var elemPaire = $(' .container-large .scroll:nth-child(even) ');
	var elemImpaire = $(' .container-large .scroll:nth-child(odd) ');
	var container = $('.container-large')[0].offsetTop;
	var elemContainer = $('.container-large');
	console.log(navigation);
	
	

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
	console.log(container);

	var top = 0;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var scrollT = scroll+navigation.height();
		
		if( scroll < container || scrollT > (elemContainer.height()+container)){
			navigation.css({display : "none"});
		}else{
			navigation.css({display: "block"});
		}
		
		navigation.css({top : 10+"px", left : 0, position : "fixed"});
		console.log(scroll);

		for (var i = 0; i < palierImpaire.length; i++) {

			
			console.log( "position menu :" +(navigation.offset().top+navigation.height()));

			if( (scrollT) < (palierPaire[i]+container) && (scrollT) > (palierImpaire[i]+container)){
				navigation.css({left : 0, top : (10+palierImpaire[i])+"px",position : "absolute"});
				if(scroll > navigation.offset().top){
					navigation.css({position : "fixed",top : 10+"px"});
				}
			}
			
			if( (scrollT) > (palierPaire[i]+container)){	
				console.log("droite :" + (palierPaire[i]+container));
				navigation.css({left : ( elemContainer.width()-navigation.width())+"px",top : (10+palierPaire[i])+"px",position : "absolute"});	
				if(scroll > navigation.offset().top){
					navigation.css({position : "fixed",top : 10+"px"});
				}
			}
			/*if( (scroll) < (palierPaire[i]+container) && (scroll) > (palierImpaire[i]+container)){
				navigation.css({left : 0});
			}*/
			
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