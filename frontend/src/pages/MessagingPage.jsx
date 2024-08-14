import Header from '../components/Header';
import MessageBody from '../components/MessageBody';
import Navbar from '../components/Navbar';
import './MessagingPage.css'

export default function MessagingPage() {
    return (
        <div id='messaging-page'>
            <Header />
            <MessageBody />
            <Navbar />
        </div>
    )
}