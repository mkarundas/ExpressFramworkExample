const express = require('express');

let app = express();

const port = process.env.PORT || 9999;

//http://localhost:9999/
app.get('/', (req, res)=> {
    res.send('<h1> Hello World </h1>');
});

//http://localhost:9999/api
app.get('/api', (req, res)=> {
    res.send('<h1> Hello API Page </h1>');
});

// Routes Parameters
// http://localhost:9999/post/100

app.get('/post/:id', (req, res)=> {
    res.send(`
        
        <p> Here is my id: ${req.params.id}<p>
        
        `);
});

// http://localhost:9999/post/100/category/50

app.get('/post/:id/category/:category_id', (req, res)=> {
    res.send(`
        
        <p> Here is my id: ${req.params.id}<p>
        <p> Here is category id: ${req.params.category_id}<p>
        
        `);
});


app.listen(port);