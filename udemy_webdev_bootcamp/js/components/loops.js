"use strict";
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