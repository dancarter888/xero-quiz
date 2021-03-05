import React, {useState, useEffect} from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputMc from './InputMc';
import InputPercentage from './InputPercentage';
import InputHex from './InputHex';
import imgCorrect from '../images/correct.svg';
import imgIncorrect from '../images/incorrect.svg';

const QuestionCard = ({ question, index, allCorrect, setAllCorrect }) => {

    const [currentAnswer, setCurrentAnswer] = useState("");
    const [correct, setCorrect] = useState(null);

    useEffect(() => {
        setCurrentAnswer("");
        setCorrect(null);
    }, [question])

    

    const renderInput = (type) => {
        switch (question.type) {
            case "text":
                return <InputText correct={correct} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer}/>;
            case "number":
                return <InputNumber correct={correct} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer}/>;
            case "mc":
                return <InputMc question={question.question} choices={question.choices} setCurrentAnswer={setCurrentAnswer}/>;
            case "percentage":
                return <InputPercentage correct={correct} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer}/>;
            case "hex":
                return <InputHex correct={correct} currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer}/>;
            default:
                break;
        }
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

    const handleCheck = () => {
        if ((question.type !== "text" && currentAnswer.toLowerCase() === question.answer.toLowerCase()) || (question.type === "text" && checkSimilarity(currentAnswer, question.answer) > 0.85)) {
            console.log("CORRECT");
            var localAll = [...allCorrect];
            localAll[index] = true;
            setCorrect(true);
            setAllCorrect(localAll);

        } else {
            console.log("INCOORECT");
            setCorrect(false);
        }
    }

    console.log('current answer', currentAnswer)

    return (
        <div className="w-full p-4 h-auto w-full bg-white rounded-md shadow p-4 mt-4">
            <h1 className="text-lg mb-2">{question.question}</h1>
            {renderInput(question.type)}
            <div className="flex justify-between mt-2">
                <button className="bg-green-500 active:bg-green-700 text-white py-1 px-2 rounded focus:outline-none" onClick={handleCheck}>Check</button>
                {correct === true ? <div className="flex items-center">
                    <img className="h-4 w-auto mr-1" src={imgCorrect} alt="correct" />
                    <p className="text-green-500">Correct</p>
                </div> : null}
                {correct === false ? <div className="flex items-center">
                    <img className="h-4 w-auto mr-1" src={imgIncorrect} alt="incorrect" />
                    <p className="text-red-500">Try again</p>
                </div> : null}
            </div>
        </div>
    )
}

export default QuestionCard;
