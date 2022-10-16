///////////////////////////////////////////////
//ARRAY METHOD
///////////////////////////////////////////////

//PUSH & POP

//PUSH is to add an element to the end of an array and 
//POP is to remove last element from the array

// let movieLine = ['tom', 'jerry', 'bull'];
// movieLine.push('car');
// movieLine.pop()
// console.log(movieLine, movieLine.length);

///////////////////////////////////////////////

//SHIFT & UNSHIFT 

//SHIFT is to remove from the start  
//UNSHIFT is to add from the start

///////////////////////////////////////////////

//MORE  METHODS

//concat - merge arrays

//ex. arr1[a] + arr2[b] ---

// const a1 = ['a']; 
// const b1 = ['b']; 
// const c1 = a1.concat(b1);

//a1 + b1 = a b if b1 + a1 = b a

// console.log(c1);

//-----------------------------------------------

"use strict";

//includes - look for a value --- its an example of BOOLEAN method it return TRUE or FALSE

// c1.includes('a'); //returns true
// c1.includes('A'); //returns false 

//-----------------------------------------------

//indexOf - just like string.indexOf --- returns the index which given element can be found

// c1.indexOf('b'); //returns 1

//-----------------------------------------------

//reverse - reverses an array --- destructive method

// c1.reverse(); //returns c1 = b, a

///////////////////////////////////////////////

//join - creates a string from an array

///////////////////////////////////////////////

//slice - copies a portion on an array

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// let coolColors = colors.slice(3);

// console.log(coolColors); // output  --- 'green', 'blue', 'indigo', 'violet'

// let coolColors = colors.slice(3, 4);
// console.log(coolColors); // output --- 'green'

//-----------------------------------------------

//splice - removes / replaces elelements

// colors.splice(2,5) 
// the first argument where splice should start --second is the count of items will be deleted starting from the first argument you placed
// second argument is the indicator, starting from first argument how many items would splice/remove

///////////////////////////////////////////////

//sort - sorts an array // -- sort use the first index to sort of an element

///////////////////////////////////////////////