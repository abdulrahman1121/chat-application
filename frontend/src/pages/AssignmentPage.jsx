import AssignmentsHeader from '../components/AssignmentsHeader';
import AssignmentsList from '../components/AssignmentsList';
import Navbar from '../components/Navbar';
import AssignmentBody from '../components/AssignmentBody'
import './AssignmentPage.css'

export default function AssignmentPage() {
    return (
        <div id='assignment-page'>
            <Navbar />
            <div className='content'>
                <div className="main-content">
                    <AssignmentsHeader title={'Assignments'}/>
                    <AssignmentsList />
                </div>
                <AssignmentBody />
            </div>
        </div>
    )
}