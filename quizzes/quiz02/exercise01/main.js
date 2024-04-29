function changeBackground() {
    document.querySelector("#s1").style.backgroundColor = "skyblue";
}

function goodbye() {
    const myElement = document.querySelector("#message");
    myElement.innerHTML = "Goodbye!";
    
}

function showDog() {
    const img = document.querySelector("#animal1");
    img.src= "images/dog.jpg";
}
