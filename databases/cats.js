var mongoose = require("mongoose");
//conectar a la DB
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//Crear una variable a la que se le asigna un model con el esquema para crear los elementos en la DB
var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the DB

// var murringa = new Cat ({
//     name: "Murringa",
//     age: 11,
//     temperament: "Solitaria"
// });

// murringa.save((err, cat) => {
//     if(err){
//         console.log("Algo Salio mal");
//     } else {
//         console.log("Agregamos un nuevo Gato a la DB");
//         console.log(cat);
//     }
// });

// Cat.create({
//     name: "Lisa",
//     age: 5,
//     temperament: "Enojona"
// }, (err, cat) => {
//     if(err){
//         console.log("Error");
//         console.log(err);
//     } else {
//         console.log("Agregamos un nuevo Gato a la DB");
//         console.log(cat);
//     }
// });

//encontrar todos los gatos de laDB


Cat.find({}, (err, cats) => {
    if(err){
    console.log("Tenemos un Error");
    console.log(err);
} else {
    console.log("Todos los gatos....");
    console.log(cats);
}});