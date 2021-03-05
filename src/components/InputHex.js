import React from 'react';

const InputHash = ({ correct, currentAnswer, setCurrentAnswer }) => {

    const handleChange = (e) => {
        if (!correct) {
            setCurrentAnswer(e.target.value);
        } 
    }

    return (
        <div className="w-full flex">
            <p className="font-bold text-xl">#</p>
            <input className="w-1/2 border-solid border-b border-black appearance-none focus:border-b-2 focus:border-blue-xero focus:outline-none" type="text" onChange={handleChange} placeholder="Answer hex" value={currentAnswer}/>
        </div>
    )
}

export default InputHash
