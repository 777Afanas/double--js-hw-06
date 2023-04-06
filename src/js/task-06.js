const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", () => {

    console.log(textInput.dataset.length);
    console.log(textInput.value.length);
    console.log(textInput.getAttribute('data-length'));

    if (textInput.value.length == textInput.getAttribute('data-length')) {
    // if (textInput.value.length == textInput.dataset.length) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }     

})


