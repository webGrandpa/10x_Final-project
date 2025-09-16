// src/components/componentParts/NewsCard.jsx

import React from 'react';

const NewsCard = ({ image, header, paragraph, date, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden
     flex h-full flex-col md:flex-row justify-center md:justify-items-start transition-transform hover:scale-101 duration-300">
      <img
        src={image}
        alt={header}
        className="max-w-[324px] h-48 object-cover" 
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#1B365D] mb-2 leading-tight">
          <span className="line-clamp-2">{header}</span>
        </h3>

        <p className="text-gray-600 text-sm flex-grow mb-4">
          <span className="line-clamp-3">{paragraph}</span>
        </p>

        <div className="flex justify-between items-center mt-auto pt-4">
          <span className="text-sm text-gray-500">{date}</span>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;