import './Header.css'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Header() {
    return (
        <div id='header'> 
            <div className="header-container">
                <FavoriteBorderOutlinedIcon style={{color: 'red', fontSize: '40px'}} className='heart-icon'/>
                <h1>Messages</h1>
                <AddCircleOutlinedIcon style={{color: 'green', fontSize: '80px'}} className='plus-icon'/>
                <hr />
            </div>
        </div>
    )
} 