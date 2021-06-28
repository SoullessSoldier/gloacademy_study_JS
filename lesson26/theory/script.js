/* JSON 
const smartphone = {
    brand: 'samsung',
    screen: 5.5,
    rom: 128,
    ram: 4,
    gps: true,
    sensor: ['Accelerometer', 'E-compass', 'Fingerprint sensor', 'Gyroscope'],
    camera: {
        back: [32, 5 ,8],
        front: 16
    }
}

const jsonSmart = JSON.stringify(smartphone);

console.log(JSON.parse(jsonSmart));
*/
/**
 * AJAX + JSON
 */

document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    const select = document.getElementById('cars');
    const output = document.getElementById('output');
    /*
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', event => {
        console.log(request.readyState);
    });
    request.open('GET', './cars.json');

    //Это событие происходит ДО передачи заголовков (до setRequestHeader)
    request.addEventListener('loadstart', event => {
        console.log(event);
    });
    
    request.setRequestHeader('Content-type', 'application/json');
    
    request.send();

    //progress срабатывает, когда от сервера приходит пакет данных
    //если ответ приходит в несколько шагов, то каждый раз отрабатывает событие progress
    request.addEventListener('progress', event => {
        console.log(event);
    });

    //Если вызван метод abort - прерывает уже отправленный запрос.
    //используется редко, тк можно таймаут установить в свойстве request.timeout 
    request.addEventListener('abort', event => {
        console.log(event);
    });

    //load - если запрос успешно завершен
    request.addEventListener('load', event => {
        console.log(event);
    });

    //error - если запрос завершен с ошибкой

    //loadend - отлавливает 3 события - load, error, abort
    //можно ловить именно его, но старые браузеры его не поддерживают
    request.addEventListener('loadend', event => {
        console.log(event);
    });
    
    //readystatechange - ЭТО СОБЫТИЕ ПРОИСХОДИТ НЕСКОЛЬКО РАЗ ЗА ЗАПРОС
    //ЕГО ПОДДЕРЖИВАЮТ ВСЕ БРАУЗЕРЫ
    // 5 состояний: 0 - объект создан, 1 - вызов метода open
    //2 - вызван метод send и получены заголовки
    //3 - получена информация от сервера (или часть данных от сервера)
    //4 - всё ОК, все данные получены
    request.addEventListener('readystatechange', event => {
        console.log(event);
    });

    */
    select.addEventListener('change', ()=>{
        const request = new XMLHttpRequest();
        request.open('GET', './cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', event => {
            if(request.readyState === 4 && request.status === 200){
                //console.log(request.status);//200
                //console.log(request.statusText);//OK
                //console.log(request.response);//
                //console.log(request.responseText);//
                const data = JSON.parse(request.responseText);
               // console.log('data: ', data);
                data.cars.forEach(item => {
                    if(item.brand === select.value) {
                        //console.log(item);
                        const {brand, model, price} = item;
                        output.innerHTML = `Машина ${brand} ${model}<br>Цена ${price}`;
                    }
                });


            } else {
                output.innerHTML = `Произошла ошибка`;
            }
            
        });
    });

});