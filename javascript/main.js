// Her kommer handlekurv funksjonaliteten til nettsiden
// Variabler

window.onload = oppstart;

//var handlekurv = [{Vare:" ", Pris:0}];
var handlekurv = {};
var teller = 0;

function oppstart()
{
	document.getElementById("kjop1").onclick = kjop1;
	document.getElementById("kjop2").onclick = kjop2;
	document.getElementById("kjop3").onclick = kjop3;
	document.getElementById("kjop4").onclick = kjop4;
	document.getElementById("kjop5").onclick = kjop5;
	document.getElementById("kjop6").onclick = kjop6;
	document.getElementById("kjop7").onclick = kjop7;
	document.getElementById("kjop8").onclick = kjop8;
	document.getElementById("kjop9").onclick = kjop9;
	document.getElementById("kjop10").onclick = kjop10;
	document.getElementById("kjop11").onclick = kjop11;
	document.getElementById("kjop12").onclick = kjop12;

}


















function kjop1()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;


	if (localStorage.getItem("shoppingCartStorage") === null) {
		handlekurv.push({Vare:"IronSeries 431 Gaming", Pris: 659});
		sessionStorage.setItem("myShoppingCart",  JSON.stringify(handlekurv));

	}
	else {
		var storedData = sessionStorage.getItem("shoppingCartStorage");
		var handlekurv = JSON.parse(storedData);

		handlekurv.push({Vare:"IronSeries 431 Gaming", Pris: 659});
		sessionStorage.setItem("myShoppingCart",  JSON.stringify(handlekurv));

	}
}

































function kjop2()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}

function kjop3()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}

function kjop4()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}

function kjop5()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}

function kjop6()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop7()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop8()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop9()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop10()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop11()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
function kjop12()
{
	teller++;
	document.getElementById("mHK").innerHTML = teller;
	document.getElementById("mHK2").innerHTML = teller;
	console.log("funker");
}
