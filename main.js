let player1 = "X";
let player2 = "O";
let currentPlayer = player1;


const play = (e) => {
  // currentElement = e;
  // if (isEmpty(e)) {
  //   e.innerHTML = pions[currentPlayer];
  //   currentPlayer = (currentPlayer == 1) ? 2 : 1;
  //   if (checkWin(e) != "") {
  //     endGame(checkWhoWin(e));
  //   }
  // }

  e.innerHTML = currentPlayer

  if(checkWin(currentPlayer)) {
    window.alert(`Player ${currentPlayer} won!`)
  } else if(checkDraw()) {
    window.alert("It's a draw!")
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1
}

//win state
const checkWin = (player) => {
  record = []
  for (let i = 0; i < 9; ++i) {
    const e = document.getElementById(String(i))
    record.push(e.innerHTML)
  }

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
  for (let i = 0; i < 9; ++i) {
    const e = document.getElementById(String(i))
    const value = e.innerHTML
    if(value === "") {
      return false;
    }
  }
  return true;
}