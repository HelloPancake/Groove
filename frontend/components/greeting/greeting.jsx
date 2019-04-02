import React from 'react';
import { Link } from 'react-router-dom';




const Greeting = ({ currentUser, logOut, location, history }) => {
    const handleLogOut = () => {
        logOut();
        history.push("/");
    }
    const sessionLinks = () => (
        <Link to="/signup" className="login-signup">Sign up</Link>
    );
    const personalGreeting = () => ((
        <div className="header-group">
            <button className="header-button" onClick={handleLogOut}>Log Out</button>
        </div>
    ));
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
