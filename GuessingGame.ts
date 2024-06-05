//Rameen Rashid
//3-June-2024

/*2. Guessing Game (Using while loop )
Objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.
Steps to Follow:
1. Set a maximum value: Create a variable to store the maximum value for the number
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a
random number between 1 and the maximum value. Log this value to the console for
development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
correct guess is made.
6. Check the user's guess: Inside the loop, check if the current guess matches the random
number. Provide feedback if the guess is too high or too low.*/

console.log("\n \t \t ***Guessing Game*** \n");

let maxValue = 10;
let randomNumber = Math.floor(Math.random()*maxValue+1);
console.log("Random Number: ",randomNumber);

let guessStatus : boolean = false ;
let guessNumber : number[] = [7,3,8,1,3,9,4,5,6,5];

let i=0;
while(!guessStatus && i<guessNumber.length){
    let currentGuess = guessNumber[i];
    if(currentGuess === randomNumber){
        guessStatus = true ;
        console.log("Congratulations!, You guessed correct number.")
    }
    else if(currentGuess < randomNumber){
        console.log("Sorry, your guess is too low.")
    }
    else if(currentGuess > randomNumber){
        console.log("Sorry, your guess is too high.")
    }
    i++;
}




