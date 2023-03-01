/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.*/
"use strict";

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJson = JSON.parse(JSON.stringify(user));
console.log(userJson)