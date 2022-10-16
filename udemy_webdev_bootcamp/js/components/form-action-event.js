"use strict";

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets') ;   

tweetForm.addEventListener('submit', (e) => {   
    e.preventDefault();     
    console.log('submitted');
    const input = document.querySelectorAll('input');
    //instead of using this 
    // const username = document.querySelector('#username');
    // const comment = document.querySelector('#comment');
    // appendLi.innerText = `${username.value} says: ${comment.value}`;

    //use this: it is actually already an 'elements' inside the form 
    const usernameInput = tweetForm.elements.username;
    const commentInput = tweetForm.elements.comment;
   
    addTweet(usernameInput.value, commentInput.value);

    for(let i of input) {
        i.value = '';
    }
})


const addTweet = (username, comment) => {
    //must inside the function to create multiple child
    const newTweet = document.createElement('LI');  
    const boldTag = document.createElement('b');

    boldTag.append(username)
    newTweet.append(boldTag)

    newTweet.append(`: ${comment}`)
    tweetContainer.append(newTweet);
}