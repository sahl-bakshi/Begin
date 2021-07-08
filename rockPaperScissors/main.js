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

function playRound(player, computer) {
    if (player == rock) {
        if (computer == paper) {
            return 2;
        } else if (computer == scissors) {
            return 1;
        }
    } else if (player == paper) {
        if (computer == rock) {
            return 1; 
        } else if (computer == scissors) {
            return 2;
        }
    } else if (player == scissor) {
        if (computer == rock) {
            return 2;
        } else if (computer == paper) {
            return 1; 
        }
    } else {
        return 3;
    }
}

function game() {
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; +i) {
        let input = prompt("ENTER");
        input = input.toLowerCase;
        if (playRound(input, computerPlay())) {
            ++pScore;
        } else {
            ++cScore;
        }
        ++i;
    }
    if (pScore > cScore) {
        return "WIN"; 
    } else if (pScore < cScore) {
        return "LOSE";
    } else {
        return "TIE";
    }
}