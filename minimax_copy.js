// function checkForWinner() {

//     let winner = null;
//     let openSpots = 0;
//     const board = document.querySelectorAll('.cell');

//     //horizontal wins check
//     for (let i = 0; i < 3; i++) {

//         if (board[winConditions[i][0] - 1].innerText == 'X' || board[winConditions[i][0] - 1].innerText == 'O' && board[winConditions[i][0] - 1].innerText == board[winConditions[i][1] - 1].innerText
//             && board[winConditions[i][1] - 1].innerText == board[winConditions[i][2] - 1].innerText) {
//             winner = board[winConditions[i][0]].innerText;
//         }
//     }
//     //vertical wins check
//     for (let i = 3; i < 5; i++) {

//         if (board[winConditions[i][0] - 1].innerText == 'X' || board[winConditions[i][0] - 1].innerText == 'O' && board[winConditions[i][0] - 1].innerText == board[winConditions[i][1] - 1].innerText
//             && board[winConditions[i][1] - 1].innerText == board[winConditions[i][2] - 1].innerText) {
//             winner = board[winConditions[i][0] - 1].innerText;

//         }
//     }

//     //diagonal wins check
//     for (let i = 6; i <= 7; i++) {
//         if (board[winConditions[i][0] - 1].innerText == 'X' || board[winConditions[i][0] - 1].innerText == 'O' && board[winConditions[i][0] - 1].innerText == board[winConditions[i][1] - 1].innerText
//             && board[winConditions[i][1] - 1].innerText == board[winConditions[i][2] - 1].innerText) {
//             winner = board[winConditions[i][0] - 1].innerText;

//         }
//     }

//     //check for Tie
//     for (cell in board) {
//         if (board[cell].innerText) {
//             openSpots++;
//         }
//     }

//     if (winner == null && openSpots == 0) {

//         return 'Tie';

//     } else {

//         return winner;
//     }
// }