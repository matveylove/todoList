const formEntry = document.querySelector('.form-entry');
const btnSignUp = document.querySelector('.btn-entry');
const container = document.querySelector('.container');
const btnRegistration = document.querySelector('.btn-registration');
const formRegistration = document.querySelector('.form-registration');
const closeBtnRegistration = document.querySelector('.btn-registration-close');
const closeBtnEntry = document.querySelector('.btn-entry-close');


btnSignUp.addEventListener('click', function(event) {
    event.preventDefault();
    formEntry.classList.add('form-active'); 
    formEntry.classList.remove('form-entry'); 
    container.classList.add('container-hidden');
})

btnRegistration.addEventListener('click', function(event) {
    event.preventDefault();
    formRegistration.classList.add('form-active'); 
    formRegistration.classList.remove('form-registration')
    container.classList.add('container-hidden');
})

closeBtnRegistration.addEventListener('click', function(event) {
    event.preventDefault();
    formRegistration.classList.remove('form-active');
    formRegistration.classList.add('form-registration');
    container.classList.remove('container-hidden');
})

closeBtnEntry.addEventListener('click', function(event) {
    event.preventDefault();
    formEntry.classList.remove('form-active'); 
    formEntry.classList.add('form-entry'); 
    container.classList.remove('container-hidden');
})
