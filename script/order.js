var xhttp = new XMLHttpRequest();

let menuCategorySandwiches;
let menuCategoryMaindishes;
let menuCategorySalads;
let menuCategoryPanckes;
let menuCategorySmoothies;
let socket = [];

//connect with json
xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        let category = response.category;

        menuCategorySandwiches = category[0];
        menuCategoryMaindishes = category[1];
        menuCategorySalads = category[2];
        menuCategoryPanckes = category[3];
        menuCategorySmoothies = category[4];

        window.onload = () => {
            displayMenu(menuCategorySandwiches);
        }
        let sandwitchesMenuBtn = document.getElementById('sandwichesBtn');
        sandwitchesMenuBtn.addEventListener('click', () => {
            displayMenu(menuCategorySandwiches);
        });
        let mainDishesMenuBtn = document.getElementById('mainDishesBtn');
        mainDishesMenuBtn.addEventListener('click', () => {
            displayMenu(menuCategoryMaindishes);
        });

        let saladsMenuBtn = document.getElementById('saladsBtn');
        saladsMenuBtn.addEventListener('click', () => {
            displayMenu(menuCategorySalads);
        });

        let pancakesMenuBtn = document.getElementById('pancakesBtn');
        pancakesMenuBtn.addEventListener('click', () => {
            displayMenu(menuCategoryPanckes);
        });

        let smoothiesMenuBtn = document.getElementById('smoothiesBtn');
        smoothiesMenuBtn.addEventListener('click', () => {
            displayMenu(menuCategorySmoothies);
        });
    }
};

displaySocketIcon();
xhttp.open("GET", "script/orderMenu.json", true);
xhttp.send();


function displayMenu(category) {
    let container = document.getElementById('mealsList');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    for (let i = 0; i < category.menuItems.length; i++) {
        createLayout(category.menuItems, i);
    }
}

//crate menu list
function createLayout(categoryMenuItems, index) {
    let container = document.getElementById('mealsList');
    let listItem = document.createElement('li');
    let listItem__img = document.createElement('img');
    let listItem__text = document.createElement('div');
    let listItem__text__heading = document.createElement('p');
    let listItem__text__description = document.createElement('p');
    let listItem__costPanel = document.createElement('div');
    let listItem__costPanel__price = document.createElement('p');
    let listItem__costPanel__socket = document.createElement('svg');

    container.appendChild(listItem);
    listItem.appendChild(listItem__img);
    listItem.appendChild(listItem__text);
    listItem.appendChild(listItem__costPanel);
    listItem__text.appendChild(listItem__text__heading);
    listItem__text.appendChild(listItem__text__description);
    listItem__costPanel.appendChild(listItem__costPanel__price);
    listItem__costPanel.appendChild(listItem__costPanel__socket);

    listItem.setAttribute('class', 'mealsList__item flex-row-center');
    listItem__img.setAttribute('class', 'mealsList__image');
    listItem__text__heading.setAttribute('class', 'paragraph paragraph--menu ');
    listItem__text__description.setAttribute('class', 'paragraph paragraph--darkGrey');
    listItem__costPanel.setAttribute('class', 'flex-row-center  padding-left-2');
    listItem__costPanel__price.setAttribute('class', 'paragraph paragraph--menu');
    listItem__costPanel__socket.addEventListener('click', () => {
        addToSocket(categoryMenuItems[index])
    });

    listItem__img.setAttribute('src', categoryMenuItems[index].image);
    listItem__text__heading.textContent = categoryMenuItems[index].name;
    listItem__text__description.textContent = categoryMenuItems[index].description;
    listItem__costPanel__price.textContent = categoryMenuItems[index].cost;
    listItem__costPanel__socket.innerHTML = '<svg id="Capa_1" enable-background="new 0 0 509.275 509.275" height="512" viewBox="0 0 509.275 509.275" width="512" xmlns="http://www.w3.org/2000/svg" class="icon icon--green"><g><path d="m479.637 314.485v-182.744l-360-65v-22.466c0-24.413-19.861-44.275-44.274-44.275h-45.726v30h45.725c7.871 0 14.275 6.404 14.275 14.275v277.005c0 31.979 26.016 57.995 57.995 57.995h12.005v34.187c-6.129-2.686-12.891-4.187-20-4.187-27.57 0-50 22.43-50 50s22.43 50 50 50c25.883 0 47.233-19.769 49.749-45h.251v-85h260v34.187c-6.129-2.686-12.891-4.187-20-4.187-27.57 0-50 22.43-50 50s22.43 50 50 50c25.883 0 47.233-19.769 49.749-45h.251v-115h-332.005c-15.437 0-27.995-12.558-27.995-27.995v-11.796zm-340 164.79c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm290 0c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm-160-197.71-60-.833v-167.256l60 10.833zm30-151.839 55 9.931v143.089l-55-.764zm-120 150.589-60-.833v-182.256l60 10.833zm270 3.75-65-.903v-138.089l65 11.736z"/></g></svg>';

}


