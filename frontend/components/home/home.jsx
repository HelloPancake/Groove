import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.logIn({
            username: "Captain Demo User",
            password: "password"
        });
    }

    render() {
        
        return(
            <div className="Home-container-back">
                <div className="homebackground"></div>
                <div className="Home-container">
                <form>
                <div className="title-home-head">groove</div>
                <div className="title-text-underhead"> We like to disco </div>
                
                <div className="Home-box">
                <Link to="/signup" className="Home-signup">Get Started</Link>
                <Link to="/login" className="Home-login">Log In</Link>
                <button onClick={this.handleDemoSubmit} className="Home-demo"> Demo User </button>
                </div>
                </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);