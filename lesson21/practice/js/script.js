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

        const handleClick = (event) => {
            let target = event.target;
            
            if (target.closest('.menu')
                ||target.classList.contains('close-btn')
                ||(target.closest('menu')&&!target.matches('menu'))
                ){
                    handlerMenu();
            } else{
                target = target.closest('menu');
                if(!target&&menu.classList.contains('active-menu')) handlerMenu();

            }
            

        };


        //btnMenu.addEventListener('click', handlerMenu);
        //closeBtn.addEventListener('click', handlerMenu);

        //menuItems.forEach(el => el.addEventListener('click', handlerMenu));

        document.addEventListener('click', handleClick);
        
    };

    toggleMenu();

    //popup
       
    const togglePopUp= () => {
        const popup = document.querySelector('.popup'),
              popupContent = document.querySelector('.popup-content'),
              popupBtn =  document.querySelectorAll('.popup-btn');
              //popupClose = document.querySelector('.popup-close');

        let raf, popupLeft, popupContentLeft, targetPopupOffsetLeft, step = 50;
       
        const popupInit = () => {
            step = 50;
            popup.style.display = 'block';
            targetPopupOffsetLeft = document.documentElement.clientWidth/2 - popupContent.clientWidth/2;//popupContent.offsetLeft;
            //console.log('targetPopupOffsetLeft: ', targetPopupOffsetLeft);
            popup.style.left = -popup.clientWidth+'px';
            popupContent.style.left = -popup.clientWidth + targetPopupOffsetLeft +'px'
        };
        
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
                popupContent.style.left = popupContentLeft +'px';
                //popupContent.style.left = popupContentLeft+ + 'px';
                //console.log('popup.style.left: ', popup.style.left,popupContent.style.left);
            }
            else if(popup.offsetLeft+step>0&&popup.offsetLeft+step<step){
                step /=2;
            }
            else if(popup.offsetLeft===0){
                cancelAnimationFrame(raf);
            }
            //raf = requestAnimationFrame(moveInPopup);
        };
        //raf = requestAnimationFrame(moveInPopup);
        //};

        popupBtn.forEach(el => {
            el.addEventListener('click', () => {
                if(document.documentElement.clientWidth<768){
                    popup.style.display = 'block';
                } else {
                    popupInit();
                    raf = requestAnimationFrame(moveInPopup);
                } 
                //popup.style.display = 'block';
                //raf = requestAnimationFrame(moveInPopup);
                //togglePopUp();
            });
        
        });
        /*
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });*/
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popup.style.display='none';
            } else {
                target = target.closest('.popup-content');
                if(!target) popup.style.display='none';
            }            
        });
    };

    togglePopUp();

    // smooth scroll
    const smoothScrollToService = () => {
        
        const elementScrollFrom = document.querySelector('[href="#service-block"]');
        let atrribute = elementScrollFrom.getAttribute('href').slice(1,);

        let elementScrollTo = document.getElementById(`${atrribute}`);
        
        elementScrollFrom.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: elementScrollTo.offsetTop,
                behavior: "smooth"
            });
        }); 
    };
    smoothScrollToService();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');  
                }
            }
        };

        tabHeader.addEventListener('click', (event) =>{
            let target = event.target;
            target = target.closest('.service-header-tab');
            if(target){
                tab.forEach((item, index) => {
                    if(item === target){
                        toggleTabContent(index);
                    }
                });
            }
        });
    };
    
    tabs();

    countTimer('01 july 2021 23:33:00');
});