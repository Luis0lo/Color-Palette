// Global selection and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const sliders = document.querySelectorAll('.input[type ="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

//functions

//Color Generator

function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

// function generateHex() {
//   const letters = "0123456789ABCDF";
//   let hash = "#";
//   for (let i = 0; i < 6; i++) {
//     hash += letters[Math.floor(Math.random() * 15)];
//   }
//   return hash;
// }

// let randomHex = generateHex();
// console.log(randomHex);

//
function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();
    //adding the color to the background
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}
randomColors();
