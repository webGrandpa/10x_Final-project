// src/components/NavBar.jsx
import React from 'react'
import LiTag from './LiTag'


const NavBar = ({ onLinkClick }) => {
  return (
    <div className="navbar w-full flex items-center justify-start lg:h-[60px]">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <LiTag title="ჩვენ შესახებ" to="/about-us" onClick={onLinkClick} />
          <LiTag title="სერვისები" to="/services" onClick={onLinkClick} />
          <LiTag title="განათლება" to="/education" onClick={onLinkClick} />
          <LiTag title="კითხვები" to="/faq" onClick={onLinkClick} />
          <LiTag title="სიახლეები" to="/news" onClick={onLinkClick} />
          <LiTag title="კონტაქტი" to="/contact" onClick={onLinkClick} />
        </ul>
    </div>
  )
}

export default NavBar