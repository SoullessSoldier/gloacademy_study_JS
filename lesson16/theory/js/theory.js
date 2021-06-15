'use strict';
/**
 * rest
 * иногда приходится работать с функциями, которые принимают неизвестное количество параметров 
 */

 /**
 * раньше приходилось работать с псевомассивом arguments и  делать из него массив
 * const arg = Array.prototype.slice.call(argiments);
 * console.log(arg);
 *  */   
//В ES6 можно принимать аргументы с помощью rest-параметра
//rest-параметр всегд идет последним!
function test(a, b, c, d,e){
    console.log(a,b,c);
    console.log(d,e);
    
    //console.log(arr);
}
test('red', 5, 12, 'black', [], true, 9);

//spread-оператор
//с помощью spread-оператора элементы массива будут переданы по одному
const arr = ['red', 5, 12];
const arr2 = ['black', true];
//раньше надо было test(arr[0], arr[1], arr[2]);
test(...arr, ...arr2);

//Можно с помощью spread собрать из нескольких массивов один
const arr3 = [...arr, ...arr2];
console.log('arr3: ', arr3);

//Теперь можно преобразовать DOM-коллекцию в массив (у массива больше свойств)
//const newImg = [...document.querySelectorAll('img')];

/**
 * Деструктуризация объектов
 */
const car = {
    brand: 'mazda',
    model: 3,
    color: 'red',
    options: {
        color: 'red',
        abs: true
    }
}
const {brand, model} = car;
const {options:{color, abs}} = car;
console.log(brand,model);
console.log(color,abs);//red, true

const {options:{color: carColor, abs: carAbs}} = car;
console.log(carColor, carAbs);

//если мы не знаем, есть ли свойство в объекте, и можно указать значение по умолчанию

const {brand1, model1 = 6} = car;
console.log(brand1, model1);

//с вложенными свойствами:
const {options: {color1 = 'red'} = {}} = car;
console.log(color1);

const createCar = ({brand = 'BMW', model = '6', color = 'black', colorInt = 'white'} = {}) =>{
    console.log(`
    запущено производство автомобиля ${brand} ${model},
    цвет кузова ${color},
    цвет салона ${colorInt}
    `);
};
createCar({brand: 'Mazda', model: 3, color: 'blue', colorInt: 'black'})
const {brand2, ...options} = car;
console.log(options);

//Деструктуризация массивов
const cars = ['mazda', 'bmw', 'audi', 'volvo', 'ЗИЛ'];
const [a, b, c] = cars;
console.log(a);
console.log(b);
console.log(c);
//можно пропускать элементы
const [a1, , b1, c1] = cars;
console.log(a1);
console.log(b1);
console.log(c1);
//если многомерный массив
const cars1 = [['mazda', 'bmw'], ['audi', 'volvo'], 'ЗИЛ'];
const [a2, b2, c2] = cars1;
console.log(a2);
console.log(b2);
console.log(c2);
//получить вложенные массивы
const [[a3,b3], [c3,d3], e3, f3 = 'VAZ'] = cars1;

console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);
console.log(e3);

const [[a4,b4], [...c4], e4, f4 = 'VAZ'] = cars1;

console.log(a4);
console.log(b4);
console.log(c4);
console.log(e4);

//можно одновремено применять деструктуризацию объектов и массивов
const carsModel = {
    brand: 'Volvo',
    models: {
        sedan: ['s60', 's90'],
        cross: ['v60', 'v90']
    }

};
const {models: {sedan: [s1, s2], cross: [c11, c22]}} = carsModel;
console.log(s1, s2, c11,c22);

//Новые возможности для работы с объектами
const carr = 'bentley';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
    carr, //ранее пришлось бы писать car: car
    cycle,
    bike,
    ride(){
        console.log('go ride')
    }
};
transport.ride();
console.log(transport);

//assign
//Метод Object.assign() копирует из исходных объектов в целевой объект только перечисляемые и собственные свойства
const newTransport = {
    bike: 'Suzuki',
    quadBike: 'Polaris'
};
const newTransport2 = {
    bike: 'Ducati',
    
};
Object.assign(transport, newTransport);
console.log('transport: ', transport);

//Можно создавать копию объекта
const currentTransport = Object.assign({}, transport, newTransport2);//можно из нескольких объектов
console.log('currentTransport: ', currentTransport);

//ES9 копия объкта
const ship = 'Photinia';
const currTrans = {
    ...transport,
     ...newTransport,
      ship,
    ride(){
        console.log('Hello, world!')
    }
};
console.log('currTrans: ', currTrans);

