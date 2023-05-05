import throttle from 'lodash.throttle';

const LOCAL_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY) );

const { email, message } = form.elements;
reloadPage();



function onInput(eve) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}


function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}


function onSubmit(eve) {
    eve.preventDefault();
    console.log({ email: email.value, message: message.value });


    localStorage.removeItem(LOCAL_KEY);
    eve.currentTarget.reset();
    dataForm = {};
}
