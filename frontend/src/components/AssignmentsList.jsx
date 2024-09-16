import React, { useState } from 'react';
import './AssignmentsList.css'

export default function MessageBody() {
    const [searchTerm, setSearchTerm] = useState('');
    const assignments = [
                        'Adjust font size on direct messages', 
                        'Create database for messages', 
                        'Finish frontend of messaging page', 
                        'Finish frontend of landing page', 
                        'Design assignments page on Figma', 
                        'Testing', 
                        'Testing', 
                        'Testing', 
                        'Testing']

    // Filter the messages based on the search term
    const filteredMessages = assignments.filter(assignment =>
        assignment.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div id='messagebody'>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder='Search assignments'
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