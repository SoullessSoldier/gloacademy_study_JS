document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    const select = document.getElementById('cars');
    const output = document.getElementById('output');
    select.addEventListener('change', ()=>{
        const request = new XMLHttpRequest();
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
    });

});