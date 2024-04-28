let x = 100;
let y = 200;
let width = 100;
let color = "red";

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}

function drawPlayer() {
    // clear();
    fill(color);
    circle(x, y, width); // x position, y position, diameter
    drawGrid(window.innerWidth, window.innerHeight);
}
function movePlayer(ev) {
    console.log(ev.code);
    if (ev.code == "ArrowUp") {
        console.log("up arrow!");
        y -= 4;
    } else if (ev.code == "ArrowDown") {
        console.log("down arrow!");
        y += 4;
    } else if (ev.code == "ArrowLeft") {
        console.log("left arrow!");
        x -= 4;
    } else if (ev.code == "ArrowRight") {
        console.log("right arrow!");
        x += 4;
    } else if (ev.code == "Space") {
        width += 4;
    } else if (ev.code == "Escape") {
        width -= 4;
    }
    drawPlayer();
}

// Don't forget to add the event listener. It calls the "movePlayer" everytime
// the user presses the keyboard:
document.addEventListener("keydown", movePlayer);
