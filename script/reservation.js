let formInputs = document.querySelectorAll('.reservation__form__input');
//let keysOfInputs = ['name', 'numberOfPeople','phoneNumber', 'date','eMail','time'];

let btnSubmit = document.getElementById('reservation__form__input--submit');

btnSubmit.addEventListener('click', () => {

  for (let i = 0; i < formInputs.length; i++) {

        if (formInputs[i].value == '' || formInputs[i].value == null) {

        alert(`${formInputs[i]} o indeksie ${i} jest pusty`);
        return false;

        }else {
        checkOthers();
        }

    };
 },)

function checkOthers(){
    if (formInputs[1].value >= 50) {
        alert('nie mozesz zamowic wiecej miejsc niz 50');
        break;
    } else if (formInputs[2].value.length > 9 || formInputs[2].value.length < 9) {
        alert('numer musi zawierać 9 cyfr');
        break;
}