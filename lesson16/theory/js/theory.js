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

/**
 * Коллекции Map и Set
 * 
 * раньше мы хранили данные только в объектах и массивах
 * минусы:
 * 1) Массивы и объекты наследуют методы родителей
 * 2) объекты могут содержать ключи только в виде строки
 * 3) при переборе объекта порядок перебора может различаться
 * 4) у объекта нет метода length (только через Object.keys(obj).length)
 * 
 * коллекция Map решает эти вопрос, хранит пары ключ-значение, 
 *   ключом может быть любое произвольное значение,
 *  пары хранятся в том порядке, как они были  записаны 
 */
const obj = {
    a: 5,
    b: 10
}

const map = new Map();
map.set('car', {brand: 'mazda', model: '3'})
    .set(777, 'три топора')//ключ - число
    .set(null, 'даже так')
    .set(NaN, 'Wow')
    .set(undefined, 'What else')
    .set(obj, 123);

const func = () => {
    console.log('Hello, world!');
};
map.set(func, 'Hmmmm')
    .set(false, true);

console.log('map: ', map);
//получение значения по ключу
console.log(map.get(undefined));
//Проверка наличия ключа
console.log(map.has(false));
//map.size
console.log(map.size);

//передача значений в конструктор в виде массива
const map1 = new Map([
    [2019, 'New year'],
    [2020, 'Happy christmas']
]);
//метод delete
map1.delete(2019);
//метод clear - удаляет все элементы

//Map - итерируемый объект
const arrr = Array.from(map);
map.forEach((value, key) => {
    console.log(`через forEach ключ: ${key}, значение ${value}`);
});
for (let [key, value] of map){
    console.log(`через for..of ключ: ${key}, значение ${value}`);
};
/**
 * когда использовать map?
 * 1) если ключи это не только строки
 * 2) если ключи генерируются динамически
 * 3) если выполняется много действий с парами ключ-значение 
 *   (добавлять, удалять)
 * 4) если необходимо перебирать ключ-значение
 * 
 * */

/**
 * Коллекция Set - нужна для хранения уникальных значений
 * 
 */
const carss = new Set();

carss.add('mazda');
carss.add('kia');
carss.add('bmw');
carss.add('volvo');
carss.add(NaN);
carss.add(null);
carss.add('mazda'); //дублированные элементы не добавляются

console.log(carss);
console.log(carss.size);//это геттер!

//наличие элемента в коллекции
console.log(carss.has('volvo'));

//удаление элемента в коллекции
console.log(carss.delete('volvo'));
console.log(carss.has('volvo'));

//удаление всех элементов
//console.log(carss.clear());

const carss1 = new Set(['mazda', 'bmw', 'volvo', 5, NaN]);
//Коллекция Set также итерируемая

const [carr1, carr2] = carss1;
console.log('carr1: ', carr1);
console.log('carr2: ', carr2);

//с помощью spread-оператора превратим коллекцию в массив
console.log([...carss1]); 

//объединение коллекций
const allCars = new Set([...carss, ...carss1]);
console.log('allCars: ', allCars);

/**
 * применение Set - если надо часто проверять, 
 *  имеются ли элементы в коллекции или нет, 
 * т.к. перебор массивов - это циклы, а циклы ресурсозатратны
*/

/**
 * 
 *  еще есть WeakMap и WeakSet
 * Если мы работаем с объектом, который «принадлежит» другому коду, 
 * может быть даже сторонней библиотеке, и хотим сохранить у себя 
 * какие-то данные для него, которые должны существовать лишь пока 
 * существует этот объект, то WeakMap – как раз то, что нужно.
 * у WeakMap в качестве ключей могут храниться только объекты, а 
 * у WeakSet в качестве значений могут храниться только объекты
 * они неитерируемы
 * 
*/


