const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    //we are grabbing the jwt token
    console.log(token)
        // check if valid
    if (token) {
        jwt.verify(token, 'Revelation12345678', (err, decodedToken) => {
            if (err) {
                res.send({ message: "must login to proceed." });
                console.log(err.message);
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.send({ message: "must login to proceed." });
    };
};

// check user

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'Revelation12345678', async(err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };