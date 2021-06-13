'use strict';
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('cancel');
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
    btnStart.setAttribute('disabled', 'true');
    btnStart.style.cursor = 'not-allowed';
};
const enableBtnStart = () =>{
    btnStart.removeAttribute('disabled');
    btnStart.style.cursor = 'pointer';
};

disableBtnStart();

const AppData = function(){
    this.budget = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};

AppData.prototype.check = function(){
    if(inputSalaryAmount.value.trim() !== ''){
        btnStart.removeAttribute('disabled');
    }
};
AppData.prototype.start = function(){
    
    this.budget = +inputSalaryAmount.value;
    
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAdditionalExpenses();
    this.getAdditionalIncome();
    this.getBudget();

    this.showResult();
    this.lockControls();
    this.showResetBtn();
    
};
AppData.prototype.showResetBtn = function(){
        
    btnStart.style.display = 'none';
    btnReset.style.display = 'block';
    btnReset.addEventListener('click',()=>{
        this.unlockControls();
        this.hideResetBtn();
    });
};
AppData.prototype.hideResetBtn = function(){
    
    btnReset.style.display = 'none';
    btnStart.style.display = 'block';
    
};
AppData.prototype.lockControls = function(){
    let inputItems = document.querySelectorAll('[type="text"]');
    inputItems.forEach(item => item.setAttribute('readonly','true'));
    let rangeItems = document.querySelectorAll('.btn_plus,[type="range"]');
    rangeItems.forEach(item => item.setAttribute('disabled','true'));
    
};
AppData.prototype.unlockControls = function(){
    let inputItems = document.querySelectorAll('[type="text"]');
    inputItems.forEach(item => {
        item.value = '';
        item.removeAttribute('readonly');
    });
    let rangeItems = document.querySelectorAll('.btn_plus,[type="range"]');
    rangeItems.forEach(item => {
        if (item.type === 'range') item.value = item.min; 
        item.removeAttribute('disabled');
    });
    periodAmount.textContent = inputPeriodSelect.value;
    
};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses.trim() !== '' && cashExpenses.trim() !== ''){
            this.expenses[itemExpenses] = +cashExpenses;
        }
    }, this);
};
AppData.prototype.getIncome = function(){
    incomeItems.forEach(function(item){
        
        let itemIncomes = item.querySelector('.income-title').value;
        let cashIncomes = item.querySelector('.income-amount').value;
        if(itemIncomes.trim() !== '' && cashIncomes.trim() !== ''){
            this.income[itemIncomes] = +cashIncomes;
        }
    }, this);

    
};
AppData.prototype.showResult = function(){
    const _this = this;
    valueBudgetMonth.value = this.budgetMonth;
    valueBudgetDay.value = this.budgetDay;
    valueExpensesMonth.value = this.expensesMonth;
    valueAdditionalExpenses.value = this.addExpenses.join(', ');
    valueAdditionalIncome.value = this.addIncome.join(', ');
    valueTargetMonth.value = this.getTargetMonth();
    valueIncomePeriod.value = this.calcPeriod();
    inputPeriodSelect.addEventListener('change', function(){
        valueIncomePeriod.value = _this.calcPeriod();
    })
};
AppData.prototype.addExpensesBlock = function(){
    let expensesItemClone = expensesItems[0].cloneNode(true);
    expensesItemClone.querySelector('.expenses-title').value = '';
    expensesItemClone.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(expensesItemClone,btnExpensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3){
        btnExpensesAdd.style.display = 'none';
    }
};
AppData.prototype.addIncomesBlock = function(){
    let incomeItemClone = incomeItems[0].cloneNode(true);
    incomeItemClone.querySelector('.income-title').value = '';
    incomeItemClone.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(incomeItemClone,btnIncomeAdd);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3){
        btnIncomeAdd.style.display = 'none';
    } 
};

AppData.prototype.getAdditionalExpenses = function(){
    let additionalExpenses = inputAdditionalExpenses.value.split(',');
    additionalExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
            this.addExpenses.push(item);
        }
    }, this);
};
AppData.prototype.getAdditionalIncome = function(){
    additionalIncomeItems.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            this.addIncome.push(itemValue);
        }

    }, this);
};

AppData.prototype.getExpensesMonth = function (){
    let sum = 0;
    
    for (let key in this.expenses) {
        sum += +this.expenses[key];
    }
    this.expensesMonth = sum;
    return this.expensesMonth;
};
AppData.prototype.getIncomeMonth = function (){
    let sum = 0;
    
    for (let key in this.income) {
        sum += +this.income[key];
    }
    this.incomeMonth = sum;
    return this.incomeMonth;
};
AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
    return true;
};
AppData.prototype.getTargetMonth = function(){
    let getTarget, result;
    getTarget =Math.ceil(inputTargetAmount.value / this.budgetMonth);
    return getTarget;
    /*if (getTarget < 0) {
        result = 'Цель не будет достигнута';
    } else {
        result = 'Цель будет достигнута за ' + getTarget + ' месяцев';
    }
    return result;*/
};
AppData.prototype.getStatusIncome = function(){
    let result = this.budgetDay >= 1200 ? 
            'У вас высокий уровень дохода' :
            this.budgetDay >= 600 ?
            'У вас средний уровень дохода':
            this.budgetDay >= 0 ?
            'К сожалению, у вас уровень дохода ниже среднего':
            'Что-то пошло не так';

    return result;
};
AppData.prototype.getDepositInfo = function(){
    if(this.deposit){
        let rateDeposit, valueDeposit;
        
        do{
            rateDeposit = +prompt('Какой годовой процент?', 10);
        }while(!isNumber(rateDeposit));
        this.percentDeposit = rateDeposit;
        
        do{
            valueDeposit = +prompt('Какова сумма вклада?', 10000);
        }while(!isNumber(valueDeposit));
        this.moneyDeposit = valueDeposit;
    }
};
AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * inputPeriodSelect.value;
};
AppData.prototype.capitalizeExpenseNames = function(){
    let res='';
    this.addExpenses.forEach(el => {
        el = el.trim();
        res+=el.charAt(0).toUpperCase() + el.slice(1) + ', ';
    });
    res = res.trim().slice(0,-1);
    return res;
    
};

AppData.prototype.eventListeners = function(){
    btnStart.addEventListener('click',this.start.bind(this));
    btnExpensesAdd.addEventListener('click', this.addExpensesBlock);
    btnIncomeAdd.addEventListener('click', this.addIncomesBlock);

    inputPeriodSelect.addEventListener('change', function(){
        periodAmount.textContent = inputPeriodSelect.value;
        valueIncomePeriod.value = this.budget * inputPeriodSelect.value;
    });

    inputSalaryAmount.addEventListener('input',()=>{
        if (inputSalaryAmount.value.trim() === ''){
            disableBtnStart();
        } else {
            enableBtnStart();
        }
    });
};

const appData = new AppData();
appData.eventListeners();


