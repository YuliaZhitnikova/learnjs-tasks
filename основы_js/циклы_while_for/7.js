'use strict';
/*Напишите код, который выводит все простые числа из интервала от 2 до n.*/

let a = 20;

primeNum:
for (let i = 2; i <= a; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue primeNum;
    }

    alert(`Простое число: ${i}`);
}