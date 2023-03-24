// import database connection from config folder
let db = require('../config')
// Import bcrypt module
let {hash, compare, hashSync} = require('bcrypt');
let {createToken} = require('../middleware/AuthenticatedUser');

class Student {
    signIn(req, res) {
        const {emailAdd, userPass} = req.body
        const strQry =
        `
        SELECT studentID, firstName, lastName, institutionName, studentNumber, gender, userPass, userRole, userProfile, emailAdd
        FROM Students
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(strQry, async (err, data) => {
            if(err) throw err;
            if((!data) || (data == null)) {
                res.status(401).json({err: "You tried an invalid email address"});
            }else{
                await compare(userPass, data[0].userPass, (cErr, cResult)=>{
                if(cErr) throw cErr;
                // create token
                const jwToken =  
                createToken({emailAdd, userPass
                });
                // Saving our token
                res.cookie('registeredUser', jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                })
                if(cResult){
                    res.status(200).json({
                        msg: 'Logged in',
                        jwToken: jwToken,
                        result: data[0]
                })
                }else {
                    res.status(401).json({
                        err: 'You entered the an invalid password or did not register'
                })
            }
                    })
                }
            })
        }
    fetchStudents(req, res) {
        const strQry = 
        `
        SELECT studentID,
        firstName,
        lastName,
        institutionName,
        studentNumber,
        gender,
        userRole,
        userProfile,
        emailAdd
        FROM Students;
        `
        db.query(strQry, (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results: data})
        })
    }
    fetchStudent(req, res) {
        const strQry = 
        `
        SELECT studentID,
        firstName,
        lastName,
        institutionName,
        studentNumber,
        gender,
        userRole,
        userProfile,
        emailAdd
        FROM Students
        WHERE studentID = ?;
        `
        db.query(strQry, [req.params.id] ,(err, data)=> {
            if(err) throw err;
            else res.status(200).json({result: data})
        })
    }
    async createStudent(req, res) {
        // Payload
        let detail = req.body;
        // Hashing user password
        detail.userPass = await 
        hash(detail.userPass, 15);
        // This information will be used for authentication.
        let student = {
            firstName:detail.firstName,
            lastName:detail.lastName,
            institutionName:detail.institutionName,
            studentNumber:detail.studentNumber,
            gender:detail.gender,
            userRole:detail.userRole,
            userProfile:detail.userProfile,
            cellphoneNumber:detail.cellphoneNumber,
            emailAdd: detail.emailAdd,
            userPass: detail.userPass,
            registrationDate:detail.registrationDate
        }
        // sql query
        const strQry =
        `INSERT INTO Students
        SET ?;`;
        db.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(student);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("registeredUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })    
    }
    updateStudent(req, res) {
        let data = req.body;
        if(data.userPass !== null || data.userPass !== undefined){
            data.userPass = hashSync(data.userPass, 15);
        }
        const strQry = 
        `
        UPDATE Students
        SET ?
        WHERE studentID = ?;
        `;
        //db
        db.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    deleteStudent(req, res) {
        const strQry = 
        `
        DELETE FROM Students
        WHERE studentID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}
class Book {
fetchBooks(req, res) {
    const strQry = `SELECT id, bookName, bookDescription, price,category, bookQuantity, imgURL
    FROM Books;`;
    db.query(strQry, (err, results)=> {
        if(err) throw err;
        res.status(200).json({results: results})
    });
}
fetchBook(req, res) {
    const strQry = `SELECT id, bookName, bookDescription, price, category, bookQuantity, imgURL
    FROM Books
    WHERE id = ?;`;
    db.query(strQry, [req.params.id], (err, results)=> {
        if(err) throw err;
        res.status(200).json({results: results})
    });
}
addBook(req, res) {
    const strQry = 
    `
    INSERT INTO Books
    SET ?;
    `;
    db.query(strQry,[req.body],(err,results)=> {
            if(err){
                res.status(400).json({err: "Unable to insert a new book.",results});
            }else {
                res.status(300).json({msg: "Book saved"});
            }
        }
    );   
}
updateBook(req, res) {
    const strQry = 
    `
    UPDATE Books
    SET ?
    WHERE id = ?
    `;
    db.query(strQry,[req.body, req.params.id],
        (err)=> {
            if(err){
                res.status(400).json({err: "Unable to update a book record."});
            }else {
                res.status(200).json({msg: "Book updated"});
            }
        }
    );    
}
deleteBook(req, res) {
    const strQry = 
    `
    DELETE FROM Books
    WHERE id = ?;
    `;
    db.query(strQry,[req.params.id], (err)=> {
        if(err) res.status(400).json({err: "The book cannot be deleted."});
        res.status(200).json({msg: "A book was deleted."});
    })
}
}
class Cart {
    fetchCartBooks(req, res) {
        const strQry = `
        SELECT cartID, studentID, id, price, totalPrice
        FROM Cart 
        INNER JOIN Books
        ON Cart.id = Books.id
        WHERE cartID=studentID${req.params.id};`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchCart(req, res) {
        const strQry = `SELECT cartId, studentID, id, price, totalPrice
        FROM Cart
        WHERE cartID = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addToCart(req, res) {
        const strQry = 
        `
        INSERT INTO Cart
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new cart."});
                }else {
                    res.status(200).json({msg: "Cart saved"});
                }
            }
        );    
    }
    updateCart(req, res) {
        const strQry = 
        `
        UPDATE Cart
        SET ?
        WHERE cartID = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a cart."});
                }else {
                    res.status(200).json({msg: "Cart updated"});
                }
            }
        );    
    }
    deleteCart(req, res) {
        const strQry = 
        `
        DELETE FROM Cart
        WHERE cartID = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The cart cannot be deleted."});
            res.status(200).json({msg: "A cart was deleted."});
        })
    }
}

module.exports = {
    Student, 
    Book, 
    Cart
}