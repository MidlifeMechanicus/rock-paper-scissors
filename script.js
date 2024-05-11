// GET user choice of rock, paper, or scissors

let userChoice = "SCISSORS";

// CHECK choice is valid
    // IF choice not valid
        // SHOW user invalid choice
        // THEN return to start
    // ELSE...
        // SHOW user choice
// GET random computer choice of rock, paper or scissors
function getRandom() {
    const minValue = Math.ceil(1);
    const maxValue = Math.floor(3);
    return Math.floor(Math.random() * (maxValue - minValue +1) + minValue);
}

console.log(getRandom());

let compChoice = "SCISSORS";

// SHOW user computer choice

console.log(compChoice);

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
    } else {
        // userChoice === "SCISSORS"  && compChoice === "SCISSORS"
        result = tie;
    }

    return result;
}

// SHOW result
// This will need to be replaced once the game moves beyond the console

console.log (compete());

// GET play again?