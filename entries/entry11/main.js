const audio = new Audio('ch.mp3');
var body = document.querySelector('body')
var ch1 = document.querySelector('#ch1')
var scream = document.querySelector('#scream')

function hover(){
	audio.play();
	document.body.style.backgroundColor = "#ec008c";
}

function leave(){
	audio.pause();
	document.body.style.backgroundColor = "white";
}


ch1.addEventListener("mouseover", hover);
ch1.addEventListener("mouseout", leave);
