const validateUserInput = () => {

    const fioInput = document.querySelector('#fio'),
        telInput = document.getElementById('tel');

    
    const validateCyrillic = (element) => {
        element.value = element.value.replace(/[^а-яё ]/gi,'');
    };

    const validateOnInputPhone = (element) => {
        element.value = element.value.replace(/[^\+\d]/g,'');
    };

    fioInput.addEventListener('input', e => {
        const target = e.target;
        validateCyrillic(target);
    });

    telInput.addEventListener('input', e => {
        const target = e.target;
        validateOnInputPhone(target);
    });

}; 

export default validateUserInput;