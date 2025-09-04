import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="flex-grow">
      {children}
    </div>
  );
};

export default MainContent;