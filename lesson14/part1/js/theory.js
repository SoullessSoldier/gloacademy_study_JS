/*** Прототипы и наследование
 *  псевдокод:
 *  Prototype car{
 *      doors: 4,
 *      turbocharging: false
 *  }
 *       ^^^
 *        |
 *  Object mazda{
 *      model: 'mazda3',
 *      year: 2006
 *  }
 * mazda.model; //"mazda3"
 * mazda.doors; //4
 * mazda.year; //2006
 * mazda.color; //undefined
 * 
 * при добавлении свойтсв в объект оно с него и начнет искаться
 * 
 * 
 */
let arr = [1,2,3,4];
console.log(arr);
//__proto__: Array
// arr -> Array -> Object
console.log(arr.__proto__ === Array.prototype);

let car = {
    doors: 4,
    turbocharging: false,
    ride: function(){
        console.log('Машина едет');
    }
};
let newCar = Object.create(car);
newCar.model = 'mazda3'; // создание объекта newCar на основе car
console.log('newCar.doors: ', newCar.doors);
console.log('newCar: ', newCar);

//Полезные методы
//hasOwnProperty
console.log('newCar.hasOwnProperty("model"): ', newCar.hasOwnProperty('model'));//true
console.log('newCar.hasOwnProperty("doors"): ', newCar.hasOwnProperty('doors'));//false
console.log('newCar.__proto__.hasOwnProperty("model"): ', newCar.__proto__.hasOwnProperty('model'));//true
console.log('newCar.__proto__.hasOwnProperty("doors"): ', newCar.__proto__.hasOwnProperty('doors'));//false

//isPrototypeOf
console.log(car.isPrototypeOf(newCar));//true

/***
 * Конструктор - функция, используемая как описание какой-то сущности
 *  Любая функция можеть быть вызвана как конструктор
 *  чтобы выделить такую функцию, ее название пишут с Большой Буквы 
 */
/* Обычный конструктор
function Car(){
    this.model = 'Mazda';
}
*/
//Конструктор с параметрами
function Car(model, color){
    this.model = model;
    this.color = color;
}

//let car1 = new Car();
let car1 = new Car('Mazda', 'red');

//this - ссылка на новосозданный объект, и мы обращаемся к его ключу model
console.log('car1: ', car1);

let carTest = {
    model: 'Mazda'
}
//объекты car1 и carTest вроде бы похожи, но у car1 есть своя прослойка между ним и Object,
// т.е. конструктор - прослойка, в которую мы можем добавлять свои свойства и методы

console.dir(Car);
Car.prototype.ride = function(){
    console.log('Ехать')
};
console.dir(Car);
car1.ride();
let car2 = new Car('VAZ','black');
console.log(car1.ride === car2.ride);

/**
 * Классы
 * ООП - подход к решению задачи, манипулируя объектами
 * класс - абстрактная единица, описывающая объект
 * В ООП любой объект должен быт создан на основании класса
 * 
 */
function Car(brand, model, options){
    this.brand = brand;
    this.model = model;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}//это абстрактный класс

Car.prototype.ride = function(){
    console.log(this.brand + ' ' + this.model + ' поехала!')
};

//а это уже объекты на основе класса
let car1 = new Car('Mazda','3', {color: 'red'});
let car2 = new Car('BMW','X3', {ABS: true});



console.log(car1);
console.log(car2);

car1.ride();
car2.ride();

console.log(Car.prototype.isPrototypeOf(car1));
console.log(car2 instanceof Car);

//Наследование классов
//отношение между классами, когда класс использует структуру другого класса 9одиночное наследование),
//или других классов (множественное наследование)
function Car(countryBuild, options){
    this.countryBuild = countryBuild;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}

Car.prototype.ride = function(){
    console.log(this.brand + ' ' + this.model + ' поехала!')
}

function Audi(countryBuild, options, model, type){
    this.brand = 'Audi';
    Car.apply(this.arguments);//наследование
    this.model = model;
    this.type = type;
}

Audi.prototype = Object.create(Car.prototype);//привязка прототипа!!!
Audi.prototype.constructor = Audi;//привязка конструктора!!!

let car_q7 = new Audi('Germany', {color: 'red'}, 'Q7', 'S');
console.log('car_q7: ', car_q7);

console.log(car_q7 instanceof Audi);
console.log(car_q7 instanceof Car);

car_q7.ride();

// класс Object является родителем всех объектов
console.log(new Object());
console.log(car_q7 instanceof Object);
