Урок №10
Работа с объектами DOM​

получение элементов
const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elem');

удаление элементов из DOM дерева
elems[3].remove()
elems[1].remove()

Но в elems элементы остались!

Метод append() перемещает элементы, где бы они не находились, 
и вставляет в конец родителя 
collecions[1].append(elems[3])
collecions[1].append(elems[3])

Метод prepend() вставляет элемент в начало родителя
collecions[1].prepend(elems[5])

Метод before() вставляет элемент перед родителем
Метод after() вставляет элемент после родителя


colections[0].before(collections[1]);
elems[4].after(elems[0])


Полезные ссылки

Изменения документа (LearnJS)
https://learn.javascript.ru/modifying-document
DocumentFragment
https://habr.com/ru/post/413287/
Используем DOM как Pro
https://webdevblog.ru/ispolzuem-dom-kak-pro/


ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 


Скачать архив, прикрепленный к уроку (you-dont-know-js). 
В index.html код менять нельзя, только подключите скрипт


Используя только файл скрипта  выполнить такие действия:

Восстановить порядок книг.

Заменить картинку заднего фона на другую из папки image

Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

Удалить рекламу со страницы

Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место



    



Проверить, чтобы все работало и не было ошибок в консоли



Добавить папку с уроком на свой GitHub

ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ: 
1) Скопировать к себе доску codepen (сделать fork)
https://codepen.io/gloMax/pen/PoYmKoZ
2) Добавлять новые элементы с текстом из инпута

3) Прикрепить ссылку на Codepen
https://codepen.io/soullesssoldier/pen/jOBvLxL