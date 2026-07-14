const express = require('express');

// create server 
const app = express();

// api creation in express 
app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page");
    // or can be written 
    res.end("Welcome to the Home Page");
    // both works but res.send() is more preferred as it sets the content-type header automatically
});
app.get("/about", (req, res) => {
    res.send("Welcome to the About Page");
});


// start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

