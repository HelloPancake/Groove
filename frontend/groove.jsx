import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionActions from './actions/session_actions';
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.logOut = sessionActions.logOut;
    ReactDOM.render(<Root store={store}/>, root);
});