const mongodb = require('mongodb');

//mramitkumarsagar
//0KkzUsD6Z8RPYTeg

const mongoURI = "mongodb://127.0.0.1:27017/bookMovie"

// const mongoURI= "mongodb+srv://mramitkumarsagar:0KkzUsD6Z8RPYTeg@cluster0.iuztyog.mongodb.net/?retryWrites=true&w=majority" ;



let mongoose = require('mongoose');
const { bookMovieSchema } = require('./schema')

// mongoose.connect(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let BookMovie = mongoose.model("BookMovie", bookMovieSchema);


module.exports =BookMovie;

