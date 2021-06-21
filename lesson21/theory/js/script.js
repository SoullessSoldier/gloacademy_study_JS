'use strict';
let buttons = document.querySelectorAll('.button');
const content = document.querySelector('.content'),
    wrapButtons = document.querySelector('.wrapper-button'),
    addButton = document.querySelector('.add-button');

//Текст в content должен меняться в зависимости от нажатой кнопки

const changeText = (event) => {
    content.textContent = event.target.textContent;
}
//сначала без делегирования
/* комментируем при делегировании
buttons.forEach(elem => {
    elem.addEventListener('click', changeText);
});
*/

//--
const getButton = () => {
    const newButton = buttons[0].cloneNode();
    let textButton = buttons.length + 1;
    textButton = (''+textButton).padStart(2,'0');
    newButton.textContent = textButton;
    //По умолчанию на новой кнопке не окажется слушателя событий,
    // поэтому приходится дописывать при создании:
    //newButton.addEventListener('click', changeText);
    wrapButtons.appendChild(newButton);
    buttons = document.querySelectorAll('.button')
}
addButton.addEventListener('click', getButton);

//Получится очень много обработчиков событий!

/* Делегирование - всего один обработчик */
wrapButtons.addEventListener('click', (e) => {
    //if(e.target.tagName === 'BUTTON') changeText(e);
    //либо так
    //if(e.target.classList.contains('button')) changeText(e);
    //либо так
    /*
    if(!e.target.classList.contains('button')) {
        return;
    }
    changeText(e);
    */
    //либо так
    //matches c просто параметром - тег, с . - класс, с # - id
    if(!e.target.matches('button')) {
        return;
    }
    changeText(e);

});


