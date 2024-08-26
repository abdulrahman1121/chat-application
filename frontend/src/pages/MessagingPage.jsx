import Header from '../components/Header'
import MessageBody from '../components/MessageBody'
import Navbar from '../components/Navbar'
import DirectMessage from '../components/DirectMessage'
import './MessagingPage.css'

export default function MessagingPage() {
    return (
        <div id='messaging-page'>
            <Navbar />
            <div className='content'>
                <div className="main-content">
                    <Header />
                    <MessageBody />
                </div>
                <DirectMessage />
            </div>
        </div>
    )
}