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
        popupContent.style.left = -popup.clientWidth + targetPopupOffsetLeft +'px';
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


export default togglePopUp;