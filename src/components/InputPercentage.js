import React from 'react'

const InputPercentage = ({ correct, currentAnswer, setCurrentAnswer }) => {
    
    const handleChange = (e) => {
        if (!correct) {
            setCurrentAnswer(e.target.value);
        } 
    }

    return (
        <div className="w-full flex">
            <input className="w-auto border-solid border-b border-black appearance-none focus:border-b-2 focus:border-blue-xero focus:outline-none" type="number" onChange={handleChange} placeholder="Answer percentage" value={currentAnswer}/>
            <p className="font-bold text-xl">%</p>
        </div>
    )
}

export default InputPercentage
