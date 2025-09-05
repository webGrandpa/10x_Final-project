import React from 'react';

const List = ({ HeaderTitle, ListItems }) => {
  return (
    <div>
        <h3 className='text-lg font-bold mb-2'>{HeaderTitle}</h3>
        <ul>
            {ListItems.map((item) => (
                <li
                className='list-item text-[#cccccc] 
                hover:text-blue-500 cursor-pointer 
                text-sm py-1 underline'
                key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  );
};

export default List;