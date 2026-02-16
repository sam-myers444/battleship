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

    function placeShip(x, y, length, isHorizontal) {
        const coordinates = [];
        const newShip = ship(length);

        for (let i = 0; i < length; i++) {
            let curRow = isHorizontal ? x : x + i;
            let curCol = isHorizontal ? y + i : y;

            board[curRow][curCol] = newShip;
            
            coordinates.push([curRow, curCol]);
        }
        return coordinates;
    }

    return { board, placeShip };
}

let submarine = new ship(5, 0, false, );

