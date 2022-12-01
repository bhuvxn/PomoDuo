const mongoose = require('mongoose');
//schema for user data
const UserSchema = new mongoose.schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    //hours worked
    hours:{
        type: Number,
    },
})



//exporting the model
export default mongoose.model('User', UserSchema);

