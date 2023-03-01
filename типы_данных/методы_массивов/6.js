"use strict";

/*
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
*/

function Calculator() {
    this.methods = [
        {
            name: "+",
            func: (a, b) => a + b
        },
        {
            name: "-",
            func: (a, b) => a - b
        }
    ]
    this.calculate = function (str) {
        const array = str.split(' ');
        const value1 = +array[0],
            value2 = +array[2],
            action = array[1];
        const method = this.methods.find(item => item.name == action);

        if (!method || isNaN(value1) || isNaN(value2)) {
            return 'Такого действия нет';
        } else {
            return method.func(value1, value2);
        }
    }

    this.addMethod = function (name, func) {
        this.methods.push({ name, func })
    }
}

let calc = new Calculator;
console.log(calc.methods);
calc.addMethod("*", (a, b) => a * b);
console.log(calc.methods);
console.log(calc.calculate('3 * 2')); 