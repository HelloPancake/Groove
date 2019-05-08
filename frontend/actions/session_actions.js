import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';



const receiveCurrentUser = (currentUser) => ({
    currentUser: currentUser,
    type: RECEIVE_CURRENT_USER
})
const receiveErrors = (errors) => ({
    errors: errors,
    type: RECEIVE_SESSION_ERRORS
})
const logOutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})




export const signUp = (user) => (dispatch) => {
    return(
        APIUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
    )
}
export const logIn = (user) => (dispatch) => {
    return(
        APIUtil.logIn(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
    )
}

export const logOut = () => (dispatch) => {
    return (
        APIUtil.logOut().then(() => dispatch(logOutCurrentUser()))
    )
}
