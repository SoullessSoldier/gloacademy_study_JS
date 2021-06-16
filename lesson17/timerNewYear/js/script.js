'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const countTimer = () =>{
        let today = new Date();
        
        
        const sayGreeting = (today) => {
            let hours = today.getHours();
            return (hours >= 6 && hours < 12 ) ? 'Доброе утро' :
                   (hours >= 12 && hours < 18 ) ? 'Добрый день' :
                   (hours >= 18 && hours < 24 ) ? 'Добрый вечер' :
                   'Доброй ночи';
        }
        const getDayOfWeek = (today) => {
            let week = [
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
                'Воскресенье',
            ];
            let weekday = today.getDay();
            return week[weekday-1];
        }
        const getCurrentTime = (today) => {
            let options = {hour: "2-digit", minute: '2-digit', second: '2-digit'};
            return today.toLocaleTimeString('ru', options);
        }
        const timeWords = (num, arr) => {
            
            return ((num.toString().slice(-1)==='1')&& (num!==11)) ? arr[0] : 
            (((num>=2)&&(num<5))||((num%10>=2)&&(num%10<5))&&(num%100>20)) ? arr[1] : arr[2];    
        }
        const getDiffNewYear = (date1) => {
            let newYear = date1.getFullYear();
            let newYearDate = new Date(newYear+1, 0, 1);
            let res = Math.floor((newYearDate - date1) / (1000 * 60 * 60 * 24));
            let days = timeWords(res, ['день', 'дня', 'дней']);
            return `До Нового ${newYear} года осталось: ${res} ${days}`; 
        }
        console.log(sayGreeting(today));
        console.log(getDayOfWeek(today));
        console.log(getCurrentTime(today));
        console.log(getDiffNewYear(today));
    };
    countTimer();
});