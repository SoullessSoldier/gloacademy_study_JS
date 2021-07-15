const servicesCarousel = () => {

    const servicesCarousel = document.querySelector('.services-carousel'),
        carouselItems = servicesCarousel.querySelectorAll('.carousel-item'),
        servicesSection = document.querySelector('.services-section'),
        servicesArrowBlock = servicesSection.querySelector('.services-arrow');

    const carouselLength = carouselItems.length;
    

    let currentPosition = 0; 
    let direction;

    //DRY, прости =(
    const checkCurrentPosition = () => {
        if(currentPosition >= carouselItems.length) currentPosition = 0;
        if(currentPosition <0) currentPosition = carouselItems.length-1;
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
               //console.log(items);
                
                let a = (currentPosition + 2 === carouselItems.length) ?  0 :
                    (currentPosition + 1 === carouselItems.length) ? 1 : 
                    currentPosition + 2;
                        
                servicesCarousel.removeChild(servicesCarousel.firstChild);
                servicesCarousel.append(carouselItems[a]);
                
                

            } else if (direction === 'left') {
                let a = currentPosition   === 0 ?  carouselLength - 1 :
                    currentPosition  === 1  ?  0 : 
                    currentPosition - 1;
                
                servicesCarousel.removeChild(servicesCarousel.lastChild);
                servicesCarousel.prepend(carouselItems[a]);
            }
        }
    };

    servicesArrowBlock.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        
        if(target.matches('.arrow-right')){
            currentPosition++;
            checkCurrentPosition();
            renderCarousel("right");
                           
        }else if(target.matches('.arrow-left')){
            renderCarousel("left");
            currentPosition--;
            checkCurrentPosition();
            
                            
        } 

        

    });
    init();
    renderCarousel();

};

export default servicesCarousel;