"use strict";
/////////////////////////////////////////////////

//STATEMENTS
// console.log("Hello from our first file");

// let userAge = prompt("Please enter your age");


// if (userAge >= 18 ) {
//     console.log("you're okay to proceed")
// } 
// else {
//     console.log("you're not okay to proceed")
// }

/////////////////////////////////////////////////

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
//}
//

/////////////////////////////////////////////////

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

/////////////////////////////////////////////////

/////////////////////////////////////////////////
//ARRAY
/////////////////////////////////////////////////

//index in string vs index in array
//you cant change/replace an index in string but in array you can replace it by any value you want and you can also add a new value:



// let colors = ['red', 'blue', 'yellow'];

// colors[0] = 'orange';

// console.log(colors);

//you can also select the first letter of an array by:
//first index = [0] will choose first array in the array and the second index = [1] will choose the index of the chosen array

// console.log(colors[0][1])


/////////////////////////////////////////////////

//MODIFYING ARRAYS

//I made this to add after the last array by counting the total array  to indicate the length of an array and use it because of how index works

// let colors = ['red', 'blue', 'yellow', 'orange'];


// let totalColors = colors.length;

// let addColor = totalColors;

// let colorText = prompt('Add a color');

// colors[addColor] = colorText;
// console.log(colors, colors.length)

//But there's an easy way to add it on the end using PUSH

/////////////////////////////////////////////////


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


/////////////////////////////////////////
//for loop 
//for ([initialization]; [condition]; [final-expression]) {statement}
/////////////////////////////////////////

//     (start at 0; stop before 10; add 1 each time)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// } output 0 1 2 3 4 5 6 7 8 9

//     (start at 1; stop at 10; add 1 each time)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } output 1 2 3 4 5 6 7 8 9 10
/////////////////////////////////////////
//     (start at 0; stop at 10; add 2 each time)
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// } output 0 2 4 6 8 10

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
// } output 1 3 5 7 9
/////////////////////////////////////////
// for (let i = 100; i >= 10; i-=2) {
//     console.log(i);
// } 100 98 96 94... 10

// for (let i = 100; i > 10; i-=2) {
//     console.log(i);
// } 100 98 96 94... 12
/////////////////////////////////////////

//const animals = ['lions', 'tigers', 'bears'];

// for (let i = 0; i < animals.length; i++) {

////reverse
//for (let i = animals.length; i >= 0; i--) {

////[i]to loop over an array, start at index 0 and continue looping to until last index(length - 1)
//     console.log(animals[i])
// }

/////////////////////////////////////////

/////////////////////////////////////////
// //Nested Loops 
/////////////////////////////////////////

// for (let i = 1; i <= 10; i++) {
//     console.log(`Letter i`);
//     for (let j = 1; j <= 4; j++) {
//         console.log(`---Letter j ${j}`);
//     }
// }

/////////////////////////////////////////

// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     console.log(`ROW: # ${i + 1}`)
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }
/////////////////////////////////////////


/////////////////////////////////////////
// //While Loops
/////////////////////////////////////////
// let count = 0;
// while (count < 10) {
//     //console.log(count); //before console.log //output 0 1 2 3 4 5 6 7 8 9
//     count++;
//     console.log(count);//after ////output 1 2 3 4 5 6 7 8 9 10
// }

/////////////////////////////////////////

// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// let count = 0;
// while ( count < seatingChart.length ) {
//     for (let i = 0; i < seatingChart.length; i++) {
//         console.log(`ROW # ${i +1}`);
//         const row = seatingChart[i];
//         for (let j = 0; j < row.length; j++) {            
//             count++;
//             console.log(row[j])
//         }
//     }
// }

/////////////////////////////////////////

// const pswrd = "secret";

// let guess = prompt("What's the password:");

// while (guess != pswrd) {
//     guess = prompt("What's the password:");
// }

// alert('you can now proceed');

/////////////////////////////////////////
//GUESSING GAME
/////////////////////////////////////////
// let maxNum = parseInt(prompt("Enter a number!"));

