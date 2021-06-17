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
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'), 
            menuItems = menu.querySelectorAll('ul>li');
        
        const handlerMenu = () => {
            /*if (!menu.style.transform || menu.style.transform === 'translate(-100%)'){
                menu.style.transform = 'translate(0)';
            } else {
                menu.style.transform = 'translate(-100%)';
            }*/
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(el => el.addEventListener('click', handlerMenu));
        
    };

    toggleMenu();

    //popup
    
    
    
    const togglePopUp= () => {
        const popup = document.querySelector('.popup'),
              popupContent = document.querySelector('.popup-content'),
              popupBtn =  document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');

        let raf, popupLeft, popupContentLeft, targetPopupOffsetLeft, step = 50;
        targetPopupOffsetLeft = 400;
        console.log('targetPopupOffsetLeft: ', targetPopupOffsetLeft);
        popup.style.display = 'block';
        popup.style.left = -popup.clientWidth+'px';
        popupContent.style.left = -popup.clientWidth+'px';
        //popupContent.style.left = -popupContent.offsetLeft+'px';
        const moveInPopup = () => {

            raf = requestAnimationFrame(moveInPopup);
            //count++;
            if (popup.offsetLeft+step < 0){
                popupLeft = popup.offsetLeft;
                popupContentLeft = popupContent.offsetLeft;
                popupLeft+=step;
                popupContentLeft+=step;
                popup.style.left = popupLeft + 'px';
                popupContent.style.left = popupContentLeft +targetPopupOffsetLeft+'px';
                //popupContent.style.left = popupContentLeft+ + 'px';
                console.log('popup.style.left: ', popup.style.left,popupContent.style.left);
            }
            else if(popup.offsetLeft+step>0&&popup.offsetLeft+step<step){
                step /=2;
            }
            else if(popup.offsetLeft===0){
                cancelAnimationFrame(raf);
            }
        };
        //};

        popupBtn.forEach(el => {
            el.addEventListener('click', () => {
                //popup.style.display = 'block';
                raf = requestAnimationFrame(moveInPopup);
            });
        
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUp();
    
    countTimer('01 july 2021 23:33:00');
});