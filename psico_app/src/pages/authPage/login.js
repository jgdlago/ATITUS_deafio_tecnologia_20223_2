import './auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Login() {
    return (
      <div className="container-auth">

        <div className='login-header'>
          <span>
          <FontAwesomeIcon icon={faChevronLeft} /> 
          <b> Login</b>
          <p>Olá, bem vindo de volta!</p>
          </span>
        </div>

        <div className='select-auth-moethod'>
            <span>Número</span>
            <span>E-mail</span>
        </div>

        <div className='loginForm'>

        </div>

      </div>
    );
  }
  
export default Login;