express = require('express');

const config = require('./utils/config');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const studyhoursRouter = require('./controllers/studyhours');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


//connect to MongoDB
mongoose
 .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
 });


app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/Hours', studyhoursRouter);

module.exports = app;