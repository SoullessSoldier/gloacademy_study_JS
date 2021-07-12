const smoothScrollToAnchor = () => {
    
    const anchorLinkService = document.querySelector('[href="#services"]');
    const anchorLinkFaq = document.querySelector('[href="#faq"]');
    const anchorLinkContacts = document.querySelector('[href="#contacts"]');
    const arrAnchorLinks = [anchorLinkService,  anchorLinkFaq, anchorLinkContacts];
    
    arrAnchorLinks.forEach(item => {
        let atrribute = item.getAttribute('href').slice(1,);
        let elementScrollTo = document.getElementById(`${atrribute}`);
        
        item.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: elementScrollTo.offsetTop,
                behavior: "smooth"
            });
        });
    });
};

export default smoothScrollToAnchor;