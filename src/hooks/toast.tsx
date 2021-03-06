import { ReactNode } from 'react';
import {uuid} from 'uuidv4'

import {ToastContainer} from '../components/ToastContainer';
import {createContext, useContext, useCallback, useState} from 'react'

interface ToastProviderProps {
    children: ReactNode;
  }

export interface ToastMessage {
    id: string;
    type?: 'sucess' | 'error' | 'info';
    title: string;
    description?: string;
}  

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function ToastProvider({children}: ToastProviderProps) {

    const [messages, setMessages] = useState<ToastMessage[]>([]);
    
   
    const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>) => {
        const id = uuid();
        const toast = {
            id,
            type,
            title,
            description,

        };
        setMessages((state) => [...state, toast])

    }, []);
    
    const removeToast = useCallback((id: string) => {
       setMessages((state) => state.filter((message) => message.id !== id));
    }, []);
   
    return (
        <ToastContext.Provider value={{addToast,removeToast}}>
            {children}
            <ToastContainer messages={messages}/>
        </ToastContext.Provider>
    );  
}

export function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if(!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return context;
}