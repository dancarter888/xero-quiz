import React, {useState} from 'react';
import QuestionCard from './QuestionCard';
import arrow from '../images/arrowIcon.svg';

const Questions = ({ questionAnswers, pageNum, setPageNum }) => {

    const [allCorrect, setAllCorrect] = useState([false, false, false]);
    console.log(allCorrect);

    const handleNext = () => {
        setPageNum(pageNum + 1)
        setAllCorrect([false, false, false]);
    }

    return (
        <div className="w-1/2">
            {questionAnswers.map((question, index) => {
                return (
                    <QuestionCard question={question} index={index} allCorrect={allCorrect} setAllCorrect={setAllCorrect}/>
                );
            })}
            {allCorrect[0] === true && allCorrect[1] === true && allCorrect[2] === true ? 
             <button className="w-full flex justify-end items-center mt-2 focus:outline-none" onClick={handleNext}>
                <div className="pr-2">{pageNum <  5 ? "Next" : "Finish"}</div>
                <img className="h-4 w-auto" src={arrow} alt="arrow"/>
            </button>: 
             null}
        </div>
    )
}

export default Questions;
