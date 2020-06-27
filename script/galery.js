const images = document.querySelectorAll('.galery__image');
let lastOpenedImg;

images.forEach(function (img, index){

    img.addEventListener('click', () => {

        let imageUrl = getUrl(img);

        lastOpenedImg = index;

        createWindow(imageUrl);

    },)

})

function getUrl(element){
    let cssElement = window.getComputedStyle(element);
    let cssElementProperty = cssElement.getPropertyValue('background-image');
    let urlElement = cssElementProperty.split('/img/galery/');
    let finalUrl = urlElement[1].replace('")', '');

    return finalUrl;
}

function createWindow(imageUrl){

    //window
    let container = document.body;
    let imgWindow = document.createElement('div');
    container.appendChild(imgWindow);
    imgWindow.setAttribute('class', 'galery__zoomWindow');

    //img
    let img = document.createElement('img');
    imgWindow.appendChild(img);
    img.setAttribute('src', `../img/galery/${imageUrl}`);
    img.setAttribute('id', 'current-img');
   

    //btns 
    let btnNext = document.createElement('a');
    container.appendChild(btnNext);
    btnNext.setAttribute('class','galery__zoomWindow__btn galery__zoomWindow__btn--next');
    
    let btnPrev = document.createElement('a');
    container.appendChild(btnPrev);
    btnPrev.setAttribute('class','galery__zoomWindow__btn galery__zoomWindow__btn--prev');

    //events
    imgWindow.addEventListener('click', closeWindow);
    btnNext.addEventListener('click', changeImg('next'));
    btnPrev.addEventListener('click', changeImg('prev'));
}



function changeImg(changeType){
   
    document.querySelector('#current-img').remove();
  
   
    let imgWindow = document.querySelector('.galery__zoomWindow');
    let newImg = document.createElement('img');
    imgWindow.appendChild(newImg);

    let newImgIndex;

    if(changeType === 'next'){
        newImgIndex = lastOpenedImg + 1;

        if(newImgIndex > images.length){
            newImgIndex = 1;
        }
    }else if( changeType === 'prev'){
        newImgIndex = lastOpenedImg - 1;

        if(newImgIndex < 1){
            newImgIndex = images.length;
        }
    }


    newImg.setAttribute('src', `../img/galery/${newImgIndex}.jpg`);
    newImg.setAttribute('id', 'current-img');

    lastOpenedImg = newImgIndex;
}


function closeWindow(){
    document.querySelector('.galery__zoomWindow').remove();
    document.querySelector('.galery__zoomWindow__btn').remove();
    document.querySelector('.galery__zoomWindow__btn').remove();
}