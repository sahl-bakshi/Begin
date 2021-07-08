const rock = "rock";
const paper = "paper";
const scissor = "scissor";

function computerPlay() {
    let between = 3;
    let res = math.floor(math.random() * between);
    if (res == 0) {
        return rock;
    } else if (res == 1) {
        return paper;
    } else if (res == 2) {
       return scissor;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == rock) {
        if (computerSelection == paper) {
            return "You lose! paper beats rock";
        } else if (computerSelection == scissors) {
            return "You win! rock beats scissors";
        }
    } else if (playerSelection == paper) {
        if (computerSelection == rock) {
            return "You win! paper beats rock"; 
        } else if (computerSelection == scissors) {
            return "You lose! scissors beats paper";
        }
    } else if (playerSelection == scissor) {
        if (computerSelection == rock) {
            return "You lose! rock beats scissors";
        } else if (computerSelection == paper) {
            return "You win! scissors beats paper"; 
        }
    } else {
        return "It's a tie"
    }
}

const playerSelection = rock;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));