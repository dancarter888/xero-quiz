import React from 'react'

const InputMc = ({ question, choices, setCurrentAnswer }) => {

    const handleChange = (e) => {

        setCurrentAnswer(e.target.value);
    }

    return (
        <div className="w-full flex flex-col">
            {choices.map(choice => {
                return (
                    <div className="flex items-center">
                        <input className="mr-1" type="radio" id={choice} name={question} value={choice} onChange={handleChange}/>
                        <label htmlFor={choice}>{choice}</label>
                    </div>
                );
            })}
        </div>
        
    )
}

export default InputMc
