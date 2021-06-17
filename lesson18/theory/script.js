/**
 * С DOM мы уже знакомы
 * 
 * BOM
 * 
 */
// Объект screen - используется редко
console.log(screen);

console.dir(document);
/*documentElement: 
 * clientTop, clientLeft, clientWidth, clientHeight,
 * offsetTop, offsetLeft, offsetWidth, offsetHeight
 * scrollTop, scrollLeft, scrollWidth, scrollHeight
 */
//Размеры видимой области документа
const height = document.documentElement.clientHeight;
console.log('height: ', height);
const width = document.documentElement.clientWidth;
console.log('width: ', width);
//scrollTop - на сколько пикселей мы проскроллили от верха страницы
//это свойство можно менять - перемщаться по странице

const block = document.querySelector('.boxing');
console.dir(block);
const blockHeight = block.clientHeight;
console.log('block height: ', blockHeight);
const blockWidth = block.clientWidth;
console.log('block width: ', blockWidth);
//scroll занимает примерно 15 пикселей
//надо учитывать box-sizing!!!

//если нужны размеры с border и c полосами прокрутки, то через offsetHeight и offsetWidth
const blockOffsetHeight = block.offsetHeight;
console.log('block offset height: ', blockOffsetHeight);
const blockOffsetWidth = block.offsetWidth;
console.log('block offset width: ', blockOffsetWidth);
//это размеры видимой части, без учета области прокрутки

//размеры всего блока - через scrollHeight и scrollWidth
const blockScrollHeight = block.scrollHeight;
console.log('block scroll height: ', blockScrollHeight);
const blockScrollWidth = block.scrollWidth;
console.log('block scroll width: ', blockScrollWidth);
//но сама полоса прокрутки здесь также не учитывается

//скрипт для раскрытия всего блока
const button = document.querySelector('.button');
button.addEventListener('click', ()=>{
    //раскрытие блока
    /*block.style.height = `${block.scrollHeight}px`;
    block.style.width = `${block.scrollWidth}px`;*/
    
    //прокрутка на заданное количество пикселей
    /*
    block.scrollTop += 10;
    block.scrollLeft += 10;
    */
    
    // метод scrollBy - на сколько сместитьмя по X и Y в px
    /*
    block.scrollBy(10,10);
    */

    //метод scrollTo - перемещение на количество пикселей от верха
    //block.scrollTo(0,50);
    
    //получить координаты блока 
    //(bottom - расстояние от начала клиентской части браузера до низа блока
    // right - расстояние от левого края до правой границы блока)
    console.log('block.getBoundingClientRect():', block.getBoundingClientRect());
})





