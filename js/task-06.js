const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const lengthSymInInputEl = inputEl.dataset.length;


inputEl.addEventListener('blur', onLengthInInput);

function onLengthInInput(event) { 
    if (event.currentTarget.value.length === Number(lengthSymInInputEl)) { 
        inputEl.classList.toggle('valid');
    }
    inputEl.classList.toggle('invalid'); 
};