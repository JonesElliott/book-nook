const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        trim: false
    },

    author: {
        type: String,
        trim: false,
    },

    description: {
        type: String,
        trim: false
    },
    
    image: {
        type: String,
        trim: true
    },
    
    link: {
        type: String,
        trim: true
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;