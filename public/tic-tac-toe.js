const X_IMAGE =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const O_IMAGE =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

const grid = document.getElementById("grid");
const cells = document.querySelectorAll("#cell");

const WINNING_COMBS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = "X";

function startGame() {
  cells.forEach((cell) => {
    cell.innerHTML = "";

    cell.removeEventListener("click", clickEvent);
    cell.addEventListener("click", clickEvent, { once: true });
  });
}

function clickEvent(e) {
  const cell = e.target;
  let mark = X_IMAGE;

  if (cell.innerHTML != "") {
    return;
  }

  if (turn == "O") {
    mark = O_IMAGE;
  }

  placeMark(cell, mark);

  if (checkWin(mark)) {
    alert("game over");
    console.log("game over");
  } else {
    swapTurns();
  }
}

function checkWin(mark) {
  const img = `<img src="${mark}" alt="">`;

  for (let i = 0; i < WINNING_COMBS.length; i++) {
    let combination = WINNING_COMBS[i];

    const out = combination.every((index) => {
      return cells[index].innerHTML == img;
    });
    if (out) return true;
  }

  return false;
}

function swapTurns() {
  if (turn == "O") {
    turn = "X";
  } else {
    turn = "O";
  }
}

function placeMark(cell, mark) {
  const img = `<img src="${mark}" alt="">`;

  cell.innerHTML = img;
}

startGame();
