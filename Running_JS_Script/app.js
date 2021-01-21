
let max = parseInt(prompt("Enter a max num"));
while (!max) {
    max = parseInt(prompt("Enter a valid number!"));
}

const randomInt = Math.floor(Math.random() * max) + 1;

let numOfGuess = 1
let guess = parseInt(prompt("Enter a guess"));  

while(numOfGuess < 5){
    if (guess === randomInt) {
       console.log("you got it!");
       break;
   } else {
       if (guess > randomInt){
           guess = parseInt(prompt(`Try lower. You have ${5 - numOfGuess} chances left.`));
        } else {
            guess = parseInt(prompt(`Try higher. You have ${5 - numOfGuess} chances left.`));
        }
       numOfGuess++;
   }
}

console.log(`Sorry, the number was actually ${randomInt}`)

 



