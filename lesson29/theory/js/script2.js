'use strict';
const errorMessage = 'Что-то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

const form = document.getElementById('form');
const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 2rem; margin: 1rem 0;';
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    form1.appendChild(statusMessage);
    //statusMessage.textContent = loadMessage;
    //statusMessage.innerHTML = preloadMessage;

    const formData = new FormData(form1);
    let body = {};

    formData.forEach((val, key) => {
        body[key] = val;
    });
    statusMessage.textContent = loadMessage;

    postData(body)
                .then(response => {
                    if(response.status !== 200) throw new Error('HTTP error, status:', response.status);
                    statusMessage.textContent = successMessage;
                    //console.log(response);
                })
                .catch(errorMsg => {
                    statusMessage.textContent = errorMessage;
                    console.error(errorMsg);
                })
                .finally(()=>{
                    [...form1.elements].forEach(item=>{
                        if(item.tagName.toLowerCase() === 'input') item.value = '';
                    });
                });

});
const postData = (body) => {
    return fetch('http://localhost/theory/server.php', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
        
    });

    
};
