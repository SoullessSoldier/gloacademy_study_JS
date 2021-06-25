'use strict';
const header = document.querySelector('h1'),
    link = document.getElementById('googl'),
    img = document.querySelector('img');

header.title = 'заголовок';

console.log(header.title);
console.log(link.title);
console.log(img.title);

//attributes - псевдомассив, строка с парами ключ-значение, 
//изменить его напрямую нельзя, на DOM-дерево это не повлияет
console.log(header.attributes);
console.log(link.attributes);
console.log(img.attributes);

//hasAttribute,setAttribute, getAttribute, removeAttribute
console.log(img.hasAttribute('alt'));
console.log(img.getAttribute('alt'));
console.log(img.setAttribute('alt','logo-img'));
console.log(img.removeAttribute('alt'));

//className
console.log(img.className);
img.className = 'new_img img';
console.log(img.className);
console.log(img.classList);

//classList
console.log(img.classList.contains('img'));
console.log(img.classList.add('pic'));
console.log(img.classList.remove('img'));
console.log(img.classList.toggle('new-img'));

//data-attributes
header.dataset.aboutHeader='Заголовок';
console.log(img.dataset.img);

img.addEventListener('mouseenter', (event)=>{
    event.target.src = event.target.dataset.img;
});

//Regular expressions
const reg = /привет/;
const reg2 = new RegExp('привет');

console.log(reg);
console.log(reg2);

//Метод test - искомая строка есть в тексте
console.log(reg.test('всем привет, добро пожаловать'));//true
console.log(reg.test('всем хай, добро пожаловать'));//false
console.log(/привет/.test('всем хай, добро пожаловать'));//false

//^ - поиск в начлае текста
console.log(/^привет/.test('всем привет, добро пожаловать'));//false
console.log(/^привет/.test('привет всем, добро пожаловать'));//true

//$ - поиск в конце
console.log(/привет$/.test('всем привет, добро пожаловать'));//false
console.log(/привет$/.test('добро пожаловать, всем привет'));//true

//^...$ - точное соответствие
console.log(/^привет$/.test('всем привет, добро пожаловать'));//false
console.log(/^привет$/.test('привет'));//true

//match
const string =`Привет друг, добро пожаловать, проходите, мой номер телефона 
    8-999-165-16-16, номер домофона 155, девушка, дедушка, номера, 
    <div class="best">Hello world</div>
    +79089500505
    +7(999)1661616
    +7(999)166-16-16
    master@yandex.ru
    boss.molokosos@gmail.com`;
let result = string.match(/п/);
console.log('result: ', result);//п - 19

//Флаг i - поиск без учета регистра
result = string.match(/п/i);
console.log('result: ', result);//П - 0

//Флаг g - глобальный поиск
result = string.match(/п/ig);
console.log('result: ', result);//[П, п, п]

//Спецсимволы
const string2 = 'Спецсимволы: + * . ^ $ [] {} () ? / /\ ';

let result2 = string2.match(/./g);
console.log('result2: ', result2);//выдаст всю строку посимвольно
//их при поиске надо экранировать
result2 = string2.match(/\./g);
console.log('result2: ', result2);

//[..] - диапазон (символьный класс)
result2 = string.match(/[а-яё]/gi);
console.log('result2: ', result2);

result2 = string.match(/[a-z0-9]/gi);
console.log('result2: ', result2);

//инвертирование - [^..]
result2 = string.match(/[^0-9]/gi);//получит все символы, кроме цифр
console.log('result2: ', result2);

//предопределенные классы
// \d - только цифры
// \D - кроме цифр

// \s - непечатные символы и пробел
// \S - все, кроме непечатных символов
// . - люой символ, кроме переноса строки
result2 = string.match(/[\S]/gi);//получит все символы, кроме цифр
console.log('result2: ', result2);


// \w - буквы и цифры англ алфавит
// \W - наоборот

// | - или одно слово, или другое
result = string.match(/добро|номер/gi);
console.log('result: ', result);//["добро", "номер"]


//группировка ()
result = string.match(/(теле|домо)фона/gi)
console.log('result: ', result);//["телефона", "домофона"]

