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


export default smoothScrollToService;