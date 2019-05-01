import * as APIUtil from '../util/posts_api_util';


export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = (payload) => ({
    type: RECEIVE_ALL_POSTS,
    posts: payload.posts,
    users: payload.users
})
export const receivePost = (payload) => {
    return ({
    
    type: RECEIVE_POST,
    post: payload.post,
    user: payload.user
    })
}
const removePost = (id) => ({
    type: REMOVE_POST,
    postId: id
})

export const createImagePost = (post) => (dispatch) => {
    return (
        APIUtil.createImagePost(post).then(post => dispatch(receivePost(post)))
    )
}

export const showAllPosts = () => (dispatch) => {
    return (
        APIUtil.showAllPosts().then(posts => dispatch(receiveAllPosts(posts)))
    )
}

export const showPost = (id) => (dispatch) => {
    return (
        APIUtil.showPost(id).then(post => dispatch(receivePost(post)))
    )
}

export const createPost = (post) => (dispatch) => {
    return (
        APIUtil.createPost(post).then(post => dispatch(receivePost(post)))
    )
}
export const editPost = (post) => (dispatch) => {
    return (
        APIUtil.editPost(post).then(post => dispatch(receivePost(post)))
    )
}
export const deletePost = (id) => (dispatch) => {
    return (
        APIUtil.deletePost(id).then(() => dispatch(removePost(id)))
    )
}

