// src/components/FAQ.jsx
import React, { useState } from 'react';
import FAQitem from './componentParts/FAQitem';
import SectionHeaders from './SectionHeaders';
import { faqData } from './data/homePage/faqData.js';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#E8EDF2] py-10 px-4">
      <SectionHeaders
        header={faqData.sectionHeader.header}
      />
      <div className="flex flex-col items-center mt-8">
        {faqData.questions.map((q) => (
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