'use strict';
const number = [54, 20, 80, -35, 32, 29, 15];
let names = ['Vladimir', 'Mark', 'Logan', 'Victor', 'Maks', 'Kate', 'Alex'];
const mix = ['Glo', 25, true, 'Academy', '15', -2, null];
const badNum = [45, 20, 74, -35, 'hi', 32, 29, 5];
let forWords = [];

//for ()
for (let i = 0; i < mix.length; i++){
    console.log(mix[i]);
}
console.log('-------');
//for..in - перебор индексов итерируемых обектов
for (let index in mix){
    console.log(index, mix[index]);
}
console.log('-------');
//for..of - перебор значений итерируемых объектов
for (let elem of mix){
    console.log(elem);
}
console.log('-------');
//forEach

mix.forEach((item, index, array)=>{
    console.table({index, item, array});
});
console.log('-------');
//forEach
//с передачей массива в контексте
//со стрелочной функцией контекст this не передается
mix.forEach(function(item, index, array){
    console.log(this);
}, number);
console.log('-------');

//короткая запись
mix.forEach(item=>console.log(item));
console.log('-------');

//изменение элементов массива через for
for(let i = 0; i < names.length; i++){
    names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
}
console.log(names);
console.log('-------');

//изменение элементов массива через forEach
names.forEach(function(item, i, array){
    array[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
});
console.log(names);
console.log('-------');
//через map - в новый массив
const correctNames = names.map(function(item){
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
});
console.log(correctNames);
console.log('-------');
//через Map  и стрелочную функцию
names = names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
console.log(names);
console.log('-------');

//filter в новый массив
//по-старому, && isNaN - чтобы избавиться от строк, которые можно привести к числу
for(let i=0; i < mix.length; i++){
    if(typeof mix[i] === 'string' && isNaN(mix[i])){
        forWords.push(mix[i]);
    }
}
console.log(forWords);
//по новому
console.log('---new---');
let filterWords = mix.filter(item => typeof item === 'string' && isNaN(item));
console.log(filterWords);

let positiveNumbers = number.filter(item => item > 0);
console.log('positiveNumbers: ', positiveNumbers);
console.log('-------');
//Задача - есть ли в массиве mix числа?
//по старому
let result = false;
for (let i = 0; i < mix.length; i++){
    if(typeof mix[i] === 'number'){
        result = true;
        break;
    }
}
console.log(result);

//через some (хотя бы один элемент массива удовлетворяет условию)
let result2 = mix.some(function(item) {
    return typeof item === 'number';
});
console.log(result2);

//есть ли в массиве number числа меньше 0
let result3 = number.some(function(item) {
    return item < 0;
});
console.log(result3);
console.log('-------');
//Метод every (все элементы массива удовлетворяют условию)
let result4 = number.every(function(item){
    return typeof item === 'number';
});
console.log(result4);

let result5 = badNum.every(function(item){
    return typeof item === 'number';
});
console.log(result5);
console.log('-------');

//Метод reduce - помогает аккумулировать значение по массиву,
//каждую итерацию возвращает какое-то значение для следующей итерации
//по старому:
let sum = 0;
for (let i = 0; i < number.length; i++){
    sum += number[i];
}
console.log(sum);
//reduce
let sum2 = number.reduce(function(accumulator, item){
    return accumulator + item;
},0);
console.log(sum2);

// Метод reduceRight - работает справа налева
let sum3 = number.reduceRight(function(accumulator, item){
    return accumulator + item;
},0);
console.log(sum3);

//С помощью метода reduce можно собирать двумерный массив в одномерный
const arr = [[1,2],[3,4],[5,6]];
const res = arr.reduce((acc, item) => acc.concat(item), []);
console.log('res: ', res);


