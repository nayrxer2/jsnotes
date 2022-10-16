"use strict";
//STATEMENTS
console.log("Hello from our first file");

// let userAge = prompt("Please enter your age");


// if (userAge >= 18 ) {
//     console.log("you're okay to proceed")
// } 
// else {
//     console.log("you're not okay to proceed")
// }


// 0-6 Free
// 7-13 Child $10
// 14-60 Adult $20
// 61+ Senior $10



// let age = prompt("Enter your age!");


// if (age <= 7) {
//     console.log("Free");
// } else if (age <= 13) {
//     console.log("$10");
// } else if (age <= 60) {51
//     console.log("$20");
// } else if (age > 60) {
//     console.log("$10 Senior");
// } else {
//     console.log("Please your age!")   
// }

// const pswrd = prompt("Enter your password");


// if (pswrd.length > 7 ) {
//     //alert("You're good to go!");
//     if (pswrd.indexOf(' ') === -1) {
//         // alert("Valid");
//         window.location.replace('https://www.youtube.com/');
//     } else {
//         alert("Password cannot include space");
//         prompt("Enter your password");
//     }
// } else {
//     alert("Your password is weak! Enter more characters");
//     prompt("Enter your password");
// }


//AND / &&

// if (pswrd.length >= 8 && pswrd.indexOf(' ') === -1) {
//     window.location.replace('https://www.youtube.com/');
// } else {
//     window.location.replace('https://www.facebook.com/');
// }

/////////////////////////////////////////////////

//OR / ||

// 0-5 = free  
// 6-10 = $10
// 11-65 = $20
// 65+ = free


// const age = -1;

// if ( (age >= 0 && age <= 5)  || age >= 65 ) {
//     console.log("You're free")
// } else if ( age > 5 && age < 10 ) {
//     console.log("You need to pay $10")
// } else if (age >= 11 && age <= 64) {
//     console.log("You need to pay $20")
// } else {
//     console.log("Enter a valid age!")
// }

/////////////////////////////////////////////////

// SWITCH

// const day = 6;

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;  
//     case 3:
//         console.log('Wednesday');
//         break;  
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     default:
//         console.log('Not weekdays');
// }