import React, { useState } from 'react';
import './App.css';
import Login from './pages/authPage/login';
import Register from './pages/authPage/register';
import WelcomePage from './pages/welcomePage/welcomePage';
import UsuarioDashboard from './pages/usuarioDashboard/UsuarioDashboard';
import InclusaoMoodUsuario from './pages/inclusaoMoodUsuario/InclusaoMoodUsuario';

function App() {
  const [authAction, setAuthAction] = useState(null);

  const handleAuthAction = (action) => {
    setAuthAction(action);
  };

  return (
    <div className="App">
      {authAction === 'login' && <Login />}
      {authAction === 'register' && <Register />}
      {authAction === null && (
        <WelcomePage onAuthAction={handleAuthAction} />
      )}
    </div>
  );
}

export default App;
