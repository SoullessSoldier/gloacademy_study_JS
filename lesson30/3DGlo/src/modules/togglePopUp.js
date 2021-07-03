const togglePopUp= () => {
    const popup = document.querySelector('.popup'),
          popupContent = document.querySelector('.popup-content'),
          popupBtn =  document.querySelectorAll('.popup-btn');
          

    let raf, popupLeft, popupContentLeft, targetPopupOffsetLeft, step = 50;
   
    const popupInit = () => {
        step = 50;
        popup.style.display = 'block';
        targetPopupOffsetLeft = document.documentElement.clientWidth/2 - popupContent.clientWidth/2;
        
        popup.style.left = -popup.clientWidth+'px';
        popupContent.style.left = -popup.clientWidth + targetPopupOffsetLeft +'px';
    };
    
    
    const moveInPopup = () => {

        raf = requestAnimationFrame(moveInPopup);
        
        if (popup.offsetLeft+step < 0){
            popupLeft = popup.offsetLeft;
            popupContentLeft = popupContent.offsetLeft;
            popupLeft+=step;
            popupContentLeft+=step;
            popup.style.left = popupLeft + 'px';
            popupContent.style.left = popupContentLeft +'px';
            
        }
        else if(popup.offsetLeft+step>0&&popup.offsetLeft+step<step){
            step /=2;
        }
        else if(popup.offsetLeft===0){
            cancelAnimationFrame(raf);
        }
        
    };
    

    popupBtn.forEach(el => {
        el.addEventListener('click', () => {
            if(document.documentElement.clientWidth<768){
                popup.style.display = 'block';
            } else {
                popupInit();
                raf = requestAnimationFrame(moveInPopup);
            } 
            
        });
    
    });
    
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