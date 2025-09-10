import React from 'react'


const NewsCard = ({ children, date, image, header, paragraph }) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{header}</h3>
        <p>{paragraph}</p>
        <div>
            <span>{date}</span>
            {children}
        </div>
    </div>
  )
}

export default NewsCard