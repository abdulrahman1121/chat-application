import React from 'react';
import './DirectMessage.css';
import SendButton from './SendButton';

export default function DirectMessage() {
    return (
        <div className='direct-message-container'>
            <div className='direct-message-header'>
                <h1>Sharanya</h1>
            </div>
            <div className='direct-message-content'>Direct messages go here</div>
            <div className='message-container'>
                <input type='text' placeholder='Message' className='message-bar' />
                <SendButton />
            </div>
        </div>
    )
}
