const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin123') {

        res.json({
            success: true,
            redirect: '/dashboard.html'
        });

    } else {

        res.json({
            success: false,
            message: 'Invalid Credentials'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});