let x = 100;
let y = 200;
let width = 100;
let color = "red";


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}


function drawPlayer() {
    clear();
    fill(color);
    circle(x, y, width); // x position, y position, diameter
    drawGrid(window.innerWidth, window.innerHeight);
}

function movePlayer(ev) {
    // open the console in your browser to see what happens :)
    console.log(ev.code);
    if (ev.code === "ArrowUp") {
        y = y - 5;
    }

    else if (ev.code === "ArrowDown") {
        y = y + 5;
    }

    else if (ev.code === "ArrowLeft") {
        x = x - 5;
    }

    else if (ev.code === "ArrowRight") {
        x = x + 5;
    }

    else if (ev.code === "Space") {
        width = width + 5;
    }

    else if (ev.code === "Escape") {
        width = width - 5;
    }

    else if (ev.code === "KeyB") {
        color = "blue";
    }

    else if (ev.code === "KeyR") {
        color = "red";
    }

    else if (ev.code === "KeyT") {
        color = "teal";
    }
    // re-draw the player
    drawPlayer();
}
