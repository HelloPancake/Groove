import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
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
            // <ReactFullpage
            //     navigation
            //     controlArrows="true"
            //     sectionsColor={["white", "#00cf35", "#7c5cff", "#001935", "#001935"]}
            //     navigationPosition="left"
            //     scrollOverflow={false}
            //     slidesNavigation="true"
            //     render={({ state, fullpageApi }) => {
            //         return (
            //         <div>
            //             <div className="section One">
            //                 <div className="homebackground"></div>
            //                 <div className="Home-container">
            //                     <form>
            //                         <div className="title-home-head">groove</div>
            //                         <div className="title-text-underhead"> We like to disco </div>

            //                         <div className="Home-box">
            //                             <Link to="/signup" className="Home-signup">Get Started</Link>
            //                             <Link to="/login" className="Home-login">Log In</Link>
            //                             <button onClick={this.handleDemoSubmit} className="Home-demo"> Demo User </button>
            //                         </div>
            //                     </form>
            //                 </div>
            //             </div>
            //             <div className="section Two">
            //                 <div className="homebackgroundtwo">
            //                     <i id="centerLetter">g</i>
            //                     {/* <i id="CD" className="fas fa-compact-disc fa-4x"></i> */}
            //                 </div>
            //             </div>
            //         </div>
            //         )}}/>

            <div>
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
            </div>
        )
    }
}

export default withRouter(Home);