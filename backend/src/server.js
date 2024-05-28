const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { registerUser, verifyUser, loginUser } = require('./authService'); // Make sure these functions are correctly implemented

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let games = {};

app.post('/start', (req, res) => {
    const { username } = req.body;
    const gameId = Date.now().toString();
    games[gameId] = {
        players: { 'X': username },
        board: Array(9).fill(null),
        turn: 'X',
        winner: null
    };
    res.json({ gameId, symbol: 'X' });
});

app.post('/join', (req, res) => {
    const { username, gameId } = req.body;
    const game = games[gameId];
    if (game && !game.players['O']) {
        game.players['O'] = username;
        res.json({
            gameId,
            symbol: 'O',
            opponent: game.players['X']
        });
    } else {
        res.status(400).json({ message: 'Game not found or already full.' });
    }
});

app.post('/move', (req, res) => {
    const { gameId, symbol, tile } = req.body;
    const game = games[gameId];
    if (game && game.board[tile] === null && game.turn === symbol) {
        game.board[tile] = symbol;
        const winner = checkWinner(game.board);
        game.turn = game.turn === 'X' ? 'O' : 'X';
        game.winner = winner || game.winner;
        res.json({ success: true, board: game.board, turn: game.turn, winner: game.winner });
    } else {
        res.status(400).json({ success: false, message: 'Invalid move or not your turn.' });
    }
});

app.get('/game', (req, res) => {
    const { gameId } = req.query;
    const game = games[gameId];
    if (game) {
        res.json(game);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await registerUser(email, password);
        res.status(200).send('Registration successful! Please check your email for verification code.');
    } catch (error) {
        res.status(400).send('Registration failed: ' + error.message);
    }
});

app.post('/verify', async (req, res) => {
    const { email, code } = req.body;
    try {
        const result = await verifyUser(email, code);
        res.status(200).send('Verification successful! You can now log in.');
    } catch (error) {
        res.status(400).send('Verification failed: ' + error.message);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send('Login failed: ' + error.message);
    }
});

const checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (!board.includes(null)) {
        return 'Draw';
    }
    return null;
};

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
