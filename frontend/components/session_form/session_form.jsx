import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillUnmount(){
        this.props.clearSessionErrors();    
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: '',
            email: ''})
       

    }

    renderErrors() {
        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                     <li key={`error-${i}`}>
                         {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        

        
    return (
     <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="title-text-head">groove</div>
             <div className="title-text-underhead"> </div>
             {/* Please {this.props.formType} or {this.props.navLink} */}
                    
             <div className="login-form">
                        
            <label>
                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-username"
                                placeholder="username"
                />
                </label>
                <div className="grey-border">
                    <div></div>
                </div>


                {this.props.formType == 'Log In' ? (null) : (
                    <>
                        
                        <label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-email"
                                placeholder="email"
                        />
                        </label>

                            <div className="grey-border">
                                <div></div>
                            </div>
                </>)
                }


                <label>
                    <input type="password"
                        value={this.state.password}
                            onChange={this.update('password')}
                            className="login-password"
                            placeholder="password"
                    />
                </label>
                        
                
                        
            {this.props.errors.length < 1 ? (null) : <div className="errors">{this.renderErrors()}</div> }
                        
                        
                    <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
            </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
