let initial = 0;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return 'O';  // Return 'O' instead of true
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return 'X';  // Return 'X' instead of true
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return 'O';  // Return 'O' instead of true
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return 'X';  // Return 'X' instead of true
    }

    return false; 
}

function number(row, column) {
    if (initial < 9) {
        const button = document.querySelector(`table tr:nth-child(${row}) td:nth-child(${column}) button`);
        if (button.textContent !== 'X' && button.textContent !== 'O') {
            if (initial % 2 === 0) {
                button.textContent = 'O';
                button.style.backgroundColor = 'green';
                board[row - 1][column - 1] = 'O';
                button.style.fontSize = '24px';
            } else {
                button.textContent = 'X';
                button.style.backgroundColor = 'orange';
                board[row - 1][column - 1] = 'X';
                button.style.fontSize = '24px';
            }

            const winner = checkWin();
            const resultDisplay = document.getElementById('result-display');

            if (winner) {
                if (winner === 'O') {
                    resultDisplay.textContent = 'O Wins';
                    resultDisplay.style.fontSize = '40px';
                    resultDisplay.style.color = 'green';
                } else {
                    resultDisplay.textContent = 'X Wins';
                    resultDisplay.style.fontSize = '40px';
                    resultDisplay.style.color = 'orange';
                }
            } else if (initial === 8) {
                resultDisplay.textContent = "Draw match! Try again.";
                resultDisplay.style.backgroundColor = 'gray';
            }

            initial++;
        }
    }
}

// Assuming you have a "Try Again" button in your HTML with an id 'try-again'
const tryAgainButton = document.getElementById('try-again');
tryAgainButton.addEventListener('click', resetGame);

function resetGame() {
    initial = 0;
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Clear the board display (assuming you have a display logic)
    const buttons = document.querySelectorAll('table button');
    buttons.forEach(button => {
        button.textContent = '';
        button.style.backgroundColor = ''; // Reset background color
        button.style.fontSize = ''; // Reset font size
        button.classList.remove('Win'); // Remove any 'Win' class
    });

    // Reset the result display
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.textContent = '';
    resultDisplay.style.backgroundColor = ''; // Reset background color
}