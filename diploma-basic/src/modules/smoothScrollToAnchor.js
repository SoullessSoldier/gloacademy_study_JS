const smoothScrollToAnchor = () => {
    
    const anchorLinkItems = document.querySelectorAll('.anchor-link-item');
    
    const smoothScroll = (event) => {
        event.preventDefault();
        const target = event.target;
        
        let atrribute = target.getAttribute('href').slice(1,);
        let elementScrollTo = document.getElementById(`${atrribute}`);
            
        window.scrollTo({
            top: elementScrollTo.offsetTop,
            behavior: "smooth"
        });
        
    };

    anchorLinkItems.forEach(item => {
        item.addEventListener('click', smoothScroll);
    })
};

export default smoothScrollToAnchor;