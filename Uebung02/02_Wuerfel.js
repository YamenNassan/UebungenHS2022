

function wuerfeln() {
    var f = [1,2,3,4,5,6];

    var choice = f.length*Math.random();
    var index = Math.floor(choice);
    return f[index];
}

console.log(wuerfeln());