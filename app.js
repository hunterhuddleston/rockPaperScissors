let userScore = 0;
let computerScore = 0;

let playerSelection = 'Rock'
playerSelection = playerSelection.toLowerCase();

let computerSelection = computerPlay();

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "rockscissors":
            return "You win! Rock beats scissors."
            break;
        case "paperrock":
            return 'You win! Paper beats rock.';
            break;
        case "scissorspaper":
            return "You win! Scissors beats paper.";
            break;
        case "rockpaper":
            return "You lose. Paper beats rock.";
            break;
        case "paperscissors":
            return 'You lose. Scissors beats paper.';
            break;
        case "scissorsrock":
            return "You lose. Rock beats scissors.";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        return "It's a draw."
        break;
    }
}

console.log(playRound(playerSelection, computerSelection));