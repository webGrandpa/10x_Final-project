import React from 'react'
import LiTag from './LiTag'


const NavBar = () => {
  return (
    <div className="navbar w-full flex items-center justify-start lg:h-[60px]">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <LiTag title="ჩვენ შესახებ" />
          <LiTag title="სერვისები" />
          <LiTag title="განათლება" />
          <LiTag title="კითხვები" />
          <LiTag title="სიახლეები" />
          <LiTag title="კონტაქტი" />
        </ul>
    </div>
  )
}

export default NavBar