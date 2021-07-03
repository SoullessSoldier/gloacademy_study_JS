const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        warnInputMessage = 'Заполните поля в форме!',
        preloadMessage = `<section>
        <div class='sk-three-bounce'>
          <div class='sk-bounce-1 sk-child'></div>
          <div class='sk-bounce-2 sk-child'></div>
          <div class='sk-bounce-3 sk-child'></div>
        </div>
      </section>`;

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        arrAllForms = [form1, form2, form3];

    const statusMessage = document.createElement('div');
    //statusMessage.textContent = 'Тут сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.classList.add('preloader-block');
    
    arrAllForms.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
             
            
            if (checkIfNotEmpty(item)) {
                statusMessage.innerHTML = preloadMessage;
    
                const formData = new FormData(item);
                let body = {};
    
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                
                postData(body)
                    .then(response => {
                        if (item === form3) statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
                        statusMessage.textContent = successMessage;
                        
                    })
                    .catch(errorMsg => {
                        if (item === form3) statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
                        statusMessage.textContent = errorMessage;
                        console.error(errorMsg);
                    })
                    .finally(()=>{
                        [...item.elements].forEach(item=>{
                            if(item.tagName.toLowerCase() === 'input') item.value = '';
                        });
                    });
            }
    
            
        });
    });
    /*   
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        form1.appendChild(statusMessage);
        
        if (checkIfEmpty(form1)) {
            statusMessage.innerHTML = preloadMessage;

            const formData = new FormData(form1);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(body)
                .then(response => {
                    statusMessage.textContent = successMessage;
                    
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
        }

        
    });

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        form2.appendChild(statusMessage);
        
        statusMessage.innerHTML = preloadMessage;

        const formData = new FormData(form2);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then(response => {
                statusMessage.textContent = successMessage;
                
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

    form3.addEventListener('submit', (event) => {
        event.preventDefault();
        form3.appendChild(statusMessage);
        
        statusMessage.innerHTML = preloadMessage;

        const formData = new FormData(form3);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then(response => {
                statusMessage.textContent = successMessage;
                
            })
            .catch(errorMsg => {
                statusMessage.textContent = errorMessage;
                console.error(errorMsg);
            })
            .finally(()=>{
                [...form3.elements].forEach(item=>{
                    if(item.tagName.toLowerCase() === 'input') item.value = '';
                });
            });
        
        
    });
    */
    const checkIfNotEmpty = (form) => {
        let flag = true;
        [...form.elements].forEach(item=>{
            if(item.tagName.toLowerCase() === 'input' && !item.value.trim()){
                showWarnStatus(statusMessage, warnInputMessage);
                flag = false;
            }
        });
        return flag;
    };
    
    const showWarnStatus = (block, text) => {
        block.innerHTML = `<font color="red">${text}</font>`;
        setTimeout(()=>{
            block.textContent= '';
        },2000);
    };

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
       
    };

    

};


export default sendForm;