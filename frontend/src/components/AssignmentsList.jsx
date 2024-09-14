import './AssignmentsList.css'

export default function MessageBody() {
    return (
        <div id='messagebody'> 
            <div className='search-container'>
                <input type='text' placeholder='Search assignments' className='search-bar'/> 
            </div>
            <div className='messagebody-container'>
                <div className='direct-message'>Adjust font size on direct messages</div>
                <div className='direct-message'>Create database for messages</div>
                <div className='direct-message'>Finish UI of messaging page</div>
                <div className='direct-message'>Finish UI of landing page</div>
                <div className='direct-message'>Design assignments page on Figma</div>
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