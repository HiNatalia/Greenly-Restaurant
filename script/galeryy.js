let images = document.querySelectorAll('.galery__image');
let lastOpenedImg;


images.forEach(function(img, index) {
    img.addEventListener('click', () => {
        
        let cssRules = window.getComputedStyle(img);
        let imgFullUrl = cssRules.getPropertyValue('background-image');
        let imgUrl = imgFullUrl.split('/img/galery/');
        let newUrl = imgUrl[1].replace('")', '');

        lastOpenedImg = index + 1;
        

        let container = document.body;
        let imgZoomWindow = document.createElement('div');
        container.appendChild(imgZoomWindow);
        imgZoomWindow.setAttribute('class', 'galery__zoomWindow');

        imgZoomWindow.setAttribute('onclick', 'closeWindow()');


        let zoomImg = document.createElement('img');
        imgZoomWindow.appendChild(zoomImg);
        zoomImg.setAttribute('src', '../img/galery/' + newUrl);
        zoomImg.setAttribute('id', 'current-img');


        zoomImg.onload = () =>{
            let btnNext = document.createElement('a');
            container.appendChild(btnNext);
            btnNext.setAttribute('class', 'galery__zoomWindow__btn galery__zoomWindow__btn--next');
           
            btnNext.setAttribute('onclick', 'changeImg(1)');


            let btnPrev = document.createElement('a');
            container.prepend(btnPrev);
            btnPrev.setAttribute('class', 'galery__zoomWindow__btn galery__zoomWindow__btn--prev');
        
            btnPrev.setAttribute('onclick', 'changeImg(0)');
        }
    },)
    

});


function closeWindow(){
    document.querySelector('.galery__zoomWindow').remove();
    document.querySelector('.galery__zoomWindow__btn').remove()
   

}

function changeImg(changeDir){
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.galery__zoomWindow');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg;

    if(changeDir === 1){
        calcNewImg = lastOpenedImg + 1;

        if( calcNewImg > images.length){
            calcNewImg = 1;
        }
    }else if(changeDir === 0){
        calcNewImg = lastOpenedImg - 1;
        if( calcNewImg < 1){
            calcNewImg = images.length;
        }
    }

    newImg.setAttribute('src', `../img/galery/${calcNewImg}.jpg`);
    newImg.setAttribute('id', '#current-img');

    lastOpenedImg = calcNewImg;

}