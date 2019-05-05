const userScore = 0;
const computerScore = 0;

let playerSelection = 'PAPer'
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
            console.log("You win! Rock beats scissors.")
            break;
        case "paperrock":
            console.log('You win! Paper beats rock.');
            break;
        case "scissorspaper":
            console.log("You win! Scissors beats paper.");
            break;
        case "rockpaper":
            console.log("You lose. Paper beats rock.");
            break;
        case "paperscissors":
            console.log('You lose. Scissors beats paper.');
            break;
        case "scissorsrock":
            console.log("You lose. Rock beats scissors.");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        console.log("It's a draw.")
        break;
    }
}

computerPlay(playerSelection);