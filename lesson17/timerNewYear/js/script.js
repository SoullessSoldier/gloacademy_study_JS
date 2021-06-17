'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const greetingText = document.querySelector('.greeting-text');
    const weekdayText = document.querySelector('.weekday-text');
    const timerText = document.querySelector('.timer-text');
    const newyearText = document.querySelector('.newyear-text');

    const countTimer = () =>{
        let today = new Date();
        
        
        const sayGreeting = (today) => {
            let hours = today.getHours();
            return (hours >= 6 && hours < 12 ) ? 'Доброе утро!' :
                   (hours >= 12 && hours < 18 ) ? 'Добрый день!' :
                   (hours >= 18 && hours < 24 ) ? 'Добрый вечер!' :
                   'Доброй ночи!';
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
            return `До Нового ${newYear+1} года осталось: ${res} ${days}`; 
        }
        greetingText.textContent = sayGreeting(today);
        weekdayText.textContent = getDayOfWeek(today);
        timerText.textContent = getCurrentTime(today);
        newyearText.textContent = getDiffNewYear(today);
    };
    countTimer();
    setInterval(countTimer, 1000);
});