
const mongoose = require('mongoose');

const bookMovieSchema = new mongoose.Schema({
    // movie: mongoose.SchemaType.String,
    // slot: mongoose.SchemaType.String,
    // seats: {
    //     A1: mongoose.SchemaType.Number,
    //     A2: mongoose.SchemaType.Number,
    //     A3: mongoose.SchemaType.Number,
    //     A4: mongoose.SchemaType.Number,
    //     D1: mongoose.SchemaType.Number,
    //     D2: mongoose.SchemaType.Number


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







// const { Schema } = require('mongoose');

// const test = new Schema({
//     user: String,
//     age: Number
//     }

// )

// exports.test = test;
