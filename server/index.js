
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
const userRouters = require('./controllers/users');
const connectDB = require('./config/db');
const { find, findOne } = require('./models/User');
connectDB();
app.use(cors());

//
app.listen(port, console.log(`Server is running on port ${port}`));
//get all tasks



app.route('/').get((req, res) => {
    res.send('Server is running on port 8000');
});

app.use('/api/users', userRouters);


