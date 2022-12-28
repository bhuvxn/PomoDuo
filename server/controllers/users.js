const bcrypt = require('bcrypt');
const userRouters = require('express').Router()
const User = require('../models/User');

userRouters.post('/', async (req, res) => {

    const {username, password, email} = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({
        username,
        passwordHash,
        email,
    });
    const savedUser = await user.save();
    res.json(savedUser);



});
module.exports = userRouters;