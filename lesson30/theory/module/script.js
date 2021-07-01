//Самовызываемая анонимная функция
(function(){const appData = {
    a: 1,
    b: 2
};
console.log(appData.a, appData.b);}());

//Объектный интерфейс
const car = (function(){
    const hidden = 'I am a private variable';

    const secret = () => {
        console.log(hidden);
    };

    return {
        /*run(){
            secret();
            console.log('какая-то строка')
        }*/
        hidden: hidden,
        secret: secret
    }
}());
//car.run(); 
car.secret(); 
console.log(car.hidden);