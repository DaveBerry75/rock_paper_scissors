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


// Function which takes in a case insensitive user input

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice - rock, paper or scissors").toLowerCase();
    
    return humanChoice;

}

getHumanChoice();


// Two new variables to keep scores, and one to keep count of the rounds played

let humanScore = 0;
let computerScore = 0;
let counter = 0;

function playGame() {

    // Function which plays a single round of the game and logs results to the console

function playRound(humanChoice, computerChoice) {

    //  For a draw
    if(humanSelection === computerSelection) {
        
        console.log(`Draw! Both chose: ${humanSelection}`);

    //  Human win
    } else if ((humanSelection === "rock" && computerSelection === "scissors") ||
              (humanSelection === "scissors" && computerSelection === "paper") ||
              (humanSelection === "paper" && computerSelection === "rock")) {

                console.log(`You win! ${humanSelection} beats ${computerSelection}`);

                humanScore++;
    // For a loss
              } else {

                console.log(`You lose! ${computerSelection} beats ${humanSelection}`);

                computerScore++;
                
              }


    // After 5 rounds declare result and scores   
    counter++;
    if(counter === 5) {
        console.log("Game Over");
        console.log(`Your score = ${humanScore}, Computer score = ${computerScore}`);
        if(humanScore === computerScore) {
            console.log("Draw!");
        } else if(humanScore > computerScore) {
            console.log("You Win!!!");
        } else {
            console.log("You lose!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}

// Call function for 5 rounds
playGame();
playGame();
playGame();
playGame();
playGame();



