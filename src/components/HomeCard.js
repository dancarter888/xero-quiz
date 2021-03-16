import React from "react";
import arrow from "../images/arrowIcon.svg";

const HomeCard = ({ setPageNum, teamName, setTeamName }) => {
  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <div className="h-96 w-full max-w-screen-md bg-white rounded-md shadow mt-56 p-4">
      <div className="font-bold text-2xl w-full flex justify-center items-center py-20">
        BACK TO SCHOOL CHALLENGE
      </div>
      <div className="flex justify-center items-center">
        <input
          className="w-1/2 border-solid border-b border-black focus:border-b-2 focus:border-blue-xero focus:outline-none"
          type="text"
          onChange={handleChange}
          placeholder="Enter Team Name"
          value={teamName}
        />
      </div>
      <div className="w-full h-32 flex justify-end items-end">
        {teamName !== "" ? (
          <button
            className="flex justify-center items-center focus:outline-none"
            onClick={() => {
              setPageNum(0);
            }}
          >
            <div className="pr-2">Take the challenge</div>
            <img className="h-4 w-auto" src={arrow} alt="arrow" />
          </button>
        ) : (
          <div className="flex justify-center items-center focus:outline-none">
            <div className="pr-2 text-gray-500">Take the challenge</div>
            <img className="h-4 w-auto" src={arrow} alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
