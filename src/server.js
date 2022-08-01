// andy calls it the backend import ? not sure why tho may ask him later
const express = require("express");

// create a maniuplatable server, first add things to server and then ask it to update

// a server is basically a const type
const app = express();

// the express methods returns a manipulatble web server

// now we add things to server, use adds what ever request handler / controllers in REST api, they take in those in app.use
// app.use(express.static("public"));

// express.static takes the folder in the root directory of our app

// now we give it a path, this basically adds the public folder to the web server which is accessible through /static
app.use("/static", express.static("public"));

// now we tell the server how to listen, Mac is port 5001, windows is
app.listen(5001, () => {
    console.log("Listening on port 5001");
});
