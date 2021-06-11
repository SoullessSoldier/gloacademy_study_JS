'use strict';
/**
 * Обработчики событий
 * 
 * 1) устаревшее
 * <button onclick="alert("Hello")>
 * 
 * 2) неудобное
 *  console.dir() - события on***
 *  element.onclick = function(){
 *      alert("Hello")}
 *  если надо ограничить количество нажатий
 * const count = 3;
 * element.onclick = function(){
 *      if (count===3){
 *          element.onclick = null;
 *      }
 *      alert("Hello")
 * }
 *  две функции таким образом не вызывать!
 * Можно сделать обертку, но это неудобно
 * 
 * 3) современное навешивание событий addEventlistener
 * element.addEventListener('click', func1);
 * element.addEventListener('click', func2);
 * element.addEventListener('click', func3);
 * 
 * снятие обработчика
 * let clicked = function(){
 *  count++;
 *  if(count===3) element.removeEventListener('click',clicked);
 *  console.log('click!')
 * }
 * element.addEventListener('click', clicked);
 * 
 * event - объект события
 * element.addEventListener('click', function(event){
 *      //console.log(event);
 *      console.log(event.type);
 * });
 * события mousedown, mouseup, mousemove
 * mouseenter, mouseleave
 * mouseover, mouseout
 * 
 * события форм
 *  input type=text
 *  input - изменение объекта DOM, изменение значения value
 *  change - потеря фокуса
 *  keyup, keydown - используются при валидации
 *  focus - получение фокуса
 *  blur - потеря фокуса
 *  
 *  input type=range
 *  change - изменение
 * 
 *  события DOM
 *  load, unload, 
 *  DOMContentLoaded - скрипт дождется загрузки всей страницы
 *  beforeunload - у window может предотвратить переход со страницы
 * 
 * 
 *  event.preventDefault()
 * 
 *  !контекстное меню для страницы или отмена правого клика мыши на странице
 *  document.addEventListener('contextmenu', function(event){
 *      event.preventDefault();
 *  });
 * 
 *  у event есть target и currentTarget
 *  Всплытие и захват событий
 *  Делегирование (в будущем)
 */