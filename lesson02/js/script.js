var money = 150000;
var income = 'freelance';
var addExpenses = '10000,5000,6000';
var deposit = false;
var mission = 1000000;
var period = 12;


console.log('typeof money, income, deposit: ',typeof money, typeof income, typeof deposit);
console.log('Length of addExpenses: ', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель - заработать ${mission} рублей/долларов/гривен/юаней (такое ТЗ ;) )`);

var myArr = addExpenses.split(',');
console.log('myArr: ', myArr);
var budgetDay = money / 30;
console.log('budgetPerDay: ', budgetDay);

