function opinionObj(img, name, opinion, button) {
    this.img = img,
    this.name = name,
    this.opinion = opinion,
    this.button = button,

    this.create = function () {
        let mainContainer = document.querySelector('#opinions');

        let opinionContainer = document.createElement('article');
        mainContainer.appendChild(opinionContainer);
        opinionContainer.setAttribute('class', 'opinions__opinion__n article flex-row-center');
        opinionContainer.setAttribute('id', 'opinionContainer');

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

    this.active = () => {
        let opinionContainer = document.querySelector('.article');
        opinionContainer.classList.add('opinions__opinion__n--active');
        button.classList.add('opinions__menu__circle--active');
    }

    this.remove = () => {

        let mainContainer = document.querySelector('.article');
        mainContainer.remove();
        button.classList.remove('opinions__menu__circle--active');
    }
}


let mainIndex = 0;
let dots = document.querySelectorAll('.opinions__menu__circle');

let client0 = new opinionObj('../img/opinions/Natalia.jpg', 'Natalia', 'Lorem ipsum dolor sit amet consectetur adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta', dots[0]);
let client1 = new opinionObj('../img/opinions/Aga.jpg', 'Aga', 'Lorem ipsum dolor sit amet consectetur adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta adipisicingelit. Ducimus totam saepe doloribus facere tempora, assumenda sunt', dots[1]);
let client2 = new opinionObj('../img/opinions/Szymek.jpg', 'Szymek', 'Lorem ipsum dolor sit amet consectetur adipisicingelit assumenda sunt ipsum esse dolor rem vitaeeveniet necessitatibus. Fugit aut sint vero! Porro, blanditiis quisquam. Lorem ipsum dolor sit esta', dots[2]);

let clientArray = {
    0: client0,
    1: client1,
    2: client2
};


function createSlide(mainIndex) {
    return new Promise((resolve, reject) => {
        const promise = clientArray[mainIndex].create();
        resolve('Stworzony');
        reject(new Error('nie udalo sie stworzyc'));
    })
}

function activateSlide(mainIndex) {
    return new Promise((resolve, reject) => {
        const promise = clientArray[mainIndex].active();
        resolve('Aktywowany');
        reject(new Error('nie udało sie aktywowac'));
    })
}

function removeSlide(mainIndex) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const promise = clientArray[mainIndex].remove();
            resolve('Usunięty');
            reject(new Error('nieudalo sie usunac'));
        }, 7000);
    })
}

async function slideShow(mainIndex) {
    let promiseCreate = await createSlide(mainIndex);
    console.log(promiseCreate);
    let promiseAcitve = await activateSlide(mainIndex);
    console.log(promiseAcitve);
    let promiseRemove = await removeSlide(mainIndex);
    console.log(promiseRemove);
}

dots.forEach((btn, btnindex) => {
    btn.addEventListener('click', () => {
        mainIndex = btnindex;
    })
});

setInterval(() => {
    slideShow(mainIndex);
    mainIndex++;
    if (mainIndex == 3) {
        mainIndex = 0;
    }
}, 7050);