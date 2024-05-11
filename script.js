// GET user choice of rock, paper, or scissors
// CHECK choice is valid
    // IF choice not valid
        // SHOW user invalid choice
        // THEN return to start
    // ELSE...
        // SHOW user choice
// GET random computer choice of rock, paper or scissors
// SHOW user computer choice
let userChoice = "ROCK";
let compChoice = "PAPER";

console.log (compChoice);
    // IF user choice rock
        // AND computer choice rock
            // THEN result is tie
        // AND computer choice paper
            // THEN result is computer win
        // AND computer choice scissors
            // THEN result is user win
    // IF ELSE user choice paper
        // AND computer choice rock
            // THEN result is user win
        // AND computer choice paper
            // THEN result is tie
        // AND computer choice scissors
            // THEN result is computer win
    // ELSE user choice scissors
        // AND computer choice rock
            // THEN result computer win
        // AND computer choice paper
            // THEN result is user win
        // AND computer choice scissors
            // THEN result is tie
// SHOW result
// SHOW message
    // IF result is tie
        // THEN message is tie
    // ELSE IF result is win
        // THEN message is congratulations
    // ELSE result is loss
        // THEN message is encouragement
// GET play again?