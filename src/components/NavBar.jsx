import React from 'react'
import LiTag from './LiTag'


const NavBar = () => {
  return (
    <div className="navbar w-full flex items-center justify-start lg:h-[60px]">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <LiTag title="ჩვენ შესახებ" to="/about-us" />
          <LiTag title="სერვისები" to="/services" />
          <LiTag title="განათლება" to="/education" />
          <LiTag title="კითხვები" to="/faq" />
          <LiTag title="სიახლეები" to="/news" />
          <LiTag title="კონტაქტი" to="/contact" />
        </ul>
    </div>
  )
}

export default NavBar