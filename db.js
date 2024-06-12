// Purpose: This file is used to connect to the MongoDB database.

require('dotenv').config();

const mongoose = require('mongoose');
// const mongooseURL = 'mongodb://localhost:27017/hotels';
 const mongooseURL = process.env.DB_URL;
mongoose.connect(mongooseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Mongoose maintains a default connection. You can access it using mongoose.connection.
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose is connected');
});

db.on('error', (error) => {
    console.log('Mongoose connection error: ', error);
});

db.on('disconnected', () => {
    console.log('Mongoose is disconnected');
});

module.exports = db;