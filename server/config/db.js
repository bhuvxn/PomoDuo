const mongoose = require('mongoose');

//connectin to the database

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://bhuvan:1234@cluster0.n2tcltq.mongodb.net/PomoDuo?retryWrites=true&w=majority');
    console.log('connected to mongodb successfully');


};


module.exports = connectDB;