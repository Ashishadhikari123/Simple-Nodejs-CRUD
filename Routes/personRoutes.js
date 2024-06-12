// Description: This file contains the routes for the person model.

// Importing the required modules
const express = require('express');
const router = express.Router();
const Person = require('../Models/person');

//get method to fetch all the data from the database
router.get('/' , async (req,res)=>{
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//get method to fetch all the data from the database
router.get('/person' , async (req,res)=>{
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//get method to fetch data based on work type
router.get('/person/:workType' , async (req,res)=>{
    try{
        const workType = req.params.workType;
        const response = await Person.find({work:workType});
        console.log("data fetched");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//post method to add data to the database
router.post('/person' , async (req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const newPerson = new Person(data);
        const response = await newPerson.save()
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//put method to update data in the database
router.put('/person/:id' , async (req,res)=>{
    try{
        const id = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(id , updatedPersonData,{
            new:true, // to return the updated data
            runValidators:true // to run mongoose validations
        });
        console.log(`value of response is ${response}`);
        if(!response){
            console.log("Person not found");
            return res.status(404).json({error:"Person not found"});
        }

        console.log("data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//delete method to delete data from the database
router.delete('/person/:id' , async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            console.log("Person not found");
            return res.status(404).json({error:"Person not found"});
        }
        console.log("data deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//exporting the router
module.exports = router;