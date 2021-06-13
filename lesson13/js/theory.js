//Контекст вызова - this

/**
 * Call stack, call site (место вызова)
 */
function one(){
    console.log('one');
    two();
}
function two(){
    console.log('two');
    three();
}
function three(){
    console.log('three');
    
}

one();
/**
 *    Стек вызова
 *    1      2         3
 *                  three()
 *         two()    two()
 *  one()  one()    one()
 *
 *  У one() точка вызова глобальная
 *  у two() - точка вызова - функция one() 
 *  у three() - точка вызова - функция two()
 *  
 *  Сначала закончится выполнение функции three(), потом two(), потом one()
 * 
 * 
 * 
 *  4 правила this
 *  1) Привязка по умолчанию. Любая функция вызывается внутри контекста
 *  2) неявная привязка. Если функция вызвана без точки. то this глобальный
 *     Т.е. важно, где мы вызвали функцию, а не где мы ее привязали.
 *  let obj = {
 *  x: 10,
 *  y: 15,
 *  test: newTest
 *  };
 *  function newTest(){
 *      console.log('this:', this.x)
 *  }
 *  obj.test(); //10
 *  newTest();  //undefined -- глобально!
 *  
 *  контекст вызова берется из последнего объекта
 *  let obj = {
 *  x: 10,
 *  y: 15,
 *  test: newTest
 *  };
 *  let obj2 = {
 *  x: 20,
 *  y: 25,
 *  testObj: obj
 *  };
 *  obj.test();//10
 *  obj2.testObj.test();//10 
 * 
 * 
 *  function newTest(){
 *      console.log('this:', this.x)
 *  } 
 * 
 * 3) Явная привязка apply, call, bind
 *  let obj = { 
 *  x: 10,
 *  y:15
 *  };
 *  function newTest(){
 *      console.log('this:', this)
 *  };
 *   newTest.apply(obj); //Привязка к объекту вызова, принимает массив аргументов
 *   newTest.call(obj); //Привязка к объекту вызова, принимает параметры через запятую
 *  
 *  жесткая привязка
 *  function hardBind(object){
 *      newTest.call(object);
 *  }
 *  hardBind(obj);
 *  setTimeout(hardBind, 1000, obj); //вызов с параметрами
 * 
 *  ES5: метод bind - привязывает, но не вызывает функцию
 *  let foo = newTest.bind(obj);
 *  foo();
 *  
 *  4) Привязка new (в след. уроке)
 *   
*/

