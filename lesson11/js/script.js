'use strict';
const btnStart = document.getElementById('start');
const btnIncomeAdd = document.querySelector('.btn_plus.income_add');
const btnExpensesAdd = document.querySelector('.btn_plus.expenses_add');
const checkboxDeposit = document.querySelector('.deposit-checkmark');
const additionalIncomeItems = document.querySelectorAll('.additional_income-item');

let valueBudgetMonth = document.getElementsByClassName('budget_month-value')[0],
    valueBudgetDay = document.getElementsByClassName('budget_day-value')[0],
    valueExpensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    valueAdditionalIncome = document.getElementsByClassName('additional_income-value')[0],
    valueAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    valueIncomePeriod = document.getElementsByClassName('income_period-value')[0],
    valueTargetMonth = document.getElementsByClassName('target_month-value')[0];

const inputSalaryAmount = document.querySelector('.salary-amount');
const inputIncomeTitle = document.querySelector('.income-title');
const inputIncomeAmount = document.querySelector('.income-amount');
let periodAmount = document.querySelector('.period-amount');
const inputExpensesTitle = document.querySelector('.expenses-title');
//const inputExpensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items'),
    inputAdditionalExpenses = document.querySelector('.additional_expenses-item'),
    inputTargetAmount = document.querySelector('.target-amount'),
    inputPeriodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items');


let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isAlphaNumeric = function(s){
    //debugger;
    return s.match('/^[\p{L}\p{N}, ]+/gmu') !== null;
};
let isAlpha = function(s){
    //debugger;
    return s.match(/^[\p{L}, ]+/gmu) !== null;
};

//let money = 150000, 
//let DISABLE_BTN_START = true;
const disableBtnStart = () =>{
    btnStart.setAttribute('disabled', 'disabled');
    btnStart.style.cursor = 'not-allowed';
};
const enableBtnStart = () =>{
    btnStart.removeAttribute('disabled');
    btnStart.style.cursor = 'pointer';
};

disableBtnStart();

let appData = {
    budget: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    //mission: 50000,
    //period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
        
        /*if(inputSalaryAmount.value.trim() === ''){
            alert('Ошибка, поле "Месячный доход должно быть заполнено!"');
            return;
        } */
        appData.budget = +inputSalaryAmount.value;
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAdditionalExpenses();
        appData.getAdditionalIncome();
        appData.getBudget();

        appData.showResult();
        
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses.trim() !== '' && cashExpenses.trim() !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        })
    },
    getIncome: function(){
        /* todo:
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses.trim() !== '' && cashExpenses.trim() !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        })
        
        */
        incomeItems.forEach(function(item){
            let itemIncomes = item.querySelector('.income-title').value;
            let cashIncomes = item.querySelector('.income-amount').value;
            if(itemIncomes.trim() !== '' && cashIncomes.trim() !== ''){
                appData.income[itemIncomes] = +cashIncomes;
            }
        })

        /*
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            }while(!isAlpha(itemIncome));
            let cashIncome;
            do{
                cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }while(!isNumber(cashIncome) || cashIncome <= 0);
            appData.income[itemIncome] = cashIncome;
        }
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key]
        }
        */
    },
    showResult: function(){
        valueBudgetMonth.value = appData.budgetMonth;
        valueBudgetDay.value = appData.budgetDay;
        valueExpensesMonth.value = appData.expensesMonth;
        valueAdditionalExpenses.value = appData.addExpenses.join(', ');
        valueAdditionalIncome.value = appData.addIncome.join(', ');
        valueTargetMonth.value = appData.getTargetMonth();
        valueIncomePeriod.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
        let expensesItemClone = expensesItems[0].cloneNode(true);
        expensesItemClone.querySelector('.expenses-title').value = '';
        expensesItemClone.querySelector('.expenses-amount').value = '';
        expensesItems[0].parentNode.insertBefore(expensesItemClone,btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            btnExpensesAdd.style.display = 'none';
        }
    },
    addIncomesBlock: function(){
        let incomeItemClone = incomeItems[0].cloneNode(true);
        incomeItemClone.querySelector('.income-title').value = '';
        incomeItemClone.querySelector('.income-amount').value = '';
        incomeItems[0].parentNode.insertBefore(incomeItemClone,btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            btnIncomeAdd.style.display = 'none';
        } 
    },

    getAdditionalExpenses: function(){
        let additionalExpenses = inputAdditionalExpenses.value.split(',');
        additionalExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },
    getAdditionalIncome: function(){
        additionalIncomeItems.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }

        });
    },
    
    getExpensesMonth: function (){
        let sum = 0;
        
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
        }
        appData.expensesMonth = sum;
        return appData.expensesMonth;
    },
    getIncomeMonth: function (){
        let sum = 0;
        
        for (let key in appData.income) {
            sum += +appData.income[key];
        }
        appData.incomeMonth = sum;
        return appData.incomeMonth;
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        return true;
    },
    getTargetMonth: function(){
        let getTarget, result;
        getTarget =Math.ceil(inputTargetAmount.value / this.budgetMonth);
        return getTarget;
        /*if (getTarget < 0) {
            result = 'Цель не будет достигнута';
        } else {
            result = 'Цель будет достигнута за ' + getTarget + ' месяцев';
        }
        return result;*/
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
    calcPeriod: function(){
        return appData.budgetMonth * inputPeriodSelect.value;
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
        const array_of_strings = ['css','html','xhtml','html5','css3',
        'javascript','jquery','lesscss','arrays','wordpress',
        'facebook','fbml','table','.htaccess','php','c','.net','c#','java']
        const separator = ', '
        const result = array_of_strings.reduce((accumulator, currentValue) => accumulator + separator + currentValue);
        console.log(result)
        */
    },
};

btnStart.addEventListener('click',appData.start);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnIncomeAdd.addEventListener('click', appData.addIncomesBlock);

inputPeriodSelect.addEventListener('change', function(){
    periodAmount.textContent = inputPeriodSelect.value;
    valueIncomePeriod.value = appData.budget * inputPeriodSelect.value;
});

inputSalaryAmount.addEventListener('input',()=>{
    console.log('inputSalaryAmount: ', inputSalaryAmount.value);
    if (inputSalaryAmount.value.trim() === ''){
        disableBtnStart();
    } else {
        enableBtnStart();
    }
})

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