import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import PostCreateContainer from './posts/post_create_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/main';
import NavBar from './nav/nav_bar';
import MainPostFeed from './MainPostfeed/MainPostFeed';

const App = () => (
    <div>
           
            <NavBar />
            {/* <Modal /> */}
        <header>
        </header>
        
        <Route path="/" component={Main} />
        {/* <ProtectedRoute path="/new/text" component={PostCreateContainer} /> */}
        <Route path="/" component={MainPostFeed} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;