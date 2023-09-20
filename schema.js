
const mongoose = require('mongoose');

const bookMovieSchema = new mongoose.Schema({
    movie: String,
    slot: String,
    seats: {
        A1: Number,
        A2: Number,
        A3: Number,
        A4: Number,
        D1: Number,
        D2: Number
    }

})

exports.bookMovieSchema = bookMovieSchema;

