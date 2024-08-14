import './Navbar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

export default function Navbar() {
    return(
        <div id='navbar'> 
            <div className="navbar-container">
                <HomeRoundedIcon fontSize='large' className="navbar-icon"></HomeRoundedIcon>
                <ForumRoundedIcon fontSize='large' className="navbar-icon"></ForumRoundedIcon>
                <TerminalRoundedIcon fontSize='large' className="navbar-icon"></TerminalRoundedIcon>
                <CalendarMonthRoundedIcon fontSize='large' className="navbar-icon"></CalendarMonthRoundedIcon>
            </div>
        </div>
    )
}