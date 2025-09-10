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

function playGame() {
    // Function which plays a single round of the game and logs results to the console

function playRound(humanChoice, computerChoice) {
    //  For a draw
    if(humanSelection === computerSelection) {
        
        console.log(`Draw! You chose: ${humanSelection}, computer chose: ${computerSelection}`);

        console.log(`Your score = ${humanScore}, Computer score = ${computerScore}`)
    //  Human win
    } else if ((humanSelection === "rock" && computerSelection === "scissors") ||
              (humanSelection === "scissors" && computerSelection === "paper") ||
              (humanSelection === "paper" && computerSelection === "rock")) {

                console.log(`You win!!! ${humanSelection} beats ${computerSelection}`);

                humanScore++;

                console.log(`Your score = ${humanScore}, Computer score = ${computerScore}`);
    //  Computer win
              } else {

                console.log(`You lose! ${computerSelection} beats ${humanSelection}`);

                computerScore++;

                console.log(`Your score = ${humanScore}, Computer score = ${computerScore}`);
                
              }
        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}

playGame();
playGame();
playGame();
playGame();
playGame();

// Need to keep score and declare a winner at the end


