// Her kommer handlekurv funksjonaliteten til nettsiden

// Variabler

window.onload = oppstart;
var handlekurv = [];

function oppstart()
{
	document.getElementsByClassName("btnKjop").onclick = kjopet;
}

function kjopet()
{
	console.log("funker");
}