// while (!maxNum) {
//     maxNum = parseInt(prompt(`Enter a valid number!`));
// }

// const targetNum = Math.floor(Math.random() * maxNum) +1;
// console.log(targetNum);

// let guess = prompt("Enter your first guess");
// let attempts = 1;

// while (parseInt(guess) !== maxNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > maxNum) {        
//         guess = prompt("Too high! Guess again:");        
//     } else if (guess < maxNum) {
//         guess = prompt("Too low! Guess again:");
//     } else {
//         guess = prompt(`"${guess}" is not a number. Please enter a valid number!`);
//     }
// }

// if (guess === 'q') {
//     console.log('Ok, quitting') 
// } else {
//     console.log("Congrats!")
//     console.log(`You got it! It took you ${attempts} to guess!`)
// }
/////////////////////////////////////////

/////////////////////////////////////////
//FOR OF LOOP
/////////////////////////////////////////
// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]


//sample
// for (let i = 0; i < seatingChart.length; i++) {//    
//     console.log(`Visit reddit.com/r/${seatingChart[i]}`)
// }

// for (let seat of seatingChart) {
//     console.log(`Visit reddit.com/r/${seat}`);
// }

/////////////////////////////////////////

//instead of nested for loop // 
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }

/////////////////////////////////////////
//for in loop

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }

//instead of this 
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }

//use this 
//Object.keys(testScores)
//to get values
//Object.values(testScores)

//example for..of loops using object
// for (let score of Object.values(testScores)) {
//     console.log(score)
// }

//get the average of total scores
// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);


/////////////////////////////////////////
//to do list
/////////////////////////////////////////

// let input = prompt("what would you like to do")


// while (input !== 'quit' && input !== 'q' ) {
//     if (input == "new") {
//         input = prompt("Add to do:")
//         const newList = toDo.push(input)  
//         console.log(`${input} was added to the list`) 
//     } else if (input == 'list'){
//         console.log(`***************************`)
//         for (let i = 0; i < toDo.length; i++) {
//             console.log(`${i}: ${toDo[i]}`)
//         }        
//         console.log(`***************************`)
//     } else if (input == 'delete') {
//         input = prompt("enter id to delete")
//         const index = parseInt(input)
//         if (!Number.isNaN(index)) {
//             const removed = toDo.splice(index, 1)
//             console.log(`Deleted ${removed} from the list`)
//         } else {            
//             console.log(`is ${index}`)
//             input = prompt("enter a valid id")
//         }     
//     }
//     input = prompt("What would you like to do")
// }
// console.log("Ok, Goodbye")
/////////////////////////////////////////

/////////////////////////////////////////
//functions
/////////////////////////////////////////

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }
/////////////////////////////////////////

/////////////////////////////////////////
//return keyword
/////////////////////////////////////////

// function add(x, y) {
//     let sum = x + y;
//     return sum;
// } 
// //ex
// const sum = add(9, 8)
// sum
// //17
/////////////////////////////////////////

/////////////////////////////////////////
//function scope
/////////////////////////////////////////

// const creature = "Common Sea Dragon";
 
// function scubaDive(){
//     const creature = "Spanish Dancer"; 
//     console.log(creature);
// }
 
// scubaDive(); // "Spanish Dancer";


// let deadlyAnimal = "Blue-Ringed Octopus";
 
// function handleAnimal() {
//     let deadlyAnimal = "Scorpionfish";
//     console.log(deadlyAnimal);
// }
 
// handleAnimal();
// console.log(deadlyAnimal) // "Scorpionfish" //"Blue-Ringed Octopus"
/////////////////////////////////////////

/////////////////////////////////////////
//nested function scope // lexical scope
/////////////////////////////////////////

// function bankRobbery() {
//     const heroes  = ['Spiderman', 'Wolverine', 'Black Panther'];
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`PLEAE HELP US, ${hero.toUpperCase()}`)       
//            }
//         }    
//         inner(); // call out the function
//     }    
//     cryForHelp(); //call out the function 
// }


