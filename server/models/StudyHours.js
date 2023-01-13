const mongoose = require('mongoose');
const StudyHoursSchema = new mongoose.Schema({
    date: String,
    hours: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const StudyHours = mongoose.model('StudyHours', StudyHoursSchema);
module.exports = StudyHours;