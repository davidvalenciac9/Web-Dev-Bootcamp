var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ['Juan Pablo', 'Andres', 'David'];


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server on');
});