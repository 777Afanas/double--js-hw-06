const inputValue = document.querySelector('#font-size-control');
const textStyle = document.querySelector('#text');

// console.log(inputValue.value);
inputValue.addEventListener("input", () => {
    console.log(inputValue.value);
    // textStyle.textContent = inputValue.style.fontSize;
    textStyle.style.fontSize = `${inputValue.value}px`;
   
});

// ================================================

// const inputRange = document.querySelector('#font-size-control');
// const spanText = document.querySelector('#text');

// inputRange.addEventListener("input", () => {
    
//     spanText.style.fontSize = `${Number(inputRange.value)}px`;
//     console.log(spanText.style.fontSize);
// });