// bankRobbery();
/////////////////////////////////////////

/////////////////////////////////////////
//function expression
/////////////////////////////////////////

// //add is the identifier 
// function add(x, y) {
//     return x + y;
// }

// //we can't create a function witnout an identifier 
// function(x, y) {
//     return x + y;
// }

// // or we can do this
// const add = function(x, y) {
//     return x + y;
// }
/////////////////////////////////////////

/////////////////////////////////////////
//function as an arguments
/////////////////////////////////////////

// function callTwice(func) {
//     func();
//     func();
// }

// function tenTimes(f) {
//     for(let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor((Math.random() * 6) +1)
//     console.log(roll);
// }

// callTwice(rollDie);
/////////////////////////////////////////

/////////////////////////////////////////
//returning a function
/////////////////////////////////////////

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log("Okay");
//         }
//     } else {
//         return function() {
//             alert("Oh shit");
//             alert("Don't close this window");
//             alert("Don't close this window");
//             alert("Don't close this window");
//             alert("Don't close this window");
//         }
//     }
// } 

// //output

// // ƒ () {
// //     console.log("Okay");
// // }

// //or

// // ƒ () {
// //     console.log("Oh shit");
// // }

// //in order to capture and save function and execute it

// const myst = makeMysteryFunc();
// myst(); //execution

// //output
// //Okay
// //Oh shit

/////////////////////////////////////////

//hassle to make function every condition
//this function creates a function
// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween(num) {
//     return num >= 1 && num <= 10;
// }


// //so we make this: a function thats create a function
// function makeBetweenFunc(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// //create a variable to store a function 
// const testRange = makeBetweenFunc(4, 80);

//more sample that would apply this function:
// const isAdult = makeBetween(19, 59)

// const isSenior = makeBetween(60, 120)

/////////////////////////////////////////

/////////////////////////////////////////
//function method
/////////////////////////////////////////

// const math = {
//     multiplication: function(x, y) {
//         return x * y;
//     },
//     division: function(x, y) {
//         return x / y;
//     },
//     addition: function(x, y) {
//         return x + y;
//     },
//     subtraction: function(x, y) {
//         return x - y;
//     }
// }

//shorthand
// const math = {
//     multiplication(x, y) {
//         return x * y;
//     },
//     division(x, y) {
//         return x / y;
//     },
//     addition(x, y) {
//         return x + y;
//     },
//     subtraction(x, y) {
//         return x - y;
//     }
// }

/////////////////////////////////////////

/////////////////////////////////////////
//keyword "this"
/////////////////////////////////////////

// const cat = {
//     name: 'corki',
//     color: 'grey',
//     breed: 'ascat',
//     meow() {
//         console.log("meow! meow!")
//     }
// }

// const person = {
//     fname: 'Ryan Rex',
//     lname: 'Gimotea',
//     mI:'S',
//     fullName() {
//         return `${this.lname}, ${this.fname} ${this.mI}.`
//     }
// }


// person.fullName();

/////////////////////////////////////////

/////////////////////////////////////////
//try/catch
/////////////////////////////////////////
// try {
//     hello.toupperCase();
// } catch {
//     console.log("Error")
// }

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log(e)
//         console.log('must be a string')
//     }    
// }
/////////////////////////////////////////

/////////////////////////////////////////
//forEach method
/////////////////////////////////////////
// const numbers = [
//     1, 2, 3, 4, 5, 
//     6, 7, 8, 9, 10, 
//     11, 12, 13, 14, 
//     15, 16, 17, 18, 
//     19, 20, 21, 22
// ]
//instead of this we can forEach with method
/////////////////////////////////////////
// function print(element) {
//     console.log(element)
// }
// //you can print them out 1 by 1
// // print(numbers[0])
// // print(numbers[1])

// //instead
// numbers.forEach(print)
/////////////////////////////////////////

