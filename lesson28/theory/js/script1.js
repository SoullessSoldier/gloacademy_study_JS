'use strict';
//стек вызовов
const mult = (x, y) => {
    return x*y;
};

const square = (num) => {
    return mult(num, num);
};

const showSquare = (n) => {
    const res = square(n);
    console.log('res: ', res);

};
//debugger;
showSquare(2);

//Переполнение стека вызовов запуск функции, котороая вызывает сама себя
//16 000 вызовов


//при синхронном вызове браузер зависает до окончанияф выполнения текущей инструкции

//пример асинхронности
const foo1 = () => {
    console.log('Загрузить белье в стиральную машинку');
    foo2(foo3);
    foo4();
};

const foo2 = (callback) => {
    setTimeout(()=>{
        console.log('закончилась стирка');
        callback();
    }, 5000);
};

const foo3 = () => {
    console.log('развешать белье на балконе');
};

const foo4 = () => {
    setTimeout(()=>{
        console.log('Помыть пол');
    },3000);
};

foo1();
//setTimeout отправляет вызов функции в API BOM 
/**
 *                    call stack
 *                  /           \
 *                /              \ setTimeout
 *    event loop /                \
 *    если в call\                webApi
 *    stack пусто,\               /
 *    то задача    \             /
 *    из очереди   очередь задач
 *    попадает    request callback
 *    в callstack  
 */

console.log('a');
setTimeout(()=>{console.log('1');},0);
console.log('b');
setTimeout(()=>{console.log('2');},0);
console.log('c');
setTimeout(()=>{console.log('3');},0);
//будет a b c 1 2 3 , т.к. setTimeout улетают в очередь задач и жждут освобождения стека вызовов