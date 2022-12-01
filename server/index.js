const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./Schema/schema');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

//
app.listen(port, console.log(`Server is running on port ${port}`));


app.route('/').get((req, res) => {
    res.send('Server is running on port 8000');
});

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true,
}));