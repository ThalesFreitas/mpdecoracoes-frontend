
import React from 'react';
import {ToastProvider} from './toast'

//import { ReactNode } from 'react';

// interface ProviderProps {
//     children: ReactNode;
//   }



  const AppProvider: React.FC = ({ children }) => {
    return (
    <ToastProvider>
      {children}
    </ToastProvider>
    );  
}

export default AppProvider;
