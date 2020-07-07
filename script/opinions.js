function opinionObj(img, name, opinion) {
    this.img = img,
        this.name = name,
        this.opinion = opinion,

        this.create = function () {
            let mainContainer = document.querySelector('#opinions');

            let opinionContainer = document.createElement('article');
            mainContainer.appendChild(opinionContainer);
            opinionContainer.setAttribute('class', 'opinions__opinion__n flex-row-center article');

            let clientImg = document.createElement('img');
            clientImg.setAttribute('src', this.img);
            clientImg.setAttribute('class', 'opinions__opinion_n__img');
            opinionContainer.appendChild(clientImg);

            let textDiv = document.createElement('div');
            textDiv.setAttribute('class', 'opinions__opinion_n__text');
            opinionContainer.appendChild(textDiv);

            let heading = document.createElement('h2');
            heading.setAttribute('class', 'heading heading--white');
            heading.textContent = this.name;
            textDiv.appendChild(heading);

            let paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'paragraph paragraph--white');
            paragraph.textContent = this.opinion;
            textDiv.appendChild(paragraph);
        },
        this.remove = function () {
            let mainContainer = document.querySelector('.article');
            mainContainer.remove();
        }
    this.activate = function () {
        box = document.querySelector('.article');
        box.classList.add('opinions__opinion__n--active');
        setTimeout(() => {
            box.classList.remove('opinions__opinion__n--active');
        }, 10000)
    }
}
let client0 = new opinionObj('../img/opinions/Natalia.jpg', 'Natalia', 'Lorem ipsum dolor sit amet consectetur adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta');
let client1 = new opinionObj('../img/opinions/Aga.jpg', 'Aga', 'Lorem ipsum dolor sit amet consectetur adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt');
let client2 = new opinionObj('../img/opinions/Szymek.jpg', 'Szymek', 'Lorem ipsum dolor sit amet consectetur adipisicingelit assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta');

let clientArray = {
    0: client0,
    1: client1,
    2: client2
};

let dots = document.querySelectorAll('.opinions__menu__circle');

let mainIndex = 0;

async function slidersChanging(){
    for(let i = 0; i < dots.length; i++){
        const result = await readySlide(i);
    }
}

function readySlide(index) {
        
        return new Promise(resolve => {
            clientArray[index].create();
            clientArray[index].activate();
            setTimeout(() => {
                clientArray[index].remove();
            }, 10000);
            resolve('done');
        })
}

slidersChanging();
/* 


for(let i = 0; i < dots.length; i++){
    fullSliders(i);
}

function fullSliders(index){
    setTimeout(() => {
        clientArray[index].create();
        clientArray[index].activate();
            clientArray[index].remove();    
    }, (10000));
     
}

   for(let i = 0; i<dots.length; i++){
     fullSlide(i);
 }

function fullSlide(mainIndex){
    clientArray[mainIndex].create();
    clientArray[mainIndex].activate();
    clientArray[mainIndex].remove();
   
}
  for(let i = 0; i <= circles.length; i++){
        circles[i].classList.toggle('opinions__menu__circle--active');
        clientArray[i].create();
        setTimeout(() => {
            circles[i].classList.toggle('opinions__menu__circle--active')
;        }, 1000);
        setTimeout(clientArray[i].remove(), 1000);
                                                    
    }
      



/*let slideIndex = 0;


circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        clientArray[index].create();
        clientArray[index].remove();
        
    })
});
/*/