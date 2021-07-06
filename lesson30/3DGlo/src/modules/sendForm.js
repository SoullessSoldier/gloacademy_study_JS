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
                        if(!response.ok) throw new Error('Error:', response.status, ' with status text:', response.statusText);
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