import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeting'
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session, entities: { users } }) => {
    return({
       currentUser: users[session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logOut: () => dispatch(logOut())
    })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));