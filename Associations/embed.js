var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);




//NEW USER

// var newUser = new User({
//     email:"jacobo@webdev.com",
//     name:"Jacobo"
// })

// newUser.posts.push({
//     title: "Viaje a Francia",
//     content: "Este es mi Blog sobre el viaje a Francia"
// });

// newUser.save((err, user) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

//NEW POST

// var newPost = new Post({
//     title: "First Post",
//     content: "This is the First Post content"
// });
// newPost.save((err, post) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

//ADD A POST TO AN EXISTING USER
User.findOne({name: "Jacobo"}, (err, user) => {
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "Mi segundo dia en Francia",
            content: "Este es mi segundo dia en Francia"
        });
    }
    user.save((err,user) => {
        if(err){
            console.log(err);
        } else {
            console.log(user);
        }
    })
});