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

    let flag = false;
    const phoneTemplate = new RegExp('^\\+?\\d{1}[\\(\\- ]?(\\d{3})[\\)\\- ]?[\\- ]?(\\d{3})[\\- ]?(\\d{2})[\\- ]?(\\d{2})$','gm');
    const emailTemplate = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    
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
    
    const disableBtnSubmit = (btn) => {
        btn.setAttribute('disabled', 'true');
        btn.style.cursor = 'not-allowed';
    };

    const enableBtnSubmit = (btn) => {
        btn.removeAttribute('disabled');
        btn.style.cursor = 'pointer';
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
            if(element.value.trim().length < 3){
                element.style.border='2px solid red';
                flag = false;
            } else {
                element.style.border='2px solid green';
                flag = true;
            } 
        } else if (arrUserPhones.includes(element)){
            if(!phoneTemplate.test(element.value.trim())){
                element.style.border='2px solid red';
                flag = false;
                console.log('flag: ', flag);

            } else {
                element.style.border='2px solid green';
                flag = true;
                console.log('flag: ', flag);
            } 
        } else if (arrUserEmails.includes(element)){
            if(!emailTemplate.test(element.value.trim())){
                element.style.border='2px solid red';
                flag = false;
                console.log('flag: ', flag);

            } else {
                element.style.border='2px solid green';
                flag = true;
                console.log('flag: ', flag);
            } 
        } else {
            //техническая заглушка, т.к. есть еще и form2-message
            flag=true;
        }
    };

    const capitalizeFirst = (element) => {
        element.value = element.value.toLowerCase().replace(/\S{2,}/g, (match) =>
            match.replace(/\S/, (m) => m.toUpperCase()));
    };

    const setInputListeners = () => {
        form2Message.addEventListener('input', event=>validateCyrillicDigitsPunctuations(event.target));
        
        arrUserEmails.forEach(item => {
            item.addEventListener('input', event=>validateOnInputEmail(event.target));
        });
        
        arrUserPhones.forEach(item => {
            item.addEventListener('input', event=>{
                event.target.style.border='';
                validateOnInputPhone(event.target);
            });
        });

        arrUserNames.forEach(item => {
            item.addEventListener('input', event=>{
                event.target.style.border='';
                validateCyrillic(event.target);
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