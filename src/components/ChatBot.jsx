import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import logo from '../assets/fincoLogo.svg';
import chatlogo from '../assets/chatlogo.svg';
import closeicon from '../assets/closeicon.svg';
import sendicon from '../assets/sendicon.svg';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));
      
      const chat = model.startChat({ history });
      const result = await chat.sendMessage(input);
      const response = result.response;
      const aiResponseText = response.text();

      const aiMessage = { text: aiResponseText, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);

    } catch (error) {
      console.error("ERROR API:", error);
      const errorMessage = { text: "დაფიქსირდა შეცდომა, მოგვიანებით სცადეთ", sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-[#1b375d] text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-110 z-50"
        >
          <img
            className='w-9.5 h-9.5 cursor-pointer'
            src={chatlogo} alt="Open Chat" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 md:w-80 md:h-[450px] md:bottom-4 md:right-4 md:top-auto md:left-auto md:rounded-lg bg-white 
        text-[#002E85E5] shadow-2xl flex flex-col z-50 overflow-hidden">
          
          <div className="p-4 bg-white shadow-md flex justify-between items-center">
            <div className='flex flex-col'>
                <img src={logo} alt="Finco Logo" className='w-22'/>
                <div className='px-1 rounded-lg bg-[#E6F3FF]'>
                    <h2 className="text-[14px]">ასისტენტი</h2>
                </div>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-gray-800">
              <img
                className='cursor-pointer'
                src={closeicon} alt="Close Chat" />
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-white">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 max-w-[75%] rounded-lg shadow-md break-words ${msg.sender === 'user' ? 'bg-[#1B365D] text-white rounded-br-none' : 'bg-[#E6F3FF] text-gray-800 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="p-2 bg-[#E6F3FF] shadow-md flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={isLoading ? "ასისტენტი ფიქრობს.." : "დასვით შეკითხვა..."}
              disabled={isLoading}
            />
            <button type="submit"  disabled={isLoading}>
              <img
                className='w-9.5 h-9.5 cursor-pointer'
                src={sendicon} alt="Send Message" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;