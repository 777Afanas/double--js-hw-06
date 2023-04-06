function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const handleClickCl = (event) => {

  document.body.style.backgroundColor = getRandomHexColor();

  // console.log(document.body.style.backgroundColor);

  colorSpan.textContent = document.body.style.backgroundColor;
}

button.addEventListener("click", handleClickCl);




// const buttonEl = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// buttonT.addEventListener("click", handleClick);

// <div class="widget">
//       <p>Background color: <span class="color">-</span></p>
//       <button type="button" class="change-color">Change color</button>
//     </div>