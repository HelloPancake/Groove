import * as APIUtil from '../util/like_api_util';
import { receivePost } from './post_actions';



export const createLike = (post_id) => (dispatch) => {
    return (
        APIUtil.createLike(post_id).then(post => dispatch(receivePost(post)))
    )
}
export const removeLike = (id) => (dispatch) => {
    return (
        APIUtil.removeLike(id).then(post => dispatch(receivePost(post)))
    )
}