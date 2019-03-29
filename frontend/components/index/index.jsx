import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Index extends React.Component {


    render() {
        
        return(
            <div className="Index-container">
                <form>
                <div className="title-index-head">groove</div>
                <div className="title-text-underhead"> We like to disco </div>
                
                <div className="Index-box">
                <Link to="/signup" className="Index-signup">Get Started</Link>
                <Link to="/login" className="Index-login">Log In</Link>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Index);