const { db } = require('../config/connect');
const messagesRef = db.ref('messages');

const sendMessage = async(senderId, receiverId, content) => {
    const messageId = messagesRef.push().key;
    const timestamp = Date.now();

    const messageData = {
        sender_id: senderId,
        receiver_id: receiverId,
        timestamp: timestamp,
        content: content
    };

    const updates = {};
    updates[`/messages/${messageId}`] = messageData;

    try {
        await db.ref().update(updates);
        console.log("Message sent successfully");
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

const getMessages = async(userId1, userId2) => {
    try {
        const messagesSnapshot = await messagesRef
            .orderByChild('timestamp')
            .once('value');

        const messages = [];
        messagesSnapshot.forEach(childSnapshot => {
            const message = childSnapshot.val();
            if (
                (message.sender_id === userId1 && message.receiver_id === userId2) ||
                (message.sender_id === userId2 && message.receiver_id === userId1)
            ) {
                messages.push(message)
            }
        });
        return messages;
    } catch (error) {
        console.error('Error retrieving messages:', error);
        return [];
    }
};

module.exports = { sendMessage, getMessages };

