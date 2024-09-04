const express = require('express');
const { sendMessage, getMessages } = require('./controllers/messageController');
const router = express.Router();

// Route to send a message
router.post('/send', (req, res) => {
    const { senderId, receiverId, content } = req.body;
    sendMessage(senderId, receiverId, content)
        .then(() => res.status(200).send('Message sent successfull'))
        .catch(error => res.status(500).send(error.message));
});

// Route to get messages between two user
router.get('/get', (req, res) => {
    const { userId1, userId2 } = req.query;
    getMessages(userId1, userId2)
        .then(messages => res.status(200).json(messages))
        .catch(error => res.status(500).send(error.message));
});

module.exports = router;