'use strict';
const output = document.getElementById('output');

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4) {
                return
            }

            if(request.status === 200){
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                reject(request.statusText);
            }
        });
        request.send();
    });
};

const outputPhotos = (data)=>{
    /*
    const random = Math.floor(Math.random() * data.length);
    const obj = data[random];
    output.innerHTML = `<h4>${obj.title}</h4>
        <img src=${obj.thumbnailUrl} alt="${obj.title}">`;*/
    /*
    output.insertAdjacentHTML('beforeend',`<h4>${data.title}</h4>
        <img src=${data.thumbnailUrl} alt="${data.title}">`);
    */
    data.forEach(item => {
        output.insertAdjacentHTML('beforeend',`<h4>${item.title}</h4>
            <img src=${item.thumbnailUrl} alt="${item.title}">`);
    });
}

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
    twoImg = getData('https://jsonplaceholder.typicode.com/photos/2'),
    threeImg = getData('https://jsonplaceholder.typicode.com/photos/3');
/*
getData(urlPhotos)
    .then(outputPhotos)
    .catch(error => {console.error(error)});
    
*/
/* При таком коде картинки могут появляться не по порядку, в зависимости от отработки промиса 
oneImg
    .then(outputPhotos)
    .catch(error => {console.error(error)});

twoImg
    .then(outputPhotos)
    .catch(error => {console.error(error)});
*/
/*
Promise.race([oneImg, twoImg])
    .then(outputPhotos)
    .catch(error => {console.error(error)});
*/

//а вот сечас картинки появятся в том порядке, как они прописаны в массиве
Promise.all([oneImg, twoImg, threeImg])
    .then(outputPhotos)
    .catch(error => {console.error(error)});    