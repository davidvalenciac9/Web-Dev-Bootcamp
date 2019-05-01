const express = require("express");
const app = express();


app.get('/', function(req, res){
    res.send("Hi There! Welcome to my assignment!");
});

app.get('/speak/:animal', (req, res) => {
    var animal = req.params.animal;
    if(animal = 'pig'){
        res.send("Oink!");
    } else if (animal = 'cow'){
        res.send("Mooow!");
    } else if (animal = "dog"){
        res.send("Woof");
    } else {
        res.send(`I don't know how ${animal} do!`);
    }
});

app.get('/repeat/:word/:times', function(req, res){
    let timesString = req.params.times;
    let times = Number(timesString);
    let word = req.params.word;
    for(let i = 0; i < times; i++) {
        res.write(word+' ');
    }
    res.end()
});

app.get('*', function(req, res){
    res.send("Page not Found");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('SERVER HAS STARTED');
});