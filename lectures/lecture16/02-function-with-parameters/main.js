// make a function:

// function makeRed() {
//     document.querySelector("body").style.backgroundColor="#B23";
// }

// function makeBlue() {
//     document.querySelector("body").style.backgroundColor="#40C";
// }

// function makeGreen() {
//     document.querySelector("body").style.backgroundColor="#1D5"
// }

function changeColor(color) {
    const bodyEl = document.querySelector("body");
    bodyEl.style.backgroundColor = color;
}