// "use strict";
// const toDo = [
//     "Buy egg",
//     "Clean room",
//     "Wash dishes"
// ]

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
