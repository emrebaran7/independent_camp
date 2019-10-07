import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const TracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            newState = merge({}, oldState, { [action.track.id]: action.track })
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
