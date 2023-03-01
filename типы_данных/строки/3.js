"use strict";

/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {

        let a = str.length - maxlength;
        return str = str.slice(0, a) + "...";
    } else {
        return str;
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
