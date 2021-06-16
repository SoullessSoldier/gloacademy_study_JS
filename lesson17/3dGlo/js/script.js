'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //таймер
    function countTimer(deadline){
        let timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');
        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),//milliseconds
                dateNow = new Date().getTime(),//milliseconds
                timeRemaining = (dateStop - dateNow)/1000,
                seconds = Math.floor(timeRemaining%60),
                minutes = Math.floor((timeRemaining/60)%60),
                hours = Math.floor(timeRemaining/(60*60)),//%24
                days = Math.floor(timeRemaining/(60*60*24));
                        
            return {timeRemaining, hours, minutes, seconds};
        }
        function updateClock(){
            let timer = getTimeRemaining();
            
            if(Math.floor(timer.timeRemaining) >= 0 ){
                timerHours.textContent = timer.hours.toString().padStart(2,'0');
                timerMinutes.textContent = timer.minutes.toString().padStart(2,'0');
                timerSeconds.textContent = timer.seconds.toString().padStart(2,'0');
                setTimeout(updateClock, 1000);
            }
        }
        updateClock();
    }
    
    countTimer('01 july 2021 23:33:00');
});