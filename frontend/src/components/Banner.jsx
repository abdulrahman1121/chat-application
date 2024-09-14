import './Banner.css'

export default function Banner({title}) {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <img src='/codedaylogo.png' alt='codeday-logo' className='codeday-logo'/>
                <h1>{title}</h1>
            </div>
        </div> 
    )
} 