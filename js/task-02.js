const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = document.querySelector('#ingredients');
const newElement = ingredients.map((element) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');

  return itemEl;
})
console.log(newElement);

const addListIngredients = createList.append(...newElement);
