// src/components/componentParts/ServicesPageCard.jsx

import React from 'react';
import clsx from 'clsx';
import Ser4 from '../../assets/Ser4.svg';

const ServicesPageCard = ({ 
  header, 
  paragraph,
  features, 
  image, 
  imageWidth, 
  imageHeight, 
  children,
  isReversed = false
}) => {
  return (
    // clsx used for dinamic changing flex properties
    <div className={clsx(
      'flex flex-col justify-center items-center bg-white p-9 rounded-xl shadow-md md:justify-between gap-8',
      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
    )}>
      
      {/* image */}
      <div className='flex-shrink-0 md:w-1/2'>
        <img src={image} alt={header} className={clsx('mx-auto', imageWidth, imageHeight)} />
      </div>

      {/* text content */}
      <div className='flex flex-col justify-center items-center md:items-start md:w-1/2'>
        <h2 className='text-2xl font-bold text-[#1B365D] pb-6 text-center md:text-left'>{header}</h2>
        <p className='text-sm text-[#1B365D] max-w-[580px] pb-3 text-center md:text-left'>
          {paragraph}
        </p>
            
        {/* services list */}
        {features?.length > 0 && (
          <ul className="space-y-2 mb-2 pb-4 list-none">
            {features.map((item, index) => (
              <li className='flex items-center justify-start gap-3' key={index}>
                <img src={Ser4} alt="vector" className="w-4 h-4" />
                <span className='text-[#374151]'>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* children button */}
        <div>
          {children}
        </div>
      </div>   
    </div>
  );
};

export default ServicesPageCard;