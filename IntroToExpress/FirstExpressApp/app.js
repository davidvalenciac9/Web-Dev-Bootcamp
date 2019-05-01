const express = require("express");
const app = express();

// '/' => "Hi There!"
app.get('/', function(req, res){
    res.send("Hi There!");
});

// '/bye' => "Goodbye"
app.get('/bye', function(req, res){
    res.send("Goodbye!");
})

// '/dog' => "Mewo"
app.get('/dog', (req, res) => {
    res.send("Meow");
})


// Path Variables that follow a pattern
app.get('/r/:subReddit', (req, res) => {
    var subReddit = req.params.subReddit;
    res.send(`Welcome to the ${subReddit} SubReddit!`.toUpperCase());
})

// * for a page not found (404) ******IT HAS TO BE LAST********
app.get('*', function(req, res){
    res.send("Page not Found");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('SERVER HAS STARTED');
});