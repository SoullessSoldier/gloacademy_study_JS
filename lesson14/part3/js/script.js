'use strict';
function DomElement(options){
    options = options || {};
    this.selector = options.selector; 
    this.height = options.height; 
    this.width = options.width; 
    this.bg = options.bg; 
    this.fontSize = options.fontSize;
    this.position = options.position;
    this.color = options.color;
};

DomElement.prototype.createElement = function(text){
    let el, styleString='', arrStyle=[];
    if (this.selector.startsWith('.')){
        el = document.createElement('div');
        el.classList.add(this.selector.slice(1));
    } else if(this.selector.startsWith('#')){
        el = document.createElement('p');
        el.classList.add(this.selector.slice(1));
    } else {
        return false;
    }
    arrStyle = Object.getOwnPropertyNames(this);
    arrStyle.forEach(item => {
        if (item !== 'selector'){
            styleString += item!== 'bg' ? 
                `${item}: ${this[item]};`:
                `background-color: ${this[item]};`;
        }
    }, this); 
    if(styleString) el.style.cssText = styleString;
    if (text) el.appendChild(document.createTextNode(text));
    document.body.appendChild(el);
        
};
/**
 * Call as {selector: <'.container' or '#article'>,
 * height: <height>, width: <width>,
 * bg: <bgcolor>, fontSize: <fontSize>}
 * */
//let square;

document.addEventListener('DOMContentLoaded', moveSquare);
function moveSquare(){
    let square = new DomElement({selector:'.square', color: 'white', position: 'absolute', height: '100px', width: '100px', bg: 'grey'});
    if (square){
        square.createElement('Move me!');
        let element = document.querySelector(square.selector);
        window.addEventListener('keydown', function(e){
            //console.log(e);
            // right = key = 'ArrowRight'
            // left = key = 'ArrowLeft'
            // up = key = 'ArrowUp'
            // down = key = 'ArrowDown'
            //offsetLeft
            //offsetTop
            //e.preventDefault();
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
                //console.dir(element);
                //console.log(element.offsetLeft,window.innerWidth);
                //console.log((element.offsetLeft+element.width),(element.offsetLeft+element.width) > window.innerWidth);
                if(element.offsetLeft < 0||(element.offsetLeft+element.clientWidth) > window.innerWidth){
                    alert('Выход за пределы экрана по горизонтали!');
                    element.style.left = element.offsetLeft < 0? '8px' : window.innerWidth - element.clientWidth + 'px';
                } else{
                    element.style.left = element.offsetLeft + (e.key === 'ArrowLeft' ? -10 : 10) + 'px';
                }
            }
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown'){
                if(element.offsetTop < 0||(element.offsetTop+element.clientHeight) > window.innerHeight){
                    alert('Выход за пределы экрана по вертикали!');
                    element.style.top = element.offsetTop < 0 ? '8px' : window.innerHeight - element.clientHeight  + 'px'; 
                }else {
                    element.style.top = element.offsetTop + (e.key === 'ArrowUp' ? -10 : 10) + 'px';
                }
            }
            //Добавить учет границ! window.innerHeight, window.innerWidth
        });

    }
}






