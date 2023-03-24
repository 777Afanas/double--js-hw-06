const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];   

const ingredientsContainerEl = document.querySelector('#ingredients'); 

//================OLD_SCHOOL==============================

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add("item");

//   elements.push(ingredientEl);
// }
// ingredientsContainerEl.append(...elements);
// console.log(ingredientsContainerEl);

//===================================================

// const elements = ingredients.map(ingredient => {
//   const ingredientEl = document.createElement("li");
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add("item");

//   return ingredientEl;
// });

// ingredientsContainerEl.append(...elements);
// console.log(ingredientsContainerEl);

//=================FUNCTION===============================

// const makeComponents = components => { 
const makeComponents = ingredients => { 

  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");

    return ingredientEl;
  });
};

const elements = makeComponents(ingredients);
ingredientsContainerEl.append(...elements);
console.log(ingredientsContainerEl);
