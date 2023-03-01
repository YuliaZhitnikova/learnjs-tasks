'use strict';

/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/

//да, только если функция возвращает объект

let obj = {};

function A() { return obj; }
function B() { return obj; }
new A() == new B()