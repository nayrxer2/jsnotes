 "use strict";
 
//  window.addEventListener('keydown', function (e) {
//       switch (e.code) {
//         case 'ArrowUp':
//           console.log("UP!")
//           break;
//         case 'ArrowDwon':
//           console.log("DOWN!")
//           break;
//         case 'ArrowLeft':
//           console.log("LEFT!")
//           break;
//         case 'ArrowRight':
//           console.log(e.key)
//           break;
//         default:
//           console.log("IGNORED!")
//       }
//     });


// const input = document.querySelector('input');


// input.addEventListener('keydown', (e) => {
//     console.log(e);
// });

const form = document.querySelector('#shelterFrm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const catName = input.value;
  const newLi = document.createElement("LI");
  newLi.innerText = catName;
  list.appendChild(newLi)
  input.value = '';
})