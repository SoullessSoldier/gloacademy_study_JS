const servicesCarousel = () => {

    const servicesCarousel = document.querySelector('.services-carousel'),
        carouselItems = servicesCarousel.querySelectorAll('.carousel-item'),
        servicesSection = document.querySelector('.services-section'),
        servicesArrowBlock = servicesSection.querySelector('.services-arrow');

    const items = Array.of(carouselItems);
    

    let currentPosition = 0; 
    let direction;

    //DRY, прости =(
    const checkCurrentPosition = () => {
        if(currentPosition >= carouselItems.length) currentPosition = 0;
        if(currentPosition <0) currentPosition = carouselItems.length-1;
    };

    const prevSlide = (elem, index) => {
        elem[index].classList.remove('js-show');
        elem[index].classList.add('js-hide');
    };
    
    const nextSlide = (elem, index) => {
        elem[index].classList.remove('js-hide');
        elem[index].classList.add('js-show');
    };

    const init = () => {
        servicesCarousel.textContent = '';
        
    };

    const renderCarousel = (direction) => {
        if (!direction) {
            for(let i = 0; i < 3; i++){
                servicesCarousel.append(carouselItems[i]);
            }
        } else {
            if (direction === 'right') {
               console.log(items);
                
                let a = currentPosition + 2 > items[0].length?  1:
                    currentPosition + 1 > items[0].length ? 2: 
                    currentPosition + 2;
                checkCurrentPosition();
                console.log(currentPosition, a);
                //console.log('carouselItems[currentPosition]: ', carouselItems[currentPosition]);
                    
                //servicesCarousel.removeChild(servicesCarousel.firstChild);
                //servicesCarousel.insertAdjacentElement('beforeend', items[0][a]);
                
                

            } else if (direction === 'left') {

            }
        }
    };

    servicesArrowBlock.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        
        if(target.matches('.arrow-right')){
            currentPosition++;
            renderCarousel("right");
                           
        }else if(target.matches('.arrow-left')){
            currentPosition--;
                            
        } 

        

        //renderCarousel();
        

    });
    init();
    renderCarousel();

};

export default servicesCarousel;