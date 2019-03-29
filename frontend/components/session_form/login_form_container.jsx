import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(logIn(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
