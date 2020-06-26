let images = document.querySelectorAll('.galery__image');
let lastOpenedImg;


images.forEach(img => {
    img.addEventListener('click', () => {
        let index = img;
        let cssRules = window.getComputedStyle(img);
        let imgFullUrl = cssRules.getPropertyValue('background-image');
        let imgUrl = imgFullUrl.split('/img/galery/');
        let newUrl = imgUrl[1].replace('")', '');

        lastOpenedImg = index + 1;
        

        let container = document.body;
        let imgZoomWindow = document.createElement('div');
        container.appendChild(imgZoomWindow);
        imgZoomWindow.classList.add('galery__zoomWindow');

        imgZoomWindow.addEventListener('click', () => {
            imgZoomWindow.classList.remove('galery__zoomWindow');
            container.removeChild(imgZoomWindow);
        },)


        let zoomImg = document.createElement('img');
        imgZoomWindow.appendChild(zoomImg);
        zoomImg.setAttribute('src', '../img/galery/' + newUrl);
        zoomImg.setAttribute('id', 'current-img');


        zoomImg.onload = () =>{
            let btnNext = document.createElement('a');
            imgZoomWindow.appendChild(btnNext);
            btnNext.classList.add('galery__zoomWindow__btn');
            btnNext.classList.add('galery__zoomWindow__btn--next');
            btnNext.setAttribute('click', 'changeImg()');


            let btnPrev = document.createElement('a');
            imgZoomWindow.prepend(btnPrev);
            btnPrev.classList.add('galery__zoomWindow__btn');
            btnPrev.classList.add('galery__zoomWindow__btn--prev');
        }
    },)
    

});

function changeImg(changeDir){
    document.querySelector('#current-img').remove;

    let getImgWindow = document.querySelector('imgZoomWindow');
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