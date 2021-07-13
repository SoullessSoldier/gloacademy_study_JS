const toggleModalCallback = () => {
    const modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close'),
        callbackBtnItems = document.querySelectorAll('.js-callback-btn'),
        modalCallback = document.querySelector('.modal-callback');
    
    const arrControls = Array.of(modalOverlay, modalClose);
        
    

    const showModal = () => {
        modalOverlay.classList.remove('js-hide');
        modalCallback.classList.remove('js-hide');
        modalOverlay.classList.add('js-show');
        modalCallback.classList.add('js-show');


    };
    const hideModal = (e) => {
       
        modalOverlay.classList.remove('js-show');
        modalCallback.classList.remove('js-show');
        modalOverlay.classList.add('js-hide');
        modalCallback.classList.add('js-hide');
        

    };

    callbackBtnItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showModal();    
            
        });
    })
    arrControls.forEach(item => {
        item.addEventListener('click', () => {
            hideModal();
        });
    })
    
    
    
};



export default toggleModalCallback;
