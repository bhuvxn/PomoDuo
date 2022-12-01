const mongoose = require('mongoose');
//schema for user data
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    //hours worked, will be calculated from timer on react frontend and also called to display Statistics
    hours:{
        //need to store hours along with the corresponding date(dictionary with date + number?)
        type: Number,
    },
})

//exporting the model
module.exports = mongoose.model('User', UserSchema);

