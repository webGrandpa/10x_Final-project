import React from 'react'

const HeroCards = ({cardImage,numTitle, textTitle, fontSize}) => {
  return (
    <div className="flex gap-2.5 items-center justify-center space-y-2 p-4">
        <img src={cardImage} alt=""
        className='w-12 h-12 object-contain align-middle'
        />
        <p className="flex flex-col items-start justify-center">
            <span className={`text-${fontSize} font-bold`}>{numTitle}</span>
            <span className="text-sm text-gray-500">{textTitle}</span>
        </p>
    </div>
  )
}

export default HeroCards