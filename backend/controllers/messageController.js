const { db } = require('../config/connect');
const messagesRef = db.ref('messages');

const sendMessage = async(senderId, receiverId, content) => {
    console.log('sendMessage called with:', { senderId, receiverId, content });
    const messageId = messagesRef.push().key; // Generates a unique key for new message 
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
        await db.ref().update(updates) // Save message directly under messageRef
        console.log("Message sent successfully");
        return { success: true }; // Add success response
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message'); // Throw error for the caller to catch
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
        console.log('Messages retrieved:', messages); // Add this for debugging
        return messages;
    } catch (error) {
        console.error('Error retrieving messages:', error);
        return [];
    }
};

module.exports = { sendMessage, getMessages };

