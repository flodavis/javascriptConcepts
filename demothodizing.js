//Demothodizing the Array method, forEach(), into a generic each
var each = Function.prototype.call.bind([].forEach);

var nodeList = document.querySelectorAll("p");

each(nodeList, bold);

function bold(node){
	node.style.fontWeight = "bold";
}