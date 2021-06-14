const buttonSignup = document.querySelector('.button-signup');
const buttonSignin = document.querySelector('.button-signin');
const userListItems = document.querySelector('.user-list');
const greetingBlock = document.querySelector('.greeting-block');


let userList = [];

function User(name,surname,regdate,login,password){
    this.userName = name;
    this.userSurname = surname;
    this.regDate = regdate;
    this.login = login;
    this.password = password; 
};

const deleteItemByValue = function(Arr, val){
    Arr.forEach((el, ind) => {
        if (el.login === val) Arr.splice(ind,1);
    }
)};

const render = function(){
    getDataFromLocalStorage();
    userListItems.textContent = '';
    
    userList.forEach((item)=>{
        const li = document.createElement('li');
        li.dataset.userLogin = item.login;
        li.classList.add('user-list-item');
        li.innerHTML = `
        <span class='user-attribute'>Имя: 
            <span class ='user-info user-name'>${item.userName}</span>,
            фамилия: 
            <span class ='user-info user-surname'>${item.userSurname}</span>,
            зарегистрирован:
            <span class ='user-info user-regdate'>${item.regDate}</span>
        </span>
        <button class="user-remove"></button>
        `;
        userListItems.append(li);
        
        
        const userRemove = li.querySelector('.user-remove');
        
        userRemove.addEventListener('click', (e)=> {
            let parent = e.target.parentNode;
            let valueToDelete = parent.dataset.userLogin;
            debugger;
            deleteItemByValue(userList, valueToDelete);
            sendDataToLocalStorage();
            render();
            
        });
    });
};

const validateUserName = function(string){
    return string.match(/(^[а-яА-ЯёЁ]+ [а-яА-ЯёЁ]+)/gmu) ? true : false;
};
const validateCredential = function(string){
    return string.match(/(^[a-zA-Z\d]+)/gmu) ? true : false;
};

const sendDataToLocalStorage = function(){
    let myData = JSON.stringify(userList);
    localStorage.setItem('userList', myData);
};
const getDataFromLocalStorage = function(){
    let lsData = localStorage.getItem('userList') ? localStorage.getItem('userList') : "[]";
    lsData = JSON.parse(lsData);
    userList = [...lsData];
};

window.addEventListener("unload", function() {
    sendDataToLocalStorage();
  });



buttonSignup.addEventListener('click', ()=>{
    let username='', login, password, regdate;
    do {
        username = prompt('Введите имя и фамилию через пробел', 'Лев Толстой');
    } while(!validateUserName(username));
    //debugger;
    if (username) {
        let [name, surname] = username.split(' ');
        do {
            login = prompt('Введите логин (только английские буквы и цифры)', 'Max666');
        } while(!validateCredential(login));
        do {
            password = prompt('Введите пароль (только английские буквы и цифры)', 'Password666');
        } while(!validateCredential(password));
        let optionsDate = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        regdate = new Date().toLocaleDateString('ru-RU', optionsDate);
        user = new User(name,surname,regdate,login,password);
        userList.push(user);
        sendDataToLocalStorage();
        render();
    }
    
    
});

buttonSignin.addEventListener('click', () => {
    let login, password, flag = false;
    do {
        login = prompt('Введите логин (только английские буквы и цифры)', 'Max666');
    } while(!validateCredential(login));
    do {
        password = prompt('Введите пароль (только английские буквы и цифры)', 'Password666');
    } while(!validateCredential(password));
    for (let itemObj of userList){
        if(itemObj.login === login && itemObj.password === password){
            greetingBlock.innerHTML = '';
            greetingBlock.innerHTML = `
            <span class="greeting-text">Привет,
                <span class ='current-user-name'>${itemObj.userName}</span>!
            </span>
            `;
            
            flag = true;
            break;
        }else{
            flag = false;
        }
    };
    if (!flag) alert('Пользователь не найден!');
});

getDataFromLocalStorage();
render();