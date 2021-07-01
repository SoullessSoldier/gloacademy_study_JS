const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        preloadMessage = `<section>
        <div class='sk-three-bounce'>
          <div class='sk-bounce-1 sk-child'></div>
          <div class='sk-bounce-2 sk-child'></div>
          <div class='sk-bounce-3 sk-child'></div>
        </div>
      </section>`;

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');

    const statusMessage = document.createElement('div');
    //statusMessage.textContent = 'Тут сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.classList.add('preloader-block');
    
    
    //form1.forEach(item => item.addEventListener('submit', handleSubmit.bind(item)));

    
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        form1.appendChild(statusMessage);
        //statusMessage.textContent = loadMessage;
        statusMessage.innerHTML = preloadMessage;

        const formData = new FormData(form1);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        /*
        postData(body, 
            () => {
            statusMessage.textContent = successMessage;
            }, 
            (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            }
        );*/
        postData(body)
            .then(response => {
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

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        form2.appendChild(statusMessage);
        //statusMessage.textContent = loadMessage;
        statusMessage.innerHTML = preloadMessage;

        const formData = new FormData(form2);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then(response => {
                statusMessage.textContent = successMessage;
                //console.log(response);
            })
            .catch(errorMsg => {
                statusMessage.textContent = errorMessage;
                console.error(errorMsg);
            })
            .finally(()=>{
                [...form2.elements].forEach(item=>{
                    if(item.tagName.toLowerCase() === 'input') item.value = '';
                });
            });
        
        
    });
    
   
    //const postData = (body, outputData, errorData) => {
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        /*
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
        
            request.addEventListener('readystatechange', () => {
                if(request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    //outputData();
                    //const response = JSON.parse(request.responseText);
                    const response = request.responseText;
                    resolve(response);   
                } else {
                    //errorData(request.status);
                    reject(request.statusText);                   
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            
            
            //request.send(formData);
            request.send(JSON.stringify(body));
            
        });
        */
        /*
        [...form2.elements].forEach(item=>{
            if(item.tagName.toLowerCase() === 'input') item.value = '';
        });*/
    };

    

};


export default sendForm;