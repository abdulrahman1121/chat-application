import './Navbar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return(
        <div id='navbar'> 
            <div className="navbar-container">
                <div className='sign-in-wrapper'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <Link to="/home"><HomeRoundedIcon fontSize='large' className="navbar-icon" /></Link>
                <Link to="/messages"><ForumRoundedIcon fontSize='large' className="navbar-icon" /></Link>
                <Link to="/assignments"><TerminalRoundedIcon fontSize='large' className="navbar-icon" /></Link>
                <Link to="*"><CalendarMonthRoundedIcon fontSize='large' className="navbar-icon" /></Link>
            </div>
        </div>
    )
}