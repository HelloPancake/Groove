import { connect } from 'react-redux';
import React from 'react';
import { logIn } from '../../actions/session_actions'

import Home from './home';

const mapStateToProps = (state) => {
    return({
        
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        logIn:(user) => dispatch(logIn(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);