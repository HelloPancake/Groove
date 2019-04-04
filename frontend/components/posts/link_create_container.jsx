import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions'
import LinkCreateForm from './link_post_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {


    return ({
        post: { title: "" },
        currentUser: state.entities.users[state.session.id]
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post))

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LinkCreateForm));