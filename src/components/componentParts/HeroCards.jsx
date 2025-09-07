import React from 'react'

const HeroCards = ({
  cardImage,
  numTitle, 
  textTitle, 
  fontSize,
  direction = 'flex-row',
  wrapperCenter = 'justify-start',
  alignCenter = 'items-start',
  noWrap = true,
  text = ''

}) => {
  return (

    <div className={`flex gap-2.5 items-center ${wrapperCenter} w-full ${direction}`}>
      <img src={cardImage} alt=""
        className='w-12 h-12 object-contain align-middle'
      />
      <p className={`flex flex-col ${alignCenter} justify-center`}>
        <span className={`text-${fontSize} font-bold`}>{numTitle}</span>
        <span className={`text-sm text-gray-500 ${noWrap ? 'whitespace-nowrap' : ''}`}>{textTitle}</span>
      </p>
      <p className='text-m text-gray-500'>{text}</p>
    </div>
  )
}

export default HeroCards