import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import AboutUsPage from './pages/AboutUsPage';
import ConsultationServ from './pages/ConsultationServ';
import LawServ from './pages/LawServ';
import EducationPage from './pages/EducationPage';
import NewsPage from './pages/NewsPage';
import AnotherServicesPage from './pages/AnotherServ';
import AccountingServ from './pages/AccountingServ';
// import RegistrationPage from './pages/RegistrationPage';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import LoginModal from "./components/ModalComponents/LoginModal";
// import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header setShowLoginModal={setShowLoginModal} />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/another-services" element={<AnotherServicesPage />} />
          {/* <Route path="/registration" element={<RegistrationPage />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          <Route path="/accountingservices" element={<AccountingServ />} />
          <Route path="/lawservices" element={<LawServ />} />
          <Route path="/consultation" element={<ConsultationServ />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </MainContent>
      <Footer />
      {showLoginModal && <LoginModal showModal={showLoginModal} setShowModal={setShowLoginModal} />}
    </div>
  )
}

export default App;