import React from 'react';
import ButtonArrow from '../assets/ButtonArrow.svg'


const ButtonWithArrow = ({ buttonText, self = 'self-start',
  showArrow = true }) => {
  return (
    <div className={`w-52 h-14 flex justify-center items-center ${self}`}>
      <button className="group relative mt-7 flex items-center justify-between
      gap-3 rounded-3xl bg-[#EBF0F5] px-4 py-1.5 text-[#1B365D] shadow-md
      transition-all duration-100 hover:scale-101 cursor-pointer
      active:scale-99 hover:border-[0.5px] hover:shadow-none mb-4">
        <span>{buttonText}</span>
        {showArrow && (
          <div className="flex items-center">
            <div className="relative h-[1.5px] w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute left-[9px] top-[0.5] h-full w-full bg-[#1B365D]"></div>
            </div>
            <img
            className='w-3 h-3 transition-transform duration-200 group-hover:translate-x-[2px]'
            viewBox="0 0 16 16"
            src={ButtonArrow} alt="Arrow" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ButtonWithArrow;
