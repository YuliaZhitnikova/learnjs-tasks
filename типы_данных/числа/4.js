"use strict";

/*Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.*/

/*function randomInteger(min, max) {
    let a = min + Math.random() * (max - min);

    return Math.round(a);
}

console.log(randomInteger(1, 9));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 4));
console.log(randomInteger(1, 9));*/


function randomInteger(min, max) {
    let a = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(a);
}

console.log(randomInteger(1, 9));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 4));
console.log(randomInteger(1, 9));