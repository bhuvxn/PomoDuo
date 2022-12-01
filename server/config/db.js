const mongoose = require('mongoose');


//connectin to the database

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb successfully'.red.underline.bold);


};


module.exports = connectDB;