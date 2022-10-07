var t = 0;

function zeit() {

    t += 500;

    var d = new Date();

    var ds = d.toDateString();

    var ts = d.toTimeString();

    var zeit = document.getElementById("zeit");
    var date = document.getElementById("datum");

    zeit.innerHTML = ts
    date.innerHTML = ds

    zeit.style["font-size"] = "55px";

    date.style["font-size"] = "55px";

    
}

function START() {
    if (t == 0) {
        setInterval(zeit, 500);
    }
}

