const inputForm = document.querySelector('#name-input');
console.log(inputForm);
const outputTextArea = document.querySelector('#name-output');
console.log(outputTextArea);


inputForm.addEventListener('input', onInputChange);

function onInputChange() {
    outputTextArea.textContent = inputForm.value;

    if (inputForm.value === "") { 
        outputTextArea.textContent = "Anonymous";
    }
}