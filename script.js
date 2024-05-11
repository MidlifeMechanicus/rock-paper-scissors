// GET user choice of rock, paper, or scissors

let userInput = prompt("Please choose rock, paper, or scissors.");

let userChoice = userInput.toUpperCase();

// CHECK input is valid

if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
    userChoiceConfirm = "You have chosen " + userChoice + "!"
    choiceValid = true;
} else {
    userChoiceConfirm = userChoice + " is not a valid choice!"
    choiceValid = false;
}

// SHOW response to user

console.log(userChoiceConfirm);

// GET random computer choice of rock, paper or scissors


function getCompChoice () {
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

console.log(getCompChoice());

let compChoice = result;

// CALCULATE result based on userChoice and compChoice

function compete() {
    let win = "You win!";
    let loss = "You lose!";
    let tie = "It's a tie!";

    if (userChoice === "ROCK" && compChoice === "ROCK") {
        result = tie;
    } else if (userChoice === "ROCK" && compChoice === "PAPER") {
        result = loss;
    } else if (userChoice === "ROCK" && compChoice === "SCISSORS") {
        result = win;
    } else if (userChoice === "PAPER" && compChoice === "ROCK") {
        result = win;
    } else if (userChoice === "PAPER" && compChoice === "PAPER") {
        result = tie;
    } else if (userChoice === "PAPER" && compChoice === "SCISSORS") {
        result = loss;
    } else if (userChoice === "SCISSORS" && compChoice === "ROCK") {
        result = loss;
    } else if (userChoice === "SCISSORS" && compChoice === "PAPER") {
        result = win;
    } else if (userChoice === "SCISSORS" && compChoice === "SCISSORS") {
        result = tie;
    } else {
        result = "";
    }

    return result;
}

// SHOW result
// This will need to be replaced once the game moves beyond the console

if (choiceValid == true) {
console.log (compete());
} else {}

// GET play again?

console.log("If you would like to try again, please refresh the page.");