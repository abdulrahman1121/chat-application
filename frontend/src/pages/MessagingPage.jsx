import Header from '../components/MessagesHeader';
import MessageBody from '../components/MessagesList';
import Navbar from '../components/Navbar';
import DirectMessage from '../components/DirectMessage';
import './MessagingPage.css'

export default function MessagingPage() {
    return (
        <div id='messaging-page'>
            <Navbar />
            <div className='content'>
                <div className="main-content">
                    <Header title={'Messages'}/>
                    <MessageBody />
                </div>
                <DirectMessage />
            </div>
        </div>
    )
}