import './welcomePage.css';
import AuthButton from '../components/button/auth_button';

function WelcomePage() {
  return (
    <div className="welcomePage-container">
      
      <h2>Bem-vindo!</h2>

      <span className="moody-calender">
        MoodyCalendar
      </span>

      <AuthButton title="Login paciente" />

      <AuthButton title="Login Psicólogo" />

      <AuthButton title="Cadastro" />

    </div>
  );
}

export default WelcomePage;
