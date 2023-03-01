"use strict";

/*Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).*/

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 9));
console.log(random(1, 9));
console.log(random(1, 9));