result = string.match(/де(в|д)ушка/gi);
console.log('result: ', result);//["девушка", "дедушка"]

//но лучше сгруппировать буквы в один класс
result = string.match(/де[вд]ушка/gi);
console.log('result: ', result);

//операторы квантификации - количества повторений
// ? - неважно, есть или нет 
result = string.match(/номе(ра)?/gi);
console.log('result: ', result);//["номе", "номе", "номера"]

// + - символ должен быть 1 и более раз
// * - символ есть 0 или более раз
// {1} - точное количество раз
// {0, 4} - от 0 до 4 раз
result = string.match(/о.о/gi);
console.log('result: ', result);//["охо", "омо"]

result = string.match(/о.{2,4}о/gi);
console.log('result: ', result);//["обро", "ожало", "ой но", "омофо"]

//жадная регулярка - поиск самого длинного совпадения
result = string.match(/<.+>/gi);
console.log('result: ', result);//["<div class=\"best\">Hello world</div>"]

//нежадная регулярка
result = string.match(/<.+?>/gi);
console.log('result: ', result);//["<div class=\"best\">", "</div>"]

result = string.match(/о.{1,}о/gi);
console.log('result: ', result);//["обро пожаловать, проходите, мой номер телефо", "омер домофона 155, девушка, дедушка, но"]

result = string.match(/о.{1,3}?о/gi);
console.log('result: ', result);//["обро", "ожало", "охо", "ой но", "омо"]

result = string.match(/о.{1,}?о/gi);
console.log('result: ', result);//["обро", "ожало", "охо", "ой но", "омер до", "офо"]

//positive lookahead and negative lookahead 
//впередстмотрящее утверждение и впередсмотрящее отрицание
////positive lookahead
result = string.match(/номер(?= домофона)/gi);
console.log('result: ', result);//["номер"], именно после этой подстроки идет "домофона"

//replace
let res = string.replace(/номер(?= домофона)/gi,'пинкод');
/** "номер домофона" заменился на "пинкод домофона" 
 * Привет друг, добро пожаловать, проходите, мой номер телефона 
    8-999-165-16-16, пинкод домофона 155, девушка, дедушка, номера, 
    <div class="best">Hello world</div>
    
*/

//negative lookahead
res = string.replace(/номер(?! домофона)/gi,'пинкод');
console.log('res: ', res);
/**
 * Привет друг, добро пожаловать, проходите, мой пинкод телефона 
    8-999-165-16-16, номер домофона 155, девушка, дедушка, пинкода, 
    <div class="best">Hello world</div>
 */

//search
res = string.search(/номер/gi);//если нет, то -1
let res2 = string.match(/номер/);//для проверки
console.log('res: ', res);//46 - первое вхождение искомой подстроки
console.log('res2: ', res);//46 - первое вхождение искомой подстроки

//проверка email
const email = string.match(/\S+@\w+\.\w{2,3}/g)
console.log('email: ', email);

//проверка номеров телефонов
const mobile = string.match(/\+?[78]([-()]*\d){10}/g)
console.log('mobile: ', mobile);

//split -разбивает строку на массив
res = string.split(' ');
console.log('res: ', res);//будет с запятыми "Привет", "друг,", "добро", "пожаловать,", "проходите,", "мой", 

res = string.split(/[\s,]+/);
console.log('res: ', res);

//replace - применяем на тексте из инпут
const input = document.querySelector('input'),
    output = document.querySelector('.output');
/*
input.addEventListener('input', ()=>{
    let text = input.value;
    //output.textContent = text.replace(/a/g, '');//исключим букву a
    //output.textContent = text.replace(/\d/g, '');//исключим цифры
    //output.textContent = text.replace(/\D/g, '');//ввод только цифры
    //output.textContent = text.replace(/максим/g, (match)=>match.toUpperCase());//замена на лету максим на МАКСИМ
    output.textContent = text.replace(/(\S+)@(\w+\.\w{2,3})/g, (match, val1, val2)=>val2);//val1 - значение из 1ой группы(), val2 - значение из 2ой группы()
});
*/
//валидация дя Input
input.addEventListener('input', ()=>{
    input.value = input.value.replace(/\d/g, '')});//исключим ввод цифр

