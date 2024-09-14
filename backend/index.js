const express = require('express');
const bodyParser = require('body-parser');
const messages = require('./messages');
const cors = require('cors');
const { credential } = require('firebase-admin');
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(bodyParser.json());
app.use('/messages', messages);



const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})