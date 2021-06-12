'use strict';
const inputText = document.getElementById('myText'),
    myBtn = document.getElementById('myBtn'),
    text = document.getElementById('text');

//работа с объектом localStorage напрямую
/*
const showText = () =>{
    text.textContent = localStorage.myText;
};

myBtn.addEventListener('click', ()=>{
    localStorage.myText = inputText.value;
    showText();
});

showText();
*/
/**
 * sessionStorage - делае то же самое, но сохраняет данные только на время сессии
 * (пока открыта вкладка)
 */

//getItem(), setItem()
/*
const showText = () =>{
    text.textContent = localStorage.getItem('memory');
};

myBtn.addEventListener('click', ()=>{
    localStorage.setItem('memory', inputText.value);
    showText();
});

showText();

//localStorage.removeItem('memory') -- удаление значения
*/

/**
 * Cookie - работет только через http-сервер
 * хранятся только сессию, если не указать время
 *//*
document.cookie = 'имя=значение';
document.cookie = 'имя2=значение2';
document.cookie = 'имя3=значение3';
document.cookie = 'имя=значение4';//замена с таким же именем
console.log('document.cookie: ', document.cookie);
let myArr = document.cookie.split('; ');
console.log('myArr: ', myArr);
let myJSON = {};
myArr.forEach(el=>{
    let i = el.split('=');
    console.log(i);
    myJSON[i[0]] = i[1];
});
myJSON = JSON.stringify(myJSON);
console.log('myJSON: ', typeof myJSON, myJSON);
let myObj = new Object();
myObj = JSON.parse(myJSON);
console.log(myObj['имя3']);
*/
//Долгоживущие cookie
document.cookie = 'hope=life; expires=Tue, 17 May 2024 00:00:00 GMT';

//Функция для установки куки по времени
function setCookie(key, value, year, month, day, path, domain, secure){
    let cookieStr = encodeURI(key) + '=' + encodeURI(value);
    if(year) {
        const expires = new Date(year, month-1, day);
        cookieStr += '; expires= ' + expires.toGMTString();
    }
    cookieStr += path ? '; path=' + encodeURI(path) : '';
    cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
    cookieStr += secure ? '; secure' : '';
    document.cookie = cookieStr;
    
}
setCookie('привет', 'мир');
setCookie('Праздник детей', 'Новый год', 2024, 1, 1);

//Формат куки - UTF8!
console.log(decodeURI(document.cookie));

