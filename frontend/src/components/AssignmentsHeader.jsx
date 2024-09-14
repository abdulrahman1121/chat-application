import './AssignmentsHeader.css'

export default function AssignmentsHeader({title}) {
    return (
        <div id='header'> 
            <div className="header-container">
                <img src='/codedaylogo.png' alt='codeday-logo' className='logo'/>
                <h1>{title}</h1>
            </div>
        </div>
    )
} 