"use strict";

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) sum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum([1, 2, 3]));