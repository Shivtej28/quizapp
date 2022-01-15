import { useEffect, useState } from 'react'
import './EndQuiz.css'

export default function EndQuiz({score, total}) {

   
   const refresh = () => {
       window.location.reload()
   }

   
   
    return (
        <div
            className='endquiz'>
                <h2 className="header">{score < 4 ? "Oopss...!" : "Congratulations...!"}</h2>
            <div className="content">
                <p className="subtitle">You have completed the quiz. 
                <br></br> You got : 
                <strong> {score} </strong>
                out of 
                <strong> {total} </strong>
                questions right.
                 </p>

                 <button className='btn' onClick={refresh}>Restart</button>
            </div>

            
        </div>
    )
}
