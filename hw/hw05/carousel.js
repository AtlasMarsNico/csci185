const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];

const captions = [
    "Image 1 of 10",
    "Image 2 of 10",
    "Image 3 of 10",
    "Image 4 of 10",
    "Image 5 of 10",
    "Image 6 of 10",
    "Image 7 of 10",
    "Image 8 of 10",
    "Image 9 of 10",
    "Image 10 of 10",
];

let idx = 0;

/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image:', idx);
    //reach into the DOM and target selector #the_image
    //then change the image src to photos[idx]
    //also target the caption text ad change it too!

    const img = document.querySelector("#the_image");
    img.src = photos[idx];
    const cap = document.querySelector(".caption");
    cap = captions[idx];
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    idx += 1;
    showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    idx -= 1;
    showImage();
}