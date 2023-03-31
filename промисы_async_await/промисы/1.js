/*
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));