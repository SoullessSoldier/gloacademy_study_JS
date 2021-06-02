let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money = 150000,
    income = 'freelance',
    addExpenses = 'Коммунальные расходы,Транспорт,Еда,Непредвиденные расходы',
    deposit = false,
    mission = 1000000,
    period = 12;

let start = function(){
    do{
        money = prompt('Ваш месячный доход?');
    /*while (isNaN(money) || money.trim() === '' || money === null) {
        money = prompt('Ваш месячный доход?');
    }*/
    }
    while(!isNumber(money));
        //money = prompt('Ваш месячный доход?');
    
};
start();

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

//money = Number(prompt('Ваш месячный доход?'));

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');
/*
let expenses1 = prompt('Введите обязательную статью расходов?'); 
let amount1 = prompt('Во сколько это обойдется в месяц?'); 
let expenses2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = prompt('Во сколько это обойдется в месяц?');
*/
let expenses = [];
function getExpensesMonth(){
    let sum = 0;
    let expense = 0;
    for (let i = 0; i < 2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов?','Удовольствия');
        do{
            expense = prompt('Во сколько это обойдется в месяц?');            
        }
        while(!isNumber(expense));
        sum += +expense;
    }
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('расходы за месяц: ', expensesAmount);

//console.log(addExpenses.toLowerCase());

function getAccumulatedMonth(income, expenses){
    return income - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
//console.log('Бюджет на месяц с учетом расходов: ', budgetMonth);

function getTargetMonth(mission, budgetMonth){
    return Math.ceil(mission / budgetMonth);
}
let getTarget = getTargetMonth(mission, accumulatedMonth);
if (getTarget < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за '
    + getTarget + ' месяцев');
}

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





