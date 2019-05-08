import * as APIUtil from "../util/follow_api_util";
import { receivePost } from "./post_actions";



export const createFollow = (post) => (dispatch) => {
    return (
        APIUtil.createFollow(post).then(post => dispatch(receivePost(post)))
    )
}
export const removeFollow = (post) => (dispatch) => {
    return (
        APIUtil.removeFollow(post).then(post => dispatch(receivePost(post)))
    )
}

