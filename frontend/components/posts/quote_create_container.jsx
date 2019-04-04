import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions'
import QuoteCreateForm from './quote_create_form';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  

    return ({
        post: { title: "", body: "" },
        currentUser: state.entities.users[state.session.id]
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post))

    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuoteCreateForm));