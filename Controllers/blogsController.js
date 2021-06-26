const express = require('express');
const Blog = require('../Models/blogsSchema');

const User = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// handle errors
const handleErrors = (err) => {
    // err.code handles the unique property
    console.log(err.message, err.code)
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered'
    }
    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is not incorrect'
    }
    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }
    // validation errors
    if (err.message.includes('dentalAdmins validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(properties);
            errors[properties.path] = properties.message;
        }); //we get the errors object in the error and gets us te values
    }
    return errors;
};

// Create tokens
const maxAge = 3 * 24 * 60 * 10; //3 days
// creates our token
const createToken = (id) => {
    return jwt.sign({ id }, 'Revelation12345678', {
        //sign function takes in  the id(userid), secret and the maxage(expires in)
        expiresIn: maxAge
    })
};


// home-allblogs
module.exports.allBlogs_get = (req, res) => {
    // find gets us all the documents in the db
    Blog.find().sort({ createdAt: -1 }) //sort by timestamps/newest to oldest
        .then(result => {
            // place the title then put the result to the blogs
            res.send({ blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blogs not found' });
        });
};

// create blogs
module.exports.createBlogs_post = (req, res) => {

    const blog = new Blog(req.body);

    blog.save()
        //when we get the instance we use method save to save our blog contents to the collection
        .then(result => {
            res.send({ blogs: result, title: 'New blog' });
            // console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
};

//get specific blog
module.exports.getSpecificBlog_get = (req, res) => {
    // route parameters are variable parts that may change value
    const id = req.params.id;
    // we find by id for a single blog
    Blog.findById(id)
        .then(result => {
            res.send({ blog: result, title: 'Specific Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });
};

// edit a blog
module.exports.editBlog_post = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
                });
            } else res.send({ message: "Blog was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Blog with id=" + id
            });
        });
};

// delete a blog
module.exports.deleteBlog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ message: 'Deleted Successfully' });
            //send json data back to the browser
        })
        .catch(err => {
            console.log(err);
        });
};

// register users
module.exports.registerUser_post = async(req, res) => {
    // returns a promise
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password }); //create user in db
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) //set cookie
        res.status(201).json({ user });
        res.send('successful register');
    } catch (err) {
        // we want to send bak valid email
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// login users
module.exports.loginUser_post = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        // jwt token ensures when the user has it he/she will be logged in
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }) //set cookie
            // we try to login using User from schema and login static method
        res.status(200).json({ user: user._id, message: 'successful login' }); //we send back user._id
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

// all users
module.exports.allUsers_get = (req, res) => {
    // find gets us all the documents in the db
    User.find().sort({ createdAt: -1 }) //sort by timestamps/newest to oldest
        .then(result => {
            // place the title then put the result to the blogs
            res.send({ users: result, title: 'All Users' });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blogs not found' });
        });
};