const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
let playerScore = 0;
let computerScore = 0;

// 1

function computerPlay() {
    let between = 3;
    let options = [ROCK, PAPER, SCISSOR];
    return options[math.floor(math.random() * between)];
}

// 2

function playRound(player, computer) {
    let num;
    if (player == computer) {
        num = 0;
    } else if (player == ROCK) {
        if (computer == PAPER) {
            num = 1;
        } else if (computer == SCISSOR) {
            num = 2;
        }
    } else if (player == PAPER) {
        if (computer == ROCK) {
            num = 2;
        } else if (computer == SCISSOR) {
            num = 1;
        }
    } else if (player == SCISSOR) {
        if (computer == ROCK) {
            num = 1;
        } else if (computer == PAPER) {
            num = 2;
        }
    }
    return output(num, player, computer);
}

// 3

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener('click', function() {
    playRound(ROCK, computerPlay());
});

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener('click', function() {
    playRound(PAPER, computerPlay());
});

const scissorButton = document.querySelector(".scissorButton");
scissorButton.addEventListener('click', function() {
    playRound(SCISSOR, computerPlay());
});

// 4

function disableButtons() {
    document.querySelector(".rockButton").disabled = true;
    document.querySelector(".paperButton").disabled = true;
    document.querySelector(".scissorButton").disabled = true;
}  

// 5

function output(num, player, computer) {
    
    if (num == 2) {
        ++playerScore;
    } else if (num == 1) {
        ++computerScore
    }
    document.querySelector("h2").innerHTML = playerScore + " " + computerScore;
    
    if (playerScore >= 5) {
        disableButtons();
    } else if (computerScore >= 5) {
        disableButtons();
    } 
    document.querySelector("p").innerHTML = player + " " + computer;
}