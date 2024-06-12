// Purpose: Model for person schema.

// Import mongoose
const mongoose = require('mongoose');

// Create a schema for person
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum: ['chef' , 'waiter' , 'manager' , 'customer'],
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
});

// Create a model for person
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports = Person;