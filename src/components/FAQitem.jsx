import React, { useState } from 'react';
import faq1 from '../assets/faq1.svg';
// import faq2 from '../assets/faq2.svg';

const FAQitem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-4xl mx-auto 
    mb-2 border-b-2 border-gray-200">
      <button 
        className="flex items-center justify-start 
        gap-10 w-full p-4 text-xl font-semibold 
        text-left text-[#1B365D] bg-[#E8EDF2] 
        hover:bg-gray-50 active:bg-gray-50 
        focus:outline-none"
        onClick={toggleFAQ}
      > 
      <span>
          <img 
            src={faq1} 
            alt={isOpen ? 'Collapse icon' : 'Expand icon'} 
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-135' : 'rotate-0'}`} 
          />
     </span>
        <span>{title}</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 text-gray-700 [#E8EDF2]">
          <p className='pl-12'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQitem;
