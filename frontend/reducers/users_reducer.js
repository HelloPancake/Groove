import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';


const usersReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.users)
        case RECEIVE_POST:
            return merge({}, state, {[action.user.id]: action.user})
     
        default:
            return state;
    }
};

export default usersReducer;
