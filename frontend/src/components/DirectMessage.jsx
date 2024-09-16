import React, { useState, useEffect, useRef } from 'react';
import './DirectMessage.css';
import SendButton from './SendButton';
import axios from 'axios';

export default function DirectMessage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const messageContainerRef = useRef(null); // Reference for the message container

    const senderId = 'user1'; // Replace with actual sender ID
    const receiverId = 'user2'; // Same here

    // Set the base URL for axios requests
    const api = axios.create({
        baseURL: 'http://localhost:3000', // Backend server URL
    });

    const sendMessage = () => {
        if (message.trim() === '') return;
        
        console.log('Send button clicked');  // Add this log

        console.log('Sending message:', { senderId, receiverId, content: message }); // Log message data
        
        api.post('/messages/send', {
            senderId,
            receiverId,
            content: message,
        })
        .then(() => {
            setMessage(''); // Clear input after sending
            fetchMessages(); // Fetch updated messages
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    
    };

    // Function to fetch messages between sender and receiver
    const fetchMessages = () => {
        api.get('/messages/get', {
            params: { userId1: senderId, userId2: receiverId },
        })
        .then(response => {
            console.log('Messages from backend:', response.data); // Log the messages received
            const fetchedMessages = Array.isArray(response.data) ? response.data : []; // Ensure data is an array
            setMessages(fetchedMessages); // Update message state
            scrollToBottom(); // Scroll to the bottom when messages update
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    };

    // Scroll to the bottom of the message container
    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    };

    const SendButton = ({ onClick }) => {
        return (
            <button onClick={onClick}>
                Send
            </button>
        );
    }

    // Fetch messages on component mount
    useEffect(() => {
        fetchMessages();
    }, []);


    return (
        <div className='direct-message-container'>
            <div className='direct-message-header'>
                <h1>Sharanya</h1>
            </div>
            <div className='direct-message-content' ref={messageContainerRef}>
                {Array.isArray(messages) && messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender_id === senderId ? 'sent' : 'received'}`}>
                            {msg.content}
                        </div>
                    ))
                ) : (
                    <p>No messages yet.</p>
                )}
            </div>
            <div className='message-container'>
                <input 
                    type='text' 
                    placeholder='Message' 
                    className='message-bar'
                    value={message}
                    onChange={e => setMessage(e.target.value)} 
                />
                <SendButton onClick={sendMessage}/>
            </div>
        </div>
    )
}
