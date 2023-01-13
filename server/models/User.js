const mongoose = require('mongoose');  

const UserSchema = new mongoose.Schema({
    username: String, 
    name: String, 
    passwordHash: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    studyHours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StudyHours'
        }
    ]
});
UserSchema.set('toJSON', {
        transform: (document, returnedObject) => {
          returnedObject.id = returnedObject._id.toString()
          delete returnedObject._id
          delete returnedObject.__v
          // the passwordHash should not be revealed
          delete returnedObject.passwordHash
        }
})
const User = mongoose.model('User', UserSchema);

module.exports = User;