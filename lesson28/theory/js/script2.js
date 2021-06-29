'use strict';

//promises

//1 - callback hell
/*
const doUniversity = (docs, resolve, reject) => {
    //if(docs){
    if(docs){
        console.log('Рассмотрение документов...');
        setTimeout(()=>{
            if(Math.random() > 0.3){
                let result = 'Принят';
                resolve(result);
            } else {
                reject('Отказано');
            }
        }, 3000);    
    } else {
        //reject
        reject('Отказано, не хватает документов');
    }
}

const doArmy = (docs, resolve, reject) => {
    if(docs){
        console.log('Военком думает...');
        setTimeout(()=>{
            if(docs === 'Принят'){
                resolve('Отсрочка');
            } else {
                reject('Повестка');
            }
        }, 2000);
    } else{
        reject('Повестка')
    }
}

const doJob = (docs, resolve, reject) => {
    console.log('Директор думает...');
    setTimeout(()=>{
        if(Math.random() > 0.3){
            let result = 'Приглашен на собес в понедельник';
            resolve(result);
        } else {
            reject('Отказано, иди ищи другую работу');
        }
    }, 3000);
};

const documents = ['Паспорт', 'Аттестат'];

doUniversity(documents, (result)=>{
    console.log(result);
    doArmy(result, (militaryDocs)=>{
        console.log(militaryDocs);
        doJob(militaryDocs, (data) => {
            console.log(data)
        }, (reason) => {
            console.error(reason)
        });
        }, 
        (reason)=>{
            console.error(reason);
        });
},
(reason)=>{
    console.error(reason);
});
*/

// promises
/*
const doUniversity = (docs) => {
    
        
        return new Promise((resolve, reject)=>{
            if(docs){
                console.log('Рассмотрение документов...');
                setTimeout(()=>{
                    if(Math.random() > 0.3){
                        let result = 'Принят';
                        resolve(result);
                    } else {
                        reject('Отказано');
                    }
                }, 3000);    
            } else {
                //reject
                reject('Отказано, не хватает документов');
            }
        });
    
}

        


const doArmy = (docs) => {
    return new Promise((resolve, reject) => {
        if(docs){
            console.log('Военком думает...');
            setTimeout(()=>{
                if(docs === 'Принят'){
                    resolve('Отсрочка');
                    console.log('Отсрочка');
                } else {
                    reject('Повестка');
                    console.log('Повестка');
                }
            }, 2000);
        } else{
            reject('Повестка')
        }
    });
    
};

const doJob = (docs) => {
    return new Promise((resolve, reject) => {
        console.log('Директор думает...');
        setTimeout(()=>{
            if(Math.random() > 0.3){
                let result = 'Приглашен на собес в понедельник';
                console.log(result);
                resolve(result);
            } else {
                reject('Отказано, иди ищи другую работу');
            }
        }, 3000);
    });
    
};

const dance = () => {
    console.log('потанцевали');
    return Promise.resolve(docs);
    //return Promise.reject(docs);
    
};

const documents = ['Паспорт', 'Аттестат'];

doUniversity(documents)
    .then((result)=>{
        console.log(result);
        return result;
    }, (reason)=>{
        console.log(reason);
    })
    .then(doArmy)
    .then(dance)
    .then(doJob)
    .catch(reason=>console.log(reason))
    .finally(()=>{console.warn('Выполнится в любом случае')});
*/
//если надо дождаться ответов от всех промисов
const doWorking = (company) => {
    return new Promise((resolve, reject) => {
        const time = Math.ceil(Math.random() * 3000);
        setTimeout(()=>{
            if(time % 3) {
                console.log(company);
                resolve(company);
            } else {
                reject(company);
            }
            
        }, time);
    });
};

const hh = doWorking('HH'),
    yandex = doWorking('yandex'),
    ozone = doWorking('ozone'),
    pikabu = doWorking('pikabu'),
    politics = doWorking('politics');

/*ждет ответа от всех промисов, и then сработает только если все ответы положительные 
Promise.all([hh, yandex, ozone, pikabu, politics])
    .then(result => console.log(`Компания ${result} приглашает на собес`))
    .catch(result => console.error(`Компания ${result} отказала`));
*/
//получить самый первый из списка промисов
Promise.race([hh, yandex, ozone, pikabu, politics])
    .then(result => console.log(`Компания ${result} приглашает на собес`))
    .catch(result => console.error(`Компания ${result} отказала`));


