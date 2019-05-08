import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import PostCreateContainer from './posts/post_create_container';
import LogInFormContainer from './session_form/login_form_container';
import PostShowIndexContainer from './posts/post_show_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/main';
import NavBar from './nav/nav_bar';

const App = () => (
    <div>
           
            <NavBar />
           
        <header>
        </header>
        
        <Route path="/" component={Main} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/show/user" component={PostCreateContainer} />
        <ProtectedRoute path="/profile/:id" component={PostShowIndexContainer} />

    </div>
);

export default App;