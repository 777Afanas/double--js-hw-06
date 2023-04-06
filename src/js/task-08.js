const formLog = document.querySelector(".login-form");

formLog.addEventListener("submit", onHangleSubmit);

function onHangleSubmit(event) {
    event.preventDefault();
   
    const formLogElements = event.currentTarget.elements;
    
    const mail = formLogElements.email.value;
    const password = formLogElements.password.value;

    if (mail === "" || password === "") {
        return alert("Заполни все поля!")
    } else {
        const newData = {
            Email: mail,
            Password: password,
        };
        return  console.log(newData);     
       }
   
    event.currentTarget.reset();
}
    // ====================================================

   
//     const formData = new FormData(event.currentTarget);
//     console.log(event.currentTarget); 
//     formData.forEach((value, name) => {
//         if (value === "") {
//             return alert("Заполни все поля!")
//         }
//         // console.log(event.currentTarget); 
//         // console.log(value);

//         console.log(`${name}: ${value}`);
//         // event.currentTarget.reset();          
//     });        

//     event.currentTarget.reset(); 
//     console.log(event.currentTarget); 
// }




