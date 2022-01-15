import './Welcome.css'

export default function Welcome({handleClick}) {
    return (
        <div className='welcome'>
            <h2 className='header'>Welcome to Our Quiz</h2>
            <span className='subtitle'>Created by: Shivtej Deshmukh</span>
            <button className='btn' onClick={handleClick}>Start</button>
        </div>
    )
}
