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
        li.classList.add('fade');
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
            this.input.value = '';
        } else{
            this.warnInput();
        }
        
    }
    generateKey(){
        return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
    }

    handler(key, action, grandParentElement){
        //метод, определяющий, на какую из кнопок мы кликнули - изменить, удалить, обновить Completed
        //через делегирование
        //вешать на todoContainer
        console.log(key, action, grandParentElement);
        switch(action){
            case 'todo-remove':
                this.deleteItem(key, grandParentElement);
                break;
            case 'todo-complete':
                this.toggleCompletedItem(key, grandParentElement);
                break;
            case 'todo-edit':
                this.editItem(key, grandParentElement);
                break;
        }

    }
    deleteItem(key, element){
        
        element.style.opacity="0";
        setTimeout(()=>{element.remove();},1500);
        this.todoData.delete(key);
        this.addToStorage();
    }
    toggleCompletedItem(key, element){
        
        this.todoData.forEach(item=>{
            if(item.key === key){
                console.dir(element);
                const listTodo = document.getElementById('todo');
                const listTodoCompleted = document.getElementById('completed');
                //--
                if (item.completed){
                    element.classList.toggle('fadeout');
                    console.log('element.classList: ', element.classList);
                    //element.style.opacity="0";
                    setTimeout(()=>{listTodo.appendChild(element)},1500);
                    element.classList.toggle('fadeout');
                    console.log('element.classList: ', element.classList);
                    //element.style.opacity="1";
                    //setTimeout(element.classList.remove('fadein'), 1000);
                } else {
                    element.classList.toggle('fadeout');
                    //element.style.opacity="0";

                    setTimeout(()=>{listTodoCompleted.appendChild(element)},1500);
                    element.classList.toggle('fadeout');
                    //element.style.opacity="1";
                }
                /*
                let cloneElement = document.createElement('div');
                //element.childNodes.forEach(item=>cloneElement.appendChild(item)); 
                cloneElement = element.cloneNode(true);
                cloneElement.style.display='block';
                cloneElement.style.zIndex='9999';
                element.after(cloneElement);
                cloneElement.focus();
                console.log(cloneElement);
                */

                //--
                item.completed = !item.completed;
            }
            this.addToStorage();
            //this.render(); 
        });
    }
    editItem(key, grandParentElement){
        /* доделать, надо кнопку на input и ее обработчик!!!
        const editElement = document.createElement('div');
        editElement.classList.add('edit');
        const editElementInput = document.createElement('input');
        editElement.appendChild(editElementInput);
        const editButton = document.createElement('button');
        editButton.classList.add('header-button');
        editButton.setAttribute('id','edit-item');
        editElement.appendChild(editButton);
        
        editElementInput.style.top = grandParentElement.offsetTop + grandParentElement.clientHeight + 'px';
        editElementInput.style.left = grandParentElement.offsetLeft + 'px';
        editElementInput.style.height = grandParentElement.clientHeight + 'px';
        editElementInput.style.width = grandParentElement.clientWidth + 'px';
        //editElementInput.style.zIndex = '999';
        grandParentElement.after(editElement);
        
        editElementInput.focus();
        


        const editActions = ['focusout', 'submit'];
        editActions.forEach(item => {
            const editElementItems = document.querySelectorAll('.edit');
            editElementItems.forEach(el=>el.addEventListener(item, this.hideEditElement));
        });
        */
       let editString = prompt('Замените текст', 'Новая тудушка');
       if (editString.trim()!==''){
            console.log(this.todoData);
            this.todoData.set(key,{value: editString, completed: this.todoData.get(key).completed, key: key});
            this.render();
       }

    }
    hideEditElement(){
        const editElementItems = document.querySelectorAll('.edit');
        //console.log('editElementItems: ', editElementItems);

        editElementItems.forEach(item=>{
            //console.log('here');
            item.remove();
        });
    }
    init(){
        const todoContainer = document.querySelector('.todo-container');
        todoContainer.addEventListener('click', (e)=>{
            let target = e.target;
            let grandParent = target.parentElement.parentElement;
            console.log(grandParent);
            this.handler(grandParent.key, target.className, grandParent);
        });
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
    }
    

}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();

