import React, { useState } from 'react';
import './MessagesList.css';

export default function MessageBody() {
    const [searchTerm, setSearchTerm] = useState('');
    const messages = ['Sharanya', 'Abdulrahman', 'Quentin', 'John', 'Marie', 'Joe', 'Chris', 'Anne', 'Testing']

    // Filter the messages based on the search term
    const filteredMessages = messages.filter(message =>
        message.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div id='messagebody'>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder='Search messages'
                    className='search-bar'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className='messagebody-container'>
            {/* Checks if message name exists based on length */}
                {filteredMessages.length > 0 ? (
                    filteredMessages.map((name, index) => (
                        <div key={index} className='direct-message'>{name}</div>
                    ))
                ) : (
                    <div className='direct-message'>No messages found</div>
                )}
            </div>
        </div>
    );
}