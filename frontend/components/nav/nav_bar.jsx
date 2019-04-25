import React from 'react';
import {Route} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    
    return(
        <div className="parentDiv">
            <nav className="bar">
                <div>
                    <Link to="/" className="logo">g</Link>
                </div>
                
                {/* <Route path="/login" component={GreetingContainer}/> */}
                {/* <Route path="/" component={GreetingContainer}/> */}
                <GreetingContainer />

            </nav>
                <br/>
            <nav className="dummyNav"></nav>
        </div>
    )
    
}

export default NavBar;