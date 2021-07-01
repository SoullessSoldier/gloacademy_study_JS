const validateCalcInput = () => {
    const calcInputItems = document.querySelectorAll('.calc-item');
    const validateInputDigits = (element) => {
            element.value = element.value.replace(/\D/g,'');
        };
        calcInputItems.forEach(item=>{
            item.addEventListener('input', event=>validateInputDigits(event.target));
    });
};


export default validateCalcInput;