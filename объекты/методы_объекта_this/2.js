'use strict';

/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    },

    read() {
        this.num1 = +prompt('Число 1?', 0);
        this.num2 = +prompt('Число 2?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());