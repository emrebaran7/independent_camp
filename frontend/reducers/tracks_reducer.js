import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';
import {RECEIVE_ALBUM} from '../actions/album_actions'

const TracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        case RECEIVE_ALBUM:
            newState = merge({}, oldState, action.tracks)
            return newState;
        case REMOVE_TRACK:
            newState = merge({}, oldState);
            delete newState[action.trackId];
            return newState;
        default:
            return oldState;
    }
}

export default TracksReducer;
