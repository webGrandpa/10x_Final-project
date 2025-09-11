// src/components/FAQ.jsx

import React, { useState } from 'react';
import FAQitem from './componentParts/FAQitem';
import SectionHeaders from './SectionHeaders';
// data
import { faqHeader, faqQuestions } from './data/FAQData';

const FAQ = () => {
  //open/close logic here
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#E8EDF2] py-6 px-4 md:px-30">
      <SectionHeaders
        header={faqHeader.header}
        padding='pt-10'
      />
      <div className="flex flex-col items-center">
        {faqQuestions.map((q) => (
          <FAQitem
            key={q.id} 
            id={q.id}
            title={q.title}
            content={q.content}
            isOpen={openId === q.id} 
            onToggle={() => handleToggle(q.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;