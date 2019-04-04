import React from 'react';
import { Link } from 'react-router-dom';




const Greeting = ({ currentUser, logOut, location, history }) => {
    const handleLogOut = () => {
        logOut();
        history.push("/");
    }
    const SignUp = () => (
        <Link to="/signup" className="login-signup">Sign up</Link>
    );
    const LogOut = () => ((
        <div className="header-group">
            <button className="header-button" onClick={handleLogOut}>Log Out</button>
        </div>
    ));
    const LogIn = () => (
        <Link to="/login" className="login-signup">Log in</Link>
    )
    
    if (location.pathname === "/login") {
        return (SignUp())
    }
    else if (currentUser) {
        return (LogOut())
    } else if(location.pathname === "/signup"){
        return (LogIn())
    }
    else {
        return null;
    }
};


export default Greeting;
