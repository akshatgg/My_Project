document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const gameInfo = document.querySelector('.gameinfo');
    const resetButton = document.getElementById('reset');

    let currentPlayer = 'X';
    let gameOver = false;

    function checkWin() {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
                return boxes[a].textContent;
            }
        }

        return null;
    }

    function handleClick(event) {
        const box = event.target;
        if (!box.textContent && !gameOver) {
            box.textContent = currentPlayer;
            const winner = checkWin();

            if (winner) {
                gameInfo.textContent = `${winner} wins!`;
                gameOver = true;
            } else if ([...boxes].every(box => box.textContent !== '')) {
                gameInfo.textContent = "It's a draw!";
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                gameInfo.textContent = `Turn for ${currentPlayer}`;
            }
        }
    }

    function resetGame() {
        boxes.forEach(box => {
            box.textContent = '';
        });
        currentPlayer = 'X';
        gameOver = false;
        gameInfo.textContent = `Turn for ${currentPlayer}`;
    }

    boxes.forEach(box => {
        box.addEventListener('click', handleClick);
    });

    resetButton.addEventListener('click', resetGame);
});
