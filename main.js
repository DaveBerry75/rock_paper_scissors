// Create a function called getComputerChoice and use math.random() and Math.floor to get a random integer from 1 - 3
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
// Assign rock, paper and scissors to 1, 2 and 3 respectively
    if (randomNum === 1) {
        console.log("rock");
    } else if (randomNum === 2) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

getComputerChoice();

// Create a function called getHumanChoice and make user input case-insensitive
function getHumanChoice() {
    let text = prompt("Enter your choice - rock, paper or scissors").toLowerCase();
//  Return a valid choice dependant upon what the user inputs
    if (text == "rock") {
        console.log(text);
    } else if (text == "paper") {
        console.log(text);
    } else if (text == "scissors") {
        console.log(text);
    }
}

getHumanChoice();

// Create two new variables to keep scores, and give initial values

let humanScore = 0;
let computerScore = 0;







