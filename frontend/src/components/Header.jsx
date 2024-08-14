import './Header.css'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Header() {
    return (
        <div id='header'> 
            <div className="header-container">
                <img src='/codedaylogo.png' alt='codeday-logo' className='logo'/>
                <h1>Messages</h1>
                <AddCircleRoundedIcon style={{fontSize: '60px'}} className='plus-icon'/>
            </div>
        </div>
    )
} 