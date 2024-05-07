let x = 780;
let y = 300;
let width = 100;
let color = "black";
let jumping = false;
let jumpHeight = 100;
let jumpSpeed = 5;
let gravity = 0.5;
let velocity = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}

function drawPlayer() {
    clear();
    fill(color);
    circle(x, y, width);
    drawGrid(window.innerWidth, window.innerHeight);
}

function movePlayer(ev) {
    console.log(ev.code);
    if (ev.code == "ArrowLeft") {
        x -= 4;
    } else if (ev.code == "ArrowRight") {
        x += 4;
    } else if (ev.code =="KeyR") {
        color = "Red";
    } else if (ev.code == "KeyO") {
        color = "Orange";
    } else if (ev.code == "KeyY") {
        color = "Yellow";
    } else if (ev.code == "KeyG") {
        color = "Green";
    } else if (ev.code == "KeyB") {
        color = "Blue";
    } else if (ev.code == "KeyI") {
        color = "Indigo";
    } else if (ev.code == "KeyV") {
        color = "Violet";
    } else if (ev.code == "KeyL") {
        color = "Black";
    } else if (ev.code == "Space") {
        if (!jumping) {
            jumping = true;
            jump();
        }
    }
    drawPlayer();
}

function jump() {
    let startY = y;
    let peakY = startY - jumpHeight;
    let jumpInterval = setInterval(function() {
        if (y > peakY) {
            y -= jumpSpeed;
        } else {
            clearInterval(jumpInterval);
            velocity = 0;
            fall();
        }
    }, 20);
}

function fall() {
    let fallInterval = setInterval(function() {
        velocity += gravity;
        y += velocity;
        if (y >= 300) {
            y = 300;
            clearInterval(fallInterval);
            jumping = false;
        }
    }, 20);
}

document.addEventListener("keydown", movePlayer);
