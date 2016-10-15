window.onload = startUp;
function startUp() {
    //Use JSON to retrieve the stored data and convert it
    var storedData = sessionStorage.getItem("myShoppingCart");
    if (storedData) {
      var handlekurv = JSON.parse(storedData);
    }
    console.log(handlekurv/*[5].Vare*/)
}




if (localStorage.getItem("shoppingCartStorage") === null) {
    alert("Handlekurven din er tom");
}
else {
    var storedData = sessionStorage.getItem("myShoppingCart");
    if (storedData) {
        var handlekurv = JSON.parse(storedData);
    }

}
