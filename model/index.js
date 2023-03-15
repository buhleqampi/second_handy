// import database connection from config folder
let db = require('../config')
// Import bcrypt module
let {hash, compare, hashSync} = require('bcrypt');
let {createToken} = require('../middleware/AuthenticatedUser');

// User class
class Student {
    login(req, res) {
        const {emailAdd, userPass} = req.body
        const strQry =
        `
        SELECT studentID,
        firstName,
        lastName,
        institutionName,
        studentNumber,
        gender,
        userPass,
        userRole,
        userProfile,
        emailAdd
        FROM Students WHERE emailAdd = '${emailAdd}';
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
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
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
                const jwToken = createToken(user);
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
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
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
        class Donor {
            fetchDonors(req, res) {
                const strQry = `SELECT donorID, donorName, donorDescription, donorDetails, donorIMG
                FROM Donors;`;
                db.query(strQry, (err, results)=> {
                    if(err) throw err;
                    res.status(200).json({results: results})
                });
            }
            fetchDonor(req, res) {
                const strQry = `SELECT donorId, donorName, donorDescription, donorDetails, donorIMG
                FROM Donors
                WHERE donorID = ?;`;
                db.query(strQry, [req.params.id], (err, results)=> {
                    if(err) throw err;
                    res.status(200).json({results: results})
                });
            }
            addDonor(req, res) {
                const strQry = 
                `
                INSERT INTO Donors
                SET ?;
                `;
                db.query(strQry,[req.body],
                    (err)=> {
                        if(err){
                            res.status(400).json({err: "Unable to insert a new donor."});
                        }else {
                            res.status(200).json({msg: "Donor saved"});
                        }
                    }
                );    
            }
            updateDonor(req, res) {
                const strQry = 
                `
                UPDATE Donors
                SET ?
                WHERE donorID = ?
                `;
                db.query(strQry,[req.body, req.params.id],
                    (err)=> {
                        if(err){
                            res.status(400).json({err: "Unable to update a donor."});
                        }else {
                            res.status(200).json({msg: "Donor updated"});
                        }
                    }
                );    
            }
            deleteDonor(req, res) {
                const strQry = 
                `
                DELETE FROM Donors
                WHERE donorID = ?;
                `;
                db.query(strQry,[req.params.id], (err)=> {
                    if(err) res.status(400).json({err: "The donor cannot be deleted."});
                    res.status(200).json({msg: "A donor was deleted."});
                })
            }
        }
        module.exports = {
            Student, 
            Book, 
            Donor
        }