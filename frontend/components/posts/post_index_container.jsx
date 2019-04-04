import {connect} from 'react-redux';
import React from 'react';
import { showAllPosts, deletePost, editPost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
    let posts = Object.values(state.posts)
    return({
        posts: posts,
        users: state.entities.users
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        showAllPosts: () => dispatch(showAllPosts()),
        // deletePost: (id) => dispatch(deletePost(id)),
        // editPost: (post) => dispatch(editPost(post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);