
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const textStart = output.textContent;

textInput.addEventListener("input", (event) => {

    if (event.currentTarget.value) {
        output.textContent = event.currentTarget.value;
        return; 
    }

    output.textContent = textStart;

    // if (!event.currentTarget.value) {
    //     output.textContent = textStart;
    //     return;
    // }

    // output.textContent = event.currentTarget.value;

});


