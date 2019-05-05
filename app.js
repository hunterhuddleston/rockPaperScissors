const userScore = 0;
const computerScore = 0;

let playerSelection = 'ROCK'
playerSelection = playerSelection.toLowerCase();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function computerPlay(playerSelection) {
    const computerSelection = getComputerChoice();
    switch (playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("User wins.");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("User loses.")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        console.log("It's a tie.")
        break;
    }
}

computerPlay(playerSelection);