import React from 'react';

const Banner = ({ categories, pageNum }) => {

    return (
        <div className="w-full h-28 bg-white flex justify-center items-end">
            {categories.map(category => {
                return (
                    <p className={`mx-3 ${category === categories[pageNum]? "text-blue-xero border-solid border-b-4 border-blue-xero" : ""}`}>{category}</p>
                );
            })}
        </div>
    )
}

export default Banner
