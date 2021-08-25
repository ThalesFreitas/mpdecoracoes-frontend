import { Switch} from 'react-router-dom';
import {Route} from './Routes'
import {Home} from '../pages/Home'
import {Login} from '../pages/Login'
import {ForgotPassword} from '../pages/ForgotPassword'
import {Profile} from '../pages/Profile'
import {SearchTheme} from '../pages/SearchTheme'
import {Dashboard} from '../pages/Dashboard'
import {Slugs} from '../pages/Slugs'


export function Routes(){
    return (
        
        <Switch >
            <Route exact path="/" component={Home} />
            <Route  exact path="/login" component={Login}/>
            <Route  exact path="/forgot-password" component={ForgotPassword}/>
            <Route path="/search/:theme" component={SearchTheme} /> 

            <Route path="/profile" component={Profile} isPrivate />
            <Route  exact path="/dashboard" component={Dashboard} isPrivate/>
            <Route  exact path="/dashboard/slugs" component={Slugs} isPrivate />: 
        </Switch>
        
    );
};


