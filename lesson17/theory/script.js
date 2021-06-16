'use strict';
//часто требуется выполнить скрипт спустя некоторое время
//BOM - модель
//SetInterval/ClearInterval и SeTimeout/ClearTimout
//window.setTimeout(cb, N ms)
/*
setTimeout(function(){
    console.log('Сообщение в консоль')
}, 3000);

let getMessage = (name)=>{
    console.log('Привет, ' + name);
}

let count = 0;
let idInterval = setInterval(getMessage, 2000, 'Василий');

let idTimeout = setTimeout(getMessage, 5000, 'Иван'); 
clearTimeout(idTimeout);//таймаут не будет вызван никогда
setTimeout(clearTimeout,5000,idInterval);
*/
//----
/**
 * clearInterval и clearTimeout - если пользователю при входе на сайте показывается модальное окно,
 * и если он находится на сайте достаточно долго, то такое окно можно убрать
 *   
 * */
//** проект animation-basic */
/**
 * анимация в js не синхронно работает с обновлением экрана,
 * и если надо анимировать много объектом, придется задествовать большие мощности компьютера
 * зачастую браузер отрисовывает кадры быстрее, чем они могут показаться на экране
 * 
 * для того, чтобы это исправить, была создана функци requestAnimationFrame 
 */
/**===========================================
 * Класс Date
 * ===========================================
 */
let date = new Date();
console.log('date: ', date);

date = new Date('10 march 1987');
console.log('date: ', date);
date = new Date(1987,2,10,15,16,18);//месяц от нуля!
//по местному времени
console.log('date: ', date);
console.log('год '+date.getFullYear());
console.log('месяц '+(date.getMonth()+1));
console.log('день месяца '+date.getDate());
console.log('день недели '+(date.getDay()+1));
console.log('час '+date.getHours());
console.log('минуты '+date.getMinutes());
console.log('секунды ' +date.getSeconds());
console.log('миллисекунды '+date.getMilliseconds());
//по Гринвичу
date = new Date();
console.log('date: ', date);
console.log('год UTC '+date.getUTCFullYear());
console.log('месяц UTC '+(date.getUTCMonth()+1));
console.log('день месяца UTC '+date.getUTCDate());
console.log('день недели UTC '+(date.getUTCDay()+1));
console.log('час UTC '+date.getUTCHours());
console.log('минуты UTC '+date.getUTCMinutes());
console.log('секунды UTC '+date.getUTCSeconds());
console.log('миллисекунды UTC '+date.getUTCMilliseconds());

console.log(date.setFullYear(2000, 2, 10));
console.log(date.setMonth(2, 10));
console.log(date.setDate(10));
console.log(date.setHours(23,59,59));
console.log('date: ', date);

//посчитать число через 100 дней
date = new Date();
date.setDate(date.getDate() + 100);
console.log('date: ', date);
console.log('год '+date.getFullYear());
console.log('месяц '+(date.getMonth()+1));
console.log('день месяца '+date.getDate());
// отнять 100 дней
date = new Date();
date.setDate(date.getDate() - 100);
console.log('date: ', date);
console.log('год '+date.getFullYear());
console.log('месяц '+(date.getMonth()+1));
console.log('день месяца '+date.getDate());

//timestamp - количество миллисекунд с 00.00.00 01.01.1970
console.log(date.getTime());

//вывести только дату или только время
console.log(date.toDateString());
console.log(date.toTimeString());

//вывести только дату или только время с учетом локализации
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString('en'));
console.log(date.toLocaleTimeString('en'));

//ISO format
console.log(date.toISOString());
console.log(date.toISOString().substr(0,10));

//Now() - кол-во мс с начала 1970 до текущего момента
//parse(string)