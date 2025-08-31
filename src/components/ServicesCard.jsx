
import Ser4 from '../assets/Ser4.svg'
import React from 'react';

const ServicesCard = ({ image, header, paragraph, features, children }) => {
  return (
    <div className="flex flex-col items-start p-6 shadow-md w-[32%] h-[80%] rounded-xl bg-white">
      <img src={image} alt={header} />

      <h3 className="text-xl font-semibold text-[#1b365d] mb-2">{header}</h3>

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

