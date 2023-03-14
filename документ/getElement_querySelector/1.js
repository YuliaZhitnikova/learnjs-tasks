'use strict';

/*
Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
*/
//1
document.getElementById('age-table');
//2
document.getElementsByTagName('label');
//3
table.getElementsByTagName('td')[0].value = 'Age';
//4
document.getElementsByName("search")[0];
//или 
document.querySelector('form[name="search"]');
//5
form.querySelector('input');
//6
let inputs = form.querySelectorAll('input');
inputs[inputs.length - 1];