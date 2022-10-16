"use strict";

// const allLinks = document.querySelectorAll('li');
// for(let link of allLinks) {
//     link.innerText = "Hello madafaker";
// }

//////////////////////////////////////////

//document.querySelector('#id').src = can change source
//document.querySelector('a').href = can change link
//document.querySelector('a').title = can change title

//change img src
//document.querySelector('img').src = 'https://devsprouthosting.com/images/chicken.jpg';
//change attribute alt
//document.querySelector('img').setAttribute('alt', 'chicken');

//////////////////////////////////////////

//changing the attribute via href
// const aLink = document.querySelector('#alink');
// aLink.setAttribute('href', 'https://www.youtube.com/watch?v=0i70f8xP_Ns&ab_channel=SevyPlays');

//////////////////////////////////////////
//changing attr type
//////////////////////////////////////////

//const aType = document.querySelector('#aType'); //from text
//aType.type = 'password' //to password
//or
//aType.setAttribute('type', 'color')

//////////////////////////////////////////
//sample of changing style
//////////////////////////////////////////

// const allLinks = document.querySelectorAll('li');
// for(let link of allLinks) {
//     link.style.color = 'red'
//     link.style.fontSize = '32px'
// }

//p.s style object doesn't contain styles from stylesheets it will only contain inline styles

//////////////////////////////////////////

//get a specific style of an element by passing element to window onject: //output will be all style in that specific element
//window.getComputedStyle('any element')

//////////////////////////////////////////

//make the rainbow word to rainbow color 

//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//either you do this or
// document.querySelectorAll('span')[0].style.color = colors[0];
// document.querySelectorAll('span')[1].style.color = colors[1];
// document.querySelectorAll('span')[2].style.color = colors[2];
// document.querySelectorAll('span')[3].style.color = colors[3];
// document.querySelectorAll('span')[4].style.color = colors[4];
// document.querySelectorAll('span')[5].style.color = colors[5];
// document.querySelectorAll('span')[6].style.color = colors[6];

//select all spans
// const spans = document.querySelectorAll('span');

//then count the length of colors
// for(let i = 0; i <= colors.length; i++) {
//     spans[i].style.color = colors[i]
// }



//select an id named container then created an element(button and add innerText to each to element created) then append it multiple times
// for(let i = 0; i < 100; i+=1) {
//     const newElement = document.querySelector('#container').appendChild(document.createElement('button'));
// 	newElement.innerText = 'Hey!';
// }

//////////////////////////////////////////
//removing an element
//////////////////////////////////////////

//const img = document.querySelector('element')
//img.remove

//////////////////////////////////////////

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

////////////////////////////////////////
/////Pokemon
////////////////////////////////////////
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for(let i = 1; i < 400; i++){
    const newImg = document.createElement('img');           
    const newDiv = document.createElement('div');
    //const label = document.createElement('span');
    const btnLabel = document.createElement('button');
            
    //added a class
    btnLabel.classList.add('img-poke');
    
    //manipulate text
    btnLabel.innerText =`#${i}`;     

    //added a source to display images based on its order by generating number(i)
    newImg.src = `${baseURL}${i}.png`;

    //added a class
    newImg.classList.add('img-shadow');

    newDiv.appendChild(newImg);
    newDiv.appendChild(btnLabel);

    //selected an element and added new element inside
    container.appendChild(newDiv);

    //addded an attribute onClick and onClick value
    newImg.setAttribute("onClick", "console.log(`${src}`)")     
}


////////////////////////////////////////