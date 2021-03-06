import React from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputMc from './InputMc';
import InputPercentage from './InputPercentage';
import InputHex from './InputHex';
import imgCorrect from '../images/correct.svg';
import imgIncorrect from '../images/incorrect.svg';

const QuestionCard = ({ currentAnswer, setCurrentAnswer, correct, setCorrect, question, index, allCorrect, setAllCorrect }) => {    

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

    console.log('current answer', currentAnswer)

    return (
        <div className="w-full h-auto bg-white rounded-md shadow p-4 mt-4">
            <h1 className="text-lg mb-2">{question.question}</h1>
            {renderInput(question.type)}
            <div className="flex justify-between mt-2">
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
