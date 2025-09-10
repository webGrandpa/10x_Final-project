import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import OpenAI from 'openai';

// --- Стилизованные компоненты (остаются как у вас) ---
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  font-family: sans-serif;
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
`;

const Messages = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  max-width: 75%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  background-color: ${props => (props.isUser ? '#007bff' : '#e9ecef')};
  color: ${props => (props.isUser ? 'white' : 'black')};
`;

const InputForm = styled.form`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ccc;
  background-color: #fff;
`;

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  &:disabled {
    background-color: #a0cfff;
    cursor: not-allowed;
  }
`;

// --- Логика компонента ---

// Инициализируем клиент OpenAI с вашим ключом
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Этот флаг обязателен для работы в браузере
});

export const Chat = () => {
  // Состояние для хранения всех сообщений чата
  const [messages, setMessages] = useState([]);
  // Состояние для текста в поле ввода
  const [input, setInput] = useState('');
  // Состояние для отслеживания загрузки ответа от AI
  const [isLoading, setIsLoading] = useState(false);

  // Ref для автоматической прокрутки вниз при появлении нового сообщения
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Функция, которая вызывается при отправке формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Отправляем запрос в OpenAI, включая всю предыдущую переписку
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: newMessages.map(msg => ({ role: msg.role, content: msg.content })),
      });
      
      const assistantMessage = completion.choices[0].message;

      // Добавляем ответ ассистента в наш список сообщений
      if (assistantMessage.content) {
         setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: assistantMessage.content }]);
      }

    } catch (error) {
      console.error("Ошибка при запросе к OpenAI API:", error);
      // Если произошла ошибка, выводим сообщение об этом в чат
      const errorMessage = { role: 'assistant', content: 'Извините, произошла ошибка. Попробуйте позже.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false); // В любом случае убираем состояние загрузки
    }
  };

  return (
    <ChatContainer>
      <Messages>
        {/* Отображаем все сообщения из состояния */}
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.role === 'user'}>
            {msg.content}
          </Message>
        ))}
        {/* Этот пустой div нужен для плавной прокрутки к последнему сообщению */}
        <div ref={messagesEndRef} />
      </Messages>
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isLoading ? "AI печатает..." : "Введите сообщение..."}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          Отправить
        </Button>
      </InputForm>
    </ChatContainer>
  );
};