function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]'); 
const amount = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector('#boxes');

let numberBox;

amount.addEventListener("input", (event) => {   
  numberBox = event.currentTarget.value;
  console.log(numberBox);
});  

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes () { 
     const boxes = [];
for (let i = 0; i < numberBox; i +=1) { 
  const boxEl = document.createElement("div");
  boxes.push(boxEl);
}  
boxesEl.append(...boxes);
  // console.log(boxesEl);        
  return console.log(boxesEl); 
  // console.log(boxesEl);
  
};


function destroyBoxes() {
  console.log(boxesEl); 
  // boxesEl.innerHTML = " ";            
};



// amount.addEventListener("input", (event) => {
//   console.log(event.currentTarget.value);
// const numberBox = event.currentTarget.value;

//   const boxes = [];
// for (let i = 0; i < numberBox; i +=1) { 
//   const boxEl = document.createElement("div");
//   boxes.push(boxEl);
// }  
// boxesEl.append(...boxes);
// console.log(boxesEl);
  
// });  

// let number = 5; 

// const boxes = [];
// for (let i = 0; i < number; i +=1) { 
//   const boxEl = document.createElement("div");
//   boxes.push(boxEl);
// }  
// boxesEl.append(...boxes);
// console.log(boxesEl);

// createBoxes(amount)

// function onDecrClick (event) {
//     event.preventDefault();     
//     counterValue -= 1;       
//     counterEl.textContent = counterValue;        
// };

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const counterEl = document.querySelector("#value");

// let counterValue = 0;

// decrementBtn.addEventListener("click", onDecrClick);
// incrementBtn.addEventListener("click", onIncrClick); 

// function onDecrClick (event) {
//     event.preventDefault();     
//     counterValue -= 1;       
//     counterEl.textContent = counterValue;        
// };

// function onIncrClick (event) {
//     event.preventDefault();     
//     counterValue += 1;  
//     counterEl.textContent = counterValue;     
// };




    // <div id="controls">
    //   <input type="number" min="1" max="100" step="1" />
    //   <button type="button" data-create>Create</button>
    //   <button type="button" data-destroy>Destroy</button>
    // </div>

    // <div id="boxes"></div>