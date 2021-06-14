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
const periodAmount = document.querySelector('.period-amount');
const inputExpensesTitle = document.querySelector('.expenses-title');
//const inputExpensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items'),
    inputAdditionalExpenses = document.querySelector('.additional_expenses-item'),
    inputTargetAmount = document.querySelector('.target-amount'),
    inputPeriodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items');


const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const isAlphaNumeric = function(s){
    //debugger;
    return s.match('/^[\p{L}\p{N}, ]+/gmu') !== null;
};
const isAlpha = function(s){
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

class AppData{
    constructor(budget = 0){
        this.budget = budget;
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
    }
    check(){
        if(inputSalaryAmount.value.trim() !== ''){
            btnStart.removeAttribute('disabled');
        }
    }
    resetProperties(){
        for (let key in this){
            console.log('key, typeof, value ',key, typeof this[key], this[key]);
            if(typeof this[key] === 'number') {
                this[key] = 0;
            } else if(Array.isArray(this[key])){
                this[key].length=0;
            } else {
                Object.keys(this[key]).forEach(keyy => {
                    delete this[key][keyy];
                  });
            }
        }
    }
    start(){
    
        this.budget = +inputSalaryAmount.value;
        
        this.getExpInc();
        this.getExpensesMonth();
        this.getIncomeMonth();
        //this.getAdditionalExpenses();
        //this.getAdditionalIncome();
        this.getAdditionalExpInc('expenses');
        this.getAdditionalExpInc('income');
        this.getBudget();    
        this.showResult();
        this.lockControls();
        this.showResetBtn();        
    }
    showResetBtn(){
        
        btnStart.style.display = 'none';
        btnReset.style.display = 'block';
        btnReset.addEventListener('click',()=>{
            this.unlockControls();
            this.hideResetBtn();
            //debugger;
            this.resetProperties();
        });
    }
    hideResetBtn(){
        btnReset.style.display = 'none';
        btnStart.style.display = 'block';
    }
    lockControls(){
        const inputItems = document.querySelectorAll('[type="text"]');
        inputItems.forEach(item => item.setAttribute('readonly','true'));
        const rangeItems = document.querySelectorAll('.btn_plus,[type="range"]');
        rangeItems.forEach(item => item.setAttribute('disabled','true'));        
    }
    unlockControls(){
        const inputItems = document.querySelectorAll('[type="text"]');
        inputItems.forEach(item => {
            item.value = '';
            item.removeAttribute('readonly');
        });
        const rangeItems = document.querySelectorAll('.btn_plus,[type="range"]');
        rangeItems.forEach(item => {
            if (item.type === 'range') item.value = item.min; 
            item.removeAttribute('disabled');
        });
        periodAmount.textContent = inputPeriodSelect.value;
    }
    getExpInc(){
        const count = item =>{
            const startStr = item.className.split('-')[0];
            //console.log('startStr: ', startStr);
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if(itemTitle.trim() !== '' && itemAmount.trim() !== ''){
                this[startStr][itemTitle] = +itemAmount;
            }
        };
    
        incomeItems.forEach(count);
        expensesItems.forEach(count);
    }
    showResult(){
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
        });
    }
    /*
    addExpensesBlock(){
        let expensesItemClone = expensesItems[0].cloneNode(true);
        expensesItemClone.querySelector('.expenses-title').value = '';
        expensesItemClone.querySelector('.expenses-amount').value = '';
        expensesItems[0].parentNode.insertBefore(expensesItemClone,btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            btnExpensesAdd.style.display = 'none';
        }
    }
    addIncomesBlock(){
        let incomeItemClone = incomeItems[0].cloneNode(true);
        incomeItemClone.querySelector('.income-title').value = '';
        incomeItemClone.querySelector('.income-amount').value = '';
        incomeItems[0].parentNode.insertBefore(incomeItemClone,btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            btnIncomeAdd.style.display = 'none';
        } 
    }*/
    addExpIncBlock(param){
        let paramItems = document.querySelectorAll(`.${param}-items`);
        let paramItemClone = paramItems[0].cloneNode(true);
        const btnParam = document.querySelector(`.btn_plus.${param}_add`);
        paramItemClone.querySelector(`.${param}-title`).value = '';
        paramItemClone.querySelector(`.${param}-amount`).value = '';
        paramItems[0].parentNode.insertBefore(paramItemClone,btnParam);
        paramItems = document.querySelectorAll(`.${param}-items`);
        if (paramItems.length === 3){
            btnParam.style.display = 'none';
        }
    }
    /*
    getAdditionalExpenses(){
        let additionalExpenses = inputAdditionalExpenses.value.split(',');
        additionalExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    }
    getAdditionalIncome(){
        additionalIncomeItems.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
    
        }, this);
    }*/
    getAdditionalExpInc(param){
        //Возможные доходы - два отдельных поля - NodeList
        //Возможные расходы - в одном поле через запятую - Array
        switch(param){
            case 'income':
                additionalIncomeItems.forEach(function(item){
                    let itemValue = item.value.trim();
                    if (itemValue !== ''){
                        this.addIncome.push(itemValue);
                    }
            
                }, this);
                break;
            case 'expenses':
                let additionalExpenses = inputAdditionalExpenses.value.split(',');
                additionalExpenses.forEach(function(item){
                    item = item.trim();
                    if (item !== ''){
                        this.addExpenses.push(item);
                    }
                }, this);
                break;

        }

    }
    getExpensesMonth(){
        let sum = 0;
        for (let key in this.expenses) {
            sum += +this.expenses[key];
        }
        this.expensesMonth = sum;
        return this.expensesMonth;
    }
    getIncomeMonth(){
        let sum = 0;
        for (let key in this.income) {
            sum += +this.income[key];
        }
        this.incomeMonth = sum;
        return this.incomeMonth;
    }
    getBudget(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
        return true;
    }
    getTargetMonth(){
        let getTarget, result;
        getTarget =Math.ceil(inputTargetAmount.value / this.budgetMonth);
        return getTarget;
        /*if (getTarget < 0) {
            result = 'Цель не будет достигнута';
        } else {
            result = 'Цель будет достигнута за ' + getTarget + ' месяцев';
        }
        return result;*/
    }
    getStatusIncome(){
        let result = this.budgetDay >= 1200 ? 
                'У вас высокий уровень дохода' :
                this.budgetDay >= 600 ?
                'У вас средний уровень дохода':
                this.budgetDay >= 0 ?
                'К сожалению, у вас уровень дохода ниже среднего':
                'Что-то пошло не так';
    
        return result;
    }
    getDepositInfo(){
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
    }
    calcPeriod(){
        return this.budgetMonth * inputPeriodSelect.value;
    }
    capitalizeExpenseNames(){
        let res='';
        this.addExpenses.forEach(el => {
            el = el.trim();
            res+=el.charAt(0).toUpperCase() + el.slice(1) + ', ';
        });
        res = res.trim().slice(0,-1);
        return res;
        
    }
    eventListeners(){
        btnStart.addEventListener('click',this.start.bind(this));
        btnExpensesAdd.addEventListener('click', ()=>{this.addExpIncBlock('expenses');});
        btnIncomeAdd.addEventListener('click', ()=>{this.addExpIncBlock('income');});
    
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
    }
}


let appData = new AppData();
appData.eventListeners();


