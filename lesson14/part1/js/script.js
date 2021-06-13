'use strict';
function DomElement(options){
    options = options || {};
    this.selector = options.selector; 
    this.height = options.height; 
    this.width = options.width; 
    this.bg = options.bg; 
    this.fontSize = options.fontSize;
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
    console.log(this, arrStyle);
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
//Call as {selector: <'.container' or '#article'>, height: <height>, width: <width>, bg: <bgcolor>, fontSize: <fontSize>}
let elem1 = new DomElement({selector:'.block1', height: '100px', width: '200px', bg: 'red', fontSize: '24px'});
elem1.createElement('Hello, world!');
let elem2 = new DomElement({selector:'.description', bg: 'yellow', fontSize: '36px'});
elem2.createElement('This is a very important text.');
let elem3 = new DomElement({selector:'.block2', height: '300px', width: '100px', bg: 'green', fontSize: '48px'});
elem3.createElement('Hello, world (again)!');
