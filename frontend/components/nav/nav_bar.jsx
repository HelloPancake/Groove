import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'



const NavBar = (props) => {
    return(
        <nav>
            <div>
                <i className="logo">g</i>
            </div>
            
            {/* <Route path="/login" component={GreetingContainer}/> */}
            {/* <Route path="/" component={GreetingContainer}/> */}
            <GreetingContainer />

        </nav>
    )
}

export default NavBar;