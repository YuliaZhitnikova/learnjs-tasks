'use strict';

/*
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
*/
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`${n} не подойдет,введите натуральное число`);
} else {
    alert(pow(x, n));
}

function pow(x, n) {
    let result;
    return result = x ** n;
}