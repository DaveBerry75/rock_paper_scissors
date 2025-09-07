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

// Create a function called getHumanChoice
function getHumanChoice() {
    let text = prompt("Enter your choice - rock, paper or scissors");

    
}

getHumanChoice();

//  Return a valid choice dependant upon what the user inputs

//  Test desired output is returned using console.log





