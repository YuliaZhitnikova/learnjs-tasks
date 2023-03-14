/*Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:*/

//  в переменной td находится DOM-элемент для тега <td>
//нужно получить

table.rows[0].cells[0];
table.rows[1].cells[1];
table.rows[2].cells[2];
table.rows[3].cells[3];
table.rows[4].cells[4];

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

td.style.backgroundColor = 'red';
