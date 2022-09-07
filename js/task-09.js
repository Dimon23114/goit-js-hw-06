const buttonChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const bodyColor = document.querySelector('body');

buttonChangeColor.addEventListener('click', onChangeColor);



function onChangeColor(event) { 
  const colorText = bodyColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = colorText;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

