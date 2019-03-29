import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return(
        <nav>
            <div>
                <Link to="/" className="logo">g</Link>
            </div>
            
            {/* <Route path="/login" component={GreetingContainer}/> */}
            {/* <Route path="/" component={GreetingContainer}/> */}
            <GreetingContainer />

        </nav>
    )
}

export default NavBar;