const express = require('express');

// create server 
const app = express();

// api creation in express 
app.get("/home", (req, res) => {
    res.send("Welcome to the Home Page");
});


// start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

