/*var COL_COUNT = 2;
var col_heights = [];
var container = document.getElementById('block-containt');

for (var i = 0; i < COL_COUNT; i++) {
	col_heights.push(0);
};

for (var i = 0; i < container.children.length; i++) {
	var order = (i+1) % COL_COUNT || COL_COUNT;
	container.children[i].style.order = order;
	col_heights[order]+= parseFloat(container.children[i].style.height);
};

var highest = Math.max.apply(Math, col_heights);
container.style.height = highest+"px";*/


var container = document.getElementById('block-containt');
var block = document.getElementsByClassName('block');
var maxWidth = parseFloat(window.getComputedStyle(container,null).width);
var colone = 3;
var height = [];

/*console.log(window.getComputedStyle(block[1],null));*/

for (var i = 0; i < block.length; i++) {
	height.push(block[i].scrollHeight);
};


var widthBlock = maxWidth/2;

for (var i = 0; i < block.length; i++) {
	block[i].style.width = widthBlock+"px";
};


var heightMax = Math.max.apply(Math,height);


