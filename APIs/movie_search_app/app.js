var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
})

app.get('/results', (req, res) => {
    var query = req.query.search
    var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200){
            //JSON.parse is for convert the JSON string to an actual javascript object
            var data = JSON.parse(body);
            //res.send(data['Search'][0]['Title']);
            res.render("results", {data: data});
        } 
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
});
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server on');
});