function addToSocket(obj) {

    socket.push(obj)

    let container = document.body;
    orderResult = document.createElement('div');
    container.appendChild(orderResult);
    orderResult.setAttribute('class', 'order__result');
    let orderP = document.createElement('p');
    orderP.setAttribute('class', 'order__resut__p');
    orderResult.appendChild(orderP);
    orderP.textContent = `Added to socket: ${obj.name}`;

    setTimeout(() => {
        document.querySelector('.order__result').remove();
    }, 2000);
}


//create socket menu after click on socket icon (fun in the end of file)
function displaySocketMenu() {
    let totalCost = 0;

    let container = document.body;
    let socketPanelContainer = document.createElement('div');
    container.appendChild(socketPanelContainer);
    socketPanelContainer.setAttribute('class', 'socketPanelContainer');
    socketPanelContainer.setAttribute('id', 'socketPanelContainer');
    let socketPanel = document.createElement('article');
    socketPanelContainer.appendChild(socketPanel);
    socketPanel.setAttribute('class', 'flex-column socketPanel padding-2');
    let topPanel = document.createElement('div');
    socketPanel.appendChild(topPanel);
    topPanel.setAttribute('class', 'flex-row-space-between');
    let heading = document.createElement('h3');
    topPanel.appendChild(heading);
    heading.setAttribute('class', 'heading--smaller heading--green');

    let closeSocket = document.createElement('div');
    topPanel.appendChild(closeSocket);

    closeSocket.setAttribute('class', 'socket__closeBtn')
    if (socket.length == 0) {
        heading.textContent = 'Your socket is empty';
    } else {
        heading.textContent = 'Your order';
    }

    let itemListInSocket = document.createElement('ul');
    itemListInSocket.setAttribute('id', 'socket__list');
    itemListInSocket.setAttribute('class', 'socket__list');
    socketPanel.appendChild(itemListInSocket);

 //display all items in socket
    socket.forEach((item, index) => {
        let li = document.createElement('li');
        itemListInSocket.appendChild(li);
        li.setAttribute('class', 'flex-row-space-between socket__list__item');
        let spanName = document.createElement('span');
        li.appendChild(spanName);
        spanName.textContent = item.name;
        let spanCost = document.createElement('span');
        li.appendChild(spanCost);
        spanCost.textContent = item.cost;
        let removeItem = document.createElement('div');
        li.appendChild(removeItem);
        removeItem.setAttribute('class', 'socket__removeBtn')

        totalCost = totalCost + parseFloat(item.cost);

        removeItem.addEventListener('click', () => {
            li.remove()
            delete socket[index];
            totalCost = totalCost - parseFloat(item.cost);
            document.getElementById('liTotalCost').textContent = `${totalCost}$`;
        });
    });
//create total cost li and finalization order
    let liTotalCost = document.createElement('li');
    itemListInSocket.appendChild(liTotalCost);
    liTotalCost.setAttribute('class', 'socket__list__item socket__list__item--totalCost');
    liTotalCost.setAttribute('id', 'liTotalCost');
    liTotalCost.textContent = `${totalCost}$`;

    let orderBtn = document.createElement('button');
    orderBtn.textContent = 'ORDER';
    socketPanel.appendChild(orderBtn);
    orderBtn.setAttribute('class', 'btn btn--green flex-self-end margin-top-1');

    orderBtn.addEventListener('click', () => {
        if (socket.length == 0) {
            alert('Socket is empty')
        } else {
            alert('You order is on way');
            socket = [];
            document.getElementById('socketPanelContainer').remove();
        }
    })
    closeSocket.addEventListener('click', () => {
        document.getElementById('socketPanelContainer').remove();
    })
}

function displaySocketIcon() {
    let socketInfo = document.getElementById('socket');
    socketInfo.classList.add('socket--active');
    socketInfo.addEventListener('click', () => {
        displaySocketMenu()
    });
}