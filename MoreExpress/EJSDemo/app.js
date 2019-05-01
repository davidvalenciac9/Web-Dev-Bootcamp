var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
})

app.get("/fallinlovewith/:thing", (req, res) =>{
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get("/posts", (req, res) => {
    var posts = [{title: "You will not beleive this", author: "David"},
    {title: "Number 10 is incredible", author: "Valencia"},
    {title: "The last one", author: "Cuartas"},];
    res.render('posts', {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server on');
});