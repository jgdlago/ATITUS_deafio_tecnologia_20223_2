import './auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div className="container-auth">
      <div className='login-header'>
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          <b> Login</b>
        </span>
        <p>Olá, bem-vindo de volta!</p>
      </div>

      <div className='select-auth-method'>
        <span>Número</span>
        <span>E-mail</span>
      </div>

      <div className='login-form'>
        <form>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Número de telefone" required />
        </form>
      </div>
    </div>
  );
}

export default Login;
