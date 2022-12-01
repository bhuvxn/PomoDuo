const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

//
app.listen(port, console.log(`Server is running on port ${port}`));


app.route('/').get((req, res) => {
    res.send('Server is running on port 8000');
});