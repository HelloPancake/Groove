import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {


    render() {
        
        return(
            <div className="Home-container">
                <form>
                <div className="title-home-head">groove</div>
                <div className="title-text-underhead"> We like to disco </div>
                
                <div className="Home-box">
                <Link to="/signup" className="Home-signup">Get Started</Link>
                <Link to="/login" className="Home-login">Log In</Link>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Home);