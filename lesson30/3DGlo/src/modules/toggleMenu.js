const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'), 
        menuItems = menu.querySelectorAll('ul>li');
    
    const handlerMenu = () => {
        /*if (!menu.style.transform || menu.style.transform === 'translate(-100%)'){
            menu.style.transform = 'translate(0)';
        } else {
            menu.style.transform = 'translate(-100%)';
        }*/
        menu.classList.toggle('active-menu');
    };

    const handleClick = (event) => {
        let target = event.target;
        
        if (target.closest('.menu')
            ||target.classList.contains('close-btn')
            ||(target.closest('menu')&&!target.matches('menu'))
            ){
                handlerMenu();
        } else{
            target = target.closest('menu');
            if(!target&&menu.classList.contains('active-menu')) handlerMenu();

        }
        

    };


    //btnMenu.addEventListener('click', handlerMenu);
    //closeBtn.addEventListener('click', handlerMenu);

    //menuItems.forEach(el => el.addEventListener('click', handlerMenu));

    document.addEventListener('click', handleClick);
    
};


export default toggleMenu;