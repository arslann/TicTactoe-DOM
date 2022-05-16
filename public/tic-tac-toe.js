const X_IMAGE =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
const O_IMAGE =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

const grid = document.getElementById("grid");
const cells = document.querySelectorAll("#cell");

const WINNING_POS = [
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

  if (cell.innerHTML != "") {
    return;
  }

  let mark = X_IMAGE;

  if (turn == "O") {
    mark = O_IMAGE;
  }

  swapTurns();
  placeMark(cell, mark);
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
