import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import logo from '../assets/fincoLogo.svg';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("პაროლები არ ემთხვევა!");
      return;
    }
    console.log('ვითომ რეგისტრაცია:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
    pt-5 md:pt-10 bg-gray-100 p-4">
      <div className="rounded-xl shadow-2xl bg-white w-full max-w-md p-8">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            რეგისტრაციის ფორმა
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            დასაწყებად შექმენით თქვენი ანგარიში.
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
          <div className='w-full text-center'>
            <Button
              title="რეგისტრაცია"
              bgColor="bg-[#1b375d]"
              textColor="text-white"
              hoverText="text-[#1b375d]"
              hoverBg="bg-white"
            />
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
          უკვე გაქვთ ანგარიში? 
          <Link to="/" className="text-blue-500 hover:underline 
          transition-colors"> შესვლა</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;