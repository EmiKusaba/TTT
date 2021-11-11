let originalBoard = [0,1,2,3,4,5,6,7,8];
let player1 = "X";
let player2 = "O";
let count = 0;

//function when button click and mark

//function mark x or o

//win state
function checkWin(record, player) {
  if (
  //horizonal win
  (record[0] === player && record[1] === player && record[2] === player) ||
  (record[3] === player && record[4] === player && record[5] === player) ||
  (record[6] === player && record[7] === player && record[8] === player) ||
  //Diagonal Wins
  (record[0] === player && record[4] === player && record[8] === player) ||
  (record[2] === player && record[4] === player && record[6] === player) ||
  //Vertical Wins
  (record[0] === player && record[3] === player && record[6] === player) ||
  (record[1] === player && record[4] === player && record[7] === player) ||
  (record[2] === player && record[5] === player && record[8] === player)
  ) {
    return true;
  } else {
    return false;
  }
}

//clear button