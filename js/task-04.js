let counterValue = 0;


const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const valueEL = document.querySelector('#value');

incrementEl.addEventListener('click', onClickPlus);

function onClickPlus (event) {
    valueEL.textContent = counterValue += 1;

};


decrementEl.addEventListener('click', onClickMinus);

function onClickMinus (event) {
    valueEL.textContent = counterValue -= 1;
};