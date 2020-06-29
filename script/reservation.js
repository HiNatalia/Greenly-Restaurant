let formInputs = document.querySelectorAll('.reservation__form__input');
//let keysOfInputs = ['name', 'numberOfPeople','phoneNumber', 'date','eMail','time'];

let btnSubmit = document.getElementById('reservation__form__input--submit');
let errors = [];
btnSubmit.addEventListener('click', () => {

    if (nameValid() === true){
      
        errors.push('imie nie może zawierać spacji');
    }if (formInputs[1].value >= 50) {
       
        errors.push('nie mozesz zamowic wieceij miejsc niz 50');
       
    } if (formInputs[2].value.length > 9 || formInputs[2].value.length < 9) {
   
        errors.push('numer musi zawierac 9 cyfr');
        
    } else {
        return true;
    }
    if(errors.length != 0){
        createResultsWindow(errors)
        setTimeout(removeResultsWindow, 4000);
        alert(errors);
    }
   

},)


function nameValid(){
    let name = formInputs[0].value;    
    let reg = new RegExp("[0-9]");  
    let result =  reg.test(name);
    if((result === true) || (name == ' ') ){
        return true;
    }else if((result === false) || (name != ' ')){
        return false;
    }
}

function createResultsWindow(errorsTab){
    let container = document.body;
    reservationResult = document.createElement('div');
    container.appendChild(reservationResult);
    reservationResult.setAttribute('class', 'reservation__result');

    errorsTab.forEach((error, index) => {
        let p = document.createElement('p');
        reservationResult.appendChild(p);
        p.textContent = error;
    })
   
}
function removeResultsWindow(){
    document.querySelector('.reservation__result').remove();
}


