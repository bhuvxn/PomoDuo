const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    description: String,

    completed: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;