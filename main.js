let originalBoard = [0,1,2,3,4,5,6,7,8];
let player1 = "X";
let player2 = "O";
let pions = ["", "X", "O"];
let count = 0;
let currentPlayer = 1;


const play = (e) => {
  currentElement = e;
  if (isEmpty(e)) {
    e.innerHTML = pions[currentPlayer];
    currentPlayer = (currentPlayer == 1) ? 2 : 1;
    if (checkWin(e) != "") {
      endGame(checkWhoWin(e));
    }
  }
}
//function mark x or o
const addMarker = () => {
  const currentMarker = document.getElementsByTagName("button").value
}
//win state
const checkWin = (record, player) => {
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
//draw state
const checkDraw = () => {
  if (count === 9){
    draw();
  }
}
//check win
 const checkWorWin = () => {
  if(checkWin()===true) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}
//clear button