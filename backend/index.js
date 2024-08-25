const express = require('express');
const { db } = require('./connect');

require('dotenv').config();
const app = express();
app.use(express.json());

// Test route to write and read data
app.post('/test', async (req, res) => {
    try {
        const testData = { message: 'Hello, Firebase!' };

        // Write to the databse
        await db.ref('test').set(testData);

        // Read from databse
        const snapshot = await db.ref('test').once('value');
        const data = snapshot.val;

        res.status(200).json({ success: true, data});
    } catch(error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})