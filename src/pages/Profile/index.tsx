
import { useState,useCallback, FormEvent,useRef,ChangeEvent} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiMail, FiUser,FiLock, FiCamera} from 'react-icons/fi'
import {BsEyeSlash,BsEye,BsPeopleCircle} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'

import * as Yup from 'yup';
import { ValidationError } from 'yup';

import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import { Container,Content,AvatarInput} from './styles'


export function Profile() {
    
    const history = useHistory() //ir para uma determinada página
    const {user,updateUser} = useAuth(); // dados e função do hook de autenticação
    
    const [avatar_url, setAvatar_Url] = useState(user.urlImg)//Estado que guarda a url recebida do aws apos o upload

    const inputRefName = useRef<HTMLInputElement>(null)//acesso direto ao valor do Input de Name
    const inputRefEmail = useRef<HTMLInputElement>(null)//acesso direto ao valor do Input de Email
    const inputRefPassword = useRef<HTMLInputElement>(null) //acesso direto ao valor do Input de Password
    const inputRefPassword_Confirmation = useRef<HTMLInputElement>(null) //acesso direto ao valor do Input de Password_Confirmation
  
   const [containerErrorName,setContainerErrorName] = useState(false)//Estado do Container de erro do Name
   const [containerErrorEmail,setContainerErrorEmail] = useState(false)//Estado do Container de erro do Email
   const [containerErrorPassword,setContainerErrorPassword] = useState(false)//Estado do Container de erro do Password
   const [containerErrorPassword_Confirmation,setContainerErrorPassword_Confirmation] = useState(false)//Estado do Container de erro do Password
   
   const [messageErrorName, setMessageErrorName] = useState('')//Menssagem de erro exibida no Name
   const [messageErrorEmail, setMessageErrorEmail] = useState('')////Menssagem de erro exibida no Email
   const [messageErrorPassword, setMessageErrorPassword] = useState('')//Menssagem de erro exibida no Password
   const [messageErrorPassword_Confirmation, setMessageErrorPassword_Confirmation] = useState('')//Menssagem de erro exibida no Password
   
   const [eyePassword,setEyePassword] = useState('password') //icone de exibir senha
   const [eyePassword_Confirmation,setEyePassword_Confirmation] = useState('password') //icone de exibir senha
  

   const handleImageChang = useCallback(async(e: ChangeEvent<HTMLInputElement>) => { ///Envio da foto do perfil ao amazon S3
    
    if (e.target.files){ 

        const data = new FormData();
        const file_input = e.target.files[0]    
       console.log(file_input)
        if(file_input !== undefined){
            
            data.append('file', file_input);
            await api.post('/postagens/image', data).then((response) => {
              console.log(response.data)
                setAvatar_Url(response.data.uri) 
            })
        } else {
            setAvatar_Url('')
        }
           
       } 
}, [])

        const handleSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault(); //codigo para evitar carregamento do formulario 
        
        const name = String(inputRefName.current?.value)//variavel que guarda o valor do input de Name
        const email = String(inputRefEmail.current?.value)//variavel que guarda o valor do input de Email
        const password = String(inputRefPassword.current?.value)//variavel que guarda o valor do input de Password
        const password_confirmation = String(inputRefPassword_Confirmation.current?.value) //variavel que guarda o valor do input de Password
    
        const errorname = document.querySelector('#error_nome') as HTMLInputElement //acesso direto a dom do input de nome
        const erroremail = document.querySelector('#error_email') as HTMLInputElement //acesso direto a dom do input de email
        const errorpassword = document.querySelector('#error_password') as HTMLInputElement //acesso direto a dom do input de password
        const errorpassword_confirmation = document.querySelector('#error_password_confirmation') as HTMLInputElement //acesso direto a dom do input de password
        
        try {
          
           const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
            password: Yup.string().when({
              is: (val:string) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            }),
            password_confirmation: Yup.string()
            .when('password',{
              is: (val:string) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            }).oneOf([Yup.ref('password'), null],'Confirmação incorreta'),
          });

          await schema.validate( //faz a validação dos dados digitado no input
            {
              name,
              email,
              password,
              password_confirmation
           },
            {
            abortEarly: false, //retorna todos os erros que encontrar  
          })
          
         await api.put(`/usuarios/${user.id}`, //Atualiza os Dados de Perfil
          {
            login: email,
            senha: password,
            nome: name,
            urlImg: avatar_url
          }).then(response => {
            
           const user = {
             id: response.data.id,
             nome: response.data.nome,
             email: response.data.login,
             urlImg: response.data.urlImg
           }
             updateUser(user);
          
          })
         
          if(inputRefPassword.current?.value){//Verifica se campo senha esta preenchido, e redireciona para a pagina certa
             localStorage.removeItem('@MpDecorações:token')
             localStorage.removeItem('@MpDecorações:user')
             window.location.href = "/login"
          }else{
            history.push("/dashboard")
          }
            
        }catch (err) {
            if (err instanceof ValidationError) {  
                err.inner.forEach(({ path, message }) => {
              
                 if(path === 'name') {
                  setMessageErrorName(message) //pega as mensagens vindas do yup e seta no estado
                  errorname.style.border = "2px solid rgb(255,104,96)" //muda a borda do input
                 }else if(path === 'email') {
                    setMessageErrorEmail(message)//pega as mensagens vindas do yup e seta no estado
                    erroremail.style.border = "2px solid rgb(255,104,96)" //muda a borda do input
                 }else if(path === 'password'){
                    setMessageErrorPassword(message)//pega as mensagens vindas do yup e seta no estado
                    errorpassword.style.border = "2px solid rgb(255,104,96)" //muda a borda do input
                 }else {
                    setMessageErrorPassword_Confirmation(message)//pega as mensagens vindas do yup e seta no estado
                    errorpassword_confirmation.style.border = "2px solid rgb(255,104,96)" //muda a borda do input 
                 }
                });
              }

             setTimeout(() => { //Deixa a borda do input vermelha durante um terminando tempo, depois e apagado
             setMessageErrorName('')//reseta o estado da mensagem
             errorname.style.border = "none" //reseta a cor da borda
             
             setMessageErrorEmail('')//reseta o estado da mensagem
             erroremail.style.border = "none" //reseta a cor da borda
             
             setMessageErrorPassword('')//reseta o estado da mensagem
             errorpassword.style.border = "none" //reseta a cor da borda
             
             setMessageErrorPassword_Confirmation('')//reseta o estado da mensagem
             errorpassword_confirmation.style.border = "none" //reseta a cor da borda
             },3000)
             setContainerErrorName(true)//exibe o container de erro
             setContainerErrorEmail(true)//exibe o container de erro
             setContainerErrorPassword(true)//exibe o container de erro
             setContainerErrorPassword_Confirmation(true)//exibe o container de erro
        }

    },[history,updateUser,avatar_url,user.id]);

    return(

        <Container >
            
            <Content>
           
            <AvatarInput>
            <Link to="/" className="back">
             <BiArrowBack/> 
            </Link>
            {avatar_url ? 
            <img src={avatar_url} alt={user.nome} />
            :
           
             <BsPeopleCircle className="no_phone" />
            
          }
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleImageChang} />
            </label>
          </AvatarInput>
               
                <form onSubmit={handleSubmit} >
                    <h1>Meu perfil</h1>
                    
                    <div className={`${containerErrorName ? 'container_error' : 'container_error_none'}`}> 
                    <span>{messageErrorName}</span>
                    </div>
                    <div className='container_input' id="error_nome">
                    <FiUser/>
                    <input ref={inputRefName} placeholder="Nome"  defaultValue={user.nome} />
                    </div>

                    <div className={`${containerErrorEmail ? 'container_error' : 'container_error_none'}`}> 
                    <span>{messageErrorEmail}</span>
                    </div>
                    <div className='container_input' id="error_email">
                    <FiMail/>
                    <input ref={inputRefEmail} placeholder="E-mail" defaultValue={user.email} />
                    </div>
                    
                    <div className={`${containerErrorPassword ? 'container_error' : 'container_error_none'}`}> 
                    <span>{messageErrorPassword}</span>
                    </div>
                    <div className="container_input" id="error_password">
                    <FiLock/>
                    <input ref={inputRefPassword} type={eyePassword} placeholder="Nova senha"/>
                    
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

                   
                    <div className={`${containerErrorPassword_Confirmation ? 'container_error' : 'container_error_none'}`}> 
                    <span>{messageErrorPassword_Confirmation}</span>
                    </div>
                    <div className="container_input" id="error_password_confirmation">
                    <FiLock/>
                    <input ref={inputRefPassword_Confirmation} type={eyePassword_Confirmation} placeholder="Confirmação da senha"/>
                    
                    {eyePassword_Confirmation === 'password' ? 
                    <BsEyeSlash 
                    className="eye_password"
                    onClick={() => setEyePassword_Confirmation('text')}
                    />: 
                    <BsEye
                    className="eye_password"
                    onClick={() => setEyePassword_Confirmation('password')}
                    />
                    }
                    </div>
                    
                    <button 
                    type="submit">Confirmar mudanças</button>
                </form>
                
            </Content>

        </Container> 
        
    )


}
