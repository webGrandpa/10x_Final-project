// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import logo from '../assets/fincoLogo.svg';
import Button from './Button';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './headerGradient.module.css';
import LoginModal from './ModalComponents/LoginModal';
import RegistrationModal from './ModalComponents/RegistrationModal';
import ForgotPasswordModal from './ModalComponents/ForgotPasswordModal';


const Header = () => { 
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    const handleOutsideClick = (event) => {
      const isMenuButton = event.target.closest('button[aria-label="Toggle Menu"]');
      if (menuRef.current && !menuRef.current.contains(event.target) && !isMenuButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen, menuRef]);

  return (
    <>
      <div className={`header w-full h-[80px] px-6 md:px-10 lg:px-20
       flex items-center justify-between fixed top-0 left-0 z-50 ${styles.headerGradient} shadow-md`}>
        <Link to="/"><img src={logo} alt="FinCo Logo" className="h-[50px]" /></Link>
        <div className="hidden lg:flex items-center space-x-8 max-md:w-full text-center justify-between w-[75%]">
          <NavBar />
          <div className="flex space-x-4 max-md:w-full text-center">
            <button onClick={() => setShowLoginModal(true)}>
              <Button title="შესვლა"
                bgColor="bg-white"
                textColor="text-[#1b375d]"
                hoverText="text-white"
                hoverBg="bg-[#1b375d]"
              />
            </button>
            <button onClick={() => setShowRegistrationModal(true)}>
              <Button title="რეგისტრაცია"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
              />
            </button>
          </div>
        </div>
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-[#1b375d] text-4xl">
            {menuOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        </div>
        <div
          ref={menuRef}
          className={`
            fixed top-0 right-0 w-[50%] xs:w-1/2 sm:w-1/3 h-full bg-white transition-transform duration-500 transform
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-40
            flex flex-col items-center p-6 space-y-4 pt-20 shadow-lg
          `}>
          <NavBar />
          <div className="flex flex-col space-y-4 items-start justify-start w-full px-0 md:px-4">
            <button onClick={() => {
              setShowLoginModal(true);
              setMenuOpen(false);
            }}>
              <Button title="შესვლა"
                bgColor="bg-white"
                textColor="text-[#1b375d]"
                hoverText="text-white"
                hoverBg="bg-[#1b375d]"
              />
            </button>
            <button onClick={() => {
              setShowRegistrationModal(true);
              setMenuOpen(false);
            }}>
              <Button title="რეგისტრაცია"
                bgColor="bg-[#1b365d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
              />
            </button>
          </div>
        </div>
      </div>
      <LoginModal 
        showModal={showLoginModal} 
        setShowModal={setShowLoginModal} 
        setShowForgotPasswordModal={setShowForgotPasswordModal}
        setShowRegistrationModal={setShowRegistrationModal}
      />
      
      <RegistrationModal 
        showModal={showRegistrationModal} 
        setShowModal={setShowRegistrationModal} 
        setShowLoginModal={setShowLoginModal}
      />

      <ForgotPasswordModal
        showModal={showForgotPasswordModal}
        setShowModal={setShowForgotPasswordModal}
        setShowLoginModal={setShowLoginModal}
      />
    </>
  );
};

export default Header;