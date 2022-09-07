const categoriesList = document.querySelector('#categories');
console.log('Number of categoreis:', categoriesList.children.length);
const itemNumbers = document.querySelectorAll('.item'); 

const listChildren = itemNumbers.forEach((element) => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});