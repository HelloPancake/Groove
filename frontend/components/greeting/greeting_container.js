import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting'

const mapStateToProps = ({ session, entities: { users } }) => {
    return({
        
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logOut: () => dispatch(logOut())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Greeting);