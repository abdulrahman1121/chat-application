import './Banner.css'

export default function Banner({title}) {
    return (
        <div className='banner'>
            <div id='banner-content'>
                <h1>{title}</h1>
            </div>
        </div> 
    )
} 