import Ser4 from '../assets/Ser4.svg'
import React from 'react';

const ServicesCard = ({ image, header, paragraph, width = 'w-16', height = 'h-16',
  features, direction = 'flex-row', children }) => {
  return (
    <div className="flex flex-col items-start p-6 shadow-md w-full rounded-xl bg-white">
      <div className={`flex items-center gap-2 justify-center p-2 ${direction}`}>
        <img src={image} alt={header} className={`${width} ${height}} sm:w-auto sm:h-auto`} />
        <h3 className="text-xl font-semibold text-[#1b365d] text-center sm:text-start text-start">{header}</h3>
      </div>
      <p className="text-[#374151] text-start mb-4 md:pl-2">{paragraph}</p>

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
      <div className="flex-grow flex items-end justify-center md:justify-start w-full">
        {children}
      </div>
    </div>
  )
}

export default ServicesCard