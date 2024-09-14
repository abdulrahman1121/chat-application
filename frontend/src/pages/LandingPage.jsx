import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div id='landing-page'>
            <Navbar />
            <Banner title="CodeDay Connect" /> 
            <div className='containers'>
                <div className='container left-container'>
                    <div className='section-title'>
                        <h3>Student Dashboard</h3>
                    </div>
                        <h4>Sharanya Srivastava, Senior Product Consultant @ Cvent</h4>
                        <div className='category-container'>
                            <div className='category'>
                                <p>Frontend Development</p>
                            </div>
                            <div className='category'>
                                <p>Backend Development</p>
                            </div>
                        </div>
                        <h4>About the project</h4>
                        <p>
                            https://github.com/abdulrahman1121/chat-application.git
                            CodeDay Connect is an interactive chat web-app for team members to connect, communicate, and manage coding tasks given by the team mentor.
                        </p>
                        <h4>Tech Stack:</h4>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                </div>
                <div className='container right-container'>
                    <div className='section-title'>
                        <h3>Resources</h3>
                    </div>
                    <h4>Mentor Contact Information</h4>
                        <p>Mentor: Sharanya Srivastava</p>
                        <p>Email: testing@gmail.com</p>
                        <p>Phone Number: +000000000</p>
                    <h4>Resources</h4>
                        <ul>
                            <li>Onboarding Assignments</li>
                            <li>Review Feedback</li>
                            <li>Book Coding Help Meeting</li>
                            <li>Re-Link Slack Account</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}