// GET user choice of rock, paper, or scissors

function getHumanChoice () {
    let humanInput = prompt("Please choose rock, paper, or scissors.");
    let humanChoice = humanInput.toUpperCase();

    if (humanChoice === "ROCK" || humanChoice === "PAPER" || humanChoice === "SCISSORS") {
        return humanChoice;
    } else {
        // humanChoice = "an invalid option";
        // return humanChoice;
        alert("Your choice is not a valid option. Please try again.");
        console.log(getHumanChoice());
    }
}

console.log("You have chosen " + getHumanChoice() + "!");

function getComputerChoice () {
    if (choiceValid == true) {

        function getRandom() {
            const minValue = Math.ceil(1);
            const maxValue = Math.floor(3);
            return Math.floor(Math.random() * (maxValue - minValue +1) + minValue);
        }

        if (getRandom() === 1) {
            result = "ROCK";
        } else if (getRandom() === 2) {
            result = "PAPER";
        } else {
            // test === 3
            result = "SCISSORS";
        }

        return "BeepBoop! RPS Bot has chosen " + result + "!";
    } else {
        return result = "RPS Bot won't choose until you have!";
    }
}

// SHOW user computer choice
// Will need to be changed when update to GUI. 

console.log(getComputerChoice());

let compChoice = result;

// CALCULATE result based on humanChoice and compChoice

function playRound() {
    let win = "You win!";
    let loss = "You lose!";
    let tie = "It's a tie!";

    if (humanChoice === "ROCK" && compChoice === "ROCK") {
        result = tie;
    } else if (humanChoice === "ROCK" && compChoice === "PAPER") {
        result = loss;
    } else if (humanChoice === "ROCK" && compChoice === "SCISSORS") {
        result = win;
    } else if (humanChoice === "PAPER" && compChoice === "ROCK") {
        result = win;
    } else if (humanChoice === "PAPER" && compChoice === "PAPER") {
        result = tie;
    } else if (humanChoice === "PAPER" && compChoice === "SCISSORS") {
        result = loss;
    } else if (humanChoice === "SCISSORS" && compChoice === "ROCK") {
        result = loss;
    } else if (humanChoice === "SCISSORS" && compChoice === "PAPER") {
        result = win;
    } else if (humanChoice === "SCISSORS" && compChoice === "SCISSORS") {
        result = tie;
    } else {
        result = "";
    }

    return result;
}

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

// SHOW result
// This will need to be replaced once the game moves beyond the console

if (choiceValid == true) {
console.log (playRound());
} else {}

// GET play again?

console.log("If you would like to try again, please refresh the page.");