import {useCallback, useState,useContext,ReactNode} from 'react'
import {createContext} from 'react'
import { api } from '../services/api'

interface UpDateProfile {
    id: number;
    nome: string;
    email: string;
    urlImg: string;
    
}

interface User {
    id: number;
    nome: string;
    email: string;
    urlImg: string;
  }

interface AuthState {
    token: string;
    user: User;
      
}
interface SignInCredentials {
    login: string;
    senha: string;
}

interface AuthProviderProps {
    children: ReactNode;
  }


interface AuthContextData {
user: User;
signIn(credentials:SignInCredentials): Promise<void>;
signOut(): void;
updateUser(data: UpDateProfile) : void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)


export function AuthProvider({children}: AuthProviderProps ) {
    const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MpDecorações:token');
    const user = localStorage.getItem('@MpDecorações:user');
    
    
     

        if(token && user) {
             api.defaults.headers.authorization = `Basic ${token}`;
            return {token, user: JSON.parse(user)};
        }
       
        return {} as AuthState;
     })   
const signIn = useCallback(async({login, senha}) => {
        const response = await api.post('/login', {
            login,
            senha
        }
        
             
        )
       
        const user = {
            id: response.data.id,
            nome: response.data.nome,
            email: response.data.email,
            urlImg: response.data.urlImg
        }
       
        
        
        const {token} = response.data;
        
        api.defaults.headers.authorization = `Basic ${token}`;
        localStorage.setItem('@MpDecorações:token', token);
        localStorage.setItem('@MpDecorações:user', JSON.stringify(user));
        
    
        api.defaults.headers.authorization = `Basic ${token}`;
        
        setData(
            {
            token,
            user,
            
        });    
},[])


     

const signOut = useCallback(() => {
    localStorage.removeItem('@MpDecorações:token')
    localStorage.removeItem('@MpDecorações:user')
    setData({} as AuthState)
},[])



const updateUser = useCallback(
   
    (user: User) => {
      localStorage.setItem('@MpDecorações:user', JSON.stringify(user));
      setData({
        token: data.token,
        user 
      });
     
    },
    
    [data.token],
  );
 
    return (
        <AuthContext.Provider value={{user: data.user, signIn,signOut,updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}



export function useAuth():AuthContextData {
const context = useContext(AuthContext)

if(!context) {
    throw new Error('useAuth must be used within an AuthProvider')
}
return context
}