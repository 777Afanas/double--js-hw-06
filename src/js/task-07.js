const inputValue = document.querySelector('#font-size-control');
const textStyle = document.querySelector('#text');

// console.log(inputValue.value);
inputValue.addEventListener("input", () => {
    console.log(inputValue.value);
    // textStyle.textContent = inputValue.style.fontSize;
    textStyle.style.fontSize = `${inputValue.value}px`;
    // console.log(textStyle.textContent);
    // console.log(event.inputValue.style.fontSize);
    // console.log(inputValue.value);
});

// ================================================

// const inputRange = document.querySelector('#font-size-control');
// const spanText = document.querySelector('#text');

// inputRange.addEventListener("input", () => {
    
//     spanText.style.fontSize = `${Number(inputRange.value)}px`;
//     console.log(spanText.style.fontSize);
// });

 

//  <input id="font-size-control" type="range" min="16" max="96" />
//     <br />
//     <span id="text">Abracadabra!</span>


// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center"; 

// Напиши скрипт, который реагирует на изменение 
// значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.