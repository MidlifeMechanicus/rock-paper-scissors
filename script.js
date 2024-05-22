let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;
let gameNumber=0;
let winner;

const humanChoiceDisplay = document.querySelector("#humanChoiceDisplay");

const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");

const resultDisplay = document.querySelector("#resultDisplay");

const humanScoreDisplay = document.querySelector("#humanScoreDisplay");

const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

const gameNumberDisplay = document.querySelector("#gameNumberDisplay");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    humanChoice = "ROCK";
    humanChoiceDisplay.textContent = humanChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    console.log(playRound(humanChoice, computerChoice));
    resultDisplay.textContent = result;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    gameNumberDisplay.textContent = gameNumber;

    getMatchResult();
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    humanChoice = "PAPER";
    humanChoiceDisplay.textContent = humanChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    console.log(playRound(humanChoice, computerChoice));
    resultDisplay.textContent = result;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    gameNumberDisplay.textContent = gameNumber;

    getMatchResult();
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    humanChoice = "SCISSORS";
    humanChoiceDisplay.textContent = humanChoice;
    computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    console.log(playRound(humanChoice, computerChoice));
    resultDisplay.textContent = result;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    gameNumberDisplay.textContent = gameNumber;

    getMatchResult();
})
    
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
        gameNumber +=1;
        result = tie;
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore +=1;
        gameNumber +=1;
        result = loss;
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore +=1;
        gameNumber +=1;
        result = win;
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        humanScore +=1;
        gameNumber +=1;
        result = win;
    } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
        gameNumber +=1;
        result = tie;
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore +=1;
        gameNumber +=1;
        result = loss;
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        computerScore +=1;
        gameNumber +=1;
        result = loss;
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore +=1;
        gameNumber +=1;
        result = win;
    } else if (humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        gameNumber +=1;
        result = tie;
    } else {
        result = "?";
    }

    return result;
}

function getMatchResult() {
    let currentGameNumber = gameNumber
    if (currentGameNumber >= 5) {
        if (humanScore > computerScore) {
            winner = "You win the match!"
        } else if (humanScore < computerScore) {
            winner = "RPS Bot wins the match!"
        } else {
            winner = "It's a tied match!"
        }
        alert(winner);
        humanScore = 0;
        computerScore = 0;
        gameNumber=0;
    } else {};
}

        // do {
        // const humanSelection = humanChoice;
        // console.log("You have chosen " + humanSelection + "!");
    // 
        // const computerSelection = getComputerChoice();
        // console.log("BeepBoop! RPS Bot has chosen " + computerSelection + "!");
    // 
        // console.log (playRound(humanSelection, computerSelection));
    // 
        // console.log("The score is: You " + humanScore + ", RPS Bot " + computerScore +"!");
        // }
        // while (
            // gameNumber < 1
        // )
    // 
        // if (humanScore > computerScore) {
            // winner = "You win the game!"
        // } else if (humanScore < computerScore) {
            // winner = "RPS Bot wins the game!"
        // } else {
            // winner = "It's a tie game!"
        // }
    
        // return "The final score is: You " + humanScore + ", RPS Bot " + computerScore +"! " + winner;
    
    // }
    
    // console.log(playGame());