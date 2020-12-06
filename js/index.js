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










