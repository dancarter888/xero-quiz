import React, {useState, useEffect} from 'react';
import QuestionCard from './QuestionCard';
import arrow from '../images/arrowIcon.svg';

const Questions = ({ questions, pageNum, setPageNum }) => {
    const [currentAnswer0, setCurrentAnswer0] = useState("");
    const [correct0, setCorrect0] = useState(null);
    const [currentAnswer1, setCurrentAnswer1] = useState("");
    const [correct1, setCorrect1] = useState(null);
    const [currentAnswer2, setCurrentAnswer2] = useState("");
    const [correct2, setCorrect2] = useState(null);

    const currents = [currentAnswer0, currentAnswer1, currentAnswer2];
    const setCorrects = [setCorrect0, setCorrect1, setCorrect2];

    useEffect(() => {
        setCurrentAnswer0("");
        setCurrentAnswer1("");
        setCurrentAnswer2("");
        setCorrect0(null);
        setCorrect1(null);
        setCorrect2(null);
    }, [questions])


    const handleNext = () => {
        setPageNum(pageNum + 1)
    }

    const checkSimilarity = (s1, s2) => {
        var longer = s1;
        var shorter = s2;
        if (s1.length < s2.length) {
          longer = s2;
          shorter = s1;
        }
        var longerLength = longer.length;
        if (longerLength === 0) {
          return 1.0;
        }
        console.log((longerLength - editDistance(longer, shorter)) / parseFloat(longerLength));
        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    const editDistance = (s1, s2) => {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
      
        var costs = [];
        for (var i = 0; i <= s1.length; i++) {
          var lastValue = i;
          for (var j = 0; j <= s2.length; j++) {
            if (i === 0)
              costs[j] = j;
            else {
              if (j > 0) {
                var newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                  newValue = Math.min(Math.min(newValue, lastValue),
                    costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
              }
            }
          }
          if (i > 0)
            costs[s2.length] = lastValue;
        }
        return costs[s2.length];
      }

    const handleCheck = (question, currentAnswer, setCorrect, index) => {
        if ((question.type !== "text" && currentAnswer.toLowerCase() === question.answer.toLowerCase()) || (question.type === "text" && checkSimilarity(currentAnswer, question.answer) > 0.85)) {
            console.log("CORRECT");
            setCorrect(true);
            console.log(correct0, correct1, correct2);

        } else {
            console.log("INCOORECT");
            setCorrect(false);
        }
    }

    const handleChecks = () => {
        for (let i = 0; i < questions.length; i ++ ) {
            handleCheck(questions[i], currents[i], setCorrects[i], i)
        }

    }

    return (
        <div className="w-1/2">
            <QuestionCard currentAnswer={currentAnswer0} setCurrentAnswer={setCurrentAnswer0} correct={correct0} setCorrect={setCorrect0} question={questions[0]} index={0}/>
            <QuestionCard currentAnswer={currentAnswer1} setCurrentAnswer={setCurrentAnswer1} correct={correct1} setCorrect={setCorrect1} question={questions[1]} index={1}/>
            <QuestionCard currentAnswer={currentAnswer2} setCurrentAnswer={setCurrentAnswer2} correct={correct2} setCorrect={setCorrect2} question={questions[2]} index={2}/>
            {!(correct0 && correct1 && correct2) ?
            <div className="w-full flex justify-center mt-4">
                <button className="w-full bg-green-500 active:bg-green-700 text-white py-1 px-2 rounded focus:outline-none" onClick={handleChecks}>Check</button>
            </div> :
            null}
            {correct0 && correct1 && correct2 ? 
             <button className="w-full flex justify-end items-center mt-2 focus:outline-none" onClick={handleNext}>
                <div className="pr-2">{pageNum <  5 ? "Next" : "Finish"}</div>
                <img className="h-4 w-auto" src={arrow} alt="arrow"/>
            </button>: 
             null}
        </div>
    )
}

export default Questions;
