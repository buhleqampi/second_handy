const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {Student, Book, Donor} = require('../model');
const student = new Student();
const book = new Book();
const donor = new Donor();

// GET
route.get('/', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

route.get('/students', (req,res)=> {
    student.fetchStudents(req, res);
})

route.get('/student/:id', (req,res)=> {
    student.fetchStudent(req, res);
})

route.get('/books', (req,res)=> {
    book.fetchBooks(req, res);
})
route.get('/book: id', (req,res)=> {
    book.fetchBook(req, res);
})
route.get('/donors', (req,res)=> {
    donor.fetchDonors(req, res);
})
route.get('/donor: id', (req,res)=> {
    donor.fetchDonor(req, res);
})


// POST
// login an user
route.post('/login', bodyParser.json(), (req,res)=> {
    student.login(req, res);
});

// register an user
route.post('/register', bodyParser.json(), (req, res)=> {
    student.createStudent(req, res);
});

// Create a new product
route.post('/book', bodyParser.json(), (req,res)=> {
    book.addBook(req, res);
});
// Create a new donor 
route.post('/donor', bodyParser.json(), (req, res)=> {
    donor.addDonor(req, res);
});

// PUT
route.put('/student/:id', bodyParser.json(), (req, res)=> {
    student.updateStudent(req, res);
})
route.put('/book/:id', bodyParser.json(), (req,res)=>{
    book.updateBook(req,res);
})
route.put('/donor/:id', bodyParser.json(), (req,res)=>{
    donor.updateDonor(req,res);
})


// DELETE
route.delete('/student/:id', bodyParser.json, (req, res)=> {
    student.deleteStudent(req, res);
})
route.delete('/book/:id', bodyParser.json, (req,res)=>{
    book.deleteBook(req, res);
})
route.delete('/donor/:id', bodyParser.json, (req,res)=>{
    donor.deleteDonor(req, res);
})

module.exports = route;