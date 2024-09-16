const express = require('express');
const { sendMessage, getMessages } = require('./controllers/messageController');
const router = express.Router();

// Route to send a message
router.post('/send', (req, res) => {
    const { senderId, receiverId, content } = req.body;
    console.log('Message data:', req.body); // Add this to verify data is being receive
    sendMessage(senderId, receiverId, content)
        .then(() => res.status(200).send('Message sent successfull'))
        .catch(error => {
            console.error('Error in /send route:', error);
            res.status(500).send({ error: error.message }); // Send error to client
        });
});

// Route to get messages between two user
router.get('/get', (req, res) => {
    const { userId1, userId2 } = req.query;
    console.log('Fetching messages between:', userId1, userId2); // Verify query parameters 
    getMessages(userId1, userId2)
        .then(messages => {
            console.log('Messages found:', messages); // Add this to log the messages being returned
            res.status(200).json(messages);
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
            res.status(500).send(error.message);
        });
});

module.exports = router;