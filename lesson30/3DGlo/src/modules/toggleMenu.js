const toggleMenu = () => {
    
    const menu = document.querySelector('menu');
        
    
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const handleClick = (event) => {
        let target = event.target;
        console.dir(target);
        if (target.closest('.menu')
            ||target.classList.contains('close-btn')
            ||(target.closest('menu')&&!target.matches('menu')&&target.tagName!=='LI')
            ){
                handlerMenu();
        } else{
            target = target.closest('menu');
            if(!target&&menu.classList.contains('active-menu')) handlerMenu();

        }
        

    };


    document.addEventListener('click', handleClick);
    
};


export default toggleMenu;