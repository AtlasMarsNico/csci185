function makeRed () {
    console.log("turn first div red");
    //what element do we want to target
    //#section1
    //what do we want to change about it
    //background-color
    //style.backgroundColor
    const container = document.querySelector("#section1");
    container.style.backgroundColor="red";
}

function makeBlue () {
    console.log("turn 2nd div blue");
    const container = document.querySelector("#section2");
    container.style.backgroundColor="blue";
}

function makePink () {
    console.log("turn 3rd div pink");
    const container = document.querySelector("#section3");
    container.style.backgroundColor="pink";
}

function makeOrange () {
    console.log("turn 4th div orange");
    const container = document.querySelector("#section4");
    container.style.backgroundColor="orange";
}

function makeOriginal () {
    const s1 = document.querySelector("#section1");
    const s2 = document.querySelector("#section2");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundColor="white";
}
