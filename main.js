// Function which generates a random number and converts to the defined string

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";

    if (randomNum === 1) {
        computerChoice = "rock";
    } else if (randomNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;

}

getComputerChoice();


// Function which takes in a user input

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice - rock, paper or scissors").toLowerCase();
    
    return humanChoice;

}

getHumanChoice();


// Create two new variables to keep scores, and give initial values

let humanScore = 0;
let computerScore = 0;


// Function which plays a single round of the game and logs results to the console

function playRound(humanChoice, computerChoice) {

    if(humanSelection === computerSelection) {
        
        console.log(`Draw! You chose: ${humanSelection}, computer chose: ${computerSelection}`);

    } else if ((humanSelection === "rock" && computerSelection === "scissors") ||
              (humanSelection === "scissors" && computerSelection === "paper") ||
              (humanSelection === "paper" && computerSelection === "rock")) {

                console.log(`You win!!! ${humanSelection} beats ${computerSelection}`);

              } else {

                console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
                
              }
        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);






