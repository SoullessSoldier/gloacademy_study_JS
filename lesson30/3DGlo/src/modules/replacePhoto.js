const replacePhoto = () => {
    let tempImgSrc;
    const teamPhotoItems = document.querySelectorAll('.command__photo');
    teamPhotoItems.forEach(item => {
        item.addEventListener('mouseover', (event)=>{
            tempImgSrc = item.src;
            event.target.src = item.dataset.img;
        });
    });
    teamPhotoItems.forEach(item => {
        item.addEventListener('mouseout', (event)=>{
            event.target.src = tempImgSrc;
        });
    });
    
};


export default replacePhoto;