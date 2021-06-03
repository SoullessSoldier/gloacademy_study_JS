'use strict';
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const checkCancel = function(prompt){
    let msg = 'Игра окончена.';
    if (prompt === null){
        alert(msg);
        return false;
    }else{
        return prompt;
    }
}
function Ugadayka(){
    let magicNumber, userNumber, msg;
    
    do{
        magicNumber = +prompt('Загадайте число от 1 до 100?');            
    }
    while(!isNumber(magicNumber) || magicNumber < 1 || magicNumber > 100);

    function guessNumber(n){
        //console.log(n, typeof(n));
        if(n === null){
            msg = 'Игра окончена.';
            alert(msg);
        } else if (!isNumber(n) || n === 0){
            msg = 'Введи число!';
            userNumber = prompt(msg);
            if(checkCancel(userNumber)) guessNumber(+userNumber);
        } else if (n > magicNumber){
            msg = 'Загаданное число больше.\nВведите новый вариант';
            userNumber = prompt(msg);
            if(checkCancel(userNumber)) guessNumber(+userNumber);
        } else if (n < magicNumber){
            msg = 'Загаданное число меньше.\nВведите новый вариант';
            userNumber = prompt(msg);
            if(checkCancel(userNumber)) guessNumber(+userNumber);
        } else if (n === magicNumber){
            msg = 'Поздравляю, Вы угадали!!!';
            alert(msg);
        }
    }
    userNumber = prompt('Угадай число от 1 до 100?');
    //console.log('userNumber: ', userNumber);
    if(userNumber === null){
        msg = 'Игра окончена.';
        alert(msg);
        
    } else {
        guessNumber(+userNumber);

    }            
}
Ugadayka();  
    
    

    
