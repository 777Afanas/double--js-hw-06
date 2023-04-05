const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrClick);
incrementBtn.addEventListener("click", onIncrClick); 

function onDecrClick (event) {
    event.preventDefault();     
    counterValue -= 1;       
    counterEl.textContent = counterValue;        
};

function onIncrClick (event) {
    event.preventDefault();     
    counterValue += 1;  
    counterEl.textContent = counterValue;     
};

// =================================================


// const onDecrClick = () => {
//     event.preventDefault();     
//     counterValue -= 1;       
//     counterEl.textContent = counterValue;   
// };

// const onIncrClick = () => {
//     event.preventDefault();
//     counterValue += 1;
//     counterEl.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", onDecrClick);
// incrementBtn.addEventListener("click", onIncrClick); 