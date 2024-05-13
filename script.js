function getHumanChoice () {
    let humanInput = prompt("Please choose rock, paper, or scissors.");
    let humanChoice = humanInput.toUpperCase();

    if (humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS") {
        return humanChoice;
    } else {
        // humanChoice = "an invalid option";
        // return humanChoice;
        alert("Your choice is not a valid option. Please try again.");
        getHumanChoice();
    }
}

function getComputerChoice () {
    
    function getRandom() {
        const minValue = Math.ceil(1);
        const maxValue = Math.floor(3);
        return Math.floor(Math.random() * (maxValue - minValue +1) + minValue);
    }
    
    if (getRandom() == 1) {
        computerChoice = "ROCK";
    } else if (getRandom() == 2) {
        computerChoice = "PAPER";
    } else {
        // test == 3
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    let win = "You win!";
    let loss = "You lose!";
    let tie = "It's a tie!";

    if (humanChoice == "ROCK" && computerChoice == "ROCK") {
        result = tie;
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        result = loss;
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        result = win;
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        result = win;
    } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
        result = tie;
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        result = loss;
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        result = loss;
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        result = win;
    } else if (humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        result = tie;
    } else {
        result = "?";
    }

    return result;
}

const humanSelection = getHumanChoice();
console.log("You have chosen " + humanSelection + "!");

const computerSelection = getComputerChoice();
console.log("BeepBoop! RPS Bot has chosen " + computerSelection + "!");

console.log (playRound(humanSelection, computerSelection));

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);


// GET play again?

console.log("If you would like to try again, please refresh the page.");