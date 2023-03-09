'use strict';



/*function printNumbers(from, to) {

    let a = from;
    setTimeout(function show() {
        alert(a);
        if (a < to) {
            setTimeout(show, 1000)
        }
        a++;
    }, 1000);
}


printNumbers(5, 10);*/

function printNumbers(from, to) {

    let a = from;
    let timerId = setInterval(function () {
        alert(a);
        if (a == to) {
            clearInterval(timerId);
        }
        a++;
    }, 1000);
}


printNumbers(5, 10);