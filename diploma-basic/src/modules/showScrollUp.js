const showScrollUp = () => {
    const upBtn = document.querySelector('.up'),
        sectionServices = document.querySelector('.services-section');
    //показать скролл
    const showElement = (element) => {
        element.classList.remove('js-hide');
        element.classList.add('js-show');
    };
    
    const hideElement = (element) => {
        element.classList.remove('js-show');
        element.classList.add('js-hide');
    };

    const initUpBtn = () => {
        hideElement(upBtn);
        if(window.pageYOffset > 0 && window.innerHeight >= sectionServices.offsetTop) showElement(upBtn);
    };
    window.addEventListener('scroll', (event) => {
        if (window.pageYOffset > 0 && window.pageYOffset + window.innerHeight >= sectionServices.offsetTop){
            showElement(upBtn);
        } else {
            hideElement(upBtn);
        }
    });

    //повесить smoothscroll
    upBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        initUpBtn();
    });
    
    initUpBtn();

};


export default showScrollUp;