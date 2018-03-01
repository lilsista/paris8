$(document).ready(function(){

// les variables

	var carousel = $('#carousel3d');
	var totalPanelCount = carousel.find('figure').length;
	var figures = carousel.find('figure');
	var panel = $('#panel-count');
	var panelCount = panel.val();
	var radius = Math.round( (figures.width()/2) / Math.tan( Math.PI/ panelCount ));
	var theta = 360/panelCount;

	console.log(panel.val());

//initialisation

	$('.next3d').on("click",next);
	$('.prev3d').on('click',prev);



	for (var i =  panelCount; i < totalPanelCount; i++) {
		$(figures[i]).css({display : "none"});
	};

	for (var i = 0; i < panelCount; i++) {
		var angle = theta*i
		$(figures[i]).css({
			"-webkit-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
			"-moz-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px) ",
			"-0-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
			"transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
			width : ($(figures[i]).width()-50)+"px"
		});
	};


//panel change

	panel.on("change",function(){

		panelCount = panel.val();
		radius = Math.round( (figures.width()/2) / Math.tan( Math.PI/ panelCount ));
		theta = 360/panelCount;

		for (var i =  panelCount; i < totalPanelCount; i++) {
		$(figures[i]).css({display : "none"});
		};

		for (var i = 0; i < panelCount; i++) {
			var angle = theta*i
			$(figures[i]).css({
				"-webkit-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
				"-moz-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px) ",
				"-0-transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
				"transform" : "rotateY("+angle+"deg) translateZ("+radius+"px)",
				/*width : ($(figures[i]).width()-50)+"px",*/
				display : "block"
			});
		};



	});


// les fonctions
	var currdeg  = 0;
	function next(){
		currdeg = currdeg - theta;
		carousel.css({
			"-webkit-transform" : "rotateY("+currdeg+"deg) ",
			"-moz-transform" : "rotateY("+currdeg+"deg)  ",
			"-0-transform" : "rotateY("+currdeg+"deg) ",
			"transform" : "rotateY("+currdeg+"deg) "
		});
	}

	function prev(){
		currdeg = currdeg + theta;
		carousel.css({
			"-webkit-transform" : "rotateY("+currdeg+"deg) ",
			"-moz-transform" : "rotateY("+currdeg+"deg)  ",
			"-0-transform" : "rotateY("+currdeg+"deg) ",
			"transform" : "rotateY("+currdeg+"deg) "
		});
	}

});
	
