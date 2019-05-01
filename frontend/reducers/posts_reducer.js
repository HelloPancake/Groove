import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
 } from '../actions/post_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts);
        case RECEIVE_POST:
            let oldPost = merge({}, state);
            delete oldPost[action.post.id];
            return merge({}, oldPost, { [action.post.id]: action.post })
        case REMOVE_POST:
            let newState = merge({}, state);
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;
