const express = require('express');
const app = express();

app.use(logger); // Global middleware

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)
    res.send('Users Page');
});

function logger(req, res, next) {
    console.log('Log');
    next();
}

function auth(req, res, next) {
    if(req.query.admin === 'true') {
        req.admin = true;
        next() //http://localhost:3000/users?admin=true
    } else {
        res.send('No auth'); // http://localhost:3000/users
    }
}

app.listen(3000);