import { queryByDisplayValue } from '@testing-library/dom';
import { useEffect, useState } from 'react'
import EndQuiz from './EndQuiz';
import './Question.css'

const quizData = [
    {
        question: "In 1768, Captain James Cook set out to explore which ocean?",
        answerOptions :[
        {answerText : "Pacific Ocean", isCorrect : true},
        {answerText : "Atlantic Ocean", isCorrect : false},
        {answerText : "Indian Ocean", isCorrect : false},
        {answerText : "Arctic Ocean", isCorrect : false}]

    },
    {
        question: "What is actually electricity?",
        answerOptions :[
        {answerText : "A flow of water", isCorrect : false},
        {answerText : "A flow of air", isCorrect : false},
        {answerText : "A flow of electrons", isCorrect : true},
        {answerText : "A flow of atoms", isCorrect : false}]

    },
    {
        question: "Which of the following is not an international organisation?",
        answerOptions :[
        {answerText : "FIFA", isCorrect : false},
        {answerText : "NATO", isCorrect : false},
        {answerText : "ASEAN", isCorrect : false},
        {answerText : "FBI", isCorrect : true}]

    },
    {
        question: "Which of the following disorders is the fear of being alone?",
        answerOptions :[
        {answerText : "Agoraphobia", isCorrect : true},
        {answerText : "Aerophobia", isCorrect : false},
        {answerText : "Acrophobia", isCorrect : false},
        {answerText : "Arachnophobia", isCorrect : false}]

    },
    {
        question: "Which of the following is a song by the German heavy metal band “Scorpions”?",
        answerOptions :[
        {answerText : "Stairway to Heaven", isCorrect : false},
        {answerText : "Wind of Change", isCorrect : true},
        {answerText : "Don’t Stop Me Now", isCorrect : false},
        {answerText : "Hey Jude", isCorrect : false}]

    },
    {
        question: "What is the speed of sound?",
        answerOptions :[
        {answerText : "120 km/h", isCorrect : false},
        {answerText : "1,200 km/h", isCorrect : true},
        {answerText : "400 km/h", isCorrect : false},
        {answerText : "700 km/h", isCorrect : false}]

    },
    {
        question: "Which is the easiest way to tell the age of many trees?",
        answerOptions :[
        {answerText : "To measure the width of the tree", isCorrect : false},
        {answerText : "To count the rings on the trunk", isCorrect : true},
        {answerText : "To count the number of leaves", isCorrect : false},
        {answerText : "To measure the height of the tree", isCorrect : false}]

    },
    {
        question: "What do we call a newly hatched butterfly?",
        answerOptions :[
        {answerText : "A moth", isCorrect : false},
        {answerText : "A butter", isCorrect : false},
        {answerText : "A caterpillar", isCorrect : true},
        {answerText : "A chrysalis", isCorrect : false}]

    },

]


export default function Question({end,cscore, total}) {

    const [questionNumber, setQuestionNumber ] = useState(0);
    const [ s, setS] = useState(0);
    const [isClicked, setIsClicked] = useState(-1)
    const [ correct, setCorrect] = useState(-1)
    const [enabled, setEnabled] = useState(true)
    const [disabled, setDisabled] = useState('option')

    total(quizData.length)
    
    const nextQuestion = () => {
        let n = questionNumber+1;
        if( n < quizData.length){
            setQuestionNumber(n)
            setCorrect(-1)
        }else{
            end()
        }
        setIsClicked(-1)
        setCorrect(-1)
        setEnabled(true)
        setDisabled("option")
    }

    const checkAns = (n) => {
        setIsClicked(n)
        setEnabled(false)
        setDisabled("disabled")
        if(quizData[questionNumber].answerOptions[n].isCorrect){
            let i = s+1
            setS(i)
            cscore(i)
           
        }
        quizData[questionNumber].answerOptions.forEach(function (item, index){
            if(item.isCorrect){
                setCorrect(index)
            }
        })
    }




    

    return (
        <div className='question-container'>
            <h2 className="question">{quizData[questionNumber].question}</h2>

            <div className="options">
                <div 
                    className={`${disabled} ${correct == 0  ? "right" : ""} ${isClicked == 0 && isClicked != correct ? "wrong" : ""}`} 
                    onClick={() => checkAns(0)}
                    disabled={!enabled}>
                    {quizData[questionNumber].answerOptions[0].answerText}
                </div>
                <div className={`${disabled} ${correct == 1  ? "right" : ""} ${isClicked == 1 && isClicked != correct ? "wrong" : ""}`} onClick={() => checkAns(1)}>{quizData[questionNumber].answerOptions[1].answerText}</div>
                <div className={`${disabled} ${correct == 2  ? "right" : ""} ${isClicked == 2 && isClicked != correct ? "wrong" : ""}`} onClick={() => checkAns(2)}>{quizData[questionNumber].answerOptions[2].answerText}</div>
                <div className={`${disabled} ${correct == 3  ? "right" : ""} ${isClicked == 3 && isClicked != correct ? "wrong" : ""}`} onClick={() => checkAns(3)}>{quizData[questionNumber].answerOptions[3].answerText}</div>
            </div>
            
             <button className='btn' onClick={nextQuestion} disabled={enabled}>Next</button>
           
        </div>
    )
}
