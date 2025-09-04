import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import logo from '../assets/fincoLogo.svg';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log('პაროლის აღდგენო:', { email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-xl shadow-2xl bg-white w-full max-w-md p-8">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            დაგავიწყდათ პაროლი?
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            შეიყვანეთ თქვენი ელ-ფოსტა რომელიც დაკავშირებულია თქვენს ანგარიშთან.
          </p>
        </div>
        <form onSubmit={handleReset} className="space-y-6">
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
          <div className='w-full text-center'>
            <Button
              title="გაგზავნა"
              bgColor="bg-[#1b375d]"
              textColor="text-white"
              hoverText="text-[#1b375d]"
              hoverBg="bg-white"
            />
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">
            მთავარზე დაბრუნება
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
