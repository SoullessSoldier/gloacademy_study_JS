const validateUserInput = () => {

    const fioInput = document.querySelector('#fio'),
        telInput = document.getElementById('tel'),
        form = document.getElementById('form-callback');

    const phoneTemplate = new RegExp('^\\+?\\d{1}[\\(\\- ]?(\\d{3})[\\)\\- ]?[\\- ]?(\\d{3})[\\- ]?(\\d{2})[\\- ]?(\\d{2})$','gm'),
        userNameTemplate = new RegExp('^[а-яё ]{3,}$','ui');

    const initFormCallback = () => {
        const btn = form.querySelector('.form-btn');
        disableBtnSubmit(btn);
        
    };

    const markValidElement = (condition, element) => {

        if(condition){
            element.style.border='2px solid green';
            element.setAttribute('valid', 'true');
                
        } else {
            element.style.border='2px solid red';
            element.removeAttribute('valid');
        }
    };

    const testRegex = (template, str) => {
        return template.test(str);
    };

    const capitalizeFirst = (element) => {
        element.value = element.value.toLowerCase().replace(/\S{2,}/g, (match) =>
            match.replace(/\S/, (m) => m.toUpperCase()));
    };

    const getBtnSubmit = (element) => {
        //const form = element.closest('form-callback');
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

    const isFormValid = (element) => {
        
        const arrInputs = [...form.elements].filter(elem => 
            elem.tagName.toLowerCase() === 'input' && !elem.matches('.form-btn'));
        return arrInputs.every(elem => elem.hasAttribute('valid'));
    };

    const validateCyrillic = (element) => {
        element.value = element.value.replace(/[^а-яё ]/gi,'');
    };

    const validateOnInputPhone = (element) => {
        element.value = element.value.replace(/[^\+\d\(\)\-]/g,'');
    };

    const validateOnBlur = (element) => {
        element.value = element.value.trim();
        capitalizeFirst(element);
    };

    fioInput.addEventListener('input', e => {
        const target = e.target;
        validateCyrillic(target);
        markValidElement(testRegex(userNameTemplate, target.value.trim()), target);
        if(isFormValid(target)) {
            enableBtnSubmit(getBtnSubmit(target));
        } else {
            disableBtnSubmit(getBtnSubmit(target));
        }
    });
    fioInput.addEventListener('blur', e => validateOnBlur(fioInput));

    telInput.addEventListener('input', e => {
        const target = e.target;
        validateOnInputPhone(target);
        markValidElement(testRegex(phoneTemplate, target.value.trim()), target);
        if(isFormValid(target)) {
            enableBtnSubmit(getBtnSubmit(target));
        } else {
            disableBtnSubmit(getBtnSubmit(target));
        }
    });

    initFormCallback();
}; 

export default validateUserInput;