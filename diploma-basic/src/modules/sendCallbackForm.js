const sendCallbackForm = () => {

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

    const form = document.getElementById('form-callback'),
        btn = form.querySelector('.form-btn');

    const statusMessage = document.createElement('div');
    //statusMessage.textContent = 'Тут сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.classList.add('preloader-block');
    
    const enableBtnSubmit = (btn) => {
        btn.removeAttribute('disabled');
        btn.style.cursor = 'pointer';
    };

    const disableBtnSubmit = (btn) => {
        btn.setAttribute('disabled', 'disabled');
        btn.style.cursor = 'not-allowed';
    };
    
    const sendCurrentForm = (event, form) => {
        event.preventDefault();
        form.appendChild(statusMessage);
         
        
        if (checkIfNotEmpty(form)) {
            statusMessage.innerHTML = preloadMessage;

            const formData = new FormData(form);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(body)
                .then(response => {
                    if(!response.ok) throw new Error('Error:', response.status, ' with status text:', response.statusText);
                    statusMessage.textContent = successMessage;
                    
                })
                .catch(errorMsg => {
                    statusMessage.textContent = errorMessage;
                    //console.error(errorMsg);
                })
                .finally(()=>{
                    disableBtnSubmit(btn);
                    setTimeout(()=>{
                        resetForm(form)
                    }, 2000);
                });
        }

        
    };

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
    
    const resetForm = (form) => {
        
        [...form.elements].forEach(item => {
            if(item.tagName.toLowerCase() === 'input' && !item.matches('.form-btn')) {
                item.value = '';
                
            }
        });
        statusMessage.textContent = '';
        enableBtnSubmit(btn);
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

    form.addEventListener('submit', event => sendCurrentForm(event, form));
    

};

export default sendCallbackForm;
