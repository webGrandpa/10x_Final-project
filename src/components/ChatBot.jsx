import { useState, useRef, useEffect } from 'react';
import logo from '../assets/fincoLogo.svg'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    // ჩასაპეჭი ადგილი
    // ქვევით ბექენდის კოდი
    try {
      const aiResponseText = await new Promise(resolve => {
        setTimeout(() => {
          const responses = [
            'ბლა ბლა ბლა, ბლა ბლა ბლა, ასე მესმის შენი კითხვები',
            'საინტერესო კითხვაა, მაგრამ, უინტერესო :)',
            'კითხვა კითხვაა და თუ არ კითხავ შმითხვაა',
            'რაამბავი კითხვებია რაიქნა?'
          ];
          resolve(responses[Math.floor(Math.random() * responses.length)]);
        }, 1000);
      });

      const aiMessage = { text: aiResponseText, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Ошибка при получении ответа от ИИ:", error);
      const errorMessage = { text: "Извините, произошла ошибка. Пожалуйста, попробуйте снова.", sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }

    //ზევით არის ბექენდის კოდი
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='rounded-lg'>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-[#1b375d] text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-110 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
            <path d="M7.9 20A9.3 9.3 0 0 1 4 16.1L2 22l5.9-2z"></path>
            <path d="M14.5 17c.3.5.7 1 1.2 1.4"></path>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-0 right-4 w-80 md:h-[400px] lg:h-[600]
         bg-white text-[#002E85E5] rounded-lg
          shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="p-4 bg-white shadow-md
          flex justify-between items-center">
            <div className='flex flex-col'>
                <img src={logo} alt=""
                className='w-22'/>
                <div className='px-1 rounded-lg bg-[#E6F3FF]'>
                    <h2 className="text-[14px]">ასისტენტი</h2>
                </div>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 max-w-[75%] rounded-lg shadow-md break-words
                  ${msg.sender === 'user' ? 'bg-[#1B365D] text-white rounded-br-none' : 'bg-[#E6F3FF] text-gray-800 rounded-bl-none'}`}>
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
              className="flex-grow p-3 rounded-lg bg-white text-[gray-800] placeholder-[gray-800] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="მოგვწერეთ..."
            />
            <button type="submit" className="p-3 bg-[#E6F3FF] text-white rounded-full hover:bg-[#E6F3FF] focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal">
                <path d="m3 3 3 9-3 9 19-9Z"></path>
                <path d="M22 12H6"></path>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;