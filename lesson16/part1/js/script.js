const myLesson = [
    {lesson: 1, type: 'basic', points: 2},
    {lesson: 2, type: 'additional', points: 4},
    {lesson: 3, type: 'basic', points: 6},
    {lesson: 4, type: 'additional', points: 3},
    {lesson: 5, type: 'basic', points: 4},
    {lesson: 6, type: 'basic', points: 2},
    {lesson: 7, type: 'additional', points: 2},
    {lesson: 8, type: 'basic', points: 6},
    {lesson: 9, type: 'basic', points: 4},
    {lesson: 10, type: 'basic', points: 6},
    {lesson: 11, type: 'additional', points: 5}, 
    {lesson: 12, type: 'basic', points: 2}, 
    {lesson: 13, type: 'additional', points: 2}, 
    {lesson: 14, type: 'basic', points: 4},
    {lesson: 15, type: 'additional', points: 1},
    {lesson: 16, type: 'additional', points: 7},
  ];
  //Это походу 2ое задание, для 1ого цикл fr  с выкидыванием элементов 
  const my1 = myLesson.filter(el => el.type==='basic').map((el)=>el.points/2);
  console.log('my1: ', my1);
  console.log('myLesson: ', myLesson);

  //1 - через arr.splice(i, 1)
 for(let i = 0; i < myLesson.length; i++){
      if (myLesson[i].type === 'basic'){
          myLesson[i].points = myLesson[i].points/2;
      } else if (myLesson[i].type === 'additional'){
          myLesson.splice(i,1);
      }
}
console.log(myLesson);

