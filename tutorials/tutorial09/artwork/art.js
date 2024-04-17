const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c33", "#e1f0c433", "#6bab9033", "#55917f33", "#5e4c5a33"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2); // how many redraws per second

    fill("#08415c33");
    strokeWeight(0);

    // generate a random x-position, y-position, and size:

    // Draw a random circle:
    let counter = 0;
    while (counter<1000) {
        let color =  colors[randomInt(0, 4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter+=1;
    }

    // counter = 0;
    // while (counter=100) {
    //     let color =  colors[randomInt(0, 4)];
    //     fill(color);
    //     let x = randomInt(0, canvasWidth/2);
    //     let y = randomInt(0, canvasHeight/2);
    //     let size = randomInt(25, 50);
    //     circle(x, y, size);
    //     counter+=1; 
    // }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */


function draw() {
    // clear();

    // generate a random x-position, y-position, and size:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomInt(25, 125);

    // draw a random circle each time the program animates:
    circle(x, y, size);
    let counter = 0;
    while (counter<1000) {
        let color =  colors[randomInt(0, 4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter+=1;
    }
}
