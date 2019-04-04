import { connect } from 'react-redux';
import React from 'react';
import { createImagePost } from '../../actions/post_actions'
import VideoCreateForm from './video_create_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],

    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createImagePost(post))

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoCreateForm));