const validateUserForm = () =>{
    const form2UserName = document.getElementById('form2-name'),
        form2Message = document.getElementById('form2-message'),
        form2Email = document.getElementById('form2-email'),
        form2Phone = document.getElementById('form2-phone'),
        form1UserName = document.getElementById('form1-name'),
        form1Email = document.getElementById('form1-email'),
        form1Phone = document.getElementById('form1-phone'),
        form3UserName = document.getElementById('form3-name'),
        form3Email = document.getElementById('form3-email'),
        form3Phone = document.getElementById('form3-phone');

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        arrAllForms = [form1, form2, form3];

    
    const phoneTemplate = new RegExp('^\\+?\\d{1}[\\(\\- ]?(\\d{3})[\\)\\- ]?[\\- ]?(\\d{3})[\\- ]?(\\d{2})[\\- ]?(\\d{2})$','gm'),
        emailTemplate = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'),
        userNameTemplate = new RegExp('^[а-яё ]{3,}$','ui'),
        userMessageTemplate = new RegExp('^[\\?,{!\\.а-яё\\d ]+$','ui');

    
    const initForms = () => {
        arrAllForms.forEach(item=>{
            const btn = item.querySelector('.form-btn');
            disableBtnSubmit(btn);
        });
    };
        
    const getBtnSubmit = (element) => {
        const form = element.closest('form');
        return form.querySelector('.form-btn');
    };

    const isFormValid = (element) => {
        const form = element.closest('form');
        const arrInputs = [...form.elements].filter(elem => elem.tagName.toLowerCase() === 'input')
        return arrInputs.every(elem=>elem.hasAttribute('valid'));
    };
    
    const disableBtnSubmit = (btn) => {
        btn.setAttribute('disabled', 'true');
        btn.style.cursor = 'not-allowed';
    };

    const enableBtnSubmit = (btn) => {
        btn.removeAttribute('disabled');
        btn.style.cursor = 'pointer';
    };

    const testRegex = (template, str) => {
        return template.test(str);
    };

    const markValidElement = (condition, element) => {

        if(condition){
            element.style.border='2px solid green';
            element.setAttribute('valid', 'valid');
            
        } else {
            element.style.border='2px solid red';
            element.removeAttribute('valid');
        }
    };

    const validateCyrillic = (element) => {
        element.value = element.value.replace(/[^а-яё ]/gi,'');
    };
    const validateCyrillicDigitsPunctuations = (element) => {
        element.value = element.value.replace(/[^?!,.а-яё\d ]/gi,'');
    };
    const validateOnInputEmail = (element) => {
        element.value = element.value.replace(/[^a-z\d\@\-\_\.\!\~\*\+\']/gi,'');
    };
    const validateOnInputPhone = (element) => {
        element.value = element.value.replace(/[^\+\d\(\)\-]/g,'');
    };

    const validateOnBlur = (element) => {
        element.value = element.value.replace(/[ \-]{2,}/g,' ');
        element.value = element.value.replace(/[\-]{2,}/g,'-');
        element.value = element.value.replace(/^[ \-]/g,'');
        element.value = element.value.replace(/[ \-]$/g,'');
        if (arrUserNames.includes(element)) {
            capitalizeFirst(element);
        }
    };

    const capitalizeFirst = (element) => {
        element.value = element.value.toLowerCase().replace(/\S{2,}/g, (match) =>
            match.replace(/\S/, (m) => m.toUpperCase()));
    };

    const setInputListeners = () => {
        form2Message.addEventListener('input', event=>{
            const target = event.target;
            validateCyrillicDigitsPunctuations(target);
            markValidElement(testRegex(userMessageTemplate, target.value.trim()), target);
            if(isFormValid(target)) {
                enableBtnSubmit(getBtnSubmit(target));
            } else {
                disableBtnSubmit(getBtnSubmit(target));
            }

        });
        
        arrUserEmails.forEach(item => {
            item.addEventListener('input', event=>{
                const target = event.target;
                validateOnInputEmail(target);
                markValidElement(testRegex(emailTemplate, target.value.trim()), target);
                if(isFormValid(target)) {
                    enableBtnSubmit(getBtnSubmit(target));
                } else {
                    disableBtnSubmit(getBtnSubmit(target));
                }
            });
        });
        
        arrUserPhones.forEach(item => {
            item.addEventListener('input', event=>{
                const target = event.target;
                validateOnInputPhone(target);
                markValidElement(testRegex(phoneTemplate, target.value.trim()), target);
                if(isFormValid(target)) {
                    enableBtnSubmit(getBtnSubmit(target));
                } else {
                    disableBtnSubmit(getBtnSubmit(target));
                }
            });
        });

        arrUserNames.forEach(item => {
            item.addEventListener('input', event=>{
                const target = event.target;
                //target.style.border='';
                validateCyrillic(target);
                markValidElement(testRegex(userNameTemplate, target.value.trim()), target);
                if(isFormValid(target)) {
                    enableBtnSubmit(getBtnSubmit(target));
                } else {
                    disableBtnSubmit(getBtnSubmit(target));
                }
            });
        });
    };

    const arrUserNames = [form1UserName, form2UserName, form3UserName],
        arrUserEmails = [form1Email, form2Email, form3Email],
        arrUserPhones = [form1Phone, form2Phone, form3Phone];
    
    const arrAllInputs = arrUserNames.concat(arrUserEmails, arrUserPhones);

    
    
    setInputListeners();
    
    arrAllInputs.forEach(item => {
        item.addEventListener('blur', event=>validateOnBlur(event.target));
    });

    
    
    
    initForms();

};


export default validateUserForm;