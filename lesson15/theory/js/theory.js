/**
 * ES6 = ES2015 = ECMAScript2015 = "Harmony"
 * ES5 имел много проблем:
 *  - всплытие переменных
 * console.log(n);
 * n = 10;
 * var n = 5;
 * console.log(n);
 * //...
 * var n = 15
 * и это не будет ошибкой!
 * var - переменная глобальной области видимости 
 *  
 * ES6
 * Новая Let - переменная видна только в блоке кода, ограниченном фигурными скобками
 * Новая const - для постоянных (у объекта можно добавить свойства, но нельзя переназначить).
 * 
 * ES6 шаблонные строки, они нагляднее, можно переносить текст и вставлять переменную,
 * либо любое выражение, возвращающее значение.   
 * const newStr = `Обратные кавычки`;
 * 
 * ES6 параметр по умолчанию
 * const createHome = function(walls = 4, doors = 1, windows = 6){
 *  console.log(`Дом имеет - 
 *      стен: ${walls},
 *      дверей: ${doors},
 *      окон: ${windows}`)
 * }
 * createHome()
 * Чаще всего параметры по умолчанию ставят  в конце, чтобы не было так:
 *  createHome(,2,3);
 * 
 * ES6 - новый способ объявления функций - стрелочные функции
 * const sum = (a,b) => {
 *  return a+b;
 * }
 * Ключевая особенность: const sum = (a, b) => a + b;
 * Но функцию, возвращающую объект, так писать нельзя!
 * Для объекта:
 *  const sum = (a,b) =>({
 *      a:a,
 *      b:b,
 *      sum: a+b
 * });
 * стрелочную функцию удобно использовать в обработчике событий
 * 
 * У стрелочных функций нет контекста вызова this, 
 */

/**
 * defineProperty, Геттеры, Сеттеры
 * 
 *  
 */
const mazda = {
    model:3,
    year: 2006
}
//mazda.color = 'blue'//or mazda['color] = 'blue'

/**
 * defineProperty() - этот метод позволяет определять свойства объекта
 * и настроить его поведенческие характеристики
 * */
/*
Object.defineProperty(mazda, 'color', {//тут объект аргументов
    value: 'blue',  //значение свойства
    writable: true,//разрешать изменение свойства (mazda.color='red')
    configurable: true,//разрешаьт удаление свойтсва (delete mazda.color)
    enumerable: true//разрешение видеть свойство во время перебора цикла
});
mazda.color='red';//writable = true
delete mazda.color; //configurable = true
for (let key in mazda){
    console.log(key, mazda[key]);
}//покажет среди прочих и color, если enumerable.true
*/
//defineProperty позволяет добавлять getter'ы и setter'ы 
/*const car = {
    brand: 'mazda',
    model: 3,
    year: 2006
};
car.color = 'blue';*/
//добавим метод-getter, возвращающий  brand и model
/*Object.defineProperty(car,'fullTitle',{
    get: function(){
        return this.brand + ' ' + this.model;
    }
});
console.log(car.fullTitle);//mazda 3
*/

//setter - Задает значение
/*
Object.defineProperty(car,'fullTitle',{
    get: function(){
        return this.brand + ' ' + this.model;
    },
    set: function(val){
        this.brand = val;
    }
});
car.fullTitle = 'RangeRover'
console.log('car.fullTitle: ', car.fullTitle);//RangeRover 3
*/
//ES6 - запись геттера и сеттера прямо внутри объекта
/*
const car = {
    brand: 'mazda',
    model: 3,
    year: 2006,
    get fullTitle(){
        return this.brand + this.model;
    },
    set fullTitle(val){
        this.brand = val;
    }
};
car.fullTitle = 'BMW';
*/

/**
 * Классы ES6
 * класс = функция-конструктор, которая создает объект
 * можно добавлять геттеры и сеттеры, 
 * которые и могут влиять на локальные (защищенные) переменные  
 */
//класс мойки машин
class CarWash{
    constructor(brand, model = CarWash.noCarBaseModel(), services = []){
        this.brand = brand;
        this.model = model;
        this.washed = false;//признак помытости машины
        this._services = services;//_ - защищенная переменная (инкапсуляция)
    }
    //проверяем, есть машина в базе
    static noCarBaseModel(){
        return 'none';
    }
    washReady(){
        this.washed = true;
        CarWash.counter++;
        this.report();//после мойки сообщим, что машина помыта
    }
    report(){
        console.log(this.brand, this.model, this.washed);
    }
    get services(){
        console.log(this._services);
        return this._services.length > 0 ? 'Есть доп.услуги' : 'Нет доп.услуг'; 
    }
    set services(addServices){
        return this._services.push(addServices);
    }
};
//Статические методы и свойства - принадлежат самому классу,
//их можно создавать вне класса.
CarWash.counter = 0;


const car1 = new CarWash('BMW',3, ['black tires', 'wax']);
const car2 = new CarWash('Lada','Vesta');
const car3 = new CarWash('Volvo','S60');
const car4 = new CarWash('ZAZ');

console.log('CarWash.counter: ', CarWash.counter);
car1.washReady();
car2.washReady();
car3.washReady();
car4.washReady();
console.log('CarWash.counter: ', CarWash.counter);
console.log(car1.services);
console.log(car2.services);

car1.services = 'протирка стекол';


//наследование классов, не нужно дополнительно указывать прототипы и конструкторы
class PassCar extends CarWash{
    constructor(brand, model, services, pass = 5){
        super(brand, model, services);//наследование конструктора от родителя
        this.pass = pass;//новое свойство у класса-потомка
    }
    washReady(){
        super.washReady();//добавление метода из класса-родителя
        this.reportToOffice();//после мойки сообщим в офис, что машина помыта
    }
    reportToOffice(){
        console.log('На мойке для легквоых автомобилей помыт автомобиль')
    }
}
const car6 = new PassCar('mazda', 3); 
console.log('car1: ', car1);
console.log('car6: ', car6);
car1.washReady();
car6.washReady();