import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import {fetchFourAlbums} from './actions/album_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchFourAlbums = fetchFourAlbums;
    //TESTING END

    const root = document.getElementById('root');
    // debugger
    ReactDOM.render(<Root store={store} />, root)
})

 
