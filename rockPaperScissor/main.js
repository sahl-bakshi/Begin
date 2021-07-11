// constansts
const OPTIONS = ["rock", "paper", "scissor"];

// variables
let playerScore = 0;
let computerScore = 0;

// 1 

function computerPlay() {
    let between = 3;
    return Math.floor(Math.random() * between);
}

// 2

function playRound(player, computer) {
    let num;
    if (player == computer) {
        num = 3;
    } else if ((player == 0 && computer == 2) || player == computer+1) {
        num = 2;
    } else {
        num = 1;
    }
    return output(num, player, computer);
}

// 3 buttons

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener('click', function() {
    playRound(0, computerPlay());
});

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener('click', function() {
    playRound(1, computerPlay());
});

const scissorButton = document.querySelector(".scissorButton");
scissorButton.addEventListener('click', function() {
    playRound(2, computerPlay());
});

// 4

function output(num, player, computer) {
    if (num == 2) {
        ++playerScore;
    } else if (num == 1) {
        ++computerScore
    }
    const score = document.querySelector(".score");
    score.innerHTML = playerScore + " " + computerScore;
    
    if (playerScore >= 5 || computerScore >= 5) {
        disableButtons();
        reload();
    }
    const track = document.querySelector(".track");
    track.innerHTML = OPTIONS[player] + " " + OPTIONS[computer];
}

// 5

function disableButtons() {
    document.querySelector(".rockButton").disabled = true;
    document.querySelector(".paperButton").disabled = true;
    document.querySelector(".scissorButton").disabled = true;
}

// 6

function reload() {
    const div = document.createElement("div");
    document.body.append(div);
    div.classList.add("position");
    
    const btn = document.createElement("button");
    div.appendChild(btn);
    btn.classList.add("restart");
    btn.innerHTML = "restart";
    btn.addEventListener('click', function() {
        window.location.reload();
    }); 
}