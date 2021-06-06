let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money = 150000, 
    start = function(){
        do{
            money = +prompt('Ваш месячный доход?');
        }
        while(!isNumber(money));
    };
start();

let appData ={
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        let expName, expValue = 0; 
        this.addExpenses = addExpenses.toLowerCase().split(',');
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){
            expName = prompt('Введите обязательную статью расходов?','Удовольствия'+(i+1));
            do{
                expValue = prompt('Во сколько это обойдется в месяц?');            
            }
            while(!isNumber(expValue));
            this.expenses[expName] = +expValue;
        }
    },
    getExpensesMonth: function (){
        let sum = 0;
        /*let expense = 0;
        for (let i = 0; i < 2; i++){
            expenses[i] = prompt('Введите обязательную статью расходов?','Удовольствия'+i);
            do{
                expense = prompt('Во сколько это обойдется в месяц?');            
            }
            while(!isNumber(expense));
            sum += +expense;
        }*/
        for (let key in this.expenses) sum += this.expenses[key];
        this.expensesMonth = sum;
        return this.expensesMonth;
    },
    getBudget: function(){
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
        return true;
    },
    getTargetMonth: function(){
        let getTarget, result;
        getTarget =Math.ceil(this.mission / this.budgetMonth);
        if (getTarget < 0) {
            result = 'Цель не будет достигнута';
        } else {
            result = 'Цель будет достигнута за '
            + getTarget + ' месяцев';
        }
        return result;
    },
    getStatusIncome: function(){
        let result = this.budgetDay >= 1200 ? 
                'У вас высокий уровень дохода' :
                this.budgetDay >= 600 ?
                'У вас средний уровень дохода':
                this.budgetDay >= 0 ?
                'К сожалению, у вас уровень дохода ниже среднего':
                'Что-то пошло не так';
    
        return result;
    } 
};
appData.asking();

/*
let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);
*/




/*
let expenses1 = prompt('Введите обязательную статью расходов?'); 
let amount1 = prompt('Во сколько это обойдется в месяц?'); 
let expenses2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = prompt('Во сколько это обойдется в месяц?');
*/
//let expenses = [];
//дet expensesAmount = appData.getExpensesMonth();
//let accumulatedMonth = appData.getBudget();

appData.getBudget();//костыль, иначе бюджеты не посчитаются
console.log(appData.getTargetMonth());


console.log('Расходы за месяц: ', appData.getExpensesMonth());



//budgetDay = Math.floor(appData.getBudget() / 30);
//console.log('Бюджет на день c учетом расходов: ', budgetDay);
/*
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
*/
console.log(appData.getStatusIncome());
