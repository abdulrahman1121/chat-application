import './MessagesList.css'

export default function MessageBody() {
    return (
        <div id='messagebody'> 
            <div className='search-container'>
                <input type='text' placeholder='Search messages' className='search-bar'/> 
            </div>
            <div className='messagebody-container'>
                <div className='direct-message'>Sharanya</div>
                <div className='direct-message'>Abdulrahman</div>
                <div className='direct-message'>Sriman</div>
                <div className='direct-message'>Umnia</div>
                <div className='direct-message'>Nathan</div>
                <div className='direct-message'>Testing</div>
                <div className='direct-message'>Testing</div>
                <div className='direct-message'>Testing</div>
                <div className='direct-message'>Testing</div>
                <div className='direct-message'>Testing</div>
                <div className='direct-message'>Testing</div>
            </div>
        </div>
    )
} 