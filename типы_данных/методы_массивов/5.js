"use strict";

/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let sortedArr = arr.concat([]);
    return sortedArr.sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
