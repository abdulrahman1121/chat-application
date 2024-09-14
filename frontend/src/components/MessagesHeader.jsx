import './MessagesHeader.css'
import AddMessageButton from './AddMessageButton'

export default function Header({title}) {
    return (
        <div id='header'> 
            <div className="header-container">
                <img src='/codedaylogo.png' alt='codeday-logo' className='logo'/>
                <h1>{title}</h1>
                <div className='plus-icon'>
                    <AddMessageButton />
                </div>
            </div>
        </div>
    )
} 