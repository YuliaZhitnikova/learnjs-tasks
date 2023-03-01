'use strict';

let userLogin = prompt("Кто там?", '');

if (userLogin === 'Админ' || userLogin === 'admin') {

    let userPass = prompt('Пароль?', '');

    if (userPass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (userPass === '' || userPass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userLogin === '' || userLogin === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}