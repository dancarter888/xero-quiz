import React from 'react'

const InputNumber = ({ correct, currentAnswer, setCurrentAnswer }) => {

    const handleChange = (e) => {
        if (!correct) {
            setCurrentAnswer(e.target.value);
        } 
    }

    return (
        <div className="w-full">
            <input className="w-1/2 border-solid border-b border-black appearance-none focus:border-b-2 focus:border-blue-xero focus:outline-none" type="number" onChange={handleChange} placeholder="Answer number" value={currentAnswer} />
        </div>
    )
}

export default InputNumber
