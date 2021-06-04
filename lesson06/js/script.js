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
        return true;
    }
}
function Ugadayka(){
    let magicNumber, userNumber, msg;
    let numAttempts = 10;
  
    magicNumber = Math.floor(Math.random() * 100) + 1;
    
    function guessNumber(n){
        console.log(n, typeof n)
        if(numAttempts === 0){
            msg='Попытки закончились, хотите сыграть еще?';
            if(confirm(msg)){
                Ugadayka();
            }else{
                msg = 'Игра окончена.';
                alert(msg);
            };
        }else{
            if(n === null){
                msg = 'Игра окончена.';
                alert(msg);
            } else if ((!isNumber(n)) || (n === 0)){
                msg = `Введи число!\nОсталось попыток ${numAttempts}.`;
                numAttempts--;
                userNumber = prompt(msg);
                if(checkCancel(userNumber)) guessNumber(+userNumber);
            } else if (n > magicNumber){
                msg = `Загаданное число меньше.\nОсталось попыток ${numAttempts}.\nВведите новый вариант`;
                numAttempts--;
                userNumber = prompt(msg);
                if(checkCancel(userNumber)) guessNumber(+userNumber);
            } else if (n < magicNumber){
                msg = `Загаданное число больше.\nОсталось попыток ${numAttempts}.\nВведите новый вариант`;
                numAttempts--;
                userNumber = prompt(msg);
                if(checkCancel(userNumber)) guessNumber(+userNumber);
            } else if (n === magicNumber){
                msg = 'Поздравляю, Вы угадали!!!\nХотели бы сыграть еще?';
                if(confirm(msg)){
                    Ugadayka();
                }else{
                    msg = 'Игра окончена.';
                    alert(msg);
                };
            }
        }
        
    }
    userNumber = prompt(`Угадай число от 1 до 100?\nОсталось попыток ${numAttempts}.`);
    numAttempts--;
    //console.log('userNumber: ', userNumber);
    if(userNumber === null){
        msg = 'Игра окончена.';
        alert(msg);
        
    } else {
        guessNumber(+userNumber);
        
    }            
}
Ugadayka();  
