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

//Теперь приватные свойства сделаны публичными, но воздействовать на них снаружи никак нельзя

/**
 * Подходы к определению модуля:
 *  - AMD - асинхронное определение модуля
 *  - UMD - универсальное определение модуля
 *  - CommonJS - 
 * */