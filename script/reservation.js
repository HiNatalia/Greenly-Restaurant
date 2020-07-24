let formInputs = document.querySelectorAll('.reservation__form__input');
let form = document.getElementById('form');
let btnSubmit = document.getElementById('reservation__form__input--submit');
let errors = [];

btnSubmit.addEventListener('click', function (e) {

    if (emptyValid() === false) {
        errors.push('każde pole musi być wypełnione');
    }
    if (nameValid() === true) {
        errors.push('imie nie może zawierać liczb');
    }
    if (formInputs[1].value >= 50) {
        errors.push('nie mozesz zamowic wieceij miejsc niz 50');
    }
    if (formInputs[2].value.length > 9 || formInputs[2].value.length < 9) {
        errors.push('numer musi zawierac 9 cyfr');
    }

    if (errors.length > 0) {
        createErrorsWindow(errors)
        setTimeout(removeResultsWindow, 4000);
        errors = [];
    } else if (errors.length == 0) {
        createSuccesWindow();
        setTimeout(removeResultsWindow, 4000);
    }
    e.preventDefault(); //prevent refresh after submit
}, )


function emptyValid() {
    let emptyInputs = 0;
    formInputs.forEach((input) => {
        if ((input.value == '') || (input.value == null)) {
            emptyInputs++;
        }
    })
    if (emptyInputs > 0) {
        return false;
    } else {
        return true;
    }
}

function nameValid() {
    let name = formInputs[0].value;
    if ((/[0-9]/.test(name)) || (name == '') || (/^ *$/.test(name))) {
        return true;
    } else {
        return false;
    }
}

function createErrorsWindow(errorsTab) {
    let container = document.body;
    reservationResult = document.createElement('div');
    container.appendChild(reservationResult);
    reservationResult.setAttribute('class', 'reservation__result');
    let resultp = document.createElement('p');
    reservationResult.appendChild(resultp);
    resultp.textContent = 'Rezerwacja nie może zostać zrealizowana';

    errorsTab.forEach((error) => {
        let p = document.createElement('p');
        reservationResult.appendChild(p);
        p.textContent = error;
    })
}

function createSuccesWindow() {
    let container = document.body;
    reservationResult = document.createElement('div');
    container.appendChild(reservationResult);
    reservationResult.setAttribute('class', 'reservation__result');
    let pSucces = document.createElement('p');
    reservationResult.appendChild(pSucces);
    pSucces.textContent = 'Rezerwacja zakońcona sukcesem';
}

function removeResultsWindow() {
    document.querySelector('.reservation__result').remove();
}
