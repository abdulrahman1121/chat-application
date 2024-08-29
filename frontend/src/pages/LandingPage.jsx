import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div id='landing-page'>
            <Navbar />
            <Banner title="Dashboard" /> 
            <div className='containers'>
                <div className='container left-container'>
                    <h2>left container</h2>
                </div>
                <div className='container right-container'>
                    <h2>right container</h2>
                </div>
            </div>
        </div>
    )
}