const toggleAccordionMenu = () => {
    const accordionElements = document.querySelectorAll('.accordeon > .element');
    let arr, targetElementContent;

    const closeAccordionItem = (element) => {
        targetElementContent = element.querySelector('.element-content');
        targetElementContent.style.display = 'none';
        element.classList.toggle('active');
    };

    const openAccordionItem = (element) => {
        element.classList.toggle('active');
        targetElementContent = element.querySelector('.element-content');
        targetElementContent.style.display = 'block';
    };

    accordionElements.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target.parentNode;
            
            if(target.classList.contains('active')) {
                closeAccordionItem(target); 
            } else {
                arr = [...accordionElements].filter(el => el !== target);
                for (let item of arr){
                    if(item.classList.contains('active')){
                        closeAccordionItem(item);                        
                    }
                }
                openAccordionItem(target);                
            }
            
        });
    })
    

};

export default toggleAccordionMenu;