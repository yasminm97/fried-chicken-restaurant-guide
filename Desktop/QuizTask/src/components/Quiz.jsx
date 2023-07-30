import { useState } from "react";

const Answers = (props) => {
    const bool = props.isCorrect;
    const [backgroundColor, setBackgroundColor] = useState('antiquewhite');
  
    const handleCheck = () => setBackgroundColor(bool ? 'green' : 'red')
    return(
        <div className="card" style={{ backgroundColor }} onClick={handleCheck}>
          {props.ans}
        </div>
      )
  }
const answers=[{
    answer:'answer 1',
    isCorrect:false
},
{
    answer:'answer 2',
    isCorrect:true
},
{
    answer:'answer 3',
    isCorrect:false
}];


const QuizApp = (props) => {
    return(
        <div className="quiz-app">
          <div className="q card">
            <p>{props.qus}</p>
          </div>
          {answers.map((answer, index) =>
            <Answers key={index} ans={answer.answer} isCorrect={answer.isCorrect} />
          )}
        </div>
      )
}
export default QuizApp