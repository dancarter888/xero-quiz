import React from "react";

const Banner = ({ categories, pageNum, teamName }) => {
  return (
    <div className="w-full h-28 bg-white flex flex-col">
      <h1 className="h-full mt-4 flex justify-center items-center font-bold text-3xl">
        {teamName}
      </h1>
      <div className="h-full flex justify-center items-end">
        {categories.map((category) => {
          return (
            <p
              className={`mx-3 ${
                category === categories[pageNum]
                  ? "text-blue-xero border-solid border-b-4 border-blue-xero"
                  : ""
              }`}
            >
              {category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