//the commonly use 
// numbers.forEach(function (el) {
//     if (el % 2 !== 0)
//     console.log(el)
// })

// const numbers = [
//     1, 2, 3, 4, 5, 
//     6, 7, 8, 9, 10, 
//     11, 12, 13, 14, 
//     15, 16, 17, 18, 
//     19, 20, 21, 22
// ]

// //creates a new array populated with the results of calling a provided function on every element in the calling array
// //for each num in numbers multiply by 2

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// doubles

//another example

// const movies = [
//     {
//         title: 'Alien',
//         score: 90
//     },
//     {
//         title: 'Predator',
//         score: 80
//     },
//     {
//         title: 'Human Error',
//         score: 76
//     },
//     {
//         title: 'Parasite',
//         score:  97
//     },
//     {
//         title: 'Hunting',
//         score:  60
//     }  
// ]

//output - "Alien - 90" 'Predator - 80' etc
// movies.forEach((movie) => {
//     console.log(`${movie.title} - ${movie.score}`)
// })

// const title = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

/////////////////////////////////////////

/////////////////////////////////////////
//arrow function
/////////////////////////////////////////

//-parenthesis are optional if there's only one param
// const square = x => {
//     return x * x;
// }

//-use empty parenthesis for function with no param
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

/////////////////////////////////////////

//implicit return to be more compact

//-new syntax //-brackets to parenthesis //-eliminate return keyword//-if you only return 1 value
// const rollDie1 = () => (
//     Math.floor(Math.random() * 6) + 1
// )

/////////////////////////////////////////
// more example

//-normal
// const add = (a, b) => {
//     return a + b;
// }

//-implicit
// const add = (a, b) => (
//     a + b
// )

//-or you can get rid of parenthesis and make it one line
// const add = (a, b) => a + b
/////////////////////////////////////////   

/////////////////////////////////////////
//arrow function + array + implicit return
/////////////////////////////////////////

// const movies = [
//     {
//         title: 'Alien',
//         score: 90
//     },
//     {
//         title: 'Predator',
//         score: 80
//     },
//     {
//         title: 'Human Error',
//         score: 76
//     },
//     {
//         title: 'Parasite',
//         score:  97
//     },
//     {
//         title: 'Hunting',
//         score:  60
//     }  
// ]

// const newScore = movies.map(movie =>  `${movie.title} - ${movie.score/10}`)
//or if too long
// const newScore = movies.map(movie =>  (
//     `${movie.title} - ${movie.score/10}`
// ))

// const titles = movies.map((movie) => (
//      movie.title
// ))

/////////////////////////////////////////

/////////////////////////////////////////
//setTimeOut abd setInterval
/////////////////////////////////////////

//when setting up just pass in first argument like functions etc, then the second arg should be a milisecond

// setTimeout(() => {
//     console.log("HELLOO!!!!")
// }, 3000)


// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

// //to stop the interval
// clearInterval(id)

/////////////////////////////////////////


