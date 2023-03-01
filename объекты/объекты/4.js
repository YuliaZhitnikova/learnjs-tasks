'use strict';

/*
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum;
sum = 0;

function sumSalaries(obj) {
    for (let key in obj) {
        sum += obj[key];

    }
}

sumSalaries(salaries);
console.log(sum)