import React from 'react';

const LiTag = ({ title }) => {
  return (
    <div className=' text-[#374151d1] hover:text-[#1b375d] cursor-pointer'>
      <a 
        href="" 
        className="relative inline-block py-1.5 no-underline ext-base
                   before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-[#1b375d] before:transition-all before:duration-300 before:ease-in-out
                   hover:before:w-full hover:before:left-0 "
      >
        {title}
      </a>
    </div>
  );
};

export default LiTag;