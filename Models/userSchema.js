const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        // required: [true, 'Please enter an email'],
        validate: [isEmail, 'Please Enter a valid Email']
    },
    password: {
        type: String,
        // minlength: [6, 'Minimum password is 6 characters'],
        required: [true, 'Please enter password']
    }
}, { timestamps: true })

// fire a function before doc saved to db
// this is a mongoose hook, fires before or after a function
userSchema.pre('save', async function(next) {
    // for after it's post
    // we hash the password before saving the user
    const salt = await bcrypt.genSalt(); //generates the salt
    this.password = await bcrypt.hash(this.password, salt); //takes in password to be hashed and the salt
    next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email }); //find the email
    if (user) {
        // check if we have a user first, if no user alerts incorrect email
        const auth = await bcrypt.compare(password, user.password); //compare the hashed passwords with input password
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};

const User = mongoose.model('blogUsers', userSchema)

module.exports = User;