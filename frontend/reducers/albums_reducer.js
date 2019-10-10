import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM, RECEIVE_FOUR_ALBUMS } from '../actions/album_actions';
import { merge } from 'lodash';

const AlbumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState; 
    switch(action.type) {
        case RECEIVE_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            // debugger
            newState = merge( {}, oldState, {[action.album.album.id]: action.album})
            return newState;
        case RECEIVE_FOUR_ALBUMS:
            // debugger
            newState = merge({}, oldState, action.albums);
            return newState;
        case REMOVE_ALBUM:
            newState = merge( {}, oldState);
            delete newState[action.albumId];
            return newState;
        default: 
            return oldState;
    }
}

export default AlbumsReducer;
