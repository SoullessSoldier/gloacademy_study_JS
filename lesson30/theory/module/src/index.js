//const moduleOne = require('./moduleOne');
//const moduleTwo = require('./moduleTwo');
import moduleTwo from './moduleTwo';

//moduleOne();
//moduleTwo();

import {one, two} from './moduleOne';
//import * as obj from './moduleOne';

console.log(one, two);
console.log(moduleTwo(one, two));
//console.log(obj.one, obj.two);


//browserify
//browserify src/index.js -o dist/main.js

//webpack.js.org
//npm init -y
//npm i webpack webpack-cli \D
//npx webpack
//не очень удобно каждый раз писать команду npx webpack после изменений в коде
//можно сделать предварительные настройки
/**
 * package.json
 * в scripts строчку test можно удалить,
 *  и дописать:
 *  "watch": "webpack --watch"
 *  строку "main": "index.js", можно удалить
 * 
 * потом запустим watcher:
 * npm run watch
 */

//современный синтаксис impport/export
/*в модуле можно так:
*   let a = 3;
*   let b = 5;
*   
*   let run = function(){
*            console.log('go');
*   function eat() {
*       console.log('eat');
*   }
*   
*   class Car {
*       constructor(brand){
*           this.brand = brand;
*       }    
*   }
*
*   
}   export {a as one, b as two, run, eat, Car}
*
*/ 



