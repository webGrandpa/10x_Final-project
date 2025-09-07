import React from 'react'

const Figure = ({ image, caption, direction = 'row' }) => {
  return (
    <figure className={`flex items-center justify-center flex-${direction} gap-2.5`}>
      <img src={image} alt={caption} />
      <figcaption>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}

export default Figure