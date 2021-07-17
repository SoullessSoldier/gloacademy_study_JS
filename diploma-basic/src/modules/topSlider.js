const topSlider = (duration = 3000) => {
    const topSlider = document.querySelector('.top-slider'),
        topSliderItems = topSlider.querySelectorAll('.item'),
        dotItems = topSlider.querySelectorAll('.dot');

        let currentSlide = 0,//номер текущего слайда
        interval;

    const prevSlide = (elem, index, strClass) => {
        if (strClass) {
            elem[index].classList.remove(strClass);
        } else {
            elem[index].classList.remove('js-show');
            elem[index].classList.add('js-hide');
            elem[index].querySelector('.table').classList.remove('active');
        }
    };

    const nextSlide = (elem, index, strClass) => {
        if (strClass) {
            elem[index].classList.add(strClass);
        } else {
            elem[index].classList.remove('js-hide');
            elem[index].classList.add('js-show');
            elem[index].querySelector('.table').classList.add('active');
        }
    };

    //autoplay
    const autoPlaySlide = () => {

        prevSlide(topSliderItems, currentSlide);
        prevSlide(dotItems, currentSlide, 'slick-active');
        currentSlide++;
        if(currentSlide >= topSliderItems.length) currentSlide = 0;
        nextSlide(topSliderItems, currentSlide);
        nextSlide(dotItems, currentSlide, 'slick-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    topSlider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.dot')){
            return
        }

        prevSlide(topSliderItems, currentSlide);
        prevSlide(dotItems, currentSlide, 'slick-active');

        if(target.matches('#arrow-right')){
            currentSlide++;                
        }else if(target.matches('#arrow-left')){
            currentSlide--;                
        } else if(target.matches('.dot')){
            dotItems.forEach((item, index)=>{
                if (item===target) currentSlide = index;
            });
        }

        if(currentSlide >= topSliderItems.length) currentSlide = 0;
        if(currentSlide <0) currentSlide = topSliderItems.length-1;

        nextSlide(topSliderItems, currentSlide);
        nextSlide(dotItems, currentSlide, 'slick-active');

    });

    topSlider.addEventListener('mouseover', (event)=>{
        if(event.target.matches('.dot')) stopSlide();
    });

    topSlider.addEventListener('mouseout', (event)=>{
        if(event.target.matches('.dot')) startSlide();
    });


    startSlide(duration);
};

export default topSlider;