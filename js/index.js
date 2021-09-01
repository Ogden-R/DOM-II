// Your code goes here

//Nav Bar links
const navBar = document.querySelectorAll('.nav-link');

//Paragraph 1
const busPic = document.querySelector('.intro img');
const funBusHeading = document.querySelector('.intro h2');
const funBusPara = document.querySelector('.intro p');

//Paragraph 2
const letsGoHeader = document.querySelector('.content-section h2');
const letsGoPara = document.querySelector('.content-section p');
const mapPic = document.querySelector('.content-section img');

//Paragraph 3
const adventurePic = document.querySelector('.img-fluid');
const adventureHeader = document.querySelector('.inverse-content h2');
const adventurePara = document.querySelector('.inverse-content p');

//Paragraph 4
const destinationHeader = document.querySelector('.content-destination h2');
const destinationPara = document.querySelector('.content-destination p');
const destinationPic = document.querySelector('.content-destination img');

// Paragraph 5
const optionsHeader = document.querySelectorAll('.destination h4');
const optionsPara = document.querySelectorAll('.destination p');

//Section 4 Buttons
const signUpButtons = document.querySelectorAll('.btn');

//Copywright section
const footer = document.querySelector('.footer');





//1. double click
const  addImageBorder = document.querySelectorAll('img');
addImageBorder[0].addEventListener("dblclick", event => {
    addImageBorder[0].style.border = '10px solid skyblue';
    console.log('Beautiful blue border!!')
});

addImageBorder[1].addEventListener("dblclick", event => {
    addImageBorder[1].style.border = '10px solid goldenrod';
    console.log('Beautiful gold border!!')
});

addImageBorder[2].addEventListener("dblclick", event => {
    addImageBorder[2].style.border = '10px solid salmon';
    console.log('Beautiful pink border!!')
});

addImageBorder[3].addEventListener("dblclick", event => {
    addImageBorder[3].style.border = '10px solid seagreen';
    console.log('Beautiful teal border!!')
});

// 2. Mouseover and 
// 3. Mouseout
// Sign Up Headings
const signUpHeadings = document.querySelectorAll('h4');

// Fun in the Sun Heading
signUpHeadings[0].addEventListener("mouseover", event => {
    signUpHeadings[0].style.backgroundColor = "yellow";
    console.log(`Let's have some Fun in the Sun!`)
});

signUpHeadings[0].addEventListener("mouseout", event => {
    signUpHeadings[0].style.backgroundColor = "#FFFFFF";
    
});

// Mountain Excursion Heading
signUpHeadings[1].addEventListener("mouseover", event => {
    signUpHeadings[1].style.backgroundColor = "springgreen";
    console.log(`Let's go on a Mountain Excursion!`)
});

signUpHeadings[1].addEventListener("mouseout", event => {
    signUpHeadings[1].style.backgroundColor = "#FFFFFF";
});

// Island Getaway Heading
signUpHeadings[2].addEventListener("mouseover", event => {
    signUpHeadings[2].style.backgroundColor = "turquoise";
    console.log(`Let's go on an Island Getaway!`)  
});

signUpHeadings[2].addEventListener("mouseout", event => {
    signUpHeadings[2].style.backgroundColor = "#FFFFFF";
});

// 4. Click
signUpButtons[0].addEventListener('click', event => {
    signUpButtons[0].style.backgroundColor = "yellow";
    signUpButtons[0].style.color = "rebeccapurple";
    console.log("Let's go have some Fun!");
 });

signUpButtons[1].addEventListener('click', event => { 
     signUpButtons[1].style.backgroundColor = "springgreen";
    signUpButtons[1].style.color = "rebeccapurple";
    console.log("Let's go to the Mountains!");
});

signUpButtons[2].addEventListener('click', event => {
    signUpButtons[2].style.backgroundColor = "turquoise";
    signUpButtons[2].style.color = "rebeccapurple";
    console.log("Let's Go to the Beach!");
 });


// 5. Keydown
const bgChange = document.querySelector('body');

bgChange.addEventListener("keydown", event => {
    event.target.style.backgroundColor = '#FFEBCD';
    console.log(event.target.style);
});

// 6. Keyup
bgChange.addEventListener("keyup", event => {
    event.target.style.backgroundColor = 'white';
    console.log(event.target.style);
});
bgChange.addEventListener('keyup', event => {
    console.log('stopping propagation!');
    event.stopPropagation();
})

// 7. Wheel
funBusHeading.addEventListener("wheel", (event) =>
{
    funBusHeading.style.fontSize = "45px";
});






