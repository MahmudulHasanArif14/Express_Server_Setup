const express = require("express");

// create server
const app = express();

// api creation in express
app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page");
  // or can be written
  res.end("Welcome to the GO Page");
    // both works but res.send() is more preferred as it sets the content-type header automatically
    // end generally used in http module of node.js
});


// req e client e ki request korce tar full data thake, ei data mainly 3 jinis e aite pare
// req.body, req.params, req.query
// req.body: mainly used in post request, data is sent in the body of the request
// req.params: mainly used in get request, data is sent in the url of the request
// req.query: mainly used in get request, data is sent in the url of the request
//req.headers & req.cookies store credentials and cookies of the user, mainly used in authentication and authorization
//req.ip & req.ips store the ip address of the user, mainly used in logging and analytics and rate limiting r  jonno use hoy


//res use kori data client r kache pathanor jonno, mainly 3 jinis e data pathano hoy
// res.send(): mainly used to send data in the response body, automatically sets the content-type header
// res.json(): mainly used to send json data in the response body, automatically sets the content-type header to application/json
// res.end(): mainly used to end the response, does not set the content-type header



// api path jate duita application communicate korte pare, ei path e request pathale server response dibe. ei path ke endpoint bola hoy. ekta api te onek gulo endpoint thakte pare. ekta endpoint e onek gulo method thakte pare, mainly 4 jinis er method use hoy


//! api (application programming interface) is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other. In the context of web development, an API typically refers to a set of endpoints that allow clients (like web browsers or mobile apps) to interact with a server.


app.get("/about", (req, res) => {
  res.send("Welcome to the About Page");
});

// start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// rest api one type of  api
//Rest API (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server communication model, typically using HTTP methods to perform operations on resources. In a RESTful API, resources are identified by URLs, and clients interact with these resources using standard HTTP methods like GET, POST, PUT, DELETE, etc. REST APIs are widely used due to their simplicity, scalability, and ease of integration with various platforms and technologies.

// rest api rules and guidelines follow kori communication kore 