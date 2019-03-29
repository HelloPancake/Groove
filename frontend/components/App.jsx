import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import IndexContainer from './index/index_container';
import { AuthRoute } from '../util/route_util';
import NavBar from './nav/nav_bar'

const App = () => (
    <div>
            <NavBar />
        <header>
            
        </header>
        
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/" component={IndexContainer} />
    </div>
);

export default App;