const cells = document.querySelectorAll('.board li');
const currentPlayerDisplay = document.querySelector('.current-player');
const resetButton = document.querySelector('.reset-button');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;

    if (!gameOver && cell.textContent === '') {
        cell.textContent = currentPlayer;
        checkWin();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentPlayerDisplay.textContent = currentPlayer;
}

function checkWin() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            currentPlayerDisplay.textContent = `Player ${currentPlayer} Wins!`;
            break;
        }
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('win');
    });
    currentPlayer = 'X';
    currentPlayerDisplay.textContent = currentPlayer;
    gameOver = false;
}

currentPlayerDisplay.textContent = currentPlayer;
