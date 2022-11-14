const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
})


app.get("/contact", function(req, res) {
    res.send("Contact me at: jared_glenn@yahoo.com")
})

app.get("/about", function(req, res) {
    res.send("<h1>I'm Jared!</h1><h2>Nice to meet you!</h2><p>I enjoy programming and have a good grasp of Python, HTML, CSS, and Javascript, as well as important sub-languages like Flask, Node, and Express! Oh, and another thing ...")
})


app.listen(3000, function() {
    console.log("Server started on port 3000.")
});

// (nodemon server.js) -> CTRL + C