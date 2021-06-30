document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    const select = document.getElementById('cars');
    const output = document.getElementById('output');
    select.addEventListener('change', ()=>{
        fetch('./cars.json', {
            method: 'GET',
            mode: 'same-origin',//только для запросов в одном домене, coes - Для получения данных со стороннего сервера
            cache: 'no-cache',//default лучше использовать
            credentials: 'same-origin',//'include' = для проверки подлинности с cookies 
            headers: {
                'Content-Type': 'application/json',

            },
            redirect: 'follow',
            referrer: 'client',
            body: JSON.stringify(data)
        })
            .then(response=>{
                if(!response.ok) throw new Error('HTTP error, status:', response.status)
                return response.json();
            })
            .then(json=>{
                json.cars.forEach(item => {
                    if(item.brand === select.value) {
                        
                        const {brand, model, price} = item;
                        output.innerHTML = `Машина ${brand} ${model}<br>Цена ${price}`;
                    }
                });
            })
            .catch();
    });

});

/**
 * const request = new XMLHttpRequest();
        request.open('GET', './cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', event => {
            if(request.readyState === 4 && request.status === 200){
                
                const data = JSON.parse(request.responseText);
               
                data.cars.forEach(item => {
                    if(item.brand === select.value) {
                        
                        const {brand, model, price} = item;
                        output.innerHTML = `Машина ${brand} ${model}<br>Цена ${price}`;
                    }
                });


            } else {
                output.innerHTML = `Произошла ошибка`;
            }
            
        });
 */