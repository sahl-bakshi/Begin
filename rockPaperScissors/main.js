const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let between = 3;
    let options = [ROCK, PAPER, SCISSOR];
    return options[math.floor(math.random() * between)];
}

function playRound(player, computer) {
    if (player == computer) {
        return 0;
    } else if (player == ROCK) {
        if (computer == PAPER) {
            return 1;
        } else if (computer == SCISSOR) {
            return 2;
        }
    } else if (player == PAPER) {
        if (computer == ROCK) {
            return 2;
        } else if (computer == SCISSOR) {
            return 1;
        }
    } else if (player == SCISSOR) {
        if (computer == ROCK) {
            return 1;
        } else if (computer == PAPER) {
            return 2;
        }
    }
}

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener('click', function() {
    let temp = playRound(ROCK, computerPlay());
    output(temp);
});

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener('click', function() {
    let temp = playRound(PAPER, computerPlay());
    output(temp);
});

const scissorButton = document.querySelector(".scissorButton");
scissorButton.addEventListener('click', function() {
    let temp = playRound(SCISSOR, computerPlay());
    output(temp);
});

function disableButtons() {
    document.querySelector(".rockButton").disabled = true;
    document.querySelector(".paperButton").disabled = true;
    document.querySelector(".scissorButton").disabled = true;
}   // why does the class .same not work?


function output(num) {
    const body = document.body;

    const head = document.createElement("h4");
    body.append(head);
    head.classList.add("msg");  

    document.querySelector("h2").innerHTML = playerScore + " " + computerScore;

    if (playerScore >= 5) {
        head.textContent = "GAME OVER! YOU WIN";
        disableButtons();
    } else if (computerScore >= 5) {
        head.textContent = "GAME OVER! YOU LOSE";
        disableButtons();
    }

    if (num == 2) {
        ++playerScore;
    } else if (num == 1) {
        ++computerScore
    }
}