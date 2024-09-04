const express = require('express');
const bodyParser = require('body-parser');
const messages = require('./messages');

require('dotenv').config()
const app = express();

app.use(bodyParser.json());
app.use('/messages', messages);


const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})