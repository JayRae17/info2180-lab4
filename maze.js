function setEvents(){
	var x  = document.getElementById("boundary1");
	
	x.onmouseover = function(){mouseOver()};
/*	x.onmouseout = function(){mouseOut()}; */

function mouseOver(){
	x.classList.add('youlose');
}

/*function mouseOut(){
    x.style.backgroundColor = "#eeeeee";
} */
}
window.onload = function(){
	setEvents();
}