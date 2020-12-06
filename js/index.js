// Your code goes here
// Events applied to this webpage are: 
/*
1) mouseover
2) keydown
3) click
4) load
5) resize
6) scroll
7) wheel
8) dblclick
9) copy
10) beforePrint

*/

//Make the title image a little transparent when mouseover event occurs
let titleImage = document.querySelector('img');
function transparentImage(event) {
    event.target.style.opacity = 0.5;
}
titleImage.addEventListener('mouseover', transparentImage);


//Change the backgroundColor on body after a keydown event;
document.body.addEventListener('keydown', function(e) {
    e.target.style.backgroundColor = 'purple';
    e.target.style.color = 'white';
});

//Change the color of links after a click event
let homeLink = document.querySelector('.nav-link');
homeLink.href="www.google.com";
console.log(homeLink);
homeLink.addEventListener('click', function(e) {
    e.preventDefault(); //This will prevent the page from refreshing
    e.target.style.color = 'coral';
    console.log(e.currentTarget);
});

let aboutUSLink = document.querySelector('nav a:nth-child(2)');
console.log(aboutUSLink);
aboutUSLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'coral';
    console.log(e.currentTarget);
});

let blogLink = document.querySelector('nav a:nth-child(3)');
console.log(blogLink);
blogLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'coral';
    console.log(e.currentTarget);
});

let contactLink = document.querySelector('nav a:last-child');
console.log(contactLink);
contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'coral';
    console.log(e.currentTarget);

});


// Change the logo heading after the load event is fired
window.addEventListener('load', function(e) {
    let mainHeading = document.querySelector(".logo-heading");
    console.log(mainHeading.textContent = 'Fun-Bus : LOADED');
    mainHeading.style.color = 'coral';
});

//Alert the user when the window is being resized
window.addEventListener('resize', function(e) {
    alert('You are a developer trying to view our website at different widths!')
})

//Dynamically change the background color. Gets darker as we scroll down.
window.addEventListener('scroll', () => {
    let red = 255, green = 127, blue = 80;
    let y = (window.scrollY || window.pageYOffset) / 200;
    y = (y < 1 ? 1 : y);
    red = Math.round(red / y);
    green = Math.round(green / y);
    blue = Math.round(blue / y);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.color = 'white';
})

/* SOURCE: https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll */


//Added the scroll event to zoom destination image
let destinationImage = document.querySelector('.content-destination img');
console.log(destinationImage);

let scale = 1;
function zoomPicture(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    event.target.style.transform = `scale(${scale})`;
}
destinationImage.addEventListener('wheel', zoomPicture);

// Allow the first two images in content to scale up on double click
let allImages = document.querySelectorAll('.img-content img');
console.log(allImages);

let firstImage = allImages[0];
console.log(firstImage);

let secondImage = allImages[1];
console.log(secondImage);
let scaleValue = 1.15;

firstImage.addEventListener('dblclick', function(e) {
    e.target.style.transform = `scale(${scaleValue})`; 
});

secondImage.addEventListener('dblclick', function(e) {
    e.target.style.transform = `scale(${scaleValue})`;
});

//Text is appended when a piece of the paragraph is copied. 
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);
firstParagraph.addEventListener('copy', function(e) {
    let selection = document.getSelection();
    console.log(selection);
    selection.anchorNode.data += " [TEXT COPIED!]";
});

//Added click event to the sign up buttons at the bottom

let firstSignUpButton = document.querySelectorAll('.destination .btn')[0];
let secondSignUpButton = document.querySelectorAll('.destination .btn')[1];
let thirdSignUpButton = document.querySelectorAll('.destination .btn')[2];

console.log(firstSignUpButton);
console.log(secondSignUpButton);
console.log(thirdSignUpButton);

firstSignUpButton.addEventListener('click', function(e) {
    e.target.textContent = "Right Choice!"
    e.target.style.color = 'aqua';
    e.target.style.backgroundColor = 'purple';
})

secondSignUpButton.addEventListener('click', function(e) {
    e.target.textContent = "Right Choice!"
    e.target.style.color = 'aqua';
    e.target.style.backgroundColor = 'purple';
})

thirdSignUpButton.addEventListener('click', function(e) {
    e.target.textContent = "Right Choice!"
    e.target.style.color = 'aqua';
    e.target.style.backgroundColor = 'purple';
})

//beforeprint event added to the window
window.addEventListener('beforeprint', function(e) {
    alert("Please Consider The Environment Before Printing!")
})

















