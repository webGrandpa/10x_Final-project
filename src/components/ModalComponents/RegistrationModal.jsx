// src/components/RegistrationModal.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/fincoLogo.svg';

const RegistrationModal = ({ showModal, setShowModal, setShowLoginModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("პაროლები არ ემთხვევა!");
      return;
    }
    console.log('რეგისტრაციის მცდელობა:)', { email, password });
    // setShowModal(false);
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
      <div className='md:w-[100%] flex items-center justify-center'>
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
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <img src={logo} alt="Logo" className="w-40 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              რეგისტრაციის ფორმა
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              შექმენით თქვენი ანგარიში.
            </p>
          </div>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                ელექტრონული ფოსტა
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                onInvalid={e => e.target.setCustomValidity('Пожалуйста, введите адрес электронной почты.')}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                onInvalid={e => e.target.setCustomValidity('Пароль обязателен для заполнения.')}
                onInput={e => e.target.setCustomValidity('')}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                გაიმეორეთ პაროლი
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                onInvalid={e => e.target.setCustomValidity('Пожалуйста, подтвердите пароль.')}
                onInput={e => e.target.setCustomValidity('')}
              />
            </div>
            <div className="mt-6 text-center text-sm underline">
              უკვე გაქვთ ანგარიში?  
              <Link
                to="#"
                className="text-blue-500 hover:underline transition-colors pl-2"
                onClick={() => {
                  setShowModal(false);
                  setShowLoginModal(true);
                }}
              >
                      შესვლა
              </Link>
          </div>
            <div className='w-full text-center'>
              <Button
                title="რეგისტრაცია"
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

export default RegistrationModal;