require('dotenv').config();
const mongodb = require('mongodb');



const mongoURI = process.env.mongoURI;

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

