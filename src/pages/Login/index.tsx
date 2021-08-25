import { useState,useCallback, FormEvent,useRef} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiMail, FiLock} from 'react-icons/fi'
import {BsEyeSlash,BsEye} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import * as Yup from 'yup';
import { ValidationError } from 'yup';

import {useAuth} from '../../hooks/useAuth'

import { Container,Content} from './styles'
import logoImg from '../../assets/logo.svg'


export function Login() {
    
    const {signIn}  = useAuth(); //função para fazer logon
    const history = useHistory() //ir para uma determinada página
    
    //const token = localStorage.getItem('@MpDecorações:token')
    

   // api.defaults.headers.authorization = `Basic ${token}`;

   const [eyePassword,setEyePassword] = useState('password') //icone de exibir senha

   const [containerErrorEmail,setContainerErrorEmail] = useState(false) //Estado do Container de erro do E-mail
   const [containerErrorPassword,setContainerErrorPassword] = useState(false) //Estado do Container de erro do Password
   const [isError,setIsError] = useState(false) //Estado para mudar a cor da borda do input para vermelho
   
   const [messageErrorEmail, setMessageErrorEmail] = useState('') // Menssagem de erro exibida no E-mail
   const [messageErrorPassword, setMessageErrorPassword] = useState('') // Menssagem de erro exibida no Password

   const inputRefEmail = useRef<HTMLInputElement>(null) //acesso direto ao valor do Input de E-mail
   const inputRefPassword = useRef<HTMLInputElement>(null) //acesso direto ao valor do Input de Password
  
const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault(); //codigo necessario para usar formulário
        
        const login = String(inputRefEmail.current?.value) //variavel que guarda o valor do input de E-mail
        const senha = String(inputRefPassword.current?.value) //variavel que guarda o valor do input de Password

        try {
           const schema = Yup.object().shape({
            login: Yup.string()
              .email('Digite um e-mail válido')
              .required('E-mail obrigatório'),
            senha: Yup.string().required('Senha obrigatória'),
            
          });
          await schema.validate( //faz a validação dos dados digitado no input
            {login,
            senha},
            {
            abortEarly: false, //retorna todos os erros que encontrar  
          })
           await signIn({login,senha,}) //chama a função de logon do contexto useAuth, passando os dados digitados no input
            history.push("/dashboard") 
        
        } catch (err) {
            setMessageErrorEmail("E-mail inválido") //caso E-mail esteja errado, seta a mensagem no estado
            setMessageErrorPassword("Senha inválida") //caso Senha esteja errado, seta a mensagem no estado

            if (err instanceof ValidationError) { // faz a verificação para saber se o erro vem de login ou senha 
                err.inner.forEach(({ path, message }) => {
                    
                 if(path === 'login') {
                    setMessageErrorEmail(message)//pega as mensagens vindas do yup e seta no estado

                 }else {
                    setMessageErrorPassword(message) //pega as mensagens vindas do yup e seta no estado
                 }
                });
              }

            setTimeout(() => { //Deixa a borda do input vermelha durante um terminando tempo, depois e apagado
             setIsError(false) //remove a cor vermelha da borda do input
             setContainerErrorEmail(false) //remove a mensagem de erro do e-mail
             setContainerErrorPassword(false) //remove a mensagem de erro da senha
          
             },3000)
             setIsError(true)// coloca a cor vermelha da borda do input
           setContainerErrorEmail(true) //coloca a mensagem de erro do e-mail
           setContainerErrorPassword(true) //coloca a mensagem de erro da senha
              
        }

    },[history,signIn]);

    const handleInputFocus = useCallback(() => { //Remove a borda vemelha quando o input estiver com focus 
        setContainerErrorEmail(false)
        setContainerErrorPassword(false)
    },[])
 
    return(

        <Container  >
            
            <Link to="/" className="back">
             <BiArrowBack/> 
            </Link>
           
            
            <Content isError={isError}>
                <img src={logoImg} alt="mp decorações"  />
               
                <form onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>
                   
                    <div className={`${containerErrorEmail ? 'container_error' : 'container_error_none'}`}> 
                    <span>{messageErrorEmail}</span>
                    </div>

                    <div className='container_input'
                    onFocus={handleInputFocus}>
                    <FiMail/>
                    <input ref={inputRefEmail} placeholder="E-mail"/>
                   
                    </div>
                    
                    <div className={`${containerErrorPassword ? 'container_error' : 'container_error_none'}`} >
                    <span>{messageErrorPassword}</span>
                    </div>

                    <div className="container_input"
                    onFocus={handleInputFocus}>
                    <FiLock/>
                    <input ref={inputRefPassword} type={eyePassword} placeholder="Senha"/>
                    
                    {eyePassword === 'password' ? 
                    <BsEyeSlash 
                    className="eye_password"
                    onClick={() => setEyePassword('text')}
                    />: 
                    <BsEye
                    className="eye_password"
                    onClick={() => setEyePassword('password')}
                    />
                    }
                    </div>
                    
                    <button 
                    type="submit">Entrar</button>
                    <Link to="/forgot-password">Esqueci minha senha</Link>
                </form>
                
            </Content>

        </Container> 
        
    )


}
