
import Ser4 from '../assets/Ser4.svg'
import React from 'react';

const ServicesCard = ({ image, header, paragraph, features, direction, children }) => {
  return (
    <div className="flex flex-col items-start p-4 shadow-md w-[33%] max-h-[32.5rem] rounded-xl bg-white">
      <div className={`flex items-center gap-2 justify-center p-2 ${direction}`}>
        <img src={image} alt={header} />
        <h3 className="text-xl font-semibold text-[#1b365d]">{header}</h3>
      </div>
      <p className="text-[#374151] text-start mb-4">{paragraph}</p>

      {features?.length > 0 && (
        <ul className="text-[#374151] list-disc list-inside space-y-1 mb-2">
          {features.map((item, index) => (
            <li
              className='flex items-center justify-start gap-2'
              key={index}>
              <img src={Ser4} alt="vector" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="flex-grow flex items-end justify-start w-full">
        {children}
      </div>
    </div>
  )
}

export default ServicesCard

