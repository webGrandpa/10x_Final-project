// src/components/LoginModal.jsx
import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo from '../assets/fincoLogo.svg';
import { Link } from 'react-router-dom';

const LoginModal = ({ showModal, setShowModal, setShowRegistrationModal, setShowForgotPasswordModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('გინდა შესვლა მარა სადაა:', { email, password });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setShowModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-lg flex 
      items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={() => setShowModal(false)}
    >
      <div className='md:w-[100%] flex items-center justify-center '>
          <div
            className="rounded-xl shadow-2xl bg-white z-50
            w-full max-w-lg p-8 relative transform scale-95 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4
              cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              <img src={logo} alt="Logo" className="w-40 mb-4" />
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium
                text-gray-700 mb-1">
                  ელექტრონული ფოსტა
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onInvalid={e => e.target.setCustomValidity('გთხოვთ შეიყვანოთ ელ-ფოსტა.')}
                  onInput={e => e.target.setCustomValidity('')}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  პაროლი
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300
                  rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onInvalid={e => e.target.setCustomValidity('გთხოვთ შეიყვანოთ პაროლი.')}
                  onInput={e => e.target.setCustomValidity('')}
                />
              </div>
          
              <div className="flex justify-between items-center text-sm">
                <Link
                to="#"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                onClick={() => {
                  setShowModal(false);
                  setShowForgotPasswordModal(true);
                }}
              >
                დაგავიწყდათ პაროლი?
              </Link>
                <Link
                  to="/registration"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  onClick={() => {
                    setShowModal(false)
                    setShowRegistrationModal(true)
                    
                  }}
                  
                >
                  რეგისტრაცია
                </Link>
              </div>
              <div className='w-full text-center'>
                <Button
                  title="შესვლა"
                  bgColor="bg-[#1b375d]"
                  textColor="text-white"
                  hoverText="text-[#1b375d]"
                  hoverBg="bg-white"
                  textStart='text-center'
                />
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default LoginModal;