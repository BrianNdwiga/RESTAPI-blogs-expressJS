const { Router } = require('express');
const express = require('express');
const blogsController = require('../Controllers/blogsController');
const { requireAuth, checkUser } = require('../Middleware/authMiddleware');
const router = Router();
const app = express();

//* means all routes
app.get('*', checkUser);

//home-allblogs
router.get('/', blogsController.allBlogs_get);

// create blog
router.post('/create', requireAuth, blogsController.createBlogs_post);

// get specific blog
router.get('/blog/:id', requireAuth, blogsController.getSpecificBlog_get);

// edit a blog
router.post('/edit/:id', requireAuth, blogsController.editBlog_post);

// delete a blog
router.delete('/delete/:id', requireAuth, blogsController.deleteBlog_delete);

// register user
router.post('/register', blogsController.registerUser_post);

// login user
router.post('/login', blogsController.loginUser_post);

// all users
router.get('/users', blogsController.allUsers_get);

module.exports = router;