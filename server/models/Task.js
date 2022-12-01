const mongoose = require('mongoose')


//schema for task data
const TaskSchema = new mongoose.Schema({
    name: {type: String},   
    status: {type:String, enum:['incomplete', 'complete']},
    UserId:{
        type: mongoose, Schema, Types, ObjectId,
        ref : 'User', //this makes task correspond to a users id
    }

});