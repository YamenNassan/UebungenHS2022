function farbeänderen() {

    var button = document.querySelector("#Eingabe");

    var p = document.getElementById("change");


    var test = button.value;

    p.innerHTML = test;

    var random = Math.floor(Math.random()*16777125).toString(16);

    var farbe = "#" + random;

    p.style["color"] = farbe;
    p.style["font-size"] = "150px";
    p.style["margin"] = "5px 35px";
    
}
