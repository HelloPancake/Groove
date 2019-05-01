import {connect} from 'react-redux';
import React from 'react';
import { showAllPosts, deletePost, editPost } from '../../actions/post_actions';
import PostIndex from './post_index';
import {createLike, removeLike} from '../../actions/like_actions';

const mapStateToProps = (state) => {
    let posts = Object.values(state.posts)
   

    return({
        posts: posts,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
        
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        showAllPosts: () => dispatch(showAllPosts()),
        createLike: (post_id) => dispatch(createLike(post_id)),
        removeLike: (post_id) => dispatch(removeLike(post_id)),
        deletePost: (id) => dispatch(deletePost(id)),
        editPost: (post) => dispatch(editPost(post))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);