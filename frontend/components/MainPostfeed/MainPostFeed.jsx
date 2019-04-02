import React from 'react';
import { connect } from 'react-redux';
import PostIndexContainer from '../../components/posts/post_index_container';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function MainPostFeed({ currentUser }) {
    if (currentUser) {
        return (<PostIndexContainer />);
    } else {
        null
    }
}

const msp = state => {
    return {
        currentUser: state.session.id
    }
}

export default withRouter(connect(msp, null)(MainPostFeed));