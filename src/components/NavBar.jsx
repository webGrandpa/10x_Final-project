import React from 'react'
import logo from '../assets/fincoLogo.svg'
import LiTag from './LiTag'
import Button from './Button'


const NavBar = () => {
  return (
    <div className="navbar w-full h-[60px] flex items-center justify-between px-20">
       <a href="/"><img src={logo} alt="FinCo Logo" /></a>
        <ul className="flex space-x-4">
          <LiTag title="ჩვენ შესახებ" />
          <LiTag title="სევისები" />
          <LiTag title="განათლება" />
          <LiTag title="კითხვები" />
          <LiTag title="სიახლეები" />
          <LiTag title="კონტაქტი" />
        </ul>
        <div className="flex space-x-4">
            <Button title="შესვლა"
            bgColor="bg-white"
            textColor="text-[#1b375d]"
            hoverText="text-white"
            hoverBg="bg-[#1b375d]"
            />
            <Button title="რეგისტრაცია"
            bgColor="bg-[#1b375d]"
            textColor="text-white"
            hoverText="text-[#1b375d]"
            hoverBg="bg-white"
            />
        </div>
    </div>
  )
}

export default NavBar