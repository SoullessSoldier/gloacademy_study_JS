'use strict';
let myObj = {
    someProperty: [],
    foo: function(arr){
        arr.forEach(item=>{
        this.someProperty.push(item);
    }, this);
    }
}


let bar = myObj.foo.bind(myObj);

bar([1,2,3]);

console.log(myObj);