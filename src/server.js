// Require express and create an instance of it
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send the main index.html file in response to the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
