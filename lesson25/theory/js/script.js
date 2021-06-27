const phone = document.getElementById('phone');

const showLog = function() {
    this.value = this.value.replace(/\D/g, '');
};
//phone.addEventListener('keydown', showLog);
//phone.addEventListener('keyup', showLog);--можно пользоваться этим событием для фильтрации ввода
//phone.addEventListener('keypress', showLog);
//phone.addEventListener('input', showLog);--must have событие

/**maskPhone */
//maskPhone('#phone')

//Валидация емейл
const myForm = document.getElementById('myform');

myForm.addEventListener('submit', validate);

const elementsForm = [];

for(const elem of myForm.elements){
    if(elem.tagName.toLowerCase()!=='button' && 
        elem.type !=='button'){
        elementsForm.push(elem);
    }
}

function validate(event){
    const patternPhone = /^\d+$/;
    elementsForm.forEach(elem => {
        if (!elem.value){
            elem.style.border = 'solid red';
            event.preventDefault();
        } else {
            elem.style.border='';
        }

        if(elem.id === 'phone' && !patternPhone.test(elem.value)){
            elem.style.border = 'solid red';
            event.preventDefault();
        }
    });
}
