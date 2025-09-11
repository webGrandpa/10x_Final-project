// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import AboutUsPage from './pages/AboutUsPage';
import EducationPage from './pages/EducationPage';
import NewsPage from './pages/NewsPage';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import FAQ from "./pages/FAQPage";
import ContactUs from "./components/ContactUs";
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/componentParts/ScrollToTop';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  // const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="App flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/userprofile' element={<UserProfilePage />} />
        </Routes>
      </MainContent>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;