
function bestMove() {
    let bestScores = -1000;
    let move;
    let score = null;



    for (let i = 0; i < 9; i++) {

        if (cells[i].innerText == '') {
            cells[i].innerText = player2;
            score = minimax(0, false, -1000, 1000);
            cells[i].innerText = '';
            if (score > bestScores) {
                bestScores = score;
                move = cells[i].id;
            }
        }
    }
    document.querySelector(`#${move}`).innerText = player2;
    document.querySelector(`#${move}`).classList.toggle('nought');
    playersRound = false;
    checkForWin(player2);
}


function isSpotsEmpty() {
    for (let c in cells) {
        if (cells[c].innerText == 'X' || cells[c].innerText == 'O') {
            return true;
        } else {
            return false;
        }
    }
}
function checkForWinner() {

    let winner = '';
    let openSpots = 0;
    const board = document.querySelectorAll('.cell');
    if (isSpotsEmpty()) {
        //horizontal wins
        if (board[0].innerText == board[1].innerText && board[1].innerText == board[2].innerText) {

            winner = board[0].innerText;
        }
        else if (board[3].innerText == board[4].innerText && board[4].innerText == board[5].innerText) {
            winner = board[3].innerText;
        }
        else if (board[6].innerText == board[7].innerText && board[7].innerText == board[8].innerText) {
            winner = board[6].innerText;
        }
        //vertical wins
        else if (board[0].innerText == board[3].innerText && board[3].innerText == board[6].innerText) {
            winner = board[0].innerText;
        }
        else if (board[1].innerText == board[4].innerText && board[4].innerText == board[7].innerText) {
            winner = board[1].innerText;
        }
        else if (board[2].innerText == board[5].innerText && board[5].innerText == board[8].innerText) {
            winner = board[2].innerText;
        }
        //diagonal wins
        else if (board[0].innerText == board[4].innerText && board[4].innerText == board[8].innerText) {
            winner = board[0].innerText;
        }
        else if (board[2].innerText == board[4].innerText && board[4].innerText == board[6].innerText) {
            winner = board[2].innerText;
        }
    }



    //check for Tie
    for (let cell in board) {
        if (board[cell].innerText) {
            openSpots++;
        }
    }

    if (winner == '' && openSpots == 9) {
        return 'Tie';

    } else if (winner != '') {
        return winner;
    }
    return winner;
}

let scores = {
    X: -10,
    O: 10,
    Tie: 0
};
function minimax(depth, isMaximizing, alpha, beta) {
    const board = document.querySelectorAll('.cell');
    let result = checkForWinner();
    if (result != '') {
        return scores[result];
    }

    if (isMaximizing == true) {
        let bestScore = -1000;
        for (let i = 0; i < 9; i++) {
            if (board[i].innerText == '') {
                board[i].innerText = player2;
                let score = minimax(depth + 1, false, alpha, beta);
                board[i].innerText = '';
                bestScore = Math.max(score, bestScore);
                alpha = Math.max(alpha, bestScore);

                if (beta <= alpha)
                    break;
            }

        }

        return bestScore;

    }
    else {
        let bestScore = 1000;
        for (let i = 0; i < 9; i++) {
            if (board[i].innerText == '') {

                board[i].innerText = player1;
                let score = minimax(depth + 1, true, alpha, beta);
                board[i].innerText = '';
                bestScore = Math.min(score, bestScore);
                beta = Math.min(beta, bestScore);

                if (beta <= alpha)
                    break;
            }

        }

        return bestScore;
    }

}