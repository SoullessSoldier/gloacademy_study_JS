let plane = document.querySelector('.plane'),
    parachute = document.querySelector('.parachute'),
    count = 0;
/* через рекурсию
let parachuteDown = () => {
    count++;
    parachute.style.top = count + 'px';
    plane.style.left = count*2 + 'px';
    if(count<500){
        setTimeout(parachuteDown, 10);
    }
};
setTimeout(parachuteDown, 10);
*/
//через setInterval
/*
let parachuteDown = () => {
    count++;
    if (count < 350){
        parachute.style.top  =count + 'px';
        plane.style.left = count*2 + 'px';
    }
    else if (count <500){
        plane.style.left = count*2 +'px';
    }
    else {
        clearInterval(idInterval);
    }
}; 
let idInterval = setInterval(parachuteDown,10);
*/
//requestAnimationFrame
let flyInterval, dat1, date2;
let flyAnimate = () => {
    //date1 = new Date();
    flyInterval = requestAnimationFrame(flyAnimate);
    //date2 = new Date();
    //console.log(date2-date1);
    count++;
    if (count < 350){
        parachute.style.top  = count + 'px';
        plane.style.left = count*2 + 'px';
    }
    else if (count <500){
        plane.style.left = count*2 +'px';
    }
    else {
        cancelAnimationFrame(flyInterval);
    }
}; 
//flyInterval = requestAnimationFrame(flyAnimate);
//вызов анимации по клику на страницу, остановка тоже по клику
let animate = false;
document.addEventListener('click', ()=>{
    if(!animate){
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = true;
    }else{
        animate = false;
        cancelAnimationFrame(flyInterval);
    }
})
//Время отрисовки одного кадра разница в датах между вызовами requestAnimationFrame;
