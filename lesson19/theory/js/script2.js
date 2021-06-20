'use strict';
fetch('./dbHeroes.json').
    then(response => response.json()).
    then(data => practice(data)).
    catch(err => console.log(err));

function practice(response){
    //Вариант 1
    //const allHeroes = [];
    //response.forEach(item => allHeroes.push(item.name));
    //const allHeroes = response.map(item => item.name);
    //выберем только имя, пол, фото в объект
    /*
    const allHeroes = response.map(item => ({
        name: item.name,
        gender: item.genger,
        photo: item.photo
    }));
    */
    //либо в современном синтаксисе через деструктуризацию
    const allHeroes = response.map(({name, gender, photo}) => ({
        name,
        gender,
        photo
    }));
    console.log('allHeroes: ', allHeroes);
    
    //filter - ищем только персонажей status=alive
    const aliveHeroes = response.filter(item => item.status.toLowerCase() ==='alive')
    console.log('aliveHeroes:', aliveHeroes);

    const deadHeroes = response.filter(item => item.status.toLowerCase() !== 'alive')
    console.log('deadHeroes:', deadHeroes);

    //some и find - Есть ли персонаж с нициональностью китаец
    const chinaHero = response.some(item => item.citizenship === 'Chinese');
    const whoChinese = response.find(item => item.citizenship === 'Chinese')
    const whoAsgardian = response.filter(item => item.citizenship === 'Asgardian');
    console.log('chinaHero: ', chinaHero);
    console.log('whoChinese: ', whoChinese);
    console.log('whoAsgardian: ', whoAsgardian);

    //every - у всех ли персонажей есть признак пол?
    const hero = response.every(item => item.gender);
    const heroDeathday = response.every(item => item.deathDay);
    console.log('hero: ', hero);
    console.log('heroDeathday: ', heroDeathday);

    //reduce
    const heroes = response.reduce((accum, item) => {
        //console.log(accum);
        return accum.concat(item.name);
    }, []);
    const movies = response.reduce((accum, item) => accum.concat(item.movies), []);
    const filterMovies = movies.filter((item, index) => movies.indexOf(item) === index && item);
    console.log('heroes: ', heroes);
    console.log('movies: ', movies);
    console.log('filterMovies: ', filterMovies);



    
    
}
