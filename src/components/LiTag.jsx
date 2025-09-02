import React from 'react';

const LiTag = ({ title }) => {
  return (
    <div className="text-[#374151d1] lg:hover:text-[#1b375d] cursor-pointer">
      <a 
        href="#" 
        className="
          relative block py-1.5 no-underline text-base font-medium
          lg:inline-block
          lg:before:content-[''] lg:before:absolute lg:before:bottom-0 
          lg:before:left-1/2 lg:before:w-0 lg:before:h-[2px] 
          lg:before:bg-[#1b375d] lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out
          lg:hover:before:w-full lg:hover:before:left-0
          
          text-lg md:text-xl lg:text-base // Увеличиваем размер текста на мобильных и планшетах
        "
      >
        {title}
      </a>
    </div>
  );
};

export default LiTag;