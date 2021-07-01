const validateUserForm = () =>{
    const form2UserName = document.getElementById('form2-name');
    const form2Message = document.getElementById('form2-message');
    const form2Email = document.getElementById('form2-email');
    const form2Phone = document.getElementById('form2-phone');
    const form1UserName = document.getElementById('form1-name');
    const form1Email = document.getElementById('form1-email');
    const form1Phone = document.getElementById('form1-phone');

    const validateCyrillic = (element) => {
        element.value = element.value.replace(/[^а-яё ]/gi,'');
    };
    const validateCyrillicDigitsPunctuations = (element) => {
        element.value = element.value.replace(/[^?!,.а-яё\d ]/gi,'');
    };
    const validateEmail = (element) => {
        element.value = element.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi,'');
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

    [form2UserName, form1UserName].forEach(item => {
        item.addEventListener('input', event=>validateCyrillic(event.target));
    });
    
    form2Message.addEventListener('input', event=>validateCyrillicDigitsPunctuations(event.target));
    
    
    [form1Email, form2Email].forEach(item => {
        item.addEventListener('input', event=>validateEmail(event.target));
    });
    
    [form1Phone, form2Phone].forEach(item => {
        item.addEventListener('input', event=>validatePhone(event.target));
    });
    
    [form1UserName, form1Email, form1Phone, form2UserName, form2Message, form2Email, form2Phone].forEach(item => {
        item.addEventListener('blur', event=>validateOnBlur(event.target));
    });

    form2UserName.addEventListener('blur', event=>capitalizeFirst(event.target));
    

};


export default validateUserForm;