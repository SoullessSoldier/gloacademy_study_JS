var money = 150000;
var income = 'freelance';
var addExpenses = 'Коммунальные расходы,Транспорт,Еда,Непредвиденные расходы';
var deposit = false;
var mission = 1000000;
var period = 12;

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


//var myArr = addExpenses.toLowerCase().split(',');
//console.log('myArr: ', myArr);
//var budgetDay = money / 30;
//console.log('budgetPerDay: ', budgetDay);

money = Number(prompt('Ваш месячный доход?'));

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?'); 
let amount1 = prompt('Во сколько это обойдется в месяц?'); 
let expenses2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = prompt('Во сколько это обойдется в месяц?');

function getExpensesMonth(amount1, amount2){
    return Number(amount1) + Number(amount2);
};
console.log('getExpensesMonth: ', getExpensesMonth(amount1, amount2));

console.log(addExpenses.toLowerCase());

function getAccumulatedMonth(income, expenses){
    return income - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));
//console.log('Бюджет на месяц с учетом расходов: ', budgetMonth);

function getTargetMonth(mission, budgetMonth){
    return Math.ceil(mission / budgetMonth);
}
console.log('Цель будет достигнута за '
    + getTargetMonth(mission, accumulatedMonth) 
    + ' месяцев');

budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день c учетом расходов: ', budgetDay);

let getStatusIncome = function(budgetDay){
    let result = budgetDay >= 1200 ? 
            'У вас высокий уровень дохода' :
        budgetDay >= 600 ?
            'У вас средний уровень дохода':
        budgetDay >= 0 ?
            'К сожалению, у вас уровень дохода ниже среднего':
            'Что-то пошло не так';

    return result;
};

console.log(getStatusIncome(budgetDay));





