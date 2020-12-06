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









