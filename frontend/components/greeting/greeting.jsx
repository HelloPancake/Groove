import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logOut, location }) => {
    const sessionLinks = () => (
        <Link to="/signup" className="login-signup">Sign up</Link>
    );
    const personalGreeting = () => (
        <div className="header-group">
            <button className="header-button" onClick={logOut}>Log Out</button>
        </div>
    );
    const signupLinks = () => (
        <Link to="/login" className="login-signup">Log in</Link>
    )
    
    if (location.pathname === "/login") {
        return (sessionLinks())
    }
    else if (currentUser) {
        return (personalGreeting())
    } else if(location.pathname === "/signup"){
        return (signupLinks())
    }
    else {
        return null;
    }
};


export default Greeting;
