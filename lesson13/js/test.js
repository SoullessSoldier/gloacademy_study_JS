'use strict';
let myObj = {
    someProperty: [],
    foo: function(arr){
        console.log(this);
        console.log(arr);
        arr.forEach(item=>{
        this.someProperty.push(item);
    }, this);
    }
}


let bar = myObj.foo();//.bind(myObj);

bar([1,2,3]).bind(myObj);

console.log(myObj);