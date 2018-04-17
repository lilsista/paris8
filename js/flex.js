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
var height = 0;
var margin = 0;
for (var i = 0; i < container.children.length; i++) {
 height = height + parseFloat(container.children[i].style.height);
 
};

console.log(height/2);
console.log(parseFloat(window.getComputedStyle(container.children[0],null).marginTop));