import './App.css';
import Login from './pages/authPage/login';
import Register from './pages/authPage/register';
import WelcomePage from './pages/welcomePage/welcomePage';
import UsuarioDashboard from './pages/usuarioDashboard/UsuarioDashboard';


function App() {
  return (
    <div className="App">
      {/* <WelcomePage /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <UsuarioDashboard />
    </div>
  );
}

export default App;
