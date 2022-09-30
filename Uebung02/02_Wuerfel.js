

function wuerfeln() {
    var f = [1,2,3,4,5,6];

    var choice = 6*Math.random();

    var index = 0 ;
    if (choice < 1) {
     index = 0;
    }
    else if (choice < 2) {
       index = 1;
    }
    else if (choice < 3) {
        index = 2;
    }
    else if (choice < 4) {
        index = 2;
    }
    else if (choice < 5) {
        index = 2;
    }
    else if (choice < 6) {
        index = 2;
    }
    console.log(f[index]);
}

wuerfeln();