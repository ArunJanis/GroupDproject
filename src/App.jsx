// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [showAuthPrompt, setShowAuthPrompt] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setIsAuthenticated(true);
      setShowAuthPrompt(false);
    }
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('username', username);
    setIsAuthenticated(true);
    setShowAuthPrompt(false);
  };

  return (
    <div>
      {showAuthPrompt && !isAuthenticated ? (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-2 text-center">Login or Sign Up</h2>
            <Login onLogin={handleLogin} />
            <div className="mt-4 text-center text-sm text-gray-600">or</div>
            <Signup onSignup={handleLogin} />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
