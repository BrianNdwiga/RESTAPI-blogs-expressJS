const express = require('express');
const morgan = require('morgan');
const cookie = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
require('dotenv').config();
dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.MONGODBURI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //prevents deprecation
    .then(result => app.listen(port), //listen for request after mongo connection is complete.
        console.log('connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookie());




// depraction warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// import routes
const blogRoutes = require('./Routes/blogsRoutes');
const { createBlogs_post } = require('./Controllers/blogsController');
const { editBlog_post } = require('./Controllers/blogsController');
const { deleteBlog_delete } = require('./Controllers/blogsController');
const { registerUser_post } = require('./Controllers/blogsController');
const { loginUser_post } = require('./Controllers/blogsController');

// use blogroutes
app.use('/', blogRoutes);

// create a blog
app.post('/create', createBlogs_post);

// edit a blog
app.post('/edit/:id', editBlog_post);

// delete a blog
app.delete('/edit/:id', deleteBlog_delete);

// register
app.post('/register', registerUser_post);

// login
app.post('/login', loginUser_post);