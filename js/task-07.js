const sizeFontControl = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');


sizeFontControl.addEventListener('input', onChangeFontSize);


fontSizeText.style.fontSize = sizeFontControl.value + 'px'

function onChangeFontSize(event) { 
        console.log(fontSizeText.style.fontSize = sizeFontControl.value + 'px');
};