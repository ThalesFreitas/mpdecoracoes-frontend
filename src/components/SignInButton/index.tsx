import {BsPeopleCircle} from 'react-icons/bs'
import {ContainerLogged,ContainerNoLogged} from '../SignInButton/styles';
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';


export function SignInButton() {
    
    const {signOut,user}  = useAuth();
  
    return  user ? (
        
        <ContainerLogged>
          
          <div className="user_name">
              <span>Bem vindo,</span>
              <Link to="/profile">
                <strong>{user.nome}</strong>
              </Link>
            </div>

          <div className="user_photo">
            <Link to="/profile">
              {user.urlImg ? 
              <img src={user.urlImg} alt=""/>
              :
              <BsPeopleCircle className="no_photo"/>
              }
              
            </Link>
            <button onClick={signOut}>Sair</button>
          </div>
        </ContainerLogged>
       
        
    ): 
        <ContainerNoLogged>
         <BsPeopleCircle/>
          <Link to="/login">Entrar</Link>
        </ContainerNoLogged>
    
}