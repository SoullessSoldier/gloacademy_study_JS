/* 

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>». 

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>


Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */

const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
//1

task1.innerHTML = task1.innerHTML.replace(/(функци)([а-яё])/gi, (match, val1, val2)=>`<strong>${val1}${val2}</strong>`);
//2
task2.innerHTML = task2.innerHTML.replace(/(\d{2}\:\d{2})/gi, (match, val1)=>`<b>${val1}</b>`);

//3
task2.innerHTML = task2.innerHTML.replace(/(\")(.+)?(\")/gi,(match,val1,val2,val3)=>`<mark>${val2}</mark>`);
//4
//task2.innerHTML = task2.innerHTML.replace(/http\:\/\/(\w+\.\w+(\.\w+)?)/gi, (match,val1)=>`<a href="${match}">${val1}</a>`);
//5
let matches = document.body.innerHTML.matchAll(/(color: )(#\w{6})/gi);//#([a-f0-9]{3}){1,2}
for (item of matches){
    console.dir(item[2]);
}
//6
task2.innerHTML = task2.innerHTML.replace(/http\:\/\/(\w+\.\w+[\.\w]+)(\/[\w-_+\/]+)*/gi, 
    (match,val1,val2)=>`<a href=${match}>${val1}</a>`);
