'use strict';

class Todo{
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('todoList'))); 
    }

    addToStorage(){
        localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
    }

    render(){
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }
    createItem (todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key =todo.key;
        li.insertAdjacentHTML('beforeend',`
        <span class="text-todo">${todo.value}</span>
		<div class="todo-buttons">
            <button class="todo-edit"></button>
			<button class="todo-remove"></button>
			<button class="todo-complete"></button>
		</div>
        `);
        if(todo.completed){
            this.todoCompleted.append(li);
        }else{
            this.todoList.append(li);
        }
        
    }
    makeWarningInput(element){
        element.style='outline-color:red; outline-style:solid';
        if(element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder','Введите значение!');
        } 
    };
    
    
    warnInput(){
        const tempStyle = this.input.style,
            tempPlaceholder = this.input.getAttribute('placeholder');
        this.makeWarningInput(this.input);
        setTimeout(()=>{
            this.input.style ='';
            this.input.style = tempStyle;
            this.input.setAttribute('placeholder',tempPlaceholder);
            }, 2000);
    }
    addTodo(e){
        e.preventDefault();
        
        if(this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey()
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else{
            this.warnInput();
        }
        
    }
    generateKey(){
        return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
    }

    handler(key, action){
        //метод, определяющий, на какую из кнопок мы кликнули - изменить, удалить, обновить Completed
        //через делегирование
        //вешать на todoContainer
        console.log(key, action);
        switch(action){
            case 'todo-remove':
                this.deleteItem(key);
                break;
            case 'todo-complete':
                this.toggleCompletedItem(key);
                break;
        }

    }
    deleteItem(key){
        this.todoData.delete(key);
        this.render();
    }
    toggleCompletedItem(key){
        this.todoData.forEach(item=>{
            if(item.key === key){
                item.completed = !item.completed;
            }
            this.render(); 
        });
    }
    init(){
        const todoContainer = document.querySelector('.todo-container');
        todoContainer.addEventListener('click', (e)=>{
            let target = e.target;
            let grandParent = target.parentElement.parentElement;
            this.handler(grandParent.key, target.className);
        });
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
    }
    

}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();

