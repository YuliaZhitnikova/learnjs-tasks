"use strict";

/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.*/


function checkSpam(str) {
    let newStr = str.toLowerCase();

    if (newStr.includes('viagra') || newStr.includes('xxx')) {
        return false;
    } else {
        return true;
    }

}

alert(checkSpam("ViaGra"));