import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {

    // if (window.currentUser) {
    //     const preloadedState = {
    //         session: { id: window.currentUser.id },
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser },
               
    //         }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }

    let store = configureStore();
    const root = document.getElementById('root');
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logIn = sessionActions.logIn;
    window.signUp = sessionActions.signUp;
    window.logOut = sessionActions.logOut;
    ReactDOM.render(<Root store={store}/>, root);
});