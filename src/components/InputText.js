import React from 'react'

const InputText = ({ correct, currentAnswer, setCurrentAnswer }) => {

    const handleChange = (e) => {
        if (!correct) {
            setCurrentAnswer(e.target.value);
        } 
    }

    return (
        <div className="w-full">
            <input className="w-1/2 border-solid border-b border-black focus:border-b-2 focus:border-blue-xero focus:outline-none" type="text" onChange={handleChange} placeholder="Answer text" value={currentAnswer} />
        </div>
    )
}

export default InputText
