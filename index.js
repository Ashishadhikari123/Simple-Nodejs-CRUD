
const express = require('express'); // Import express
const app = express(); // Create an express app
const db = require('./db'); // Import the database connection
app.use(express.json()); // To parse the body of the request message
const Person = require('./Models/person'); // Import the Person model

// Import the personRoutes
const personRoutes = require('./Routes/personRoutes');

// Use the personRoutes
app.use('/' , personRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});