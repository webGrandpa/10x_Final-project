// src/App.jsx (или HomePage.jsx)
import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
        <button onClick={() => setShowLoginModal(true)}>
          enter
        </button>
      <h1>Bla Bla Bla</h1>
    </div>
  );
};

export default App;