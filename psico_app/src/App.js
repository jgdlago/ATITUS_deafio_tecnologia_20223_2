import React, { useState } from 'react';
import './App.css';
import Login from './pages/authPage/login';
import Register from './pages/authPage/register';
import WelcomePage from './pages/welcomePage/welcomePage';
import UsuarioDashboard from './pages/usuarioDashboard/UsuarioDashboard';

function App() {
  const [authAction, setAuthAction] = useState(null);

  const handleAuthAction = (action) => {
    setAuthAction(action);
  };

  const handleAuthBack = () => {
    setAuthAction(null);
  };

  const handleLoginSuccess = () => {
    setAuthAction('dashboard');
  };

  return (
    <div className="App">
      {authAction === 'login' && <Login onBack={handleAuthBack} onSuccess={handleLoginSuccess} />}
      {authAction === 'register' && <Register onBack={handleAuthBack} onSuccess={handleLoginSuccess} />}
      {authAction === 'dashboard' && <UsuarioDashboard />}
      {authAction === null && (
        <WelcomePage onAuthAction={handleAuthAction} />
      )}
    </div>
  );
}

export default App;
