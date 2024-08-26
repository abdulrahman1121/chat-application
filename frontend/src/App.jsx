import MessagingPage from './pages/MessagingPage';
import LandingPage from './pages/LandingPage'
import AssignmentPage from './pages/AssignmentPage'
import NoPage from './pages/NoPage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <div id='app'>
                <Routes>
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/messages" element={<MessagingPage />} />
                    <Route path="/assignments" element={<AssignmentPage />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </Router>
    )
}