
const list = document.querySelector('#categories');  
const numberCategories = list.children.length;
console.log(`Number of categories: ${numberCategories}`);

const itemELs = document.querySelectorAll(".item");  
itemELs.forEach(function (itemEL) {   
    console.log(`Category: ${itemEL.firstElementChild.textContent}`);
    console.log(`Elements: ${itemEL.lastElementChild.children.length}`);   
});

// itemELs.forEach(function (itemEL, index) {     
//     console.log(`Category: ${itemELs[index].firstElementChild.textContent}`);
//     console.log(`Elements: ${itemELs[index].lastElementChild.children.length}`);         
// });



