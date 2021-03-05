import React from 'react'
import arrow from '../images/arrowIcon.svg';

const HomeCard = ({ setPageNum }) => {
    return (
        <div className="h-96 w-full max-w-screen-md bg-white rounded-md shadow mt-56 p-4"> 
            <div className="font-bold text-2xl w-full h-2/3 flex justify-center items-center">BACK TO SCHOOL CHALLENGE</div>
            <div className="w-full h-1/3 flex justify-end items-end">
                <button className="flex justify-center items-center focus:outline-none" onClick={() => {setPageNum(0)}}>
                    <div className="pr-2">Take the challenge</div>
                    <img className="h-4 w-auto" src={arrow} alt="arrow"/>
                </button>
            </div>
        </div>
    )
}

export default HomeCard;
