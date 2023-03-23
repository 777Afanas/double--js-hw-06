
const list = document.querySelector('#categories');
console.log(list.childNodes);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.children);
const numberCategories = list.children.length;
console.log(`Number of categories: ${numberCategories}`);
// const listAll = document.querySelectorAll(".item");
// console.log(listAll);

const textAll = document.querySelectorAll("h2");
console.log(textAll);
textAll.forEach(function (text, index, array) {
       
    console.log(`Category: ${text.textContent}`);

});
// childNodes

const ttsAll = textAll.childNodes;
