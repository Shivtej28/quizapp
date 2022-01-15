import { useState } from 'react';
import './App.css';
import EndQuiz from './components/EndQuiz';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Welcome from './components/Welcome';

function App() {

  const [ isStarted, setIsStarted ] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQ, setTotalQ]  = useState(0);

  const startQuiz = () => {
    setIsStarted(true)
  }

  const changeScore = (n) => {
    setScore(n)
    console.log(score);
  }

  const changeQN = (n) => {
    setTotalQ(n)
  }


  
  return (
    <div className="App">
      <h1>Quiz Created in React</h1>
      <div className="container">

        {!isStarted && <Welcome handleClick={startQuiz}/>}
        {isStarted && !endQuiz && 
          <Question 
            end={() => setEndQuiz(true)} 
            cscore={changeScore} 
            total={changeQN}/>}

        {endQuiz && <EndQuiz score={score} total={totalQ}/>}
      </div>
    </div>
  );
}

export default App;
