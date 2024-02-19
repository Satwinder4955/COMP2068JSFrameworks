const readline = require('readline');

// Function to generate computer's selection
function computerSelect() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "PAPER";
    } else if (randomNumber < 0.67) {
        return "SCISSORS";
    } else {
        return "ROCK";
    }
}

// Function to determine the winner
function Winner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return "User Wins";
    } else {
        return "Computer Wins";
    }
}

// Creating readline interface
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompting the user for input
read.question('Enter your selection (ROCK, PAPER, or SCISSORS): ', userSelection => {
    const userSelection = userSelection.toUpperCase(); // Converting user input to uppercase
    const computerSelection = computerSelect();
    
    console.log("User Selection:", userSelection);
    console.log("Computer Selection:", computerSelection);
    
    const outcome = Winner(userSelection, computerSelection);
    console.log("Outcome:", outcome);
    
    read.close();
});