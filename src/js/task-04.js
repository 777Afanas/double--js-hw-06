const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrClick);
incrementBtn.addEventListener("click", onIncrClick); 

function onDecrClick (event) {
    event.preventDefault();     
    counterValue -= 1;       
    counter.textContent = counterValue; 
};

function onIncrClick (event) {
    event.preventDefault();     
    counterValue += 1;  
    counter.textContent = counterValue;     
};

