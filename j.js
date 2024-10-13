
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
        changeScore(1);
    } else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
        changeScore(-1);
    }
}

function changeScore(result) {
    if (result == 1) {
        humanScore += 1;
    } else if (result == -1) {
        computerScore += 1;
    }

    if (humanScore == 5) {
        winner.textContent = "Human has won the game!!";
    } else if (computerScore == 5) {
        winner.textContent = "Computer has won the game!!";
    }
    score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}


let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});