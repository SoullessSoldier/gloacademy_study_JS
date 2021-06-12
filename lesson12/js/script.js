'use strict';
const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = [
    {
        value: 'Сварить кофе',
        completed: false
    },
    {
        value: 'Помыть посуду',
        completed: true
    }
];
/**
 * const deleteObjectItemByValue = (Obj, val) => {
    for (var key in Obj) {
        if (Obj[key] == val) {
            delete Obj[key];
            return Obj;
        }
    }
    };
 *  
*/
const deleteTodoItemByValue = function(Arr, val){
    Arr.forEach((el, ind) => {
        if (el.value === val) Arr.splice(ind,1);
    }
)};

const render = function(){
    getDataFromLocalStorage();
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach((item)=>{
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
        <span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
			<button class="todo-remove"></button>
			<button class="todo-complete"></button>
		</div>
        `;
        if(item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li);
        }
        const todoComplete = li.querySelector('.todo-complete');
        const todoRemove = li.querySelector('.todo-remove');
        todoComplete.addEventListener('click', ()=> {
            item.completed = !item.completed;
            sendDataToLocalStorage();
            render();
        });
        todoRemove.addEventListener('click', (e)=> {
            let parent = e.target.parentNode.parentNode;
            let valueToDelete = parent.querySelector('.text-todo').textContent;
            deleteTodoItemByValue(todoData, valueToDelete);
            sendDataToLocalStorage();
            render();
            /*parent.remove();
            render();*/
        });
    });
};

const makeWarningInput = function(element){
    element.style='outline-color:red; outline-style:solid';
    if(element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder','Введите значение!');
    } 
};


const warnInput = function(){
    const tempStyle = headerInput.style,
        tempPlaceholder = headerInput.getAttribute('placeholder');
    makeWarningInput(headerInput);
    setTimeout(()=>{
        headerInput.style ='';
        headerInput.style = tempStyle;
        headerInput.setAttribute('placeholder',tempPlaceholder);
        }, 2000);
}

//let arrFormActions = ['submit', 'keyup'];
let arrFormActions = ['submit'];
for (let action of arrFormActions){
    todoControl.addEventListener(action, (e)=>{
        e.preventDefault();
        if(e.type === 'submit' || (e.type === 'keyup' && ( e.key === 'Enter' || e.keyCode === 13 ))){
            if(headerInput.value.trim() === ''){
                warnInput();
            }else{
                const newTodo = {
                value: headerInput.value,
                completed: false
                };
                todoData.push(newTodo);
                sendDataToLocalStorage();
                render();
                headerInput.value = '';
            }
        };
    });
}

const sendDataToLocalStorage = function(){
    let myData = JSON.stringify(todoData);
    localStorage.setItem('todoData', myData);
};
const getDataFromLocalStorage = function(){
    let lsData = localStorage.getItem('todoData') ? localStorage.getItem('todoData') : "[]";
    lsData = JSON.parse(lsData);
    todoData = [...lsData];
};

window.addEventListener("unload", function() {
    sendDataToLocalStorage();
  });

getDataFromLocalStorage();
render();