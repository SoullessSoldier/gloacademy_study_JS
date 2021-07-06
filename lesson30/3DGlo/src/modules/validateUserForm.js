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

    const validateCyrillic = (element) => {
        element.value = element.value.replace(/[^а-яё ]/gi,'');
    };
    const validateCyrillicDigitsPunctuations = (element) => {
        element.value = element.value.replace(/[^?!,.а-яё\d ]/gi,'');
    };
    const validateEmail = (element) => {
        element.value = element.value.replace(/[^a-z\d\@\-\_\.\!\~\*\+\']/gi,'');
    };
    const validatePhone = (element) => {
        element.value = element.value.replace(/[^\d\(\)\-]/g,'');
    };

    const validateOnBlur = (element) => {
        element.value = element.value.replace(/[ \-]{2,}/g,' ');
        element.value = element.value.replace(/[\-]{2,}/g,'-');
        element.value = element.value.replace(/^[ \-]/g,'');
        element.value = element.value.replace(/[ \-]$/g,'');
    };

    const capitalizeFirst = (element) => {
        element.value = element.value.toLowerCase().replace(/\S{2,}/g, (match) =>
            match.replace(/\S/, (m) => m.toUpperCase()));
    };

    const arrUserNames = [form1UserName, form2UserName, form3UserName],
        arrUserEmails = [form1Email, form2Email, form3Email],
        arrUserPhones = [form1Phone, form2Phone, form3Phone];
    
    const arrAllInputs = arrUserNames.concat(arrUserEmails);

    arrUserNames.forEach(item => {
        item.addEventListener('input', event=>validateCyrillic(event.target));
    });
    
    form2Message.addEventListener('input', event=>validateCyrillicDigitsPunctuations(event.target));
    
    
    arrUserEmails.forEach(item => {
        item.addEventListener('input', event=>validateEmail(event.target));
    });
    
    arrUserPhones.forEach(item => {
        item.addEventListener('input', event=>validatePhone(event.target));
    });
    
    arrAllInputs.forEach(item => {
        item.addEventListener('blur', event=>validateOnBlur(event.target));
    });

    arrUserNames.forEach(item => {
        item.addEventListener('blur', event=>capitalizeFirst(event.target));
    });

};


export default validateUserForm;