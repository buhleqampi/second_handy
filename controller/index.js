const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {Student, Book, Cart} = require('../model');
const student = new Student();
const book = new Book();
const cart = new Cart();

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

// retrieving things from your cart
route.get('/student/:id/carts', (req,res)=> {
    cart.fetchCartBooks(req, res);
})

route.get('/books', (req,res)=> {
    book.fetchBooks(req, res);
})
route.get('/book/:id', (req,res)=> {
    book.fetchBook(req, res);
})



// POST
// login an user
route.post('/signIn', bodyParser.json(), (req,res)=> {
    student.signIn(req, res);
});

// register an user
route.post('/signUp', bodyParser.json(), (req, res)=> {
    student.createStudent(req, res);
});

// Adding a new book on the cart
route.post('/student/:id/cart', bodyParser.json(), (req, res)=> {
    cart.addToCart(req, res);
});

// Create a new product
route.post('/book', bodyParser.json(), (req,res)=> {
    book.addBook(req, res);
});

// PUT
route.put('/student/:id', bodyParser.json(), (req, res)=> {
    student.updateStudent(req, res);
})
route.put('/book/:id', bodyParser.json(), (req,res)=>{
    book.updateBook(req,res);
})

// Updating your cart
route.put('student/:id/cart/:id', bodyParser.json(), (req,res)=>{
    cart.updateCart(req,res);
})


// DELETE
route.delete('/student/:id', bodyParser.json, (req, res)=> {
    student.deleteStudent(req, res);
})
route.delete('/book/:id', bodyParser.json, (req,res)=>{
    book.deleteBook(req, res);
})
// Deleting your whole cart
route.delete('/student/:id/cart', bodyParser.json, (req,res)=>{
    cart.deleteCart(req, res);
})

// Deleting a specific book in the cart
route.delete('/student/:id/cart/:id', bodyParser.json, (req,res)=>{
    cart.deleteCart(req, res);
})



module.exports = route;