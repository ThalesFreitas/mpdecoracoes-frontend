
import {ThemesProvider} from './hooks/useThemes'
import {GlobalStyle} from './styles/global';
import {Routes} from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider} from './hooks/useAuth';


const App: React.FC = () => {
 
  return (
      <Router>
        <ThemesProvider >
          <AuthProvider> 
              <Routes/>
          </AuthProvider>
        </ThemesProvider> 
        <GlobalStyle/>
      </Router>
     
  );
}
export default App;