/////////////////////////////////////////
//filter method
/////////////////////////////////////////

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const numbers = [
//     1, 2, 3, 4, 5, 
//     6, 7, 8, 9, 10, 
//     11, 12, 13, 14, 
//     15, 16, 17, 18, 
//     19, 20, 21, 22
// ]

// const ab = numbers.filter(n => {
//     return n === 4;
// })

/////////////////////////////////////////

// const movies = [
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1965
//     },
//     {
//         title: 'Predator',
//         score: 80,
//         year: 2014
//     },
//     {
//         title: 'Human Error',
//         score: 76,
//         year: 1984
//     },
//     {
//         title: 'Parasite',
//         score:  97,
//         year: 2007
//     },
//     {
//         title: 'Hunting',
//         score:  60,
//         year: 2017
//     }  
// ]
// const oldMovie = movies.filter(movie =>  movie.year < 2014)
// const goodMovie = movies.filter(movie => movie.score > 80)

// //combining map & filter
// const goodTitle = goodMovie.map(movie => movie.title)

// //shorthand //combining map & filter
// const badMovie = movies.filter(movie => movie.score < 80).map(movie => movie.title)

/////////////////////////////////////////

//returns a valid username that is less than 10

// function validUserNames(usernames) {
//     // your code here
//       const validName = usernames.filter(uname => (
//           uname.length < 10
//       ))
//       return validName
//   }
  
// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);

/////////////////////////////////////////


/////////////////////////////////////////
//some and every / boolean
/////////////////////////////////////////

// const examScore = [80, 98, 92, 78, 77, 90, 89, 84, 81, 75]

// //returns only true or false
// const passser = examScore.every(score => score >= 75)
// //output true /if one of them was below 75 the output should be false

// //if there is any score atleast 1 or more that is greater than 75 should return true otherwise false
// examScore.some(score => score >= 75)

/////////////////////////////////////////
// const movies = [
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1965
//     },
//     {
//         title: 'Predator',
//         score: 80,
//         year: 2014
//     },
//     {
//         title: 'Human Error',
//         score: 76,
//         year: 1984
//     },
//     {
//         title: 'Parasite',
//         score:  97,
//         year: 2007
//     },
//     {
//         title: 'Hunting',
//         score:  60,
//         year: 2017
//     }  
// ]

// movies.some( movie => movie.year < 2007)
/////////////////////////////////////////


/////////////////////////////////////////
//reduce
/////////////////////////////////////////

// const numbers = [ 2, 5, 1, 3, 4, .5]

//same idea
// let total = 0;
// for (let num of numbers) {
//     total += num
// }

//can do reduce
// const total = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

//1 + 2 = 3
//3 + 3 = 6
//6 + 4 = 10
//10 + 5 = 15

//output
//15

// const minNum = numbers.reduce((min, num) => {
//     if(num < min) {
//         return num
//     }
//     return min
// })
//return the smallest number 

/////////////////////////////////////////

// const movies = [
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1965
//     },
//     {
//         title: 'Predator',
//         score: 80,
//         year: 2014
//     },
//     {
//         title: 'Human Error',
//         score: 76,
//         year: 1984
//     },
//     {
//         title: 'Parasite',
//         score:  97,
//         year: 2007
//     },
//     {
//         title: 'Hunting',
//         score:  60,
//         year: 2017
//     }  
// ]
// //return the highest rated movie
// const theMovie = movies.reduce((bestMovie, curMovie) => {
//     if(curMovie.score > bestMovie.score) {
//         return curMovie
//     }
//     return bestMovie
// })

/////////////////////////////////////////

// //more examp;e
// const even = [2, 4, 6, 8]
// //we can add another argument 
// const total = even.reduce((sum, num) => sum + num, 90)

/////////////////////////////////////////

/////////////////////////////////////////
//arrow functions & 'this' !!!!!
/////////////////////////////////////////

// const person = {
//     fname: 'Viego',
//     lname: 'Argument',
//     //'this' in arrow function refers to the window object 
//     //the outpull would be 'undefined' 
//     //you should use regular function expression in object
//     fullname: function() { 
//         return `${this.fname} ${this.lname}`   
//     },
//     shoutout: function() {
//         //if you use regular function expression here and 'this' it will refer to the windows object because of setTimeout()
//         //but for regular function you can use the object name
        
//         //but if you use an arrow function this should do the trick
//         setTimeout(() =>  {
//             console.log(this.fullname())
//         }, 2000)
//     }
// }

/////////////////////////////////////////

/////////////////////////////////////////
//default params //-syntax improvements 
/////////////////////////////////////////

//-old way 
// function rollDie(numSides) {
//     if(numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

//-new way // will be greate if you have multiple params
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

//you can't set a default value at the first arguments --logically reason
// you'll get undefined for the second arguments if you expect passing only one argument would do the trick
// function greet(msg = "Hey", person) {
//     console.log(`${msg}, ${person}`)
// }

// function greet(msg, person, punc = "!!!!") {
//     console.log(`${msg}, ${person}`)
// }
/////////////////////////////////////////

/////////////////////////////////////////
//spread
/////////////////////////////////////////

//Math.max(21, 6, 7, 2, 67, 10, 19, 32, 31)
//67

//but if we
// const arrNum = [21, 6, 7, 2, 67, 10, 19, 32, 31]

//Math.max(arrNum)
//NaN
//-it doesnt know what to do we just pass a single array full of numbers its anticipating a separate arguments each one being a number 
//-so we use spread syntax to spread the array

// Math.max(...arrNum)

/////////////////////////////////////////
//-array
// const cat = ['cat1', 'cat2', 'cat3']
// const dog = ['dog1', 'dog2', 'dog3']
// //new array //-the copy of cat and dogs/combining
// const catNdog = [...dog, ...cat]

/////////////////////////////////////////
//-object

// const personA = {
//     fname: 'Ryan',
//     number: 1
// }

// const personB = {
//     lname: 'Rex',
//     number: 2
// }

// //if theres the same property the second argument will win
// const personAB = {...personA, ...personB}

/////////////////////////////////////////

// const personB = {
//     lname: 'Rex',
//     number: 2
// }
// //-adding property
// {...personB, id: 1, fname: ryan}

/////////////////////////////////////////

/////////////////////////////////////////
//rest params //-looks like spread but its not
/////////////////////////////////////////

//-it won't work unless you spread them into an array 
// function sum() {
//     return arguments.reduce((total, toAdd) => {
//         total + toAdd
//     })
// }

//ex
/////////////////////////////////////////
// function sum(...num) {
//     return num.reduce((added, toAdd) => {
//        return added + toAdd
//     })
// }
/////////////////////////////////////////
// function result(gold, silver, ...everyoneElse) {
//     console.log(`GOLD medal goes to ${gold}`)
//     console.log(`SILVER medal goes to ${silver}`)
//     console.log(`And thanks to: ${everyoneElse}`)
// }

// result("hugo", "vinc", "ry", "chirs", "jus")
// // GOLD medal goes to hugo
// SILVER medal goes to vinc
// And thanks to: ry,chirs,jus

/////////////////////////////////////////

/////////////////////////////////////////
//destructuring
/////////////////////////////////////////

//-array
// const scores = [91391, 81232, 78821, 65512, 54432]

// //instead of making this
// // const highScore = scores[0];
// // const secondHighScore = scores[1];

// //do this //-destructuring //-the order here are matter when pulling details
// const [highScore, secondHighScore, ...notIncluded] = scores;
/////////////////////////////////////////

// //-object
// const user = {
//     email: 'harvey@gmail.com',
//     password: 'abc123',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly',
//     city: 'San Francisco',
//     state: 'California' 
// }

// // const firstName = user.firstName;
// // const lastName = user.lastName;
// // const email = user.email;

// //the order doesn't matter like in the array
// const { email, firstName, lastName, bio, city } = user;
// //renaming a property
// // you can put a default value if the property is empty or there's no property
// const { born: bornYear, died: deathYear = "N/A" } = user;
/////////////////////////////////////////

//-param

//simple function
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

//destructuring
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

//destructuring param
// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }
/////////////////////////////////////////

// const movies = [
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1965
//     },
//     {
//         title: 'Predator',
//         score: 80,
//         year: 2014
//     },
//     {
//         title: 'Human Error',
//         score: 76,
//         year: 1984
//     },
//     {
//         title: 'Parasite',
//         score:  97,
//         year: 2007
//     },
//     {
//         title: 'Hunting',
//         score:  60,
//         year: 2017
//     }  
// ]

// movies.filter((movies) => movies.score >= 90)

//other option is to destructure score immediately all the way in using --filter
//movies.filter(({ score } ) => score >= 90)

// const movieList = movies.map((movie) => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

//destructuring
// movies.map(({ title, year, score }) => {
//     return `${title} (${year}) is rated ${score}`
// })