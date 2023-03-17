const express = require('express');
const route = require('./controller');
const cors = require('cors');
const port = parseInt(process.env.PORT) || 4000;
const app = express();
const {errorHandling} = require('./middleware/ErrorHandling');
const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'https://localhost:8080');
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});

// cookieParser & Router
// cookieParser should be set before router
app.use(
    cookieParser(),
    cors(),
    route
    );
    app.use(
    express.json(),
    express.urlencoded({extended: true}),
);


// Server
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});

app.use(errorHandling);