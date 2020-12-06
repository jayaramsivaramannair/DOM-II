// Your code goes here

//mouseover - increase title image
//keydown - change the background color and font color
//Load - Make something happen when the window loads
//wheel - scale the title with wheel event
//focus - use for sign me up buttons
//resize - use for the window
//select - when a text has been selected
//dbl click - when an image has been double clicked
//drag & drop - image swap

//Make the title image a little transparent when mouseover event occurs
let titleImage = document.querySelector('img');
function transparentImage(event) {
    event.target.style.opacity = 0.7;
}
titleImage.addEventListener('mouseover', transparentImage);


//Change the backgroundColor on body after a keydown event;
document.body.addEventListener('keydown', (e) => e.target.style.backgroundColor = 'coral');

//Change the color of links after a focus event
let homeLink = document.querySelector('.nav-link');
console.log(homeLink);
homeLink.addEventListener('focus', (e) => e.target.style.color = 'coral');

let aboutUSLink = document.querySelector('nav a:nth-child(2)');
console.log(aboutUSLink);
aboutUSLink.addEventListener('focus', (e) => e.target.style.color = 'coral');

let blogLink = document.querySelector('nav a:nth-child(3)');
console.log(blogLink);
blogLink.addEventListener('focus', (e) => e.target.style.color = 'coral');

let contactLink = document.querySelector('nav a:last-child');
console.log(contactLink);
contactLink.addEventListener('focus', (e) => e.target.style.color = 'coral');


// Change the logo heading after the load event is fired
window.addEventListener('load', function(e) {
    let mainHeading = document.querySelector(".logo-heading");
    console.log(mainHeading.textContent = 'Fun-Bus-On-The-Road');
    mainHeading.style.color = 'coral';
});

//Alert the user when the window is being resized
window.addEventListener('resize', function(e) {
    alert('You are a developer trying to view our website at different widths!')
})

//Dynamically change the background color. Gets darker as we scroll down.
window.addEventListener('scroll', () => {
    let red = 255, green = 127, blue = 80;
    let y = (window.scrollY || windowpageYOffset) / 200;
    y = (y < 1 ? 1 : y);
    red = Math.round(red / y);
    green = Math.round(green / y);
    blue = Math.round(blue / y);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.color = 'white';
})

/* SOURCE: https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll */









