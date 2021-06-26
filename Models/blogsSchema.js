const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// model allows us to communicate with database collections
// schema defines the structure if the type of dat/document.
const blogSchema = new Schema({ //pass in object
    title: {
        type: String,
    },
    snippet: {
        type: String,
    },
    body: {
        type: String,
        // required: [true, 'Please enter a BlogBody ']
    },
}, { timestamps: true }); //timestamp is an options object

// prvides us with the interface to communicate with the doctype
const Blog = mongoose.model('Blog', blogSchema); //takes in the name of the model
// when we use blog, it looks for the blogs collection based on the blog singularity word
module.exports = Blog; //export