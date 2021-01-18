let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let distance1 = Math.abs(target - currentHumanGuess);
    let distance2 = Math.abs(target - computerGuess);
    if (distance1 <= distance2) {
        return true;
    } else {
        return false;
    }
}
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}