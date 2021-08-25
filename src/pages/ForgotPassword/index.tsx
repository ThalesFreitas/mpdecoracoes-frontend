import { useState,useCallback, FormEvent,useRef} from 'react'
import {Link} from 'react-router-dom'
import {FiMail, FiLogIn} from 'react-icons/fi'

import {BiArrowBack} from 'react-icons/bi'
import * as Yup from 'yup';
import { ValidationError } from 'yup';

import { Container,Content} from './styles'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api';


export function ForgotPassword() {
    
   const [containerMessageEmail,setContainerMessageEmail] = useState(false) //Estado do Container de mensagem de E-mail
   const [loading, setLoading] = useState(false);
   const [isError,setIsError] = useState(false) //Estado para mudar a cor da borda do input para vermelho
   
   const [messageEmail, setMessageEmail] = useState('') //Estado para guarda a messagem de sucesso ou erro
   
   const inputRefEmail = useRef<HTMLInputElement>(null) //acesso direto ao valor do Input de E-mail
   const formRef = useRef<HTMLFormElement>(null) //acesso direto ao formulario para reseta os valores de input
  
   const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault(); //codigo necessario para usar formulário
        const email = String(inputRefEmail.current?.value) //variavel que guarda o valor do input de E-mail
        
        try {
          setLoading(true); //exibe o loading no botão
           const schema = Yup.object().shape({
            email: Yup.string()
              .email('Digite um e-mail válido')
              .required('E-mail obrigatório'),
          });
          await schema.validate(  //faz a  validação dos valores digitado no input
            {
              email
            },
            {
            abortEarly: false, //retorna todos os erros que encontrar  
          })

          await api.post('/recuperar-senha', {  //Rota da API para recuperar senha
            email
          });
          formRef.current?.reset(); //reseta o campo do input

          setTimeout(() => { // Exibi a mensagem de sucesso durante um terminando tempo, depois e apagado
            setContainerMessageEmail(false) //remove da tela o container de mensagem de E-mail
            },4000)
            setContainerMessageEmail(true) //exibi na tela o container de mensagem de E-mail
            setMessageEmail("E-mail enviado com sucesso") //seta no estado a mensagem de sucesso ao enviar o E-mail
          
      
        } catch (err) {
          setMessageEmail("E-mail inválido") //seta no estado a mensagem de erro ao enviar o E-mail
           
            if (err instanceof ValidationError) { //faz a verificação para saber qual tipo de erro vem do yup
                err.inner.forEach(({ path, message }) => {
                    
                 if(path === 'email') {
                  setMessageEmail(message)//pega as mesagem vinda do yup e coloca no estado de mensagem

                 }
                });
              }

            setTimeout(() => { //deixa a borda do input vermelha durante um terminando tempo, depois e apagado
             setIsError(false) //remove a cor vermelha da borda do input
             setContainerMessageEmail(false) //remove a mensagem de erro de E-mail
             
             },3000)
             setIsError(true)//coloca a cor vermelha na borda do input
             setContainerMessageEmail(true) //coloca a mensagem de erro de E-mail
          
              
        }finally {
         setLoading(false);//remove o loading no botão
        }

    },[]);

    const handleInputFocus = useCallback(() => { //Remove a borda vemelha quando o input estiver com focus 
      setContainerMessageEmail(false)
    },[])
   
  
    return(

        <Container  >
            
            <Link to="/login" className="back">
             <BiArrowBack/> 
            </Link>
            <Content isError={isError}>
                <img src={logoImg} alt="mp decorações"  />
               
                <form onSubmit={handleSubmit} ref={formRef}>
                    <h1>Recuperar senha</h1>
                   
                    <div className={`${containerMessageEmail ? 'container_message' : 'container_message_none'}`}> 
                    <span>{messageEmail}</span>
                    </div>

                    <div className='container_input'
                    onFocus={handleInputFocus}>
                    <FiMail/>
                    <input ref={inputRefEmail} placeholder="E-mail"/>
                    </div>
                    
                    <button type="submit">
                      {loading ? "Enviando" : "Recuperar"}</button>
                   <Link to="/login">
                      <FiLogIn />
                      Voltar ao login
                </Link>
                </form>
            </Content>
            
        </Container> 
        
    )
}
