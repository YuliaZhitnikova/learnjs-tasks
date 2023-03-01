'use strict';

/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {

    this.read = function () {
        this.num1 = +prompt('Число 1?', 0);
        this.num2 = +prompt('Число 2?', 0);
    };

    this.sum = function () {
        return this.num1 + this.num2;
    };

    this.mul = function () {
        return this.num1 * this.num2;
    };


};

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());