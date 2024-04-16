const express = require('express');
const path = require('path');
const app = express();

// Correct the path to the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Handle requests to the root with the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

