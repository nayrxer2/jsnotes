"use strict";

// const divElement = document.querySelector('.btnDiv');
// const btnEvent = document.querySelector('#btn-event');
// const newBtn = document.createElement('button');


// btnEvent.setAttribute('style', '')
// btnEvent.classList.add('btn-style');
// btnEvent.onclick = function() {
//    divElement.appendChild(newBtn);
//    newBtn.setAttribute('id', '#btn-event');
//    newBtn.innerText = "don't touch me";

//    function scream() {
//         console.log("I TOLD YOU DON'T TOUCH ME")
//    }

//    newBtn.onmouseleave = scream;
// }

///////////////////////////////////////
document.querySelector('.rainbow').onclick = () => {
    alert('hello')
}
//same output
const btnH2 = document.querySelector('h2');

btnH2.addEventListener('click', () => {
    alert('h2 been clicked')
})

/////////////////////////////////////// 

function yolo() {
    console.log('Yolo');
}
//options object: #once #capture #passive
//options object: once  //--will trigger once and removes events
btnH2.addEventListener('click', yolo, {once: true})

///////////////////////////////////////

//change background color everytime you click the button
const chngColor = document.querySelector('#changeColor');
const h1 = document.querySelector('h1');

//random color
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

chngColor.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.background = newColor;
    chngColor.innerText = `${newColor}`;   
})

///////////////////////////////////////

//select all buttons inside the container using class
const allBtn = document.querySelectorAll('.img-poke');

//add an eventListener for each of them 
// for(let btnEvent of allBtn) {
//     btnEvent.addEventListener('click', () => {
//         btnEvent.style.background = randomColor();
//     })
// }

//my first attempt //
// function changeAll(selectedElement) {   
//     for(let changeStyle of selectedElement) {
//         changeStyle.addEventListener('click', () => {
//             changeStyle.style.background = randomColor();
//         })
//     }    
// }
// changeAll(allBtn)

for(let btnEvent of allBtn) {
    btnEvent.addEventListener('click', colorize)    
}

function colorize() {
    this.style.background = randomColor();
}
///////////////////////////////////////


