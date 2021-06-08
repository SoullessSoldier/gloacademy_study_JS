let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isAlphaNumeric = function(s){
    //debugger;
    return s.match(/^[\p{L}\p{N}, ]+/gmu) != null;
}
let isAlpha = function(s){
    //debugger;
    return s.match(/^[\p{L}, ]+/gmu) != null;
}

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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }while(!isAlpha(itemIncome));
            let cashIncome;
            do{
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }while(!isNumber(cashIncome) || cashIncome <= 0);
            this.income[itemIncome] = cashIncome;
        }

        let addExpenses; 
        do{
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        }while(!isAlphaNumeric(addExpenses));
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
    },
    getDepositInfo: function(){
        if(this.deposit){
            let rateDeposit, valueDeposit;
            
            do{
                rateDeposit = +prompt('Какой годовой процент?', 10);
            }while(!isNumber(rateDeposit));
            appData.percentDeposit = rateDeposit;
            
            do{
                valueDeposit = +prompt('Какова сумма вклада?', 10000);
            }while(!isNumber(valueDeposit));
            appData.moneyDeposit = valueDeposit;
        }
    },
    calcSavedMoney: function(){
        return this.budgetMonth * this.period;
    },
    capitalizeExpenseNames: function(){
        let res='';
        this.addExpenses.forEach(el => {
            el = el.trim();
            res+=el.charAt(0).toUpperCase() + el.slice(1) + ', ';
        });
        res = res.trim().slice(0,-1);
        return res;
        /*
        const array_of_strings = ['css','html','xhtml','html5','css3','javascript','jquery','lesscss','arrays','wordpress','facebook','fbml','table','.htaccess','php','c','.net','c#','java']
        const separator = ', '
        const result = array_of_strings.reduce((accumulator, currentValue) => accumulator + separator + currentValue);
        console.log(result)
        */
    }
};
appData.asking();






appData.getExpensesMonth();
appData.getBudget();//костыль, иначе бюджеты не посчитаются
console.log(appData.getTargetMonth());


console.log('Расходы за месяц: ', appData.getExpensesMonth());



console.log(appData.getStatusIncome());
/*
for (let key in appData) {
    console.log('наша программа включает в себя данные: ' 
        + key
        + ' - '
        + appData[key]);
}*/
console.log(appData.capitalizeExpenseNames());
/*
appData.getDepositInfo();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
*/