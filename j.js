function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "rock";
    } else if (rand == 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors? ");
    return choice;
}


function playRound(humanChoice, computerChoice) {
    console.log(`Computer went ${computerChoice}!!!`)
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!!`);
        return 1;
    } else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!!`);
        return -1
    } else {
        console.log(`You tied! ${humanChoice} ties ${computerChoice}`);
        return 0;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i += 1) {
        console.log(`Round ${i}!!!`);
        game = playRound(getHumanChoice().toLowerCase(), getComputerChoice());
        if (game == 1) {
            humanScore += 1;
        } else if (game == -1) {
            computerScore += 1;
        }
        console.log(`You: ${humanScore} - Computer: ${computerScore}`);
        console.log();
    }
    console.log(`FINAL SCORE\nHUMAN: ${humanScore}\nCOMPUTER: ${computerScore}`);
}

playGame();
