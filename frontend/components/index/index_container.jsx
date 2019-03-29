import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import Index from './index';

const mapStateToProps = (state) => {
    return({
        
    })
}

const mapDispatchToProps = (dispatch) => {
    return({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);