'use strict';
let books  = document.querySelectorAll('.book');

//1

books[1].after(books[0]);
books[0].after(books[4]);
books[5].after(books[2]);
//books[2].after(books[4]);
//debugger;




//2
document.body.style.backgroundImage='url(./image/you-dont-know-js.jpg)';

//3
books[4].getElementsByTagName('a')[0].textContent='Книга 3. this и Прототипы Объектов';

//4
document.querySelector('.adv').remove();

//5
let book2 = books[0];
let book5 = books[5];
let book6 = books[2];
let listItems, newItem;

listItems = book2.getElementsByTagName('li');
listItems[3].after(listItems[6]);
listItems[4].after(listItems[8]);
listItems[9].after(listItems[2]);

listItems = book5.getElementsByTagName('li');
listItems[0].after(listItems[9]);
listItems[1].after(listItems[4]);
listItems[4].before(listItems[5]);
listItems[8].after(listItems[6]);

//6
newItem = document.createElement('li');
newItem.textContent = 'Глава 8: За пределами ES6';
listItems = book6.getElementsByTagName('li');
listItems[8].after(newItem);

