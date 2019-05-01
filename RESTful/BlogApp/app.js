var express = require("express"),
    methodOverride = require("method-override"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
    
app.use(bodyParser.urlencoded({extended: true}));   
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));


//conectar a la DB
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });

//SCHEMA SETUP
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    create: {type: Date, default: Date.now} 
});

//COMPILAR EN UN MODELO
var Blog = mongoose.model("Blog", blogSchema);

//RESTful Routes

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

// INDEX ROUTE
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blog) => {
        if(err){
            console.log(err);
        } else {
            res.render("index", {blog: blog});
        }
    });
});

//NEW ROUTE
app.get('/blogs/NEW', (req, res) => {
            res.render("new");
});

//CREATE ROUTE
app.post('/blogs', (req, res) => {
    //CREATE BLOG
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err){
            res.render("new");
        } else {
            //REDIRECT
            res.redirect("blogs");
        }
    })
});

//SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
            Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            res.redirect("/blogs");
        } else {
             //render show template
            res.render("show", {blog: foundBlog});
        }
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
             res.redirect("/blogs");
         } else {
        res.render("edit", {blog: foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) =>{
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/"+req.params.id);
        }
    });
});


//DELETE ROUTE
app.delete("/blogs/:id", (req, res) => {
  //destroy blog
  Blog.findByIdAndRemove(req.params.id, (err) =>{
     if(err){
         res.redirect('/blogs');
     } else {
         res.redirect('/blogs');
     }
  });
  //redirect somwhere
});


// Blog.create ({
//     title: "Test Blog",
//     image: "https://optinmonster.com/wp-content/uploads/2015/03/blogpostideasfb.png",
//     body: "This is the Test post"
// }, (err, blog) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Blog Added");
//         console.log(blog);
//     }
// });

// title
// image
// body
// created


app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Blog App is ON');
});