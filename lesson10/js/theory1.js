const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elem');
elems[3].remove();
elems[1].remove();

collections[1].append(elems[3]);//внутрь элемента
collections[1].append(elems[1]);

collections[1].prepend(elems[5]);

collections[0].before(collections[1]);
elems[0].after(elems[6]);//после элемента
elems[0].before(elems[6]);

elems[2].replaceWith(elems[3]);//замена, elem2 убирается из верстки

//клонирование
//const elemClone = elems[3].cloneNode();//Неполная копия, без внутренних нод
const elemClone = elems[3].cloneNode(true);//Полная копия
collections[1].append(elemClone);

elemClone.textContent = 'New node';

//Создание элементов
elems[2].innerHTML = '<span>Привет</span>';//такой способ затирает верстку

//другой способ
const newElem = document.createElement('li');
newElem.textContent = 'Новый элемент';
collections[1].append(newElem);

//3 метод вставляет текст
const secondHeader = document.getElementById('second-header');
secondHeader.insertAdjacentText('beforebegin','beforebegin'); 
secondHeader.insertAdjacentText('afterbegin','afterbegin'); 
secondHeader.insertAdjacentText('beforeend','beforeend'); 
secondHeader.insertAdjacentText('afterend','afterend'); 

//4 метод вставляет элемент
secondHeader.insertAdjacentElement('beforebegin',elems[1]); 
secondHeader.insertAdjacentElement('afterbegin',elems[5]); 
secondHeader.insertAdjacentElement('beforeend',elems[3]); 
secondHeader.insertAdjacentElement('afterend',elems[4]);

//5 метод вставляет разметку
secondHeader.insertAdjacentHTML('beforebegin','<h3>beforebegin</h3>'); 
secondHeader.insertAdjacentHTML('afterbegin','<h3>afterbegin</h3>'); 
secondHeader.insertAdjacentHTML('beforeend','<h3>beforeend</h3>'); 
secondHeader.insertAdjacentHTML('afterend','<h3>afterend</h3>');

//устаревшее

/** устаревшие методы используют родителей, поэтому они медленнее
 * collections[0].appendChild(elems[3]); === append
 * 
 * collections[0].insertBefore(newElem,elems[4]); === before
 * 
 * collections[0].insertBefore(elems[5], collections[0].firstChild); === prepend
 * 
 * collections[0].replaceChild(newElem, OldElem) === oldElem.replaceWith(newElem)
 * 
 * collections[0].removeChild(elems[2]) === elems[2].remove
 * 
 */


