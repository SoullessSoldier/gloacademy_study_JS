var money = 150000;
var income = 'freelance';
var addExpenses = 'Коммунальные расходы,Транспорт,Еда,Непредвиденные расходы';
var deposit = false;
var mission = 1000000;
var period = 12;


console.log('typeof money, income, deposit: ',typeof money, typeof income, typeof deposit);
console.log('Length of addExpenses: ', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель - заработать ${mission} рублей)`);

var myArr = addExpenses.toLowerCase().split(',');
console.log('myArr: ', myArr);
var budgetDay = money / 30;
console.log('budgetPerDay: ', budgetDay);
//3.1
//3.2
money = Number(prompt('Ваш месячный доход?'));
//3.3
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//3.4
deposit = confirm('Есть ли у вас депозит в банке?');
//3.5
let expenses1 = prompt('Введите обязательную статью расходов?'); 
let amount1 = prompt('Во сколько это обойдется в месяц?'); 
let expenses2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = prompt('Во сколько это обойдется в месяц?');
//3.6
let budgetMonth = (money - amount1 - amount2);
console.log('Бюджет на месяц с учетом расходов: ', budgetMonth);
//3.7
let monthesForMission = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + monthesForMission + ' месяцев');
//3.8
budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день c учетом расходов: ', budgetDay);
//3.9
var result = budgetDay >= 1200 ? 
        'У вас высокий уровень дохода' :
    budgetDay >= 600 ?
        'У вас средний уровень дохода':
    budgetDay >= 0 ?
        'К сожалению, у вас уровень дохода ниже среднего':
        'Что-то пошло не так';

console.log(result);





