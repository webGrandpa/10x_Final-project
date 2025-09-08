import React from 'react'
import Ser4 from '../../assets/Ser4.svg'

const ServicesPageCard = ({ header, paragraph,
  features, image, imageWidth, imageHeight, children }) => {
  return (
    <div className='flex flex-col md:flex-row-reverse md:justify-between justify-center 
      items-center bg-white p-9 rounded-xl shadow-md'>
      <img src={image} alt={header} 
        className={`max-${imageWidth} ${imageHeight} md:p-4`}/>
      <div className='flex flex-col justify-center md:items-start items-center gap-4'>
        <h2 className='text-2xl font-bold text-[#1B365D] pb-6'>{header}</h2>
        <p className={`text-sm text-[#1B365D] max-w-[580px] pb-3`}
        >{paragraph}</p>
            
        {features?.length > 0 && (
        <ul className="text-[#374151] list-disc list-inside space-y-1 mb-2 pb-4">
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
            <div>
              {children}
            </div>
        </div>   

        
    </div>
  )
}

export default ServicesPageCard