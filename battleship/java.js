let attempts = [];
let boardHits = [];
let fleet = [];

function ship(length) {
    return {
        length,
        hits: 0,
        isSunk: false,
        hit() {
            this.hits++;
            if (this.hits === this.length) this.isSunk = true;
        },
    
    };
 }


function gameboard() {
  let boardSize = 10;
  let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

  function isGameOver() {
    return fleet.length > 0 && fleet.every(s => s.isSunk === true);
  }

  function placeShip(x, y, length, isHorizontal) {
    const coordinates = [];
    const newShip = ship(length);

    for (let i = 0; i < length; i++) {
      let curRow = isHorizontal ? x : x + i;
      let curCol = isHorizontal ? y + i : y;
      board[curRow][curCol] = newShip;
      coordinates.push([curRow, curCol]);
    }

    fleet.push(newShip);
    return coordinates;
  }

  function receiveAttack(x, y) {
    const attackPoint = board[x][y];

    if (attackPoint !== null && attackPoint !== "hit" && attackPoint !== "miss") {
      attackPoint.hit();           // apply hit to the ship
      board[x][y] = "hit";
      boardHits.push([x, y]);

      if (isGameOver()) console.log("game is over");
      return "hit";
    }

    board[x][y] = "miss";
    attempts.push([x, y]);
    return "miss";
  }

  return { board, placeShip, receiveAttack, isGameOver };
};

const myBoard = gameboard();
myBoard.placeShip(0, 0, 3, true);
console.table(myBoard.